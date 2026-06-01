<template>
  <ak-list
    ref="tableRef"
    :data="tableData"
    :api-key="{list:'getTodoFlow'}"
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
      <el-form>
        <el-form-item label="审批意见">
          <el-input
            v-model="remark"
            placeholder="请输入审批意见"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitClick(1)"
          >
            同意
          </el-button>
          <el-button
            type="danger"
            @click="submitClick(2)"
          >
            拒绝
          </el-button>
          <el-button
            type="warning"
            @click="submitClick(3)"
          >
            退回发起人
          </el-button>
          <el-button
            type="info"
            disabled
          >
            委托
          </el-button>
          <el-button disabled>
            指定审批人
          </el-button>
        </el-form-item>
      </el-form>
    </flowForm>
  </el-drawer>
</template>

<script setup lang="ts">
  import {ref, nextTick, onMounted} from 'vue'
  import flowForm from './components/flowDetail.vue'
  import {getRequest} from '@/api'
  import {ElMessage} from "element-plus";
  import {getStorage} from "@/utils";

  const tableRef = ref()
  const flowFormEl = ref()

  const tableData = ref({
    columns: [
      {label: '标题', prop: 'title'},
      {label: '发起人', prop: 'userId', render: 'text', replaceValue: 'creatUser'},
      {label: '发起时间', prop: 'startTime', render: 'datetime'},
      {label: '节点名称', prop: 'currentNode'},
      {label: '流程类型', prop: 'category', render: 'text', replaceValue: 'sys-flow'},
      {
        label: '操作',
        prop: 'operate',
        render: 'buttons',
        buttons: [
          {
            label: '审批', props: {text: true}, type: 'primary', click: (row: any) => {
              detailClick(row)
            }
          },
          {label: '委托', props: {text: true}, type: 'primary'}
        ]
      }
    ],
    config: {}
  })
  const userInfo = getStorage('userInfo', true)
  const getTitle = (row: { [key: string]: any }, dict: any) => {
    return `${dict.creatUser[row.userId] || ''}发起的${row.name || ''}`
  }
  const getCurrentNodeName = (currentNode: string) => {
    if (currentNode) {
      const nodes = JSON.parse(currentNode)
      for (const key in nodes) {
        if (nodes[key].userId?.split(',').includes(userInfo.id + "")) {
          return nodes[key].nodeName
        }
      }
    }
    return ""
  }
  const visible = ref(false)
  const flowId = ref()
  const detailClick = (row: { [key: string]: any }) => {
    visible.value = true
    nextTick(() => {
      flowId.value = row.id
      flowFormEl.value.getFlowData(row.id)
    })
  }
  const remark = ref()
  const submitClick = (type: number) => {
    getRequest("submitApproval", {status: type, id: flowId.value, remark: remark.value})
      .then(() => {
        ElMessage({
          message: '审批成功',
          type: 'success',
        })
        visible.value = false
        tableRef.value.getListData()
        remark.value = ''
      })
  }
  onMounted(() => {

  })
</script>
