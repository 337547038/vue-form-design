import {createRouter, createWebHistory} from 'vue-router'

// 开启历史模式
// vue2中使用 mode: history 实现
const routerHistory = createWebHistory();

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {top: 0}
    }
  },
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index/index.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/design/index.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/form/index.vue')
    }
  ]
})

export default router
