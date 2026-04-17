import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-doc-preview'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import creatFileJson from './vite-plugin-creatFileJson'
import { fileURLToPath, URL } from 'url'
import fs from 'fs'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslint from 'vite-plugin-eslint'
import VueRouter from 'vue-router/vite'

// 将public下的iconfont.css复制到。直接从public目录导入会报错Assets in public cannot be imported from JavaScript
fs.createReadStream('./public/static/iconfont/iconfont.json').pipe(
  fs.createWriteStream('./src/components/diyIconfont/iconfont.json')
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: ['src/views', {
        src: 'src/docs',
        // 覆盖全局扩展名以 **仅** 接受 markdown 文件
        extensions: ['.md'],
        path: 'docs/',
      }],
      exclude: ['**/components', '**/design/**/*.md']
    }),
    creatFileJson({}),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    eslint({
      cache: false, // 关闭缓存，保证实时检测
      include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
      exclude: ['node_modules/', 'docs/'],
      fix: false, // 开发时不自动修复，避免误改
    }),
    Markdown({})
  ],
  resolve: {
    alias: {
      //'@': resolve(__dirname, './src')
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // 使用路径别名时想要省略的后缀名，官方不建议将.vue文件省略后缀
    extensions: ['.js', '.ts']
  },
  base: './',
  build: {
    outDir: 'docs',
    rolldownOptions: {
      // 确保外部化处理那些你不想打包进库的依赖2.05/3.02
      // external: ['vue', 'axios', 'vueRouter']
      // external: ['tinymce/tinymce']
      output: {
        chunkFileNames: (info) => {
          // [id].vue这种格式会被编译成_id开头的js，在github里获取不到，这里统一添加js
          if (info.name.indexOf('_') === 0) {
            return 'assets/js[name]-[hash].js'
          } else {
            return 'assets/[name]-[hash].js'
          }
        }
      }
    }
  },
  server: {
    // https: true, // 是否开启 https
    port: 3000,
    host: '0.0.0.0',
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8089',
        // target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
    /* https: {
      cert: fs.readFileSync(path.join(__dirname, 'cert.crt')),
      key: fs.readFileSync(path.join(__dirname, 'cert.key'))
    } */
  }
})
