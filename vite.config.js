import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Chunk splitting - React ve React Router ayrı yüklenir
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
        },
      },
    },
    // Minifikasyon
    minify: 'esbuild',
    // Source map kapalı (production için)
    sourcemap: false,
    // Chunk boyut uyarı limiti
    chunkSizeWarningLimit: 500,
  },
})
