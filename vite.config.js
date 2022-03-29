import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginVuedoc, {vueDocFiles} from 'vite-plugin-vuedoc'
import Pages from 'vite-plugin-pages'
/*按需导入https://element-plus.gitee.io/zh-CN/guide/quickstart.html#on-demand-import
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'*/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePluginVuedoc({}), vue({
    include: [...vueDocFiles] // 2. Must include .md | .vd files
  }),
    Pages({ // 添加文档使用路由
      pagesDir: [
        {dir: "src/docs", baseRoute: "docs"},
        // {dir: "src/views", baseRoute: ""},
      ],
      extensions: ['md','vue'],
      exclude: ['**/components/*.vue']
    })
    /*按需导入
    Components({
      resolvers: [ElementPlusResolver()],
    })*/
  ],
  base: './',
  resolve: {
    alias: {
      '@/': '/src/'
    }
  },
  build:{
    outDir: 'docs'
  }
})
