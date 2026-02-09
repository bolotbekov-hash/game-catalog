import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/game-catalog/',  // имя репозитория
  plugins: [vue()]
})
