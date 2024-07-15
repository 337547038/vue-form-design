import { defineStore } from 'pinia'
import { getStorage, setStorage } from '@/utils'

export const useDesignStore = defineStore('design', {
  state: () => {
    return {
      controlAttr: {}, // 表单设计时，选中的项
      activeKey: '', // 表单设计时，选中项的标识，用于展示当前状态
      screenControlAttr: {}, // 大屏设计时，选中的项
      columnsCheck: getStorage('tableColumns', true) || [], // 表格勾选的列
      formAjaxCache: {}, // 表单内组件选项数据请求缓存
      dataScreen: getStorage('dataScreen', true) || {}, // 大屏设计相关
      controlTip: '' //设计左右角提示文案
    }
  },
  actions: {
    setControlTip(text: string) {
      this.controlTip = text
    },
    setControlAttr(data: any) {
      this.controlAttr = data
    },
    setScreenControlAttr(data: any) {
      this.screenControlAttr = data
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
    },
    setDataScreen(key: string, data: any) {
      this.dataScreen[key] = data
      setStorage('dataScreen', this.dataScreen, 0)
    },
    getDataScreen(key: string) {
      return this.dataScreen[key]
    }
  }
})
