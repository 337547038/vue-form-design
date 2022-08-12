<template>
  <div class="form-list-page">
    <el-table
      :data="state.tableData"
      border
      style="width: 100%"
      v-loading="state.loading"
    >
      <el-table-column prop="name" label="表单名称" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            size="small"
            link
            v-for="item in state.btnGroup"
            :key="item.type"
            @click="btnClick(item.type, scope.row)"
          >
            {{ item.label }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { getRequest } from '@/api'
  import { useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'

  const router = useRouter()
  const state = reactive({
    tableData: [],
    loading: false,
    btnGroup: [
      { label: '修改', type: 1 },
      { label: '搜索设置', type: 2 },
      { label: '列表设置', type: 3 },
      { label: '添加数据', type: 4 },
      { label: '查看', type: 5 },
      { label: '删除', type: 6 }
    ]
  })
  const getData = () => {
    getRequest('getFormList')
      .then((res) => {
        if (res.data.code === 200) {
          state.tableData = res.data.data
        }
        state.loading = false
      })
      .catch((res) => {
        state.loading = false
        console.log(res)
        ElMessage.error(res.data || '删除失败')
      })
  }
  const btnClick = (type: number, row: any) => {
    const query = { formId: row.formId, id: row.id }
    switch (type) {
      case 1:
        router.push({
          path: '/designform/design',
          query: query
        })
        break
      case 2:
        router.push({
          path: '/designform/design',
          query: Object.assign({}, query, { type: 'search' })
        })
        break
      case 3: // 列表设置
        router.push({
          path: '/designform/table',
          query: query
        })
        break
      case 4: // 添加数据
        router.push({
          path: '/designform/form',
          query: query
        })
        break
      case 5: // 查看
        router.push({
          path: '/list',
          query: { formName: row.dataTableName, formId: row.id }
        })
        break
      case 6:
        // del
        getRequest('delForm', { id: row.id })
          .then((res) => {
            if (res.data.code === 200) {
              ElMessage.success('删除成功')
              getData() // 重新拉数据
            }
          })
          .catch((res: any) => {
            ElMessage.error(res.data || '删除失败')
          })
        break
    }
  }
  getData() // 加载数据
</script>
