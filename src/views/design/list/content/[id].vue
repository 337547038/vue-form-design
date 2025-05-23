<!-- Created by weiXin:337547038 -->
<template>
  <div v-loading="loading">
    <ak-list
      v-if="state.visible"
      ref="listEl"
      :search-data="state.searchData"
      :data="state.tableData"
      :dict="state.dict"
      :api-key="{list:'getContentList',del:'delFormContent',export:'exportContent',edit:'editFormContent'}"
      :before="beforeFetch"
      :auto-load="false"
      @btn-click="listBtnClick"
    />
    <el-dialog
      v-if="canOpenDialog"
      v-model="dialog.visible"
      destroy-on-close
      :title="dialog.title"
      :width="dialog.width || '600px'"
      :before-close="beforeClose"
    >
      <ak-form
        ref="formEl"
        :data="dialog.formData"
        :dict="dialog.dict"
        :operate-type="dialog.formType"
        request-url="getFormContent"
        :submit-url="dialog.formType==='add'?'saveFormContent':'editFormContent'"
        :after="afterSubmit"
        :params="{ formId: state.source }"
        :query="{ formId: state.source, id: dialog.editId }"
        @btn-click="dialogBtnClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { reactive, onMounted, watch, computed, nextTick, ref } from 'vue'
  import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { string2json, stringToObj } from '@/utils/design'
  import { download } from '@/utils/download'

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
  // 根据当前设计的表单id获取使用了此id设计的列表
  const initList = () => {
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
      },
      {
        // deep: true
      }
  )
  const beforeFetch = (params: any, type: string) => {
    // props.beforeFetch事件存在时，events.beforeFetch会无效，此处在加上
    if (type === 'fetch') {
      params.extend.formId = state.source
      const eventBefore = state.tableData.events?.before
      if (typeof eventBefore === 'function') {
        return eventBefore(params, route)
      }
    } else if (type === 'del') {
      params.formId = state.source
      const eventBefore = state.tableData.events?.before
      if (typeof eventBefore === 'function') {
        return eventBefore(params, route)
      }
    } else if (type === 'submit') {
      // 列表中switch修改时
      params.formId = state.source
    }
    return params
  }
  /** ***弹窗口相关****/
  const formEl = ref()
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 'add',
    formData: {},
    width: '',
    dict: {},
    editId: ''
  })
  // 是否满足打开弹窗条件
  const canOpenDialog = computed(() => {
    return state.source && state.tableData.config?.openType === 'dialog'
  })
  // 为弹窗方式打开时，加载表单
  const getFormInit = () => {
    if (canOpenDialog.value) {
      dialog.width = state.tableData.config?.dialogWidth // 弹口宽
      getRequest('designById', { id: state.source })
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
  const listBtnClick = (key: string, row: any) => {
    // 选择了数据源和设置了弹窗方式打开时
    if (key === 'export') {
      // 使用查询表单的值及当前列表的id
      const params = Object.assign({}, listEl.value.getSearchFormValue(), {
        listId: listId.value
      })
      download('importExcel', params)
          .then(() => {
            ElMessage.success('正在导出..')
          })
          .catch((res: any) => {
            ElMessage.error(res.message)
          })
    } else if (key === 'add' || key === 'edit') {
      if (canOpenDialog.value) {
        // 打开弹窗
        dialog.visible = true
        dialog.title = key === 'add' ? '新增' : '编辑'
        dialog.formType = key
        dialog.editId = row && row.id
        if (key === 'add' && dialog.formData.config?.addLoad) {
          // 添加时需要加载数据
          nextTick(() => {
            formEl.value.getData()
          })
        }
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
          query: { form: state.source, id: row?.id }
        })
      }
    }
  }
  const afterSubmit = (res: any, success: boolean, type: string) => {
    if (type === 'submit') {
      if (success) {
        // 添加成功，刷新列表数据
        closeResetDialog()
        listEl.value.getListData()
      }
      const eventBefore = dialog.formData.events?.after
      if (typeof eventBefore === 'function') {
        return eventBefore(type)
      }
    }
  }
  const dialogBtnClick = (type: string) => {
    if (type === 'reset' || type === 'cancel') {
      closeResetDialog()
    }
  }
  const beforeClose = (done: any) => {
    closeResetDialog()
    if (done) {
      done()
    }
  }
  // 关闭弹窗并重置表单
  const closeResetDialog = () => {
    dialog.visible = false
    dialog.editId = ''
    // formEl.value.resetFields() // 重置表单
  }
  /** ***弹窗口相关结束****/
  onMounted(() => {
    initList()
  })
</script>
