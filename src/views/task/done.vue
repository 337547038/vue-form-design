<template>
  <ak-list
    ref="tableRef"
    :data="tableData"
    :api-key="{list:'getDoneFlow'}"
  >
    <template #title="{row,dict}">
      {{ getTitle(row, dict) }}
    </template>
    <template #currentNode="{row}">
      {{ getCurrentNodeName(row.currentNode) }}
    </template>
  </ak-list>

  <el-drawer
    v-model="visible"
    direction="rtl"
    size="80%"
    title="流程详情"
    destroy-on-close
  >
    <flowForm ref="flowFormEl">
      <h3>审批意见</h3>
      <el-form :disabled="true">
        <el-form-item label="审批状态">
          {{ getStatus[formData.status] }}
        </el-form-item>
        <el-form-item label="审批意见">
          <el-input
            v-model="formData.remark"
            placeholder="请输入审批意见"
          />
        </el-form-item>
        <!--        <el-form-item>
                  <el-button type="primary">同意</el-button>
                  <el-button type="danger">拒绝</el-button>
                  <el-button type="warning">退回发起人</el-button>
                  <el-button type="info">委托</el-button>
                </el-form-item>-->
      </el-form>
    </flowForm>
  </el-drawer>
</template>

<script setup lang="ts">
  import {ref, onMounted, nextTick} from 'vue'
  import flowForm from './components/flowDetail.vue'
  import {getRequest} from "@/api";

  const flowFormEl = ref()

  const tableData = ref({
    columns: [
      {label: '标题', prop: 'title'},
      {label: '发起人', prop: 'userId', render: 'text', replaceValue: 'creatUser'},
      {label: '审批时间', prop: 'dateTime', render: 'datetime'},
      {label: '节点名称', prop: 'nodeName'},
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
  const getStatus = {1: '同意', 2: '拒绝', 3: '返回发起人'};

  const getTitle = (row: { [key: string]: any }, dict: any) => {
    return `${dict.creatUser[row.userId]}发起的${row.d_name || ''}`
  }

  const visible = ref(false)
  const formData = ref({})
  const detailClick = (row: { [key: string]: any }) => {
    visible.value = true
    nextTick(() => {
      flowFormEl.value.getFlowData(row.flowId)
      // 获取审批意见
      getRequest("getRecordById", {id: row.id})
        .then((res:any) => {
          formData.value = res.data
        })
    })
  }

  onMounted(() => {
  })
</script>
