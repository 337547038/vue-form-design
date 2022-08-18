<!-- Created by 337547038 on 通用数据表格页. -->
<template>
  <div class="table-list-comm" v-loading="state.loading">
    <div class="table-search" v-if="searchData?.list?.length">
      <DesignForm
        :disabled="state.loading"
        :form-data="searchData"
        ref="searchFormEl"
      >
        <el-button
          type="primary"
          @click="getListData(1)"
          :loading="state.loading"
          v-if="searchBtn[0]"
          >{{ searchBtn[0] }}
        </el-button>
        <el-button @click="searchClear" v-if="searchBtn[1]"
          >{{ searchBtn[1] }}
        </el-button>
      </DesignForm>
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
    </div>
    <div class="table-main">
      <el-table
        :data="state.tableDataList"
        v-bind="tableData.config"
        @selection-change="selectionChange"
        ref="tableEl"
      >
        <template
          v-for="item in tableData.columns"
          :key="item.prop || item.label"
        >
          <el-table-column v-bind="item">
            <template #header="scope" v-if="item.help">
              {{ scope.column.label }}
              <Tooltip :content="item.help" />
            </template>
            <template #default="scope" v-if="$slots[item.prop]">
              <slot :name="item.prop" :row="scope.row" :$index="scope.$index">
              </slot>
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
        :page-size="state.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="state.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import DesignForm from './form.vue'
  import { reactive, ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import Tooltip from './tooltip.vue'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import type { FormData } from '../types'

  const props = withDefaults(
    defineProps<{
      tableData: object
      searchData?: FormData
      beforeRequest?: Function
      afterResponse?: Function
      showPage?: boolean
      requestUrl?: string // 请求的api
      searchBtn?: string[]
    }>(),
    {
      showPage: true,
      requestUrl: 'getContentList',
      searchBtn: () => {
        return ['查询', '清空']
      },
      tableData: () => {
        return { config: {}, columns: {} }
      },
      searchData: () => {
        return { list: [], form: {} }
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
    tid: route.query.tid,
    selectionChecked: []
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
    let formValue = searchFormEl.value?.getValue(true)
    if (typeof props.beforeRequest === 'function') {
      formValue = props.beforeRequest(formValue || {})
    }
    getRequest(props.requestUrl, { ...formValue, tid: state.tid })
      .then((res) => {
        let result = res.data.data
        if (typeof props.afterResponse === 'function') {
          result = props.afterResponse(result)
        }
        // console.log(result)
        state.tableDataList = result?.list
        state.loading = false
      })
      .catch((res) => {
        state.loading = false
        ElMessage.error(res.data || '数据加载异常')
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
      query: { tid: state.tid, id: row.id }
    })
  }
  const delClick = (row: any, idList?: string[]) => {
    state.loading = true
    getRequest('delFormContent', { tid: state.tid, id: row.id, idList: idList })
      .then(() => {
        state.loading = false
        getListData() // 请求列表数据
      })
      .catch((res) => {
        state.loading = false
        ElMessage.error(res.data || '删除失败')
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
  onMounted(() => {
    getListData() // 请求列表数据
  })
  defineExpose({
    getListData
  })
</script>
