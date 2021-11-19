<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
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
      formData: {
        "list": [{
          "name": "upload1637303912996",
          "type": "upload",
          "control": {
            "modelValue": [],
            "action": "http://localhost:3001/upload/single",
            "listType": "picture-card",
            "limit": 2
          },
          "config": {"tip": "一些上传提示文案", "btnText": ""},
          "item": {"label": "图片", "showLabel": false},
          "rules": []
        }], "config": {"labelWidth": "", "class": "", "size": "medium", "name": "form1637303910371", "rulesComm": []}
      }
    })
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

    setTimeout(() => {
      formName.value.setValue({
        upload1637303912996: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      })
    }, 5000)

    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
