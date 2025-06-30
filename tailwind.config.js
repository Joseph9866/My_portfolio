/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#3B82F6',
          secondary: '#14B8A6',
          accent: '#F97316',
          neutral: '#374151',
          'base-100': '#FFFFFF',
          'base-200': '#F3F4F6',
          'base-300': '#E5E7EB',
          info: '#0EA5E9',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
        dark: {
          primary: '#60A5FA',
          secondary: '#34D399',
          accent: '#FB923C',
          neutral: '#1F2937',
          'base-100': '#111827',
          'base-200': '#1F2937',
          'base-300': '#374151',
          info: '#38BDF8',
          success: '#34D399',
          warning: '#FBBF24',
          error: '#F87171',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
  },
};