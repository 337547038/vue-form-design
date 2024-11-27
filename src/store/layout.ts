import { defineStore } from 'pinia'
import { nextTick } from 'vue'
import { removeStorage, getStorage, setStorage } from '@/utils'
import { getRequest } from '@/api'

/* interface Breadcrumb {
  label: string
  to?: string
} */
interface TabsViews {
  title: string
  path: string
  name: string // 路由名称name
}

const tabs = getStorage('tagViews')
export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      breadcrumb: [],
      tabs: tabs,
      reloadFlag: true, // 用于刷新路由
      collapseMenu: getStorage('collapseMenu', true) || false // 左侧菜单展开收起状态
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    changeBreadcrumb(data: any) {
      this.breadcrumb = data
    },
    setTabsViews(obj: TabsViews[]) {
      this.tabs = obj
      setStorage('tagViews', obj)
    },
    setReloadRouter() {
      this.reloadFlag = false
      nextTick(() => {
        this.reloadFlag = true
      })
    },
    setCollapseMenu(status: boolean): void {
      this.collapseMenu = status
      setStorage('collapseMenu', status, 0)
    },
    logout(router?: any) {
      // 退出登录，清空登录相关信息
      removeStorage('resources', true)
      removeStorage('formMenuList', true)
      removeStorage('refreshToken', true)
      removeStorage('token', true)
      removeStorage('akAllDict')
      removeStorage('userInfo', true)
      if (router) {
        router.push({ path: '/login' })
      }
    },
    // 保存登录的信息
    setLoginInfo(data: { [key: string]: string } = {}, saveUserInfo?: boolean) {
      const expireTime = data.expire_time // 有效时间
      let time = 24
      if (expireTime) {
        time = parseInt(expireTime) / 1000 / 3600 // 将ms转为h
      }
      setStorage('token', data.token, time)
      setStorage('refreshToken', data.refreshToken, time * 2)
      saveUserInfo && setStorage('userInfo', data, 0)
    },
    getDict() {
      const storageDict = getStorage('akAllDict')
      if (!storageDict) {
        getRequest('dictList', { query: { status: 1 } }).then((res: any) => {
          const result = res.data?.list
          const temp: any = {}
          if (result?.length) {
            result.forEach((item: any) => {
              const children = item.children
              if (children) {
                const childJson = JSON.parse(children)
                const list: any = {}
                childJson.forEach((ch: any) => {
                  list[ch.value] = ch.label
                })
                temp[item.type] = list
              }
            })
            setStorage('akAllDict', temp)
          }
        })
      }
    }
  }
})
