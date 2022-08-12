<template>
  <design-form :formData="formData" ref="formEl" />
  <el-button type="primary" @click="submit">提交</el-button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import DesignForm from './components/form.vue'
  import { getRequest } from '@/api'
  import { stringToObj } from '@/utils/form'

  const route = useRoute()
  const formData = ref({ list: [], form: {} })
  const formEl = ref()
  const query = route.query
  const init = () => {
    // 根据id获取相关数据
    const prams = {
      id: query.id
    }
    getRequest('getFormById', prams).then((res) => {
      console.log(res)
      const result = res.data.data
      if (result) {
        formData.value = stringToObj(result.formData)
      }
    })
  }
  const submit = () => {}
  init()
</script>
