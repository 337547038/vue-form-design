import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginVuedoc({}),
    vue({
      include: [...vueDocFiles] // 2. Must include .md | .vd files
    }),
    vueJsx({}),
    Pages({
      pagesDir: [
        { dir: 'src/views', baseRoute: '' },
        { dir: 'src/docs', baseRoute: '/docs' }
      ],
      extensions: ['md', 'vue'],
      exclude: [
        'components/*.vue',
        '**/components/*.vue',
        '**/components/*/*.vue'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // 使用路径别名时想要省略的后缀名，官方不建议将.vue文件省略后缀
    extensions: ['.js', '.ts']
  },
  base: './',
  build: {
    outDir: 'docs'
  },
  server: {
    // 是否开启 https
    https: false,
    port: 3001,
    host: '0.0.0.0',
    open: false
  }
})
