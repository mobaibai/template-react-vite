import path from 'node:path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import { svgsprites } from './vite_plugins/svgsprites'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  define: {
    __isDev__: command === 'serve'
  },

  plugins: [UnoCSS(), react(), viteMockServe(), svgsprites({ noOptimizeList: ['logo'] })],

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
