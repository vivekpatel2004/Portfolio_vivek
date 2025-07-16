// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // ❌ Remove base for Vercel deployment — only needed for GitHub Pages
  // base: '/Portfolio_vivek/',

  // ✅ This proxy only affects local development
  server: {
    proxy: {
      '/api': 'https://portfolio-sr2z.onrender.com',
    },
  },

  plugins: [react()],
})
