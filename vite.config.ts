import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-doc-preview'
import creatFileJson from './vite-plugin-creatFileJson'
import { resolve } from 'path'
import fs from 'fs'

// 将public下的iconfont.css复制到。直接从public目录导入会报错Assets in public cannot be imported from JavaScript
fs.createReadStream('./public/static/iconfont/iconfont.json').pipe(
  fs.createWriteStream('./src/components/iconfont.json')
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    creatFileJson({}),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx({}),
    Markdown(),
    Pages({
      dirs: [
        { dir: 'src/views', baseRoute: '' },
        { dir: 'src/docs', baseRoute: '/docs' }
      ],
      extensions: ['md', 'vue'],
      exclude: ['**/components', '**/design/**/*.md']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    // 使用路径别名时想要省略的后缀名，官方不建议将.vue文件省略后缀
    extensions: ['.js', '.ts']
  },
  base: './',
  build: {
    outDir: 'docs',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖2.05/3.02
      // external: ['vue', 'axios', 'vueRouter']
      // external: ['tinymce/tinymce']
    }
  },
  server: {
    //https: true, // 是否开启 https
    port: 3000,
    host: '0.0.0.0',
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
    /*https: {
      cert: fs.readFileSync(path.join(__dirname, 'cert.crt')),
      key: fs.readFileSync(path.join(__dirname, 'cert.key'))
    }*/
  }
})
