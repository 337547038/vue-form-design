<!-- Created by weiXin:337547038 -->
<template>
  <div
    v-loading="state.loading"
    style="min-height: 300px"
  >
    <ak-form
      ref="formEl"
      :data="state.formData"
      :operate-type="formType"
      :request-url="requestUrl"
      :submit-url="submitUrl"
      :before="before"
      :params="{ formId: formId.value }"
      :after="after"
    />
  </div>
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script setup lang="ts">
  import { ref, reactive, onMounted, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { stringToObj } from '@/utils/design'
  import { useLayoutStore } from '@/store/layout'
  const layoutStore = useLayoutStore()
  const route = useRoute()
  const router = useRouter()
  const formEl = ref()
  const state = reactive({
    formData: {
      list: [],
      form: {},
      config: {}
    },
    dict: {},
    loading: true
  })
  const id = computed(() => {
    return route.query.id
  })
  const formId = computed(() => {
    return route.query.form
  })
  const formType = computed(() => {
    // 带有参数id为编辑状态
    if (id.value) {
      return 'edit'
    } else {
      return 'add'
    }
  })
  const submitUrl = computed(() => {
    const { submitUrl } = state.formData.config
    // 如果手动填写了地址，则使用填写的
    if (submitUrl) {
      // 手动配置时新增和修改使用同一接口，后端可根据参数区分
       return submitUrl
    } else {
       return formType.value === 'add' ? 'saveFormContent' : 'editFormContent'
    }
  })
  const requestUrl = computed(() => {
    const { requestUrl } = state.formData.config
    if (requestUrl) {
      return requestUrl
    } else {
      return 'getFormContent'
    }
  })
  const getFormData = () => {
    if (!formId.value) {
      ElMessage.error('非法操作.')
      return false
    }
    const params = {
      id: formId.value
    }
    getRequest('designById', params)
      .then((res: any) => {
        const result = res.data
        if (result && Object.keys(result).length) {
          const resultData = stringToObj(result.data)
          if (resultData && Object.keys(resultData).length) {
            state.formData = stringToObj(result.data)
          }
          // 编辑时加载表单初始数据。或设置了添加时获取请求
          if (id.value) {
             formEl.value.getData({ formId: formId.value, id: id.value })
          }
          layoutStore.changeBreadcrumb([
            { label: '内容管理' },
            { label: result.name }
          ])
        }
        state.loading = false
      })
      .catch((res: any) => {
        state.loading = false
        ElMessage.error(res.message || '非法操作..')
      })
  }
  const before = (params: any) => {
    params.formId = formId.value
    return params
  }
  const after = (res: any, success: boolean, type: string) => {
    if (success && type === 'submit') {
      router.go(-1)
    }
  }
  onMounted(() => {
    getFormData()
  })
</script>
