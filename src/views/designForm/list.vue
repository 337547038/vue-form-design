<!-- Created by 337547038 on 2022/8/12. -->
<template>
  <div v-loading="loading">
    <design-list
      :searchData="state.searchData"
      :tableData="state.tableData"
      :dict="state.dict"
    >
      <!--      <template #__control="scope">
        <el-button link>编辑</el-button>
        <el-button link>删除</el-button>
      </template>-->
    </design-list>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { useRoute } from 'vue-router'
  import DesignList from './components/list.vue'
  import { getRequest } from '@/api'
  import { string2json, stringToObj } from '@/utils/form'
  import { ElMessage } from 'element-plus'
  import { useLayoutStore } from '@/store/layout'

  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '内容管理' }, { label: '列表' }])
  const loading = ref(false)
  const route = useRoute()
  const state = reactive({
    tid: route.query.tid,
    loading: false,
    searchData: {},
    tableData: {},
    dict: {}
  })
  const getConfigData = () => {
    if (state.tid) {
      state.loading = true
      getRequest('getFormById', { id: state.tid })
        .then((res) => {
          const result = res.data.data
          if (result) {
            if (result.searchData) {
              state.searchData = stringToObj(result.searchData)
            }
            if (result.tableData) {
              state.tableData = stringToObj(result.tableData)
            }
            state.dict = string2json(result.dict)
          }
        })
        .catch((res) => {
          ElMessage.error(res.data || '请求异常')
        })
    }
  }
  getConfigData()
</script>
