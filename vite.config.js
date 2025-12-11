import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// COMENTE ESTA LINHA: O módulo não será mais importado
// import vueDevTools from 'vite-plugin-vue-devtools' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // COMENTE ESTA LINHA: O plugin não será executado na inicialização
    // vueDevTools(), 
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})