<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <el-form
    v-bind="formData.config"
    ref="ruleForm"
    :model="model"
    :disabled="disabled||type===2"
    class="add-form"
    :class="{'design-form':type===4,'detail-form':type===3||type===2}">
    <form-group :data="formData"/>
    <slot/>
  </el-form>
</template>

<script>
import formGroup from "./formGroup.vue"
import {provide, computed, ref, reactive, toRefs, watch} from 'vue'

export default {
  name: "formIndex",
  components: {formGroup},
  props: {
    formData: Object,
    type: {// 1新增；2查看（表单模式） ；3查看； 4设计
      type: Number,
      default: 1
    },
    isEdit: { // 编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改
      type: Boolean,
      default: false
    },
    disabled: Boolean // 可用于在提交表单是禁用，防重复提交
  },
  setup(props) {
    // 为在编辑代码框里的事件提供获取当前表单其他项的配置信息
    let timer = 0
    const setWindowEvent = (bool) => {
      if (props.formData && props.formData.list) {
        const formName = props.formData.config.name
        const eventName = `get${formName}ControlByName`
        if (formName && (!window[eventName] || bool)) {
          window[eventName] = (name) => {
            for (let i = 0; i < props.formData.list.length; i++) {
              if (props.formData.list[i].name === name) {
                return props.formData.list[i]
              }
            }
          }
        }
      }
    }
    watch(() => props.formData, () => {
      if (timer < 1) {
        setWindowEvent() // 简单判断下，这里不是每次都更新
      }
      timer++
    })
    setWindowEvent()
    // 设置全局事件结束
    const model = computed(() => {
      const obj = {}
      if (props.formData && props.formData.list) {
        forEachGetFormModel(props.formData.list, obj)
      }
      return obj
    })
    // 从表单数据里提取表单所需的model
    const forEachGetFormModel = (list, obj) => {
      list.forEach(item => {
        if (item.type === 'table') {
          obj[item.name] = item.tableData
        } else if (item.type === 'grid' || item.type === 'tabs') {
          item.columns.forEach(col => {
            forEachGetFormModel(col.list, obj)
          })
        } else if (item.type === 'card') {
          forEachGetFormModel(item.list, obj)
        } else {
          const excludeType = ['title']
          if (excludeType.indexOf(item.type) === -1) {
            obj[item.name] = item.control.modelValue
          }
        }
      })
    }
    // 子组件formGroup为递归组件，这里使用provide传参
    provide('DFStatusType', {type: props.type, isEdit: props.isEdit})
    provide('DFFormModel', model) // 给form-group提供联动条件设置
    const rulesComm = ref(props.formData.config.rulesComm)
    watch(() => props.formData, data => {
      rulesComm.value = data.config.rulesComm
    })
    provide('DFFormRulesComm', rulesComm) //提供给formItem获取公共部分的校验规则
    // 表单检验方法
    const ruleForm = ref()
    const validate = valid2 => {
      setWindowEvent(true)
      ruleForm.value.validate(valid => {
        valid2(valid)
      })
    }
    // 提供一个取值的方法
    const getValue = bool => {
      // bool=true时只返回不为空的值
      if (bool) {
        const obj = {}
        for (const key in model.value) {
          if (model.value.hasOwnProperty(key)) {
            const val = model.value[key]
            if (val !== '' && (val && val.length > 0)) {
              obj[key] = val
            }
          }
        }
        return obj
      } else {
        return model.value
      }
    }
    const setValueObj = ref()
    provide('DFSetFormValue', setValueObj)
    const setValue = obj => {
      setValueObj.value = obj
    }
    const setOptionsObj = ref()
    provide('DFSetFormOptions', setOptionsObj)
    const setOptions = obj => {
      setOptionsObj.value = obj
    }
    return {
      model,
      validate,
      ruleForm,
      getValue,
      setValue,
      setOptions
    }
  }
}
</script>
