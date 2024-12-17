<!-- Created by 337547038 我发起的 -->
<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'flowList'}"
      :search-data="searchData"
      :data="tableData"
      :before="beforeFetch"
    />
  </div>
  <drawer-todo ref="drawerEl" />
</template>

<script setup>
  import { ref } from 'vue'
  import DrawerTodo from './components/drawerTodo.vue'

  const tableListEl = ref()
  const drawerEl = ref()

  const beforeFetch = (params) => {
    params.task = 'todo'
    return params
  }

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
        config: {}
      },
      {
        prop: 'status',
        label: '流程状态',
        render: 'tag',
        replaceValue: 'sys-flow-status',
        // 0待审批 1已撤回 2审批中 3同意 4拒绝
        custom: { 0: 'primary', 1: 'info', 2: 'warning', 3: 'success', 4: 'danger' }
      },
      {
        prop: '__control',
        label: '操作',
        render: 'buttons',
        buttons: [
          {
            type: 'primary',
            label: '审批',
            click: (row) => {
              const callback = tableListEl.value.getListData
              drawerEl.value.open(row, callback)
            }
          }
        ]
      }
    ],
    config: { expand: true }
  })
</script>
