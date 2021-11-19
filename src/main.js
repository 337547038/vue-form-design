import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import store from './store/index'
import 'element-plus/dist/index.css'
import './assets/scss/app.scss'
import './assets/scss/element-var.scss'
import DesignForm from "./views/designForm/index.js"
createApp(App).use(ElementPlus).use(router).use(store).use(DesignForm).mount('#app')
