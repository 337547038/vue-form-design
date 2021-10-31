<!-- Created by 337547038 on 通用表单添加修改查看页. -->
<template>
  <div v-loading="loading">
    <design-form :formData="formData" ref="formName">
    </design-form>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import designForm from './components/form.vue'
import {reactive, toRefs, provide, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {getDesignFormRow} from '@/api'

export default {
  name: "add",
  props: {},
  components: {designForm},
  setup(props) {
    const route = useRoute()
    const dataSource = route.query.dataSource
    const formId = route.query.formId
    const state = reactive({
      loading: false,
      formData: {}
    })
    // 注入选项方法获取值
    /*const optionsValue = ref([{label: "选项1", value: '1'}])
    provide("getCheckbox", optionsValue)
    // 注入自定义组件
    provide('componentName', testCom)
    // 注入校验规则
    provide('getMethosdd', (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        callback()
      }
    })
    // 表单控件值改变事件
    provide('controlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    // 获取表单设计数据
    if (formId) {
      state.loading = true
      getDesignFormRow(formId)
        .then(res => {
          if (res.data.code === 200) {
            state.formData = JSON.parse(res.data.data[0].formData)
          }
          state.loading = false
        })
    }
    const formName = ref()
    const submit = () => {
      const formValue = formName.value.getValue()
      console.log(formValue)
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
