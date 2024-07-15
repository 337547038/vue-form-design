import { defineStore } from 'pinia'

export const useFormStore = defineStore('designForm', {
  state: () => {
    return {
      controlAttr: {},
      activeKey: ''
    }
  },
  actions: {
    setControlAttr(data: any) {
      this.controlAttr = data
    },
    setActiveKey(key: string) {
      this.activeKey = key
    }
  }
})
