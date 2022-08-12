import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory
} from 'vue-router'
// @ts-ignore
import routesPage from '~pages'

console.log(routesPage)
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/home',
    component: () => import('../views/designForm/design.vue')
  },
  {
    path: '/test',
    name: '/test',
    component: () => import('../views/test.vue')
  },
  {
    path: '/index',
    name: '/index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/layout',
    redirect: '/',
    name: 'layout',
    component: () => import('../components/layout/index.vue'),
    children: routesPage
  }
]
// console.log(routes)
// 配置路由
const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from) => {
  /*const { path: toPath } = to
    const { path: fromPath } = from
    if (toPath === fromPath) {
      return false
    }*/
  //console.log(to)
  //console.log(from)
})

export default router
