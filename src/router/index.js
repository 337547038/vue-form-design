import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// console.log('router')

export const defaultRouterMap = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('@/views/design')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list')
  }
]

export default new Router({
  mode: 'history',
  routes: defaultRouterMap
})
