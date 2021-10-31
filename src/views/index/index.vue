<template>
  <div>
    <div>
      <router-link to="/design">
        <el-button type="primary">创建表单</el-button>
      </router-link>
      <el-button type="primary" @click="chooseSource">已有数据源创建表单</el-button>
      <router-link to="/formList">
        <el-button type="primary">表单列表</el-button>
      </router-link>
    </div>
    <el-dialog
        v-model="visible"
        title="选择数据源"
        width="600px"
        custom-class="source-dialog"
        :append-to-body="true">
      <el-table :data="tableData" border style="width: 100%" v-loading="loading">
        <el-table-column prop="title" label="名称"/>
        <el-table-column prop="name" label="数据表名"/>
        <el-table-column label="操作">
          <template #default="scope">
            <router-link :to="{path:'/design',query:{dataSource:scope.row.name }}">
              <el-button size="small" type="primary">创建表单</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {getList} from '@/api'

export default {
  name: "index",
  setup() {
    const state = reactive({
      visible: false,
      tableData: [],
      loading: false
    })
    const chooseSource = () => {
      state.visible = true
      state.loading = true
      getList('datasource')
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
    }
    return {
      chooseSource,
      ...toRefs(state)
    }
  }
}
</script>
