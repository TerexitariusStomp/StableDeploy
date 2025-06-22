import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default defineConfig({
  plugins: [
    react(),
    nodeResolve({
      browser: true,
      preferBuiltins: false
    })
  ],
  base: '/StableDeploy/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['buffer'],
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        warn(warning)
      }
    }
  },
  optimizeDeps: {
    include: ['buffer'],
    exclude: ['@wagmi/core']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'state': path.resolve(__dirname, './src/state'),
      'utils': path.resolve(__dirname, './src/utils'),
      'views': path.resolve(__dirname, './src/views'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'theme': path.resolve(__dirname, './src/theme.ts'),
      'abis': path.resolve(__dirname, './src/abis')
    }
  },
  define: {
    'process.env': {}
  }
})