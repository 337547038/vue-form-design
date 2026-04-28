import {createRouter, createWebHashHistory} from 'vue-router'
import {useLayoutStore} from '@/store/layout'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getStorage} from '@/utils'
import {ElMessage} from 'element-plus'
import {getTreeNodeById} from '@/utils/flatTree'
import {routes} from 'vue-router/auto-routes'
/** 页面meta配置说明
 * meta:{
 *   layout:'hidden', // 设置hidden时路由不会出现侧边栏，如login,401等不需要主layout框架的页面
 *   title:'', // 需要显示的标题
 *   permissions:'' // 当前页面权限，默认为当前url，类型支持string/string[]/boolean false为白名单，none登录即可
 * }
 */
/*
路由拦截规则，目前分三种情况。可根据实际需要或将接口返回的全部作为动态路由
1.白名单：设置了 `permissions:false` 或在 `whiteList` 列表里的路由，无需登录可直接访问；
2.权限路由：（默认）根据 `permissions` 配置匹配接口菜单列表。
3.其他：设置了 `permissions:'none'`登录即可
*/
console.log("autoRoutes", routes)

// 路由白名单，同时可在页面配置permissions=false。支持正则
const whiteList: (RegExp | string)[] = [/^\/docs/, '/test1', '/test']
// 根据条件提取路由
const filterRoutePage = (type?: string) => {
  return routes.filter((item: any) => {
    switch (type) {
      case 'docs': // 提取以docs开头的文档路由，同时包含在layout的
        return item.path === '/docs'
      default:
        return item.path !== '/docs'
    }
  })
}

const findHiddenLayout = (routes: any, parentPath = '') => {
  let result: any = [];
  routes.forEach((item: any) => {
    let fullPath: string = parentPath
        ? `${parentPath}/${item.path}`
        : item.path;
    if (fullPath.endsWith('/')) {
      fullPath = fullPath.slice(0, -1);
    }
    if (item.meta && item.meta.layout === "hidden") {
      const newItem = {
        ...item,
        path: fullPath // 赋值拼接后的完整路径
      };
      result.push(newItem);
    }
    if (item.children && item.children.length) {
      result = result.concat(findHiddenLayout(item.children, fullPath));
    }
  });

  return result;
}
const hiddenLayout = findHiddenLayout(routes)

const routesList = [
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
    name: 'docsLayout',
    component: () => import('../docs/components/layout.vue'),
    children: filterRoutePage('docs')
  }
]
// 配置路由
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [...routesList, ...hiddenLayout]
})

const includesWhite = (str: string): boolean => {
  return whiteList.some((item: string | RegExp): boolean => {
    if (item instanceof RegExp) {
      return item.test(str)
    }
    return item === str
  })
}

router.beforeEach(async (to: any, from: any) => {
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
  // 白名单 / 无需权限，直接放行
  if (permissions === false || includesWhite(to.path)) {
    return undefined
  }
  // 需要登录鉴权逻辑
  const refreshToken: any = getStorage('refreshToken', true)
  const menuList: string[] = getStorage('resources', true) || []
  let redirectRoute: any = undefined
  // 未登录，跳转到登录页
  if (!refreshToken) {
    return {
      path: '/login',
      query: {redirect: encodeURI(to.fullPath)}
    }
  }
  // 已登录，判断页面权限
  if (permissions !== 'none') {
    permissions = permissions || to.path
    if (typeof permissions === 'string') {
      permissions = [permissions]
    }

    let pass = false
    for (const key in permissions) {
      if (menuList.includes(permissions[key])) {
        pass = true
        break
      }
    }

    // 无权限
    if (!pass) {
      ElMessage({
        message: '没有权限查看该页面',
        type: 'error'
      })
      // 返回来源页，来源页不存在则返回首页
      redirectRoute = from.fullPath || '/'
    }
  }
  // 有权限，放行
  return redirectRoute
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
    const list: any = getTreeNodeById(menuList, path, {id: 'path'})
    const layoutStore = useLayoutStore()
    //console.log('change', menuList, path)
    layoutStore.changeBreadcrumb(list)
  }
}

export default router
