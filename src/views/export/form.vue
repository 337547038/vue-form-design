<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>

  </div>
</template>
<script>
import {reactive, toRefs, provide, ref} from 'vue'
// todo 自定义组件
import customComponent from "@/docs/components/customTest.vue"

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {
        "list": [{
          "name": "component",
          "type": "component",
          "control": {"modelValue": ""},
          "config": {},
          "template": "customComponent",
          "component": "",
          "item": {"label": "自定义组件", "showLabel": false},
          "rules": [],
          "customRules": [{"type": "required", "message": "必填项", "trigger": "blur"}]
        }], "config": {"labelWidth": "", "class": "", "size": "medium", "name": "form1636607042495", "rulesComm": []}
      }
    })
    // todo 自定义组件自定义组件
    provide("customComponent", customComponent)
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName = ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
