import { defineStore } from 'pinia'

export const useDesignFormStore = defineStore('designForm', {
  state: () => {
    return {
      controlAttr: {},
      activeKey: ''
      //type: 1, //当前表单状态 1新增；2查看（表单模式） ；3查看； 4设计
      //isEdit: false, //编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改
      //model: {}, // 给form-group提供联动条件设置
      //hideField: [], // 设置了使用v-if隐藏的字段
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
