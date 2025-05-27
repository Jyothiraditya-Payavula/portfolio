import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Changed to root path
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
    outDir: 'dist'
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
      timeout: 1000
    },
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
});
