<template>
  <div v-loading="loading">
    <design-form :formData="formData" ref="formEl" :dict="formDict" />
    <!--    <el-button type="primary" @click="submit">提交</el-button>-->
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import DesignForm from './components/form.vue'
  import { getRequest } from '@/api'
  import { stringToObj } from '@/utils/form'
  //import { ElMessage } from 'element-plus'

  const route = useRoute()
  // const router = useRouter()
  const formData = ref({ list: [], form: {} })
  const formDict = ref({})
  const formEl = ref()
  const loading = ref(false)
  const query = route.query
  const init = () => {
    // 根据id获取表单相关数据
    const prams = {
      id: query.tid
    }
    loading.value = true
    getRequest('getFormById', prams)
      .then((res) => {
        // console.log(res)
        const result = res.data.data
        if (result) {
          formData.value = stringToObj(result.formData)
          formDict.value = JSON.parse(result.dict || '')
        }
        loading.value = false
      })
      .catch(() => {
        loading.value = false
      })
  }
  /*const submit = () => {
    formEl.value.validate((valid: boolean, fields: any) => {
      // console.log(fields)
      if (valid) {
        loading.value = true
        const params = {
          tid: query.tid,
          id: query.id,
          // ...formEl.value.getValue()
          fields
        }
        // 提交保存表单
        getRequest('saveFormContent', params)
          .then((res: any) => {
            ElMessage.success(res.data || '保存成功')
            loading.value = false
            router.push({ path: '/designform/list' })
          })
          .catch((res) => {
            loading.value = false
            ElMessage.error(res.data || '保存失败')
          })
      }
    })
  }*/
  init()
</script>
