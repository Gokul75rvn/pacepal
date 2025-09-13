import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
<<<<<<< HEAD
    open: true,
    watch: {
      usePolling: false,
    },
    hmr: {
      overlay: false,
=======
    open: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
>>>>>>> 0d9d0903bd0f04b19bd22be34b9443474ab3d52d
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          'react-query': ['@tanstack/react-query'],
          'react-hot-toast': ['react-hot-toast'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-query', 'react-hot-toast'],
  },
})