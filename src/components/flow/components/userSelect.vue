<template>
  <el-dialog
    v-model="visible"
    title="选择用户"
    width="50%"
  >
    <el-table
      ref="tableEl"
      :data="tableData"
    >
      <el-table-column type="selection" />
      <el-table-column
        prop="userName"
        label="用户名"
      />
      <el-table-column label="选择">
        <template #default="{row}">
          <el-button
            link
            @click="selectClick(row)"
          >
            选择
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="padding-top: 20px;display: flex;justify-content: flex-end">
      <el-button
        type="primary"
        @click="confirmClick"
      >
        确定
      </el-button>
      <el-button @click="visible=false">
        取消
      </el-button>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {ElMessage} from "element-plus";
  import {getRequest} from '@/api'

  const emits = defineEmits<{
    (e: 'confirm', obj: any): void
  }>()
  const visible = ref(false)
  const tableData = ref([])
  const tableEl = ref()
  const selectClick = ({id, userName}: { id: number, userName: string }): void => {
    emits('confirm', [{id, userName}])
    visible.value = false
  }
  const confirmClick = () => {
    const rows = tableEl.value.getSelectionRows()
    if (rows?.length) {
      const ids: { id: number, userName: string }[] = []
      rows.forEach((item: any) => {
        ids.push({id: item.id, userName: item.userName})
      })
      emits('confirm', ids)
      visible.value = false
    } else {
      ElMessage({
        message: '请选择用户',
        type: 'warning',
      })
    }
  }
  const open = () => {
    visible.value = true
    getRequest('userList', {})
      .then((res:any) => {
        tableData.value = res.data.list||[]
      })
  }
  defineExpose({open})
</script>

<style scoped>

</style>