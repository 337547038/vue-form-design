/*当前打包使用tsup打包，也可使用此配置打包*/
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path, {resolve} from 'path'

export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    build: {
        copyPublicDir: false, // 关键：关闭public目录复制
        outDir: path.resolve(__dirname, '../src/components/libs'),
        lib: {
            entry:{
                flow:path.resolve(__dirname, '../src/components/flow/index.ts'),
                screen:path.resolve(__dirname, '../src/components/screen/designArea.vue'),
                show:path.resolve(__dirname, '../src/components/screen/show.vue'),
                tinymce:path.resolve(__dirname, '../src/components/form/widgets/tinymce.vue'),
                chunkUpload:path.resolve(__dirname, '../src/components/form/chunkUpload/index.vue'),
            },
            name: 'ak-design',
            //fileName: format => `index.${format}.js`
            //fileName: 'flow'
            fileName: (format, entryName) => {
                return `${entryName}.${format}.js`
            }
        },
        rolldownOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'pinia'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                    pinia: 'Pinia'
                },
                banner:`/*!
 * ak-design - 版权所有
 * 版本: v4.0.0
 * 当前文件源码暂不开放，如需源码可加微信 337547038 有偿提供
 * 友情价：90元
 * 创建时间: ${new Date().getFullYear()}-${new Date().getMonth() + 1}
 */`
            }
        }
    }
})
