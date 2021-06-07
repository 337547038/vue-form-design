import Vue from 'vue'
import App from './App'
import router from './router'
import Component from './packages/index'
import store from './store'

Vue.config.productionTip = false
// 全局注册基础组件
Vue.use(Component)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
