// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/', // root because username-pages lives at /
  plugins: [react()],
  resolve: {
    alias: { '@': resolve(process.cwd(), './src') },
    extensions: ['.mjs','.js','.jsx','.ts','.tsx','.json']
  },
  optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } }
})
