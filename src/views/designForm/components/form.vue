<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <el-form
    v-bind="formData.config"
    ref="ruleForm"
    :model="model"
    class="add-form"
    :class="{'design-form':type===4,'detail-form':type===3||type===2}">
    <form-group :data="formData" />
    <slot />
  </el-form>
</template>

<script>
import formGroup from "./formGroup.vue"
import {provide, computed, ref} from 'vue'

export default {
  name: "formIndex",
  components: {formGroup},
  props: {
    formData: Object,
    type: {// 1新增；2查看；3查看（表单模式）； 4设计
      type: Number,
      default: 1
    },
    isEdit: { // 编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const model = computed(() => {
      const excludeType = ['title']
      const obj = {}
      if (props.formData && props.formData.list) {
        props.formData.list.forEach(item => {
          if (item.type === 'table') {
            obj[item.name] = item.tableData
          } else if (item.type === 'grid' || item.type === 'tabs') {
            item.columns.forEach(col => {
              col.list.forEach(li => {
                obj[li.name] = li.control.modelValue
              })
            })
          } else if (item.type === 'card') {
            item.list.forEach(li => {
              obj[li.name] = li.control.modelValue
            })
          } else {
            if (excludeType.indexOf(item.type) === -1) {
              obj[item.name] = item.control.modelValue
            }
          }
        })
      }
      return obj
    })
    // 子组件formGroup为递归组件，这里使用provide传参
    provide('statusType', {type: props.type, isEdit: props.isEdit})
    provide('formModel', model) // 给form-group提供联动条件设置
    // 表单检验方法
    const ruleForm = ref()
    const validate = valid2 => {
      ruleForm.value.validate(valid => {
        valid2(valid)
      })
    }
    // 提供一个取值的方法
    const getValue = () => {
      return model.value
    }
    return {
      model,
      validate,
      ruleForm,
      getValue
    }
  }
}
</script>
