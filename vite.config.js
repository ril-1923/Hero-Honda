import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        models: resolve(__dirname, 'models.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
         plugins: [react()],
    base: '/Hero-Honda/',
      },
    },
  },
})
