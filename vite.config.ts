import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { PRJ_PATH } from './src/config/index'
import { svgsprites } from './vite_plugins/svgsprites'

// https://vite.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react(), svgsprites({ noOptimizeList: ['logo'] })],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    open: true
  },

  define: {
    __isDev__: process.env.NODE_ENV === 'development',
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },

  base: process.env.NODE_ENV === 'production' ? PRJ_PATH : './',

  build: {
    chunkSizeWarningLimit: 1024,
  }
})
