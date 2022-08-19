import { defineStore } from 'pinia'

export const useDesignFormStore = defineStore('designForm', {
  state: () => {
    return {
      controlAttr: {},
      activeKey: '',
      type: 1, //当前表单状态 1新增；2查看（表单模式） ；3查看； 4设计
      isEdit: false, //编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改
      model: {}, // 给form-group提供联动条件设置
      rulesComm: [], //提供给formItem获取公共部分的校验规则
      hideField: [], // 设置了使用v-if隐藏的字段
      formValue: {}, // 使用setValue设置的值
      formOptions: [], // 使用setOptions设置下拉值
      formOptionsDict: [] // 从数据接口里获取dict设置options
    }
  },
  actions: {
    setControlAttr(data: any) {
      this.controlAttr = data
    },
    setActiveKey(key: string) {
      this.activeKey = key
    },
    setFormValue(val: any) {
      this.formValue = val
    },
    setFormOptions(val: any) {
      this.formOptions = val
    },
    setFormDict(val: any) {
      this.formOptionsDict = val
    }
  }
})
