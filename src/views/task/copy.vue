<template>
  <ak-list
    ref="tableRef"
    :data="tableData"
    :api-key="{list:'getCopyFlow'}"
  >
    <template #title="{row,dict}">
      {{ getTitle(row, dict) }}
    </template>
  </ak-list>

  <el-drawer
    v-model="visible"
    direction="rtl"
    size="80%"
    title="流程详情"
    destroy-on-close
  >
    <flowForm ref="flowFormEl" />
  </el-drawer>
</template>

<script setup lang="ts">
  import {ref, nextTick, onMounted} from 'vue'
  import flowForm from './components/flowDetail.vue'

  const flowFormEl = ref()

  const getTitle = (row: { [key: string]: any }, dict: any) => {
    return `${dict.creatUser[row.userId]}发起的${row.d_name || ''}`
  }


  const tableData = ref({
    columns: [
      {label: '标题', prop: 'title'},
      {label: '发起人', prop: 'userId', render: 'text', replaceValue: 'creatUser'},
      {label: '抄送时间', prop: 'dateTime', render: 'datetime'},
      {label: '流程类型', prop: 'category', render: 'text', replaceValue: 'sys-flow'},
      {
        label: '操作',
        prop: 'operate',
        render: 'buttons',
        buttons: [{
          label: '详情', props: {text: true}, type: 'primary', click: (row: any) => {
            detailClick(row)
          }
        }]
      },
    ], config: {}
  })

  const visible = ref(false)
  const detailClick = (row: { [key: string]: any }) => {
    visible.value = true
    nextTick(() => {
      flowFormEl.value.getFlowData(row.flowId)
    })
  }

  onMounted(() => {

  })
</script>
