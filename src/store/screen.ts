import { defineStore } from 'pinia'
import { getStorage, setStorage } from '@/utils'

export const useScreenStore = defineStore('screen', {
  state: () => {
    return {
      controlAttr: {}, // 大屏设计时，选中的项
      activeId: '', // 大屏设计时，当前选中项id
      screenConfig: getStorage('screenConfig', true) || {}, // 大屏设计相关
      controlTip: '', //设计左右角提示文案
      tempActiveId: [] //临时选中的多个目标id
    }
  },
  actions: {
    setTempActiveId(data: string | string[]) {
      if (typeof data === 'string' && data) {
        const index = this.tempActiveId.indexOf(data)
        if (index !== -1) {
          //存在删除
          this.tempActiveId.splice(index, 1)
        } else {
          this.tempActiveId.push(data)
        }
      } else {
        this.tempActiveId = data
      }
    },
    setControlTip(text: string) {
      this.controlTip = text
    },
    setControlAttr(data: any) {
      this.controlAttr = data
    },
    setScreenConfig(key: string, data: any) {
      this.screenConfig[key] = data
      setStorage('screenConfig', this.screenConfig, 0)
    },
    getScreenConfig(key: string) {
      return this.screenConfig[key]
    },
    setActiveId(data: string[] | string) {
      this.activeId = data
    }
  }
})
