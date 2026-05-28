<!-- Created by 337547038 发起流程 -->
<template>
  <div
    class="container-apply-start"
  >
    <flow-form-tabs
      ref="flowFormTabsEl"
      pane="start"
    />
  </div>
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import FlowFormTabs from '../components/tabs.vue'
  import { useLayoutStore } from '@/store/layout'

  const route = useRoute()
  const router = useRouter()
  const layoutStore = useLayoutStore()

  layoutStore.changeBreadcrumb([
    { label: '工作台' },
    { label: '发起流程' }
  ])

  const flowFormTabsEl = ref()
  onMounted(() => {
    flowFormTabsEl.value.initFlowForm({ flowId: route.query.flowId }, () => {
      router.push({ path: '/task/applyed' })
    })
  })
</script>
<style lang="scss">
.container-apply-start {
  .flow-box {
    position: relative;
  }

  .status {
    position: absolute;
    left: 0;
    top: 0;

    li {
      padding: 5px;
    }

    .s1 {
      color: #20b2aa;
    }

    .s2 {
      color: #1890ff;
    }

    .s3 {
      color: #909399;
    }

    .s4 {
      color: #fc653f;
    }

    .s5 {
      color: #d9db9b;
    }
  }
}
</style>
