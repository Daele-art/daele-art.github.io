// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'   // ⬅️ ESM-vriendelijk

export default defineConfig({
  // Gebruik je GitHub Pages op repo-URL:
  base: '/HumanPerformanceZeeland/',

  plugins: [react()],

  resolve: {
    alias: {
      '@': resolve(process.cwd(), './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
})

