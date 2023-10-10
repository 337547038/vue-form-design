<!-- Created by 337547038 我发起的 -->
<template>
  <div>
    <ak-list
      ref="tableListEl"
      request-url="flowList"
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
        config: {
          formatter: '{y}-{m}-{d} {h}:{i}:{s}'
        }
      },
      {
        prop: 'endTime',
        label: '完成时间',
        config: {
          formatter: '{y}-{m}-{d} {h}:{i}:{s}'
        }
      },
      {
        prop: 'name',
        label: '审批人'
      },
      {
        prop: 'status',
        label: '流程状态'
      },
      {
        prop: '__control',
        label: '操作'
      }
    ],
    operateBtn: [
      {
        label: '查看',
        click: row => {
          router.push({
            path: '/task/apply/start',
            query: { flowId: row.flowId, id: row.formId }
          })
        }
      },
      {
        label: '撤回'
      }
    ],
    config: { expand: true }
  })
</script>
