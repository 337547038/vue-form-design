<!-- Created by 337547038 on 通用表单添加修改查看页. -->
<template>
  <div v-loading="loading" class="add-form-demo">
    <h3>新增/编辑/查看数据</h3>
    <design-form :formData="formData" ref="formName" :type="type">
    </design-form>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import designForm from './components/form.vue'
import {reactive, toRefs, provide, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {getDesignFormRow, saveForm, getRowById, editForm} from '@/api'
import {ElMessage} from 'element-plus'
import {stringToObj} from '@/utils'

export default {
  name: "add",
  props: {},
  components: {designForm},
  setup(props) {
    const formName = ref()
    const route = useRoute()
    const dataSource = route.query.formName // 保存在数据的位置表名
    const id = route.query.id // 当前记录id
    const formId = route.query.formId // 设计的表单id
    const type = route.query.type || 1
    const state = reactive({
      loading: false,
      formData: {},
      type: parseInt(type)
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
    provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    // 获取表单设计数据
    if (formId) {
      state.loading = true
      getDesignFormRow(formId)
        .then(res => {
          if (res.data.code === 200) {
            state.formData = stringToObj(res.data.data[0].formData)
          }
          state.loading = false
        })
        .catch(res => {
          state.loading = false
          throw new Error("获取表单设计数据失败")
        })
    }
    // 获取表单数据，修改时获取初始值
    if (id) {
      getRowById(id, dataSource)
        .then(res => {
          if (res.data.code === 200) {
            const data = res.data.data[0]
            // 提交时有些转了格式了，这里恢复
            formatData(data, 0)
            formName.value.setValue(data)
          }
        })
    }
    const submit = () => {
      const formValue = formName.value.getValue()
      formName.value.validate((valid) => {
        if (valid) {
          if (id) {
            // 编辑
            editData(formValue)
          } else {
            saveData(formValue) // 保存
          }
        } else {
          console.log('error submit')
          return false
        }
      })
    }

    // 提交保存数据
    const saveData = obj => {
      // 转字符串保存
      formatData(obj, 1)
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
    // 修改数据
    const editData = obj => {
      // 转字符串保存
      formatData(obj, 1)
      editForm(obj, dataSource, id)
        .then(res => {
          if (res.data.code === 200) {
            ElMessage({
              message: '修改成功！',
              type: 'success',
            })
            // todo 保存成功后应该要跳转页面
          } else {
            ElMessage.error(res.data.message)
          }
        })
    }
    // 示例数据类型问题，这里做下转换
    const formatData = (data, type) => {
      const formatString = ['cascader', 'checkbox', 'tableList'] // 需要转换的提交字段
      console.log(data)
      formatString.forEach(item => {
        if (type === 0) {
          if (data[item]) {
            data[item] = JSON.parse(data[item])
          }
        } else if (type === 1) {
          data[item] = JSON.stringify(data[item])
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
