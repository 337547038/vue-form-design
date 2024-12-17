<!-- Created by 337547038 已办事项 -->
<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'flowRecordDone'}"
      :search-data="searchData"
      :data="tableData"
    />
    <drawer-com
      ref="drawerEl"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import DrawerCom from './components/drawerCom.vue'
const drawerEl = ref()
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
        render: 'datetime',
      },
      {
        prop: 'flowStatus',
        label: '流程状态',
        render: 'tag',
        replaceValue: 'sys-flow-status',
        // 0待审批 1已撤回 2审批中 3同意 4拒绝
        custom: { 0: 'primary', 1: 'info', 2: 'warning', 3: 'success', 4: 'danger' }
      },
      {
        prop: 'datetime',
        label: '审批时间',
        render: 'datetime'
      },
      {
        prop: 'status',
        label: '审批状态',
        render: 'tag',
        replaceValue: { 0: '拒绝', 1: '同意', 2: '流转', 3: '撤回' },
        custom: { 0: 'danger', 1: 'success', 2: 'primary', 3: 'info' },
      }, {
        prop: 'content',
        label: '审批意见'
      },
      {
        prop: 'action',
        label: '查看',
        render: 'buttons',
        buttons: [
          {
            type: 'primary',
            label: '详情',
            click: (row) => {
              row.flowId = row.fId
              drawerEl.value.open(row, 'done')
              // const callback = tableListEl.value.getListData
              // drawerEl.value.open(row, callback)
            }
          }
        ]
      }
    ],
    config: { expand: true }
  })
</script>
