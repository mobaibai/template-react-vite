import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { viteMockServe } from "vite-plugin-mock"
import { svgsprites } from "./vite_plugins/svgsprites"

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  define: {
    isDev: command === "serve",
  },

  plugins: [react(), viteMockServe(), svgsprites({ noOptimizeList: ["logo"] })],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    open: true,
  },

  base: "./",

  build: {
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
}))
