<!-- Created by 337547038 on 通用数据表格页. -->
<template>
  <div class="table-list-comm" v-loading="loading">
    <div class="table-search" v-if="Object.keys(searchData).length>0">
      <form-design :form-data="searchData">
        <el-button type="primary">查询</el-button>
        <el-button>清空</el-button>
      </form-design>
    </div>
    <div class="table-main">
      <main-table
        :tableData="tableData"
        :data="dataList">
      </main-table>
    </div>
    <div class="table-page">
      <el-pagination
        v-model:currentPage="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import formDesign from './form.vue'
import mainTable from './table.vue'
import {reactive, toRefs} from 'vue'
import {useRoute} from 'vue-router'

export default {
  name: "tableList",
  props: {
    searchData: Object,
    tableData: Object
  },
  components: {mainTable, formDesign},
  setup() {
    const route = useRoute()
    const dataSource = route.query.dataSource // 根据dataSource获取表格行数据
    const state = reactive({
      loading: false,
      dataList: [], // 表格行数据
      currentPage: 1,
      pageSize: 20,
      total: 0
    })
    const handleSizeChange = () => {

    }
    const handleCurrentChange = () => {
    }
    return {
      ...toRefs(state),
      handleSizeChange,
      handleCurrentChange
    }
  }
}
</script>
