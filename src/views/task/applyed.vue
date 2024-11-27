<!-- Created by 337547038 我发起的 -->
<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'flowList'}"
      :search-data="searchData"
      :data="tableData"
    />
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  const router = useRouter()
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
        config: {}
      },
      {
        prop: 'endTime',
        label: '完成时间',
        render: 'datetime'
      },
      {
        prop: 'name',
        label: '当前审批人'
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
            label: '编辑',
            click: (row) => {
              router.push({
                path: '/task/apply/start',
                query: { flowId: row.flowId, id: row.formId, status: row.status }
              })
            },
            display: (row) => {
              return row.status === 0 // 待审批时允许修改
            },
          },
            {
            type: 'primary',
            label: '查看',
            click: (row) => {
              router.push({
                path: '/task/apply/start',
                query: { flowId: row.flowId, id: row.formId }
              })
            },
              display: (row) => {
                return row.status !== 0 // 非待审批时只能查看不能修改
              },
          },
          {
            render: 'confirm',
            type: 'primary',
            label: '撤回',
            popConfirm: {
              title: '确认撤回该申请吗？',
              /* confirmButtonText: '确认',
              cancelButtonText: '取消',
              confirmButtonType: 'danger' */
            },
            click: (row) => {
              if ([0, 2].includes(row.status)) {
                // todo 这里应该是新增一条审批记录，并将该记录状态修改为已撤回
              }
              console.log('row')
            }
          }
        ]
      }
    ],
    config: { expand: true }
  })
</script>
