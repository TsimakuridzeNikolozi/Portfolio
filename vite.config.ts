import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { compression } from 'vite-plugin-compression2';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), compression({ algorithms: ['gzip', 'brotliCompress'] })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap', '@gsap/react'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['three', 'gsap'],
  },
});
