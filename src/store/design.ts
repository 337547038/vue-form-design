import { defineStore } from 'pinia'
import { getStorage, setStorage } from '@/utils'

export const useDesignStore = defineStore('design', {
  state: () => {
    return {
      controlAttr: {}, // 表单设计时，选中的项
      activeKey: '', // 表单设计时，选中项的标识，用于展示当前状态
      columnsCheck: getStorage('tableColumns', true) || [], // 表格勾选的列
      formAjaxCache: {} // 表单内组件选项数据请求缓存
    }
  },
  actions: {
    setControlAttr(data: any) {
      this.controlAttr = data
    },
    setActiveKey(key: string) {
      this.activeKey = key
    },
    setColumnsCheck(path: string, data: string[]) {
      this.columnsCheck[path] = data
      setStorage('tableColumns', this.columnsCheck, 0)
    },
    getColumnsCheck(path: string) {
      return this.columnsCheck[path] || []
    },
    setFormAjaxCache(key: string, data: any) {
      this.formAjaxCache[key] = data
    },
    getFormAjaxCache(key: string) {
      return this.formAjaxCache[key] || false
    }
  }
})
