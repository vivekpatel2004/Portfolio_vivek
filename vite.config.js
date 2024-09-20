import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Portfolio_vivek/',
  server:{
    proxy:{
      '/api':'https://portfolio-sr2z.onrender.com',
    },
  },
  plugins: [react()],
})
