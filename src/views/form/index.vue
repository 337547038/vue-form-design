<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="formName" label="表单名称"/>
      <el-table-column prop="tableName" label="数据表名"/>
      <el-table-column label="操作">
        <template #default="scope">
          <router-link :to="{path:'/design',query:{dataSource:scope.row.tableName,id:scope.row.id }}">
            <el-button size="small" type="primary">修改</el-button>
          </router-link>
          <el-button size="small" type="primary" style="margin-left: 10px">搜索设置</el-button>
          <el-button size="small" type="primary">列表设置</el-button>
          <el-button size="small" type="primary">添加数据</el-button>
          <el-button size="small" type="primary">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {getList} from "@/api"

export default {
  name: "form",
  props: {},
  setup() {
    const state = reactive({
      tableData: [],
      loading: false
    })
    getList('designform')
        .then(res => {
          if (res.data.code === 200) {
            state.tableData = res.data.data
          }
          state.loading = false
        })
        .catch(res => {
          state.loading = false
          console.log(res)
        })
    return {
      ...toRefs(state)
    }
  }
}
</script>
