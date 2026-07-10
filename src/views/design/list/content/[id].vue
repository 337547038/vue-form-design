<!-- Created by weiXin:337547038 -->
<template>
  <div v-loading="loading">
    <ak-list
      v-if="state.visible"
      ref="listEl"
      :search-data="state.searchData"
      :data="state.tableData"
      :dict="state.dict"
      :api-key="{list:'getContentList',del:'delFormContent',exportExcel:'exportExcel',edit:'editFormContent'}"
      :before="beforeFetch"
      :auto-load="false"
      @btn-click="listBtnClick"
    >
      <ak-form
        ref="formEl"
        :data="dialog.formData"
        :operate-type="dialog.formType"
        request-url="getFormContent"
        :submit-url="dialog.formType==='add'?'saveFormContent':'editFormContent'"
        :after="afterSubmit"
        :params="{ formId: state.source }"
        :query="{ formId: state.source, id: dialog.editId }"
        @btn-click="dialogBtnClick"
      />
    </ak-list>
  </div>
</template>

<script setup lang="ts">
  import {reactive, onMounted, watch, computed, nextTick, ref} from 'vue'
  import {useRoute, useRouter, onBeforeRouteLeave} from 'vue-router'
  import {getRequest} from '@/api'
  import {ElMessage} from 'element-plus'
  import {string2json, stringToObj} from '@/utils/design'
  import {getStorage} from "@/utils";
  import {useLayoutStore} from '@/store/layout'

  const route = useRoute()
  const router = useRouter()
  const listEl = ref()
  const loading = ref(true)
  const state = reactive({
    searchData: [],
    tableData: [],
    dict: {},
    visible: true,
    source: ''
  })
  const listId = computed(() => {
    return route.params.id
  })

  ////==========================================列表预览
  const layoutStore = useLayoutStore()
  const initPreview = () => {
    const previewData = stringToObj(getStorage('formPreviewData'))
    if (!previewData) {
      ElMessage.error('数据异常')
      loading.value = false
      return
    }
    state.searchData = previewData?.searchForm
    state.tableData = previewData?.tableData
    state.dict = previewData?.dict
    state.source = previewData?.tableData?.config?.formId
    const previewName = previewData?.tableData?.config?.name
    layoutStore.changeBreadcrumb([{label: previewName || '内容管理'}, {label: '设计预览'}])
    // 获取列表数据
    nextTick(() => {
      listEl.value.getListData()
      loading.value = false
    })
    getFormInit()
  }
  ////==========================================列表预览结束
  // 根据当前设计的表单id获取使用了此id设计的列表
  const initList = () => {
    if (listId.value === 'preview') {
      initPreview()
      return
    }
    state.tableData = []
    listEl.value.resetList()
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
        state.source = result.source
        // 获取列表数据
        nextTick(() => {
          listEl.value.getListData()
          loading.value = false
        })
        getFormInit()
      }
    })
  }
  onBeforeRouteLeave(() => {
    unwatch() // 停止监听
  })
  // 路由改变时需要重新加数据
  const unwatch = watch(
    () => route.params.id,
    () => {
      initList()
    }
  )
  const beforeFetch = (params: any, {type}: any) => {
    if (type === 'fetch') {
      params.extend.formId = state.source
    } else if (['del', 'submit'].includes(type)) {
      if (listId.value === 'preview') {
        ElMessage.error('当前模式不能操作')
        return false //预览模式不能进行操作
      }
      //submit列表中switch修改时
      params.formId = state.source
    }
    return params
  }
  /** ***弹窗口相关****/
  const formEl = ref()
  const dialog = reactive({
    formType: 'add',
    formData: {},
    editId: '',
    close: null
  })
  // 是否满足打开弹窗条件
  const canOpenDialog = computed(() => {
    return state.source && state.tableData.config?.openType === 'dialog'
  })
  // 为弹窗方式打开时，加载表单
  const getFormInit = () => {
    if (canOpenDialog.value) {
      getRequest('designById', {id: state.source})
        .then((res: any) => {
          const result = res.data
          if (result && Object.keys(result).length) {
            dialog.formData = stringToObj(result.data)
            dialog.dict = string2json(result.dict)
          }
        })
        .catch((res: any) => {
          ElMessage.error(res.message || '非法操作.')
        })
    }
  }
  const listBtnClick = (key: string, row: any, close: any) => {
    // 选择了数据源和设置了弹窗方式打开时
    dialog.close = close
    if (key === 'add' || key === 'edit') {
      if (canOpenDialog.value) {
        // 打开弹窗
        if (listId.value === 'preview') {
          //设置一个不让提交表单的类型
          dialog.formType = 'preview'
        } else {
          dialog.formType = key
        }

        dialog.editId = row && row.id
        // 编辑，根据id加载
        if (key === 'edit') {
          nextTick(() => {
            formEl.value.getData()
          })
        }
      } else {
        // 跳转方式
        router.push({
          path: '/design/form/form/',
          query: {form: state.source, id: row?.id}
        })
      }
    }
  }
  const afterSubmit = (_: any, success: boolean, type: string) => {
    if (type === 'submit') {
      if (success) {
        // 添加成功，刷新列表数据
        listEl.value.getListData()
        closeForm()
      }
    }
  }
  const dialogBtnClick = (type: string) => {
    if (type === 'reset' || type === 'cancel') {
      closeForm()
    }
  }
  const closeForm = () => {
    dialog.close && dialog.close()
  }


  onMounted(() => {
    initList()
  })
</script>
