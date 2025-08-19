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
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] || 'unknown';

          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(name)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/\.(glb|gltf)$/i.test(name)) {
            return `models/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ['three', 'gsap'],
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'],
});
