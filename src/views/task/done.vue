<!-- Created by 337547038 已办事项 -->
<template>
  <div>
    <ak-list
      ref="tableListEl"
      request-url=""
      :search-data="searchData"
      :data="tableData"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

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
        formItem: {
          label: '审批标题'
        }
      }
    ],
    form: {
      size: 'default'
    },
    config: { submitCancel: true }
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
    config: { expand: true }
  })
</script>
