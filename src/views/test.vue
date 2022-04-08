<template>
  <div>
    <p @click="visible=!visible">打开</p>
    <div v-show="visible">
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
  import { reactive, toRefs, provide, ref } from 'vue'

  export default {
    name: "addForm",
    props: {},
    components: {},
    setup(props) {
      const visible=ref(false)
      const formData = ref()
      setTimeout(() => {
        formData.value = {
          list: [{
            name: "input1649335367724",
            type: "input",
            control: {modelValue: ""},
            config: {},
            item: {label: "单行文本", showLabel: false},
            rules: [],
            customRules: [{type: "required", message: "必填1", trigger: "blur"}]
          }, {
            name: "input1649335369500",
            type: "input",
            control: {modelValue: ""},
            config: {},
            item: {label: "单行文本", showLabel: false},
            rules: [],
            customRules: [{type: "required", message: "必填2", trigger: "blur"}]
          }], config: {labelWidth: "", class: "", size: "default", name: "form1648300327079", rulesComm: []}
        }
      }, 2000)
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
        formData,
        submit,
        formName,
        visible
      }
    }
  }
</script>
