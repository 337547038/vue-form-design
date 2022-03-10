<!-- Created by 337547038 on 通用数据表格页. -->
<template>
  <div class="form-list-page">
    <h3>列表数据</h3>
    <table-list
      ref="tableListEl"
      :searchData="searchData"
      :tableData="tableData"
      :requestUrl="requestUrl"
      :beforeRequest="beforeRequest">
      <template #__control="scope">
        <el-button type="text" @click="btnClick(scope.row.id,'show')">查看</el-button>
        <el-button type="text" @click="btnClick(scope.row.id,'edit')">编辑</el-button>
        <el-button type="text" @click="btnClick(scope.row.id,'del')">删除</el-button>
      </template>
    </table-list>
    <p style="padding-top: 20px;color: #999">注：此示例接口不支持搜索分页查询</p>
  </div>
</template>

<script>
import tableList from './components/list.vue'
import {useRoute, useRouter} from 'vue-router'
import {reactive, toRefs, ref} from 'vue'
import {getDesignFormRow, getTableList, delById} from '@/api'
import {ElMessage} from 'element-plus'
import {stringToObj} from '@/utils'
export default {
  name: "list",
  props: {},
  components: {tableList},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const formId = route.query.formId // 根据表单id获取筛选设置、表格设置
    const formName = route.query.formName // 根据表单id获取筛选设置、表格设置
    const tableListEl = ref()
    const state = reactive({
      loading: false,
      tableData: {
        config: {},//表格所有参数
        columns: []
      },
      searchData: {}, // 筛选表单
      requestUrl: getTableList
    })
    // 获取列表数据
    const getData = () => {
      getDesignFormRow(formId)
        .then(res => {
          if (res.data.code === 200) {
            const result = res.data.data[0]
            if (!result.tableData) {
              ElMessage.info('请先设置表格列数据')
              return
            }
            state.tableData = stringToObj(result.tableData)
            if (result.searchData) {
              state.searchData = stringToObj(result.searchData)
            }
          }
        })
    }
    const beforeRequest = obj => {
      return obj
    }
    const onSubmit = () => {
      tableListEl.value.searchClick()
    }
    const btnClick = (id, type) => {
      switch (type) {
        case 'show':
          router.push({
            path: `/form`,
            query: {
              formName: formName,
              formId: formId,
              id: id,
              type: 2 // 2/3都是查看详情模式
            }
          })
          break
        case 'edit':
          router.push({
            path: `/form`,
            query: {
              formName: formName,
              formId: formId,
              id: id
            }
          })
          break
        case 'del':
          delById(formName, id)
            .then(res => {
              if (res.data.code === 200) {
                ElMessage.success('删除成功')
                tableListEl.value.getListData() // 调用组件内部方法重新拉数据
              } else {
                ElMessage.error('删除失败')
              }
            })
            .catch(res => {
              ElMessage.error('删除失败')
            })
          break
      }
    }
    if (formId) {
      // 根据表单id获取筛选设置、表格设置
      getData()
    }
    return {
      ...toRefs(state),
      beforeRequest,
      onSubmit,
      tableListEl,
      btnClick
    }
  }
}
</script>
