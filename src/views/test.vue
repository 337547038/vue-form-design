<template>
  <div>
    <el-button @click="previewVisible=true">1122</el-button>
    <el-dialog v-model="previewVisible" title="预览" :fullscreen="true">
      <div>
        <ak-form-design :formData="formData" ref="formName">
        </ak-form-design>
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {},
      previewVisible: true
    })
    setTimeout(() => {
      state.formData = {
        list: [{
          name: "input1648358902208",
          type: "input",
          control: {modelValue: ""},
          config: {disabledAdd: false},
          item: {label: "单行文本", showLabel: false},
          rules: [],
          customRules: []
        }, {
          name: "tinymce1648360480166",
          type: "tinymce",
          control: {modelValue: ""},
          config: {},
          item: {label: "tinymce富文本", showLabel: false},
          rules: []
        }], config: {labelWidth: "", class: "", size: "default", name: "form1648300327079", rulesComm: []}
      }
    }, 1)
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
