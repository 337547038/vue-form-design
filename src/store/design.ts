import { defineStore } from 'pinia'
import { getStorage, setStorage } from '@/utils'
import {ref} from 'vue'

export const useDesignStore = defineStore('design', () => {
  // ====== state 定义 ======
  const controlAttr = ref({})
  const activeKey = ref('')
  const columnsCheck = ref(getStorage('tableColumns', true) || [])
  const formAjaxCache = ref({})

  // ====== actions 方法 ======
  function setControlAttr(data: Record<string, any>) {
    controlAttr.value = data
  }

  function setActiveKey(key: string) {
    activeKey.value = key
  }

  function setColumnsCheck(path: string, data: string[]) {
    columnsCheck.value[path] = data
    setStorage('tableColumns', columnsCheck.value, 0)
  }

  function getColumnsCheck(path: string): string[] {
    return columnsCheck.value[path] || []
  }

  function setFormAjaxCache(key: string, data: any) {
    formAjaxCache.value[key] = data
  }

  function getFormAjaxCache(key: string): any {
    return formAjaxCache.value[key] || false
  }

  // ====== 导出给外部使用 ======
  return {
    controlAttr,
    activeKey,
    columnsCheck,
    formAjaxCache,

    setControlAttr,
    setActiveKey,
    setColumnsCheck,
    getColumnsCheck,
    setFormAjaxCache,
    getFormAjaxCache,
  }
})
