import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/StableDeploy/', // Matches GitHub repo name
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})