import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',       // ⬅️ Vercel akan cari di sini
    assetsDir: 'assets',  // opsional, biar rapi
    emptyOutDir: true     // bersihkan folder sebelum build
  }
})
