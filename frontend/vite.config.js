import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        format: 'esm',
        compact: true,
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
