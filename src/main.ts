import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './assets/scss/element-var.scss'
import '@/assets/scss/index.scss'
import ComComponents from '@/components/index'
import Directive from '@/directive'

// 实例化 Pinia
const pinia = createPinia()
const app = createApp(App)
app
  .use(pinia)
  .use(ElementPlus, {
    locale: zhCn
  })
  .use(router)
  .use(ComComponents)
  .use(Directive)
  .mount('#app')
// 全局注册icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册一个全局组件用于自定义组件测试
import componentTest from '@/docs/components/componentTest.vue'
app.component('ComponentTest', componentTest)
// 大屏自定义组件
import ScreenDemoComponent from './views/design/screen/demo/map.vue'
app.component('EchartsMap', ScreenDemoComponent)
