import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/element-var.scss'
import '@/assets/scss/layout.scss'
import '@/assets/scss/form.scss'
import AKDesignForm from './views/designForm/index'
// 实例化 Pinia
const pinia = createPinia()
const app = createApp(App)
app.use(pinia).use(ElementPlus).use(router).use(AKDesignForm).mount('#app')
// 全局注册icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
