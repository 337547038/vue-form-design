<!-- Created by 337547038 on 通用数据表格页. -->
<template>
  <div class="table-list-comm" v-loading="state.loading">
    <list-tree-side
      v-if="treeData.show"
      :data="treeData"
      :formId="formId"
      @node-click="treeNodeClick"
    />
    <div class="table-list">
      <div class="table-search" v-if="searchData?.list?.length">
        <DesignForm
          v-show="!state.searchFormDown"
          is-search
          class="search-form"
          :disabled="state.loading"
          :form-data="searchData"
          :dict="state.dict"
          :requestUrl="false"
          ref="searchFormEl"
          @click="formBtnClick"
        >
          <slot name="searchForm"></slot>
        </DesignForm>
        <el-icon
          class="search-icon"
          title="展开/收起筛选"
          @click="state.searchFormDown = !state.searchFormDown"
          ><Search
        /></el-icon>
      </div>
      <slot></slot>
      <div class="control-btn">
        <el-button
          v-for="item in tableData.controlBtn"
          :key="item.key"
          v-bind="item"
          @click="controlBtnClick(item)"
        >
          {{ item.label }}
        </el-button>
        <slot name="controlBtn"></slot>
      </div>
      <div class="table-main">
        <el-table
          :data="state.tableDataList"
          v-bind="tableData.tableProps"
          @selection-change="selectionChange"
          ref="tableEl"
        >
          <template
            v-for="item in tableData.columns"
            :key="item.prop || item.label"
          >
            <el-table-column v-bind="item" config="">
              <template #header="scope" v-if="item.help">
                {{ scope.column.label }}
                <Tooltip :content="item.help" />
              </template>
              <template #default="scope" v-if="$slots[item.prop]">
                <slot :name="item.prop" :row="scope.row" :$index="scope.$index">
                </slot>
              </template>
              <template
                #default="scope"
                v-else-if="
                  item.config &&
                  item.config.tagList &&
                  Object.keys(item.config.tagList).length
                "
              >
                <el-tag
                  :type="item.config.tagList[scope.row[item.prop]]"
                  effect="light"
                >
                  {{ getDictLabel(scope, item) }}</el-tag
                >
              </template>
              <template #default="scope" v-else-if="item.config?.dictKey">
                {{ getDictLabel(scope, item) }}
              </template>
              <template #default="scope" v-else-if="item.config?.formatter">
                {{ getDictLabel(scope, item, 'formatter') }}
              </template>
              <template #default="scope" v-else-if="item.prop === '__control'">
                <el-button link @click="addOrEdit(scope.row)">编辑</el-button>
                <el-popconfirm
                  title="确定删除该记录?"
                  confirm-button-text="确认"
                  cancel-button-text="取消"
                  @confirm="delClick(scope.row)"
                >
                  <template #reference>
                    <el-button size="small" link>删除</el-button>
                  </template>
                </el-popconfirm>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
      <div class="table-page" v-if="showPage">
        <el-pagination
          v-model:currentPage="state.currentPage"
          :page-sizes="[20, 30, 40, 50]"
          v-model:page-size="state.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="state.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import DesignForm from './form.vue'
  import { reactive, ref, onMounted, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import Tooltip from './tooltip.vue'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import type { FormData, TableData } from '../types'
  import { dateFormatting } from '@/utils'
  import ListTreeSide from './listTreeSide.vue'

  const props = withDefaults(
    defineProps<{
      tableData: TableData
      searchData?: FormData
      beforeRequest?: Function
      afterResponse?: Function
      showPage?: boolean
      requestUrl?: string // 请求的api
      dict?: object
    }>(),
    {
      showPage: true,
      requestUrl: 'getContentList',
      tableData: () => {
        return { tableProps: {}, columns: {} }
      },
      searchData: () => {
        return { list: [], form: {} }
      },
      dict: () => {
        return {}
      }
    }
  )
  const emits = defineEmits<{
    (e: 'selectionChange', row: any): void
  }>()
  const route = useRoute()
  const router = useRouter()
  const searchFormEl = ref()
  const tableEl = ref()
  const state = reactive({
    loading: false,
    tableDataList: [], // 表格行数据
    currentPage: 1,
    pageSize: 20,
    total: 0,
    tid: route.query.tid, // 设计表单的id
    selectionChecked: [],
    dict: props.dict || {},
    searchFormDown: props.searchData.config?.expand,
    treeValue: {} // 侧栏树选中的值
  })
  const formId = computed(() => {
    // 数据源id 发接口请求的参数
    return route.query.formId
  })
  const treeData = computed(() => {
    return props.tableData.tree || {}
  })
  // 筛选查询列表数据
  const getListData = (page?: number) => {
    if (!props.requestUrl) {
      return
    }
    if (page) {
      state.currentPage = page
    }
    state.loading = true
    // 筛选查询一般不存在校验，这里直接取值
    let formValue = Object.assign(
      {},
      searchFormEl.value?.getValue(true),
      state.treeValue
    )
    if (typeof props.tableData.events?.beforeRequest === 'function') {
      formValue = props.tableData.events.beforeRequest(formValue || {}, route)
    }
    if (typeof props.beforeRequest === 'function') {
      formValue = props.beforeRequest(formValue || {}, route)
    }
    const pageInfo = {
      pageInfo: {
        pageSize: state.pageSize,
        pageIndex: state.currentPage
      }
    }
    getRequest(props.requestUrl, {
      ...formValue,
      formId: formId.value,
      ...pageInfo
    })
      .then((res) => {
        let result = res.data.data
        if (typeof props.tableData.events?.afterResponse === 'function') {
          result = props.tableData.events.afterResponse(result)
        }
        if (typeof props.afterResponse === 'function') {
          result = props.afterResponse(result)
        }
        state.tableDataList = result?.list
        if (result.dict) {
          // 合并表格里自定义设置的
          state.dict = Object.assign({}, props.dict, result.dict)
        }
        state.total = result.pageInfo?.total || 0
        state.loading = false
      })
      .catch((res) => {
        state.loading = false
        ElMessage.error(res.data.message || '数据加载异常')
      })
    state.loading = false
  }
  // 仅清空筛选输入
  const searchClear = () => {
    searchFormEl.value.resetFields() // 这个只是清空了model的值
    searchFormEl.value.setValue(searchFormEl.value.getValue()) // 重新将取到的空值对筛选表单赋值
    getListData(1) // 重新请求数据
  }
  const handleSizeChange = (page: number) => {
    state.pageSize = page
    getListData(1)
  }
  const handleCurrentChange = (page: number) => {
    getListData(page)
  }
  const addOrEdit = (row: any) => {
    router.push({
      path: '/designform/form',
      query: { id: row.id, tid: state.tid, formId: formId.value }
    })
  }
  const delClick = (row: any, idList?: string[]) => {
    state.loading = true
    getRequest('delFormContent', {
      formId: formId.value,
      id: row.id || idList?.toString()
    })
      .then((res) => {
        state.loading = false
        ElMessage.success(res.data.message || '删除成功')
        getListData() // 请求列表数据
      })
      .catch((res) => {
        state.loading = false
        ElMessage.error(res.data.message || '删除失败')
      })
  }
  const controlBtnClick = (row: any) => {
    // 导出vue文件形式，这里的按钮事件是不对的
    if (row.key === 'add') {
      // 跳到新增页
      addOrEdit({})
    } else if (row.key === 'del') {
      // 批量删除
      if (state.selectionChecked.length) {
        let idList: any = []
        state.selectionChecked.forEach((item: any) => {
          idList.push(item.id)
        })
        delClick({}, idList)
      } else {
        ElMessage.error('请选择需要删除的选项！')
      }
    }
  }
  const selectionChange = (row: any) => {
    state.selectionChecked = row
    emits('selectionChange', row)
  }
  // 个性化设置
  const getDictLabel = (scope: any, item: any, type?: string) => {
    if (scope.row.$index !== -1) {
      // 表格没数据时也会引用，此时$index=-1，应该是组件ui问题
      if (type === 'formatter') {
        // 时间日期类格式化
        return dateFormatting(scope.row[item.prop], item.config?.formatter)
      } else {
        const key = (state.dict as any)[item.config?.dictKey]
        if (Object.keys(state.dict).length && key) {
          return key[scope.row[item.prop]]
        } else {
          return scope.row[item.prop]
        }
      }
    }
  }
  const formBtnClick = (type: string) => {
    if (type === 'confirm') {
      state.loading = true
      getListData(1)
    } else if (type === 'cancel') {
      searchClear()
    }
  }
  // 侧栏树点击事件
  const treeNodeClick = (val: string | number) => {
    state.treeValue = { [treeData.value.name]: val }
    getListData(1)
  }
  onMounted(() => {
    getListData() // 请求列表数据
  })
  defineExpose({
    getListData
  })
</script>
