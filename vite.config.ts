import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { PRJ_PATH } from './src/config/index'
import { svgsprites } from './vite_plugins/svgsprites'

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

  // 兼容 GitHub Pages 和 Netlify
  base: process.env.NODE_ENV === 'production'
    ? (process.env.DEPLOY_TARGET === 'github' ? PRJ_PATH : '/')
    : './',

  build: {
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        // 手动分包策略
        manualChunks: {
          // React 相关库单独打包
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI 库单独打包
          'ui-vendor': ['antd'],
          // 动画库单独打包
          'animation-vendor': ['@react-spring/web'],
          // 工具库单独打包
          'utils-vendor': ['axios', 'crypto-js', 'nanoid', 'classnames', 'swr', 'zustand']
        },
        // 优化文件名
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            // 页面组件使用页面名称
            if (facadeModuleId.includes('/pages/')) {
              const pageName = facadeModuleId.split('/pages/')[1].split('/')[0]
              return `pages/${pageName}-[hash].js`
            }
            // 组件使用组件名称
            if (facadeModuleId.includes('/components/')) {
              const componentName = facadeModuleId.split('/components/')[1].split('/')[0]
              return `components/${componentName}-[hash].js`
            }
          }
          return 'chunks/[name]-[hash].js'
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // 启用 CSS 代码分割
    cssCodeSplit: true,
    // 压缩配置
    minify: process.env.NODE_ENV === 'development' ? 'esbuild' : 'terser',
  }
})