import {createRouter, createWebHistory} from 'vue-router'
import docsRoutesList from 'virtual:generated-pages'
// 开启历史模式
// vue2中使用 mode: history 实现
// const routerHistory = createWebHistory()
console.log(docsRoutesList)
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
      component: () => import('../views/designForm/designForm.vue')
    },
    {
      path: '/designTable',
      name: 'designTable',
      component: () => import('../views/designForm/designTable.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/designForm/form.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/designForm/list.vue')
    },
    {
      path: '/formList',
      name: 'formList',
      component: () => import('../views/formList/index.vue')
    },
    {
      path: '/export/form',
      name: 'exportForm',
      component: () => import('../views/export/form.vue')
    },
    {
      path: '/export/list',
      name: 'exportList',
      component: () => import('../views/export/list.vue')
    },
    {
      name: 'docs',
      path: '/docs',
      component: () => import('../docs/components/layout.vue'),
      children: [
        ...docsRoutesList
      ]
    }
  ]
})

export default router
