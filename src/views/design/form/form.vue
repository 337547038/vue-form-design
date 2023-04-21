<!-- Created by 337547038 -->
<template>
  <div v-loading="state.loading" style="min-height: 300px">
    <ak-form
      ref="formEl"
      :formData="state.formData"
      :type="formType"
      :dict="state.dict"
      requestUrl="getFormContent"
      addUrl="saveFormContent"
      editUrl="editFormContent"
      :beforeSubmit="beforeSubmit"
      :afterSubmit="afterSubmit"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted, computed, nextTick } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { string2json, stringToObj } from '@/utils/form'
  import { useLayoutStore } from '@/store/layout'
  const layoutStore = useLayoutStore()
  const route = useRoute().query
  const router = useRouter()
  const formEl = ref()
  const state = reactive({
    formData: {
      list: [],
      form: {},
      config: {}
    },
    dict: {},
    formId: route.form,
    id: route.id,
    loading: true
  })
  const formType = computed(() => {
    // 带有参数id为编辑状态
    if (route.id) {
      return 2
    } else {
      return 1
    }
  })
  const getFormData = () => {
    if (!state.formId) {
      ElMessage.error('非法操作.')
      return false
    }
    const params = {
      id: state.formId
    }
    getRequest('designById', params)
      .then((res: any) => {
        const result = res.data
        if (result && Object.keys(result).length) {
          state.formData = stringToObj(result.data)
          state.dict = string2json(result.dict)
          // 编辑时加载表单初始数据。或设置了添加时获取请求
          if (route.id || state.formData.config?.addLoad) {
            formEl.value.getData({ formId: state.formId, id: route.id })
          }
          layoutStore.changeBreadcrumb([
            { label: '内容管理' },
            { label: result.name }
          ])
        }
        nextTick(() => {
          state.loading = false
        })
      })
      .catch((res: any) => {
        state.loading = false
        ElMessage.error(res.message || '非法操作..')
      })
  }
  const beforeSubmit = (params: any) => {
    params.formId = state.formId
    params.id = route.id
    return params
  }
  const afterSubmit = (type: string) => {
    if (type === 'success') {
      router.go(-1)
    }
  }
  onMounted(() => {
    getFormData()
  })
</script>
