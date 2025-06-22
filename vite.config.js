import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/StableDeploy/', // Matches GitHub repo name
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['buffer']
    }
  },
  optimizeDeps: {
    include: ['buffer']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'state': path.resolve(__dirname, './src/state'),
      'utils': path.resolve(__dirname, './src/utils'),
      'views': path.resolve(__dirname, './src/views'),
      'hooks': path.resolve(__dirname, './src/hooks')
    }
  }
})