import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import routesPage from '~pages'
import { useLayoutStore } from '@/store/layout'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getStorage } from '@/utils'
import { ElMessage } from 'element-plus'
import { getTreeNodeById } from '@/utils/flatTree'
/** 页面meta配置说明
 * meta:{
 *   layout:'hidden', // 设置hidden时路由不会出现侧边栏，如login,401等不需要主layout框架的页面
 *   title:'', // 需要显示的标题
 *   addRoute:true, // true为动态路由
 *   permissions:'' // 当前页面权限，默认为当前url，类型支持string/string[]/boolean false为白名单，none登录即可
 * }
 */
/*
路由拦截规则，目前分三种情况。可根据实际需要或将接口返回的全部作为动态路由
1.白名单：设置了 `permissions:false` 或在 `whiteList` 列表里的路由，无需登录可直接访问；
2.权限路由：（默认）根据 `permissions` 配置匹配接口菜单列表。设置了 `addRoute:true`为动态路由，根据接口菜单列表匹配动态添加到路由列表；
3.其他：设置了 `permissions:'none'`登录即可
*/
console.log(routesPage)
// 路由白名单，同时可在页面配置permissions=false。支持正则
const whiteList: (RegExp | string)[] = [/^\/docs/, '/test1', '/test']
// 根据条件提取路由
const filterRoutePage = (type?: string) => {
  return routesPage.filter((item: any) => {
    const isHiddenLayout: boolean = item.meta?.layout === 'hidden'
    const isAddRoute: boolean = item.meta?.addRoute === true
    switch (type) {
      case 'addRoute': // 提取动态路由
        return isAddRoute
      case 'hidden': // 提取不包含在layout里的
        return isHiddenLayout && !isAddRoute
      case 'docs': // 提取以docs开头的文档路由，同时包含在layout的
        return item.name.indexOf('docs') === 0 && !isHiddenLayout && !isAddRoute
      default:
        return item.name.indexOf('docs') !== 0 && !isHiddenLayout && !isAddRoute
    }
  })
}
const hiddenLayout = filterRoutePage('hidden')

const routes = [
  {
    path: '/layout',
    redirect: '/',
    name: 'layout',
    component: () => import('../components/layout/index.vue'),
    children: filterRoutePage()
  },
  {
    path: '/docs',
    redirect: '/docs',
    name: 'docs',
    component: () => import('../docs/components/layout.vue'),
    children: filterRoutePage('docs')
  }
]
const routesList = [...routes, ...hiddenLayout]
console.log('routesList', routesList)
// 配置路由
const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes: routesList
})

const includesWhite = (str: string): boolean => {
  return whiteList.some((item: string | RegExp): boolean => {
    if (item instanceof RegExp) {
      return item.test(str)
    }
    return item === str
  })
}

router.beforeEach(async (to: any, _from: any, next: any) => {
  NProgress.start()
  let permissions: any = to.meta?.permissions
  const hasRoute = router.hasRoute('catchAll')
  if (!hasRoute) {
    router.addRoute({
      name: 'catchAll',
      path: '/:catchAll(.*)',
      redirect: '/404'
    })
  }
  if (permissions === false || includesWhite(to.path)) {
    // 白名单
    next()
  } else {
    // 除白名单其他页面需要登录，判断登录
    // 如没有token过期刷新的需求，这里获取token为空或过期时，直接跳转即可。
    // 存在刷新refreshToken操作时，token过期也不能跳到登录页，否则直接跳转没办法换
    //const token: any = getStorage('token', true)
    const refreshToken: any = getStorage('refreshToken', true)
    // menuList为接口返回的当前用户可用路由或按钮
    const menuList: string[] = getStorage('resources', true) || []
    let nextQuery: any = {
      path: '/login',
      query: { redirect: encodeURI(to.fullPath) }
    }
    //判断refreshToken即可，当token过期还能继续执行刷新token操作
    if (refreshToken) {
      // 根据菜单权限接口判断有没对应页面的权限
      if (permissions !== 'none') {
        // 需要有指定的权限
        permissions = permissions || to.path
        if (permissions) {
          if (typeof permissions === 'string') {
            permissions = [permissions]
          }
          let pass: boolean = false
          for (const key in permissions) {
            if (menuList.includes(permissions[key])) {
              pass = true
              break
            }
          }
          if (!pass) {
            ElMessage({
              message: '没有权限查看该页面',
              type: 'error'
            })
            //返回来源页
            nextQuery = {
              path: _from.fullPath
            }
          } else {
            nextQuery = ''
          }
        }
      } else {
        nextQuery = ''
      }
      // 动态路由，可根据实际需求修改
      if (!hasRoute) {
        const routeList = filterRoutePage('addRoute') //所有设为动态的路由
        routeList.forEach((item: any) => {
          if (menuList.includes(item.path)) {
            // 过滤掉没有权限的
            const hiddenLayout: boolean = item.meta?.layout === 'hidden'
            if (hiddenLayout) {
              router.addRoute(item) // 没有包含layout
            } else {
              // 目前只有layout框架
              router.addRoute('layout', item)
            }
          }
        })
        nextQuery = { ...to, replace: true }
      }
    }
    nextQuery ? next(nextQuery) : next()
  }
})
router.afterEach((to: any) => {
  document.title = (to.meta?.title || '') + 'ak低代码管理系统'
  NProgress.done()
  getBreadcrumb(to.path)
})
/**
 * 根据当前路径从菜单中提取完整的导航
 */
const getBreadcrumb = (path: string): void => {
  const menuList: string[] = getStorage('formMenuList', true)
  if (menuList?.length) {
    const list: any = getTreeNodeById(menuList, path, { id: 'path' })
    const layoutStore = useLayoutStore()
    layoutStore.changeBreadcrumb(list)
  }
}
export default router
