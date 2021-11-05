<!-- Created by 337547038 on 通用数据表格页. -->
<template>
  <div>
    <table-list
      ref="tableListEl"
      :searchData="searchData"
      :tableData="tableData"
      :beforeRequest="beforeRequest">
<!--      <template #DFSearchForm>
        <el-button @click="onSubmit">确定</el-button>
      </template>-->
    </table-list>
  </div>
</template>

<script>
import tableList from './components/list.vue'
import {useRoute} from 'vue-router'
import {reactive, toRefs, ref} from 'vue'
import {getDesignFormRow} from '@/api'

export default {
  name: "list",
  props: {},
  components: {tableList},
  setup() {
    const route = useRoute()
    const formId = route.query.formId // 根据表单id获取筛选设置、表格设置
    const tableListEl = ref()
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
    const beforeRequest = obj => {
      obj.ok = '2'
      return obj
    }
    const onSubmit = () => {
      tableListEl.value.searchClick()

    }
    return {
      ...toRefs(state),
      beforeRequest,
      onSubmit,
      tableListEl
    }
  }
}
</script>
