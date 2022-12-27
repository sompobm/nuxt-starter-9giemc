import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt'

const __dirname = new URL('.', import.meta.url).pathname
const config = defineNuxtConfig({
  target: 'static',
  alias: {
    'element-plus/dist/index.css':resolve(__dirname,'./node_modules/element-plus/dist/index.css'),
    'element-plus':resolve(__dirname,'./node_modules/element-plus/dist/index.full.js'),
  },
  plugins:['~/plugins/ui'],
  vite: {
    optimizeDeps: {
      include: ['element-plus'],
    },
  },
})

export default config
