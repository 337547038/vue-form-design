import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import routesPage from '~pages'
import { useLayoutStore } from '@/store/layout'

console.log(routesPage)
const routes = [
  {
    path: '/test',
    name: '/test',
    component: () => import('../views/test.vue')
  },
  {
    // 数据可视化展示的不要放layout框架
    path: '/design/dataScreen/show/:id',
    name: '/dataScreen',
    component: () => import('../views/design/dataScreen/show.vue')
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
router.afterEach((to: any) => {
  // 导航位置处理
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([])
  const navList = window.sessionStorage.getItem('formMenuList')
  if (navList) {
    const navListJson = JSON.parse(navList)
    const list: any = []
    getNavName(navListJson, to, list)
    // console.log(list)
    const spliceList = []
    if (list?.length) {
      for (let i = list.length - 1; i >= 0; i--) {
        // console.log(list[i])
        spliceList.unshift(list[i])
        if (list[i].parentId === 0) {
          break
        }
      }
    }
    layoutStore.changeBreadcrumb(spliceList)
  }
})
const getNavName = (dataList: any, to: any, list: any) => {
  if (!dataList) {
    return
  }
  for (let i = 0; i < dataList.length; i++) {
    const obj = dataList[i]
    // 内容管理是带id的
    if (
      obj.path === to.path ||
      (obj.parentId === 1 && to.fullPath.indexOf(obj.path) !== -1)
    ) {
      list.push({ label: obj.name, path: obj.path, parentId: obj.parentId })
      return true
    } else if (obj.children) {
      list.push({ label: obj.name, path: obj.path, parentId: obj.parentId })
      const result = getNavName(obj.children, to, list)
      if (result) {
        return
      }
    }
  }
}
export default router
