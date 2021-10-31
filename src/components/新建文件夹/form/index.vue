<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <el-form
    v-bind="formData.config"
    ref="ruleForm"
    :model="model"
    class="add-form"
    :class="{'design-form':type===2,'detail-form':type===3}">
    <form-group :data="formData"/>
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
    type: {// 1新增；2设计；3查看
      type: Number,
      default: 1
    },
    isEdit: { // 编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    // 子组件formGroup为递归组件，这里使用provide传参
    provide('statusType', {type: props.type, isEdit: props.isEdit})
    const model = computed(() => {
      const obj = {}
      if (props.formData && props.formData.list) {
        props.formData.list.forEach(item => {
          obj[item.name] = item.control.modelValue
        })
      }
      return obj
    })
    provide('formModel', model) // 给form-group提供联动条件设置
    // 表单检验方法
    const ruleForm = ref()
    const validate = valid2 => {
      ruleForm.value.validate(valid => {
        valid2(valid)
      })
    }
    return {
      model,
      validate,
      ruleForm
    }
  }
}
</script>
