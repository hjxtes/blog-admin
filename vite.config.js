import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
// vite.config.js # or vite.config.ts
function resolve(dir) {
  return path.join(__dirname, dir)
}
export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true"
  },
  plugins: [
    vue()
    // eslintPlugin({
    //   include: ['src/**/*.vue'] // 检查的文件
    // })
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      scss: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  server: {
    host: 'localhost',
    port: 8088,
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    // 反向代理
    proxy: {
      '/v1': {
        target: 'http://xxxx:70701/test',
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/v1/, '')
      }
    },
    fs: {
      // Allow serving files from one level up to the project root
      strict: true,
      allow: ['..']
    },
    cors: true
    // hmr: { overlay: false }
  },

  build: {
    outDir: 'dist' // Specify the output directory (relative to project root).
  },
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: process.env.NODE_ENV === 'production' ? '//xxxx/' : './',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  assetsDir: 'static'
})
