<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl=""
      deleteUrl=""
      :searchData="searchData"
      :tableData="tableData"
    />
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
  import { ref } from 'vue'
  // const route = useRoute()
  // const router = useRouter()
  // const tableListEl = ref()
  const searchData = ref({})
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '序号', type: 'index', width: 70 },
      { label: '岗位名称', prop: 'name' },
      { label: '状态', prop: 'status' },
      { label: '创建时间', prop: 'updateTime' },
      { label: '操作', prop: '__control' }
    ],
    config: { expand: true },
    controlBtn: [
      {
        label: '添加',
        key: 'add',
        type: 'primary',
        size: 'small',
        icon: 'plus'
      },
      {
        label: '批量删除',
        key: 'del',
        type: 'danger',
        size: 'small',
        icon: 'delete'
      }
    ],
    operateBtn: [
      {
        label: '编辑',
        key: 'edit'
      },
      {
        label: '删除',
        key: 'del'
      }
    ]
  })
</script>
