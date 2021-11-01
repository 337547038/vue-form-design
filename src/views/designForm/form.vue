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
import {getDesignFormRow, saveForm, getRowById} from '@/api'
import {ElMessage} from 'element-plus'

export default {
  name: "add",
  props: {},
  components: {designForm},
  setup(props) {
    const formName = ref()
    const route = useRoute()
    const dataSource = route.query.dataSource
    const id = route.query.id
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
    const formatString = ['cascader', 'checkbox', 'tableList']
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
    // 获取表单数据
    if (id) {
      getRowById(id, dataSource)
        .then(res => {
          if (res.data.code === 200) {
            const data = res.data.data[0]
            // 提交时有些转了格式了，这里恢复
            formatString.forEach(item => {
              data[item] = JSON.parse(data[item])
            })
            formName.value.setValue(data)
          }
        })
    }
    const submit = () => {
      const formValue = formName.value.getValue()
      formName.value.validate((valid) => {
        if (valid) {
          saveData(formValue)
        } else {
          console.log('error submit')
          return false
        }
      })
    }

    // 提交保存数据
    const saveData = obj => {
      // 转字符串保存
      formatString.forEach(item => {
        obj[item] = JSON.stringify(obj[item])
      })
      saveForm(obj, dataSource)
        .then(res => {
          if (res.data.code === 200) {
            ElMessage({
              message: '保存成功！',
              type: 'success',
            })
            // todo 保存成功后应该要跳转页面
          } else {
            ElMessage.error(res.data.message)
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
