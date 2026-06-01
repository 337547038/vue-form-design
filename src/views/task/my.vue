<template>
  <ak-list
    ref="tableRef"
    :data="tableData"
    :api-key="{list:'getMy'}"
  >
    <template #currentUserId="{row,dict}">
      {{ getCurrentUserName(row.currentUserId, dict) }}
    </template>
    <template #name="{row}">
      {{ getTitle(row) }}
    </template>
  </ak-list>
  <el-drawer
    v-model="visible"
    direction="rtl"
    size="80%"
    :title="drawerTitle"
    destroy-on-close
  >
    <flowForm ref="flowFormEl" />
  </el-drawer>
</template>

<script setup lang="ts">
  import {ref, nextTick, onMounted} from 'vue'
  import flowForm from './components/flowDetail.vue'
  import {getRequest} from '@/api'
  import {getStorage} from "@/utils";
  import {ElMessage} from "element-plus";

  const flowFormEl = ref()

  const userInfo = getStorage('userInfo', true)
  const getTitle = (row: { [key: string]: any }) => {
    const userName = userInfo.userName;
    return `${userName}发起的${row.name || ''}`
  }

  const tableRef = ref()
  const visible = ref(false)
  const drawerTitle = ref('')
  const detailClick = (row: { [key: string]: any }) => {
    visible.value = true
    drawerTitle.value = row.name||'流程' + '详情'
    nextTick(() => {
      flowFormEl.value.getFlowData(row.id)
    })
  }

  const cancelClick = (id: number) => {
    getRequest('getCancel', {id: id})
      .then(() => {
        ElMessage({
          message: '撤回成功',
          type: 'success',
        })
        tableRef.value.getListData()
      })
  }
  const getCurrentUserName = (userIds: string, dict: Record<string, any>) => {
    if (userIds) {
      const temp = []
      const ids = userIds.split(',')
      for (const key in ids) {
        temp.push(dict.creatUser[ids[key]])
      }
      return temp.join(',')
    }
    return userIds
  }
  const tableData = ref({
    columns: [
      {
        type: "selection",
        prop: "selection"
      },
      {
        label: "标题",
        prop: "name"
      },
      {
        label: "发起时间",
        prop: "startTime",
        render: 'datetime'
      },
      {
        label: "当前审批人",
        prop: "currentUserId"
      },
      {
        label: "状态",
        prop: "status",
        render: 'tag',
        replaceType: "0",
        replaceValue: 'sys-flow-status',
        custom: {0: 'primary', 1: 'success', 2: 'danger', 3: 'info', 4: 'warning'}
      },
      {
        label: "流程类型",
        prop: "category",
        render: 'tag',
        replaceValue: 'sys-flow',
      },
      {
        label: "操作",
        prop: "operate",
        render: 'buttons',
        buttons: [
          {
            label: '详情', props: {text: true}, type: 'primary',
            click: (row: any) => {
              detailClick(row)
            }
          },
          {
            label: '撤回', props: {text: true}, type: 'primary',
            display: (row: any) => {
              return row.status === 0
            },
            click: (row: any) => {
              cancelClick(row.id)
            }
          }
        ]
      }
    ],
    config:
      {}
  })
  onMounted(() => {

  })
</script>

<style scoped>

</style>