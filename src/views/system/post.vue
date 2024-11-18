<template>
  <div>
    <ak-list
      ref="tableListEl"
      :search-data="searchData"
      :data="tableData"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const searchData = ref({})
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '序号', type: 'index', width: 70 },
      { label: '岗位名称', prop: 'name' },
      { label: '状态', prop: 'status' },
      { label: '创建时间', prop: 'updateTime', render: 'datetime' },
      {
        label: '操作', prop: '__control', render: 'buttons', buttons: [{
          label: '编辑',
          key: 'edit'
        },
          {
            label: '删除',
            key: 'del'
          }]
      }
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
    ]
  })
</script>
