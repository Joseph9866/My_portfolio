import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function chatApiPlugin(): Plugin {
  return {
    name: 'chat-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/api/chat' || req.method !== 'POST') return next();

        console.log("[v0] Chat API hit");

        try {
          // Collect request body
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(chunk as Buffer);
          }
          const bodyStr = Buffer.concat(chunks).toString();
          const { messages } = JSON.parse(bodyStr);
          console.log("[v0] Messages received:", messages.length);

          const apiKey = process.env.AI_GATEWAY_API_KEY;
          console.log("[v0] API key exists:", !!apiKey, "length:", apiKey?.length);
          
          if (!apiKey) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'AI_GATEWAY_API_KEY not set' }));
            return;
          }

          // Load system prompt via SSR
          const { SYSTEM_PROMPT } = await server.ssrLoadModule('/api/knowledge.ts') as { SYSTEM_PROMPT: string };

          const openaiMessages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.map((m: { role: string; content: string }) => ({
              role: m.role,
              content: m.content,
            })),
          ];

          console.log("[v0] Calling AI Gateway...");
          const aiResponse = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: 'openai/gpt-4o-mini',
              messages: openaiMessages,
              stream: true,
            }),
          });

          console.log("[v0] AI Gateway status:", aiResponse.status);

          if (!aiResponse.ok) {
            const errText = await aiResponse.text();
            console.error("[v0] AI Gateway error:", errText);
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'AI service error', details: errText }));
            return;
          }

          // Stream the response
          res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
          });

          const reader = aiResponse.body!.getReader();
          const decoder = new TextDecoder();
          let buffer = '';

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed.startsWith('data:')) continue;
              const data = trimmed.slice(5).trim();
              if (data === '[DONE]') {
                res.write('data: [DONE]\n\n');
                continue;
              }

              try {
                const parsed = JSON.parse(data);
                const delta = parsed.choices?.[0]?.delta?.content;
                if (delta) {
                  const chunk = JSON.stringify({ type: 'text-delta', textDelta: delta });
                  res.write(`data: ${chunk}\n\n`);
                }
              } catch {
                // skip
              }
            }
          }

          res.end();
        } catch (err) {
          console.error("[v0] Chat API error:", err);
          if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
          }
          res.end(JSON.stringify({ error: 'Internal Server Error', details: String(err) }));
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), chatApiPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'aos'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
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
