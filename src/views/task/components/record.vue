<template>
  <ak-list
    ref="tableRef"
    :data="tableData"
    :auto-load="false"
    :api-key="{list:'getFlowRecord'}"
    :before="beforeFetch"
  />
</template>

<script setup lang="ts">
  import {ref} from "vue";

  const tableData = ref({
    columns: [
      {label: '审批人', prop: 'userName'},
      {label: '节点名称', prop: 'nodeName'},
      {label: '处理时间', prop: 'dateTime', render: 'datetime'},
      {
        label: '状态', prop: 'status', render: 'tag',
        //replaceValue: 'sys-flow-status', // 这里的状态没统一，应统一用字典才对 todo
        replaceValue: {1: '同意', 2: '拒绝', 3: '返回发起人', 4: '撤回', 5: '同意', 6: '同意'},
        custom: {0: 'primary', 1: 'success', 2: 'danger', 3: 'info', 4: 'warning'}
      },
      {label: '审批意见', prop: 'remark'},
    ],
    config: {}
  })
  const tableRef = ref()
  const flowId = ref()
  const getData = (id: number) => {
    flowId.value = id
    tableRef.value.getListData()
  }
  const beforeFetch = (params: any) => {
    params.query.flowId = flowId.value
    return params;
  }
  defineExpose({getData})
</script>

<style scoped>

</style>