import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        page1: resolve(__dirname, 'desktop.html'), 
        page2: resolve(__dirname, 'mobile.html'),
      }
    }
  }
})
