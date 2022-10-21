// https://vitejs.cn/guide/build.html#library-mode
// "build:lib": "vite build --config build.config.ts"
// 打包后路由有问题，出现undefined
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  /*plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    // 使用路径别名时想要省略的后缀名，官方不建议将.vue文件省略后缀
    extensions: ['.js', '.ts']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'ak-form',
      fileName: (format) => `ak-form.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'axios', 'vueRouter'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }*/
})
