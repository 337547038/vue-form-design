import { defineStore } from 'pinia'
import { getStorage, setStorage } from '@/utils'
import {ref} from 'vue'

export const useScreenStore = defineStore('screen', ()=>{
  const controlAttr = ref({})
  const activeId = ref('')
  const screenConfig = ref(getStorage('screenConfig', true) || {})
  const controlTip = ref('')
  const tempActiveId = ref([])

  function setTempActiveId(data: string | string[]) {
    if (typeof data === 'string') {
      const index = tempActiveId.value.indexOf(data)
      index > -1
          ? tempActiveId.value.splice(index, 1)
          : tempActiveId.value.push(data)
    } else if (Array.isArray(data)) {
      tempActiveId.value = data
    }
  }

  function setControlTip(text: string) {
    controlTip.value = text
  }

  function setControlAttr(data: Record<string, any>) {
    controlAttr.value = data
  }

  function setScreenConfig(key: string, data: any) {
    screenConfig.value[key] = data
    setStorage('screenConfig', screenConfig.value, 0)
  }

  function getScreenConfig<T = any>(key: string): T {
    return screenConfig.value[key] as T
  }

  function setActiveId(data: string | string[]) {
    activeId.value = Array.isArray(data) ? data.join(',') : data
  }

  return {
    controlAttr,
    activeId,
    screenConfig,
    controlTip,
    tempActiveId,

    setTempActiveId,
    setControlTip,
    setControlAttr,
    setScreenConfig,
    getScreenConfig,
    setActiveId,
  }
})
