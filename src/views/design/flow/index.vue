<!-- Created by 337547038 工作流程设计-->
<template>
  <flow-design
    ref="flowDesignRef"
    :is-silent-mode="isSilentMode"
    @submit-click="submitFlow"
  />
</template>
<route>
{meta:{permissions:'/design/flow/list'}}
</route>
<script setup lang="ts">
  import {ref, computed, onMounted} from 'vue'
  import {useRoute, useRouter} from "vue-router";
  import flowDesign from '@/components/flow/index'
  import {getRequest} from '@/api'
  import {ElMessage} from "element-plus";
  import {useLayoutStore} from "@/store/layout.ts";

  const layoutStore=useLayoutStore()
  layoutStore.changeBreadcrumb([
    {label: '设计管理'},
    {label: '流程设计'}
  ])

  const route = useRoute();
  const router = useRouter();

  const isSilentMode = computed(() => {
    return route.query.type === 'detail'
  })

  const flowDesignRef = ref()

  const flowId = computed(() => {
    return route.query.id
  })
  // 获取流程图数据
  const getFlowData = () => {
    if (flowId.value) {
      getRequest('designById', {id: flowId.value})
        .then((res: { [key: string]: any }) => {
          flowDesignRef.value.render(JSON.parse(res.data.data))
        })
    }
  }

  const submitFlow = (data: string) => {
    let params: any = {
      data: data,
      type: 3 // 1表单 2列表 3流程
    }
    let apiKey = 'designSave'
    if (flowId.value) {
      apiKey = "designEdit"
      params.id = flowId.value
    } else {
      params.name = '未命名流程'
      params.status = 0
    }
    getRequest(apiKey, params)
      .then(() => {
        ElMessage({
          message: '保存成功',
          type: 'success',
        })
        router.push({path: '/design/flow/list'})
      })
  }

  onMounted(() => {
    getFlowData()
    window.sessionStorage.setItem("pageType", "")
  })
</script>
