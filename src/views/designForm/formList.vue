<template>
  <div class="form-list-page">
    <table-list
      :tableData="state.tableData"
      :requestUrl="state.requestUrl"
      ref="tableListEl"
    >
      <template #control="scope">
        <el-button
          size="small"
          link
          v-for="item in state.btnGroup"
          :key="item.type"
          @click="btnClick(item.type, scope.row)"
          :disabled="getShow(item, scope.row)"
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
    </table-list>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { getRequest } from '@/api'
  import { useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import TableList from '../designForm/components/list.vue'
  import { useLayoutStore } from '@/store/layout'

  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '系统工具' }, { label: '表单管理' }])

  const tableListEl = ref()
  const router = useRouter()
  const state = reactive({
    pageIndex: 1,
    total: 0,
    pageSize: 20,
    tableData: {
      config: {},
      columns: [
        { label: '序号', prop: '__index', type: 'index', width: '60px' },
        { prop: 'name', label: '表单名称' },
        {
          label: '状态',
          prop: 'status',
          config: {
            tagList: { '1': 'success', '0': 'info' },
            dictKey: 'status'
          }
        },
        { label: '更新时间', prop: 'updateDate' },
        { label: '操作', prop: 'control', width: '340px' }
      ]
    },
    requestUrl: 'getFormList',
    btnGroup: [
      { label: '修改', type: 1 },
      { label: '搜索设置', type: 2 },
      { label: '列表设置', type: 3 },
      { label: '添加数据', type: 4 },
      { label: '查看', type: 5 }
    ]
  })
  const btnClick = (type: number, row: any) => {
    const query = { formId: row.formId, id: row.id }
    switch (type) {
      case 1:
        router.push({
          path: '/designform',
          query: query
        })
        break
      case 2:
        router.push({
          path: '/designform',
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
              tableListEl.value?.getListData() // 重新拉数据
            }
          })
          .catch((res: any) => {
            ElMessage.error(res.data || '删除失败')
          })
        break
    }
  }
  const getShow = (item: any, row: any) => {
    // 无数据源创建的不能添加数据和查看
    return [4, 5].includes(item.type) && !row.formId
  }
</script>
