import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/locales/*.po',
          dest: 'locales'
        }
      ]
    })
  ],
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
      'components': path.resolve(__dirname, './src/components')
    }
  }
})