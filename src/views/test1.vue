<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <el-table :data="tableData">
      <el-table-column
        v-for="item in list"
        :key="item.prop"
        v-bind="item"
      />
    </el-table>
  </div>
</template>
<script setup lang="ts">
  import {ref} from "vue";

  const list = ref([
    {
      label: '名称', prop: 'name', onCellClick: () => {
        console.log('onclick')
      }
    },
    {label: '性别', prop: 'sex'},
  ])
  const tableData = ref([{name: '111', sex: '女'}])
</script>
