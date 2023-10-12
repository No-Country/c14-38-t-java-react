import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Habilita la observación de archivos CSS
    include: ['src/**/*.css', 'src/**/*.jsx']
    },
  },
})