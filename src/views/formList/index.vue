<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="formName" label="表单名称"/>
      <el-table-column prop="dataTableName" label="数据表名"/>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            v-for="item in btnGroup"
            :key="item.type"
            @click="btnClick(item.type,scope)">
            {{ item.label }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {getList} from "@/api"
import {useRoute, useRouter} from 'vue-router'

export default {
  name: "formIndex",
  props: {},
  setup() {
    const router = useRouter()
    const state = reactive({
      tableData: [],
      loading: false,
      btnGroup: [
        {label: '修改', type: 1},
        {label: '搜索设置', type: 2},
        {label: '列表设置', type: 3},
        {label: '添加数据', type: 4},
        {label: '查看', type: 5},
      ]
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
    const btnClick = (type, scope) => {
      switch (type) {
        case 1:
          router.push({
            path: '/design',
            query: {dataSource: scope.row.dataTableName, id: scope.row.id}
          })
          break
        case 2:
          router.push({
            path: '/design',
            query: {dataSource: scope.row.dataTableName, id: scope.row.id, type: 'search'}
          })
          break
        case 3:
          router.push({
            path: '/designTable',
            query: {id: scope.row.id}
          })
          break
        case 4:
          router.push({
            path: '/form',
            query: {dataSource: scope.row.dataTableName, formId: scope.row.id}
          })
          break
        case 5:
          router.push({
            path: '/list',
            query: {dataSource: scope.row.dataTableName, formId: scope.row.id}
          })
          break
      }
    }
    return {
      ...toRefs(state),
      btnClick
    }
  }
}
</script>
