// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // This should ensure the build output goes into 'dist'
  },
  server: {
    port: 3000,
    open: true
  },
})