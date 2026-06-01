<template>
  <flow-form-detail
    ref="flowFormDetailEl"
    :detail="false"
    @submit="submit"
  />
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  import {useRoute, useRouter} from "vue-router";
  import FlowFormDetail from '../components/flowDetail.vue'
  import {getRequest} from "@/api";
  import {ElMessage} from "element-plus";
  import {getStorage} from "@/utils";
  import {useLayoutStore} from "@/store/layout.ts";

  const layoutStore=useLayoutStore()
  layoutStore.changeBreadcrumb([
    {label: '工作台'},
    {label: '发起流程'}
  ])
  const router = useRouter();

  const route = useRoute()

  const flowFormDetailEl = ref()
  const userInfo = getStorage('userInfo', true)

  const submit = (val: string, approver: string) => {
    const data = {
      userId: userInfo.id, // 申请人id 这里没会员登录暂固定为1
      formContent: val,
      flowId: route.query.flowId,
      approver: approver // 如果有用户自定的选择人
    }
    getRequest('saveFlow', data)
      .then(() => {
        ElMessage({
          message: '保存成功',
          type: 'success',
        })
        router.push({path: '/task/my'})
      })
  }

  onMounted(() => {
    if (route.query.flowId) {
      flowFormDetailEl.value.getFlowDesignDetail(route.query.flowId)
    }
  })

</script>
