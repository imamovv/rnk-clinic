import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@components": path.resolve(import.meta.dirname, "src/components"),
      "@lib": path.resolve(import.meta.dirname, "src/lib"),
      "@/hooks": path.resolve(import.meta.dirname, "src/components/hooks"),
    },
  },
  server: {
    proxy: {
      '/yandex-reviews': {
        target: 'https://yandex.ru',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/yandex-reviews/, '/maps-reviews-widget')
      }
    }
  }
})