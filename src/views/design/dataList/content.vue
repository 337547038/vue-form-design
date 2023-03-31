<!-- Created by 337547038 -->
<template>
  <div>
    <ak-list
      v-if="state.visible"
      ref="listEl"
      :searchData="state.searchData"
      :tableData="state.tableData"
      :dict="state.dict"
      :formId="formId"
      requestUrl="getContentList"
      deleteUrl="delFormContent"
      :autoLoad="false"
    />
  </div>
</template>

<script setup lang="ts">
  import { reactive, onMounted, watch, computed, nextTick, ref } from 'vue'
  import { useRoute, onBeforeRouteLeave } from 'vue-router'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { string2json, stringToObj } from '@/utils/form'
  const route = useRoute()
  // url参数说明：
  // id 获取当前设计的列表字段，查询条件等配置
  // form 跳转到新增编辑，列表数据加载
  const listEl = ref()
  const state = reactive({
    searchData: [],
    tableData: [],
    dict: {},
    visible: true
  })
  const formId = computed(() => {
    return route.query.form
  })
  const listId = computed(() => {
    return route.query.id
  })
  // 根据当前设计的表单id获取使用了此id设计的列表
  const initList = () => {
    if (!listId.value) {
      ElMessage.error('非法操作...')
      return false
    }
    const params = {
      id: listId.value
    }
    getRequest('designById', params).then((res: any) => {
      const result = res.data
      if (result && Object.keys(result).length) {
        state.searchData = stringToObj(result.data)
        state.tableData = stringToObj(result.listData)
        state.dict = string2json(result.dict)
        // 获取列表数据
        nextTick(() => {
          listEl.value.getListData()
        })
      }
    })
  }
  onBeforeRouteLeave(() => {
    unwatch() // 停止监听
  })
  /*  onBeforeRouteUpdate((to: any) => {
  })*/
  const unwatch = watch(
    () => route.query.id,
    () => {
      initList()
      /*
      state.visible = false
      nextTick(() => {
        state.visible = true
      })*/
    },
    {
      //deep: true
    }
  )
  onMounted(() => {
    initList()
  })
</script>
