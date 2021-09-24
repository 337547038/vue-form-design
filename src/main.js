import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import store from './store/index'
import 'element-plus/dist/index.css'
import './assets/scss/index.scss'
createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
