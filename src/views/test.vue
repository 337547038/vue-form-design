<template>
  <div>
    <TableList :data="data" :api-key="{ edit: '/edit' }" pk="id">
      <template #slotName="scope"> slot:{{ scope.value }} </template>
    </TableList>
  </div>
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import TableList from '@/components/table/index.vue'
  const data = ref({
    tableProps: {},
    columns: [],
    config: {},
    apiKey: {},
    controlBtn: [
      {
        key: 'add'
      },
      {
        key: 'edit'
      }
    ]
  })
</script>
