<!-- Created by 337547038 待办任务 -->
<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="flowList"
      :searchData="searchData"
      :tableData="tableData"
    >
      <template #status="{ row }">
        <el-tag v-if="row.status">{{ row.status }}</el-tag>
      </template>
      <template #title="{ row }">
        <el-button link type="primary" @click="openDrawer(row)">{{
          row.title
        }}</el-button>
      </template>
    </ak-list>
    <drawer-com ref="drawerEl" />
  </div>
</template>

<script setup lang="ts">
  // import {useRoute, useRouter} from 'vue-router'
  import { ref } from 'vue'
  import DrawerCom from './components/drawerCom.vue'
  // const route = useRoute()
  // const router = useRouter()
  const tableListEl = ref()
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入审批标题'
        },
        config: {},
        name: 'title',
        item: {
          label: '审批标题'
        }
      },
      {
        type: 'button',
        control: {
          label: '查询',
          type: 'primary',
          key: 'submit'
        },
        config: {}
      },
      {
        type: 'button',
        control: {
          label: '重置'
        },
        config: {}
      }
    ],
    form: {
      size: 'default'
    },
    config: {}
  })
  const tableData = ref({
    columns: [
      {
        prop: 'title',
        label: '审批标题'
      },
      {
        prop: 'creatTime',
        label: '发起时间',
        config: {
          formatter: '{y}-{m}-{d} {h}:{i}:{s}'
        }
      },
      {
        prop: 'a',
        label: '流程节点'
      },
      {
        prop: 'status',
        label: '流程状态'
      }
    ],
    config: { requestUrl: 'flowList', expand: true }
  })

  const drawerEl = ref()
  const openDrawer = (row: any) => {
    drawerEl.value.open(row)
  }
</script>
