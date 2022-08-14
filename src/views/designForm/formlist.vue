<template>
  <div class="form-list-page">
    <el-table
      :data="state.tableData"
      border
      style="width: 100%"
      v-loading="state.loading"
    >
      <el-table-column prop="name" label="表单名称" />
      <el-table-column prop="status" label="状态" />
      <el-table-column prop="updateDate" label="更新时间" />
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
          <el-popconfirm
            title="确定删除该记录?"
            confirm-button-text="确认"
            cancel-button-text="取消"
            @confirm="btnClick(6, scope.row)"
          >
            <template #reference>
              <el-button size="small" link>删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-page">
      <el-pagination
        v-model:currentPage="state.currentPage"
        :page-sizes="[20, 30, 40, 50]"
        :page-size="state.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="state.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { getRequest } from '@/api'
  import { useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import { useLayoutStore } from '@/store/layout'
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '系统工具' }, { label: '表单管理' }])

  const router = useRouter()
  const state = reactive({
    pageIndex: 1,
    total: 0,
    pageSize: 20,
    tableData: [],
    loading: false,
    btnGroup: [
      { label: '修改', type: 1 },
      { label: '搜索设置', type: 2 },
      { label: '列表设置', type: 3 },
      { label: '添加数据', type: 4 },
      { label: '查看', type: 5 }
    ]
  })
  const getData = () => {
    getRequest('getFormList', {
      pageIndex: state.pageIndex,
      pageSize: state.pageSize
    })
      .then((res) => {
        if (res.data.code === 200) {
          state.tableData = res.data.data?.list
        }
        state.loading = false
      })
      .catch((res) => {
        state.loading = false
        console.log(res)
        ElMessage.error(res.data || '请求异常')
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
          query: { tid: row.id }
        })
        break
      case 5: // 查看
        router.push({
          path: '/designform/list',
          query: { tid: row.id }
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
  const handleSizeChange = (page: number) => {
    state.pageIndex = 1
    state.pageSize = page
    getData()
  }
  const handleCurrentChange = (page: number) => {
    state.pageIndex = page
    getData()
  }
  getData() // 加载数据
</script>
