import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@features': path.resolve(__dirname, './src/features'),
      '@animations': path.resolve(__dirname, './src/animations'),
      '@three': path.resolve(__dirname, './src/three'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@data': path.resolve(__dirname, './src/data'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Classify only modules actually imported. The object form pulled the
        // future 3D graph (and shared React runtime) into the P4 entry chunk.
        manualChunks(id) {
          if (!id.includes('/node_modules/')) return;
          if (/\/(react|react-dom|scheduler)\//.test(id)) return 'vendor-react';
          if (/\/(three|@react-three)\//.test(id)) return 'vendor-three';
          if (/\/(animejs|lenis)\//.test(id)) return 'vendor-motion';
        },
      },
    },
  },
});
