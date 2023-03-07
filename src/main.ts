import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './assets/scss/element-var.scss'
import '@/assets/scss/layout.scss'
import '@/assets/scss/form.scss'
import AKDesignForm from './views/designForm/index'
import AKDesignEcharts from './views/echarts/index'
// 实例化 Pinia
const pinia = createPinia()
const app = createApp(App)
app
  .use(pinia)
  .use(ElementPlus, {
    locale: zhCn
  })
  .use(router)
  .use(AKDesignForm)
  .use(AKDesignEcharts)
  .mount('#app')
// 全局注册icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册一个全局组件用于自定义组件测试
import componentTest from '@/docs/components/componentTest.vue'
app.component('ComponentTest', componentTest)
