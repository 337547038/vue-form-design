import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import routesPage from '~pages'

console.log(routesPage)
const routes = [
  {
    path: '/test',
    name: '/test',
    component: () => import('../views/test.vue')
  },
  {
    path: '/layout',
    redirect: '/',
    name: 'layout',
    component: () => import('../components/layout/index.vue'),
    children: routesPage.filter((item: any) => {
      return item.name.indexOf('docs') !== 0
    })
  },
  {
    path: '/docs',
    redirect: '/docs',
    name: 'docs',
    component: () => import('../docs/components/layout.vue'),
    children: routesPage.filter((item: any) => {
      return item.name.indexOf('docs') === 0
    })
  }
]
// console.log(routes)
// 配置路由
const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes: routes
})

/*router.beforeEach((to: any, from: any) => {
  /!*const { path: toPath } = to
      const { path: fromPath } = from
      if (toPath === fromPath) {
        return false
      }*!/
  //console.log(to)
  //console.log(from)
})*/

export default router
