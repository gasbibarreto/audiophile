import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false, // Evita que o Vite tente converter caminhos absolutos como '/icons.svg' em imports ES
        },
      },
    }),
  ],
})
