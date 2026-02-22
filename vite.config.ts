import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function apiPlugin(): Plugin {
  return {
    name: 'api-handler',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/')) return next();

        const apiPath = req.url.replace('/api/', '').split('?')[0];
        const filePath = path.resolve(__dirname, 'api', `${apiPath}.ts`);

        try {
          // Use Vite's SSR module loader to import the API handler
          const mod = await server.ssrLoadModule(filePath);
          const handler = mod.default;

          if (typeof handler !== 'function') {
            res.statusCode = 404;
            res.end('API handler not found');
            return;
          }

          // Collect request body
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(chunk as Buffer);
          }
          const body = Buffer.concat(chunks).toString();

          // Build a standard Request object
          const protocol = req.headers['x-forwarded-proto'] || 'http';
          const host = req.headers.host || 'localhost';
          const url = `${protocol}://${host}${req.url}`;

          const controller = new AbortController();
          req.on('close', () => controller.abort());

          const request = new Request(url, {
            method: req.method,
            headers: Object.fromEntries(
              Object.entries(req.headers).filter(([, v]) => v !== undefined) as [string, string][]
            ),
            body: req.method !== 'GET' && req.method !== 'HEAD' ? body : undefined,
            signal: controller.signal,
          });

          const response: Response = await handler(request);

          res.statusCode = response.status;
          response.headers.forEach((value, key) => {
            res.setHeader(key, value);
          });

          if (response.body) {
            const reader = response.body.getReader();
            const pump = async () => {
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                res.write(value);
              }
              res.end();
            };
            await pump();
          } else {
            res.end(await response.text());
          }
        } catch (err) {
          console.error('API error:', err);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), apiPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'aos'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
