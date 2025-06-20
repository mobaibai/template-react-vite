import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import { svgsprites } from './vite_plugins/svgsprites'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  define: {
    __isDev__: command === 'serve'
  },

  plugins: [UnoCSS(), react(), svgsprites({ noOptimizeList: ['logo'] })],

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    open: true
  },

  base: './',

  build: {
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
}))
