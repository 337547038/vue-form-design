import { defineStore } from 'pinia'
import { nextTick } from 'vue'
/*interface Breadcrumb {
  label: string
  to?: string
}*/
interface TabsViews {
  title: string
  path: string
  name: string // 路由名称name
}
const getSession = window.sessionStorage.getItem('tagViews')
let tabs: any = []
if (getSession) {
  tabs = JSON.parse(getSession)
}
export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      breadcrumb: [],
      tabs: tabs,
      reloadFlag: true // 用于刷新路由
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
      window.sessionStorage.setItem('tagViews', JSON.stringify(obj))
    },
    setReloadRouter() {
      this.reloadFlag = false
      nextTick(() => {
        this.reloadFlag = true
      })
    }
  }
})
