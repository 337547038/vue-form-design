<!-- Created by 337547038 on 通用数据表格页. -->
<template>
  <div>
    <table-list
      :searchData="searchData"
      :tableData="tableData">
    </table-list>
  </div>
</template>

<script>
import tableList from './components/list.vue'
import {useRoute} from 'vue-router'
import {reactive, toRefs} from 'vue'
import {getDesignFormRow} from '@/api'

export default {
  name: "list",
  props: {},
  components: {tableList},
  setup() {
    const route = useRoute()
    const formId = route.query.formId // 根据表单id获取筛选设置、表格设置
    const state = reactive({
      loading: false,
      tableData: {
        config: {},//表格所有参数
        columns: []
      },
      searchData: {} // 筛选表单
    })
    if (formId) {
      // 根据表单id获取筛选设置、表格设置
      getDesignFormRow(formId)
        .then(res => {
          if (res.data.code === 200) {
            const result = res.data.data[0]
            state.tableData = JSON.parse(result.tableData)
            state.searchData = JSON.parse(result.searchData)
          }
        })
    }
    return {
      ...toRefs(state)
    }
  }
}
</script>
