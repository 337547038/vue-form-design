<template>
  <OperateBtn v-model="tableData.controlBtn" />
  <div>
    <el-button v-for="item in tableData.controlBtn" :key="item.key">
      {{ item.label }}
    </el-button>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import OperateBtn from '@/views/design/list/components/operateBtn.vue'
  const tableData = ref({
    tableProps: {},
    columns: [],
    config: {},
    apiKey: {},
    controlBtn: [
      {
        label: '新增',
        key: 'add',
        type: 'primary',
        size: 'small',
        icon: 'plus'
      },
      {
        label: '导出',
        key: 'import',
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
<style scoped lang="scss"></style>
