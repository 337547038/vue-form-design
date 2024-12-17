<!-- Created by 337547038 我发起的 -->
<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'flowList'}"
      :search-data="searchData"
      :data="tableData"
      :before="before"
    />
    <drawer-com
      ref="drawerEl"
    />
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { ref, computed, onMounted } from 'vue'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { useLayoutStore } from '@/store/layout'
  import DrawerCom from './components/drawerCom.vue'

  const route = useRoute()
  const tableListEl = ref()
  const drawerEl = ref()
  const isCopyer = computed(() => {
    return route.query.task === 'copyer'
  })
  const layoutStore = useLayoutStore()
  onMounted(() => {
    if (isCopyer.value) {
      layoutStore.changeBreadcrumb([{ label: '工作台' }, { label: '我的抄送' }])
    }
  })

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
        prop: 'currentApprover',
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
              /* router.push({
                path: '/task/apply/start',
                query: { flowId: row.flowId, id: row.formId, status: row.status }
              }) */
              drawerEl.value.open(row, 'applyed')
            },
            display: (row) => {
              return row.status === 0 && !isCopyer.value// 待审批时允许修改
            },
          },
          {
            type: 'primary',
            label: '查看',
            click: (row) => {
              /* router.push({
                path: '/task/apply/start',
                query: { flowId: row.flowId, id: row.formId, copyer: isCopyer.value }
              }) */
              row.copyer = isCopyer.value
              drawerEl.value.open(row, isCopyer.value ? 'copyer' : 'applyed')
            },
            display: (row) => {
              return row.status !== 0 || isCopyer.value // 非待审批时只能查看不能修改
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
                withdraw(row)
              }
              console.log('row')
            },
            display: (row) => {
              return [0, 2].includes(row.status) && !isCopyer.value// 非待审批时只能查看不能修改
            },
          }
        ]
      }
    ],
    config: { expand: true }
  })

  const before = (params, type) => {
    if (type === 'fetch' && isCopyer.value) {
      params.task = 'copyer'
      return params
    }
  }

  // 撤回申请
  const withdraw = (row) => {
    getRequest('flowWithdraw', { id: row.id, currentNode: row.currentNode })
        .then(() => {
          tableListEl.value.getListData()
          ElMessage.success('流程申请已撤回')
        })
        .catch(() => {
          ElMessage.error('流程申请撤回失败')
        })
  }
</script>
