import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import routesPage from '~pages'
import { useLayoutStore } from '@/store/layout'
import ControlList from '@/views/design/form/components/controlList'

console.log(routesPage)
const routes = [
  // {
  //   path: '/test',
  //   name: '/test',
  //   component: () => import('../views/test.vue')
  // },
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
  const layoutStore = useLayoutStore()
  //const path = to.path
  //console.log('topath', to)
  const navList = window.sessionStorage.getItem('formMenuList')
  if (navList) {
    const navListJson = JSON.parse(navList)
    const list: any = []
    getNavName(navListJson, to, list)
    console.log('list', list)
    layoutStore.changeBreadcrumb(list)
    /*layoutStore.changeBreadcrumb([
      { label: '设计管理' },
      { label: '表单管理0' }
    ])*/
  }
})
const getNavName = (dataList: any, to: any, list: any) => {
  for (let i = 0; i < dataList.length; i++) {
    const obj = dataList[i]
    if (obj.path === to.path) {
      list.push({ label: obj.name, path: obj.path })
      return true
    } else if (obj.children) {
      list.push({ label: obj.name, path: obj.path })
      const result = getNavName(obj.children, to, list)
      if (result) {
        return
      }
    }
  }
  // try {
  //   data.forEach((item: any) => {
  //     // 内容管理是带id的
  //     if (item.parentId === 0) {
  //       list = []
  //     }
  //     if (
  //       item.path === to.path ||
  //       (item.parentId === 1 && to.fullPath.indexOf(item.path) !== -1)
  //     ) {
  //       list.push({ label: item.name, path: item.path })
  //       throw new Error('end forEach')
  //       // 查找上一级
  //       // getNavParentName(dataList, item.parentId, list)
  //     } else if (item.children) {
  //       list.push({ label: item.name, path: item.path })
  //       getNavName(dataList, item.children, to, list)
  //     }
  //   })
  // } catch (e) {
  //   //if (e.message === 'end forEach') throw e
  // }
}
// todo 这里目前只支持向上查找一级
const getNavParentName = (data: any, parentId: number, list: any) => {
  data.forEach((item: any) => {
    if (item.id === parentId) {
      list.unshift({ label: item.name, path: item.path })
    } else if (item.children && item.parentId !== 1) {
      //getNavParentName(item.children, parentId, list)
    }
  })
}
export default router
