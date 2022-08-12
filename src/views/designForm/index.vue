<template>
  <el-dialog
    v-model="visible"
    title="选择数据源"
    width="600px"
    custom-class="source-dialog"
    :append-to-body="true"
  >
    <div style="text-align: right; margin-bottom: 5px">
      <el-button type="primary" @click="click()">无数据源创建</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="tableName" label="数据表名" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="click(scope.row.id)" type="primary"
            >创建表单
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { getRequest } from '@/api'
  import { useRouter } from 'vue-router'

  const visible = ref(true)
  const tableData = ref([])
  const loading = ref(true)
  const router = useRouter()
  const click = (id?: string) => {
    visible.value = false
    router.push({ path: '/designform/design', query: { formId: id } })
  }
  getRequest('datasource').then((res: any) => {
    loading.value = false
    tableData.value = res.data.data
  })
</script>
