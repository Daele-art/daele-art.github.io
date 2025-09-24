import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',           // belangrijk voor custom (root) domein
  build: { outDir: 'dist' }
})
