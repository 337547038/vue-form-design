<!-- Created by 337547038 on 通用数据表格页. -->
<template>
  <div ref="container" v-loading="state.loading" class="table-list-comm">
    <list-tree-side
      v-if="treeData.show"
      :data="treeData"
      :currentNodeKey="state.currentNodeKey"
      @node-click="treeNodeClick"
    />
    <div class="table-list">
      <div v-if="searchData?.list?.length" class="table-search">
        <Transition name="autoHeight">
          <design-form
            v-show="!state.searchFormDown"
            ref="searchFormEl"
            :dict="listDict"
            :disabled="state.loading"
            :form-data="searchData"
            is-search
            requestUrl=""
            @btn-click="formBtnClick"
          >
            <slot name="searchForm"></slot>
          </design-form>
        </Transition>
      </div>
      <slot></slot>
      <div class="control-btn">
        <div class="btn-group">
          <el-button
            v-bind="item"
            v-for="item in tableData.controlBtn"
            :key="item.key"
            @click="controlBtnClick(item)"
          >
            {{ item.label }}
          </el-button>
          <slot name="controlBtn"></slot>
        </div>
        <div class="control-other">
          <el-button
            v-if="searchFormExpand"
            circle
            icon="Search"
            size="small"
            title="展开/收起筛选"
            @click="state.searchFormDown = !state.searchFormDown"
          />
          <el-popover
            v-if="columnsSetting"
            :width="80"
            placement="bottom-end"
            trigger="click"
            @hide="popoverHideClick"
            @show="popoverShowClick"
          >
            <template #default>
              <el-checkbox-group v-model="state.columnsCheck">
                <el-checkbox
                  v-for="item in tableData.columns"
                  :key="item.prop || item.type"
                  :label="item.prop || item.type"
                  >{{ item.label }}
                </el-checkbox>
              </el-checkbox-group>
            </template>
            <template #reference>
              <el-button
                circle
                icon="SetUp"
                size="small"
                title="设置列显示隐藏"
              />
            </template>
          </el-popover>
        </div>
      </div>
      <div
        v-if="columnsFilter?.length"
        :class="{ 'hide-vertical-scroll': isFixedBottomScroll }"
        class="table-main"
      >
        <el-table
          v-bind="tableData.tableProps"
          ref="table"
          :data="state.tableDataList"
          @selection-change="selectionChange"
        >
          <template
            v-for="item in columnsFilter"
            :key="item.prop || item.label"
          >
            <el-table-column v-bind="item" config="">
              <template v-if="item.help" #header="scope">
                {{ scope.column.label }}
                <Tooltip :content="item.help" />
              </template>
              <template v-if="$slots[item.prop]" #default="scope">
                <slot :index="scope.$index" :name="item.prop" :row="scope.row">
                </slot>
              </template>
              <template
                v-else-if="
                  item.config?.tagList &&
                  Object.keys(item.config?.tagList).length
                "
                #default="scope"
              >
                <el-tag
                  :type="item.config?.tagList[scope.row[item.prop]]"
                  effect="light"
                >
                  {{ getDictLabel(scope, item) }}
                </el-tag>
              </template>
              <template v-else-if="item.config?.dictKey" #default="scope">
                {{ getDictLabel(scope, item) }}
              </template>
              <template v-else-if="item.config?.formatter" #default="scope">
                {{ getDictLabel(scope, item, 'formatter') }}
              </template>
              <template v-else-if="item.prop === '__control'" #default="scope">
                <div class="table-operate-btn">
                  <template
                    v-for="(btn, index) in operateBtnList"
                    :key="btn.key || index"
                  >
                    <template v-if="btn.key === 'del'">
                      <el-popconfirm
                        v-if="getOperateVisible(btn, scope.row)"
                        :title="btn.tip || '确定删除该记录?'"
                        cancel-button-text="取消"
                        confirm-button-text="确认"
                        @confirm="operateBtnClick(btn, scope.row)"
                      >
                        <template #reference>
                          <el-button
                            v-bind="btn"
                            link
                            size="small"
                            type="primary"
                            >{{ btn.label }}
                          </el-button>
                        </template>
                      </el-popconfirm>
                    </template>
                    <template v-else>
                      <el-button
                        v-bind="btn"
                        v-if="getOperateVisible(btn, scope.row)"
                        link
                        size="small"
                        type="primary"
                        @click="operateBtnClick(btn, scope.row)"
                        >{{ btn.label }}
                      </el-button>
                    </template>
                  </template>
                  <el-dropdown v-if="tableData.config?.operateDropdown">
                    <el-button link size="small" type="primary">
                      更多
                      <el-icon class="el-icon--right">
                        <arrow-down />
                      </el-icon>
                    </el-button>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <template
                          v-for="(m, index) in tableData.operateBtn.slice(1)"
                          :key="index"
                        >
                          <el-dropdown-item
                            v-if="getOperateVisible(m, scope.row)"
                            @click="operateBtnClick(m, scope.row)"
                            >{{ m.label }}
                          </el-dropdown-item>
                        </template>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
      <div v-if="showPage && state.total > state.pageSize" class="table-page">
        <el-pagination
          v-model:currentPage="state.currentPage"
          v-model:page-size="state.pageSize"
          :page-sizes="[20, 30, 40, 50] as any"
          :total="state.total"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <div
        v-if="state.tableScrollMargin"
        :style="{ height: state.tableScrollMargin }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import DesignForm from '../../form/components/form.vue'
  import {
    computed,
    nextTick,
    onBeforeUnmount,
    onMounted,
    reactive,
    ref,
    watch
  } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import Tooltip from '../../components/tooltip.vue'
  import { getRequest } from '@/api'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import type { FormData, TableData } from '../../types'
  import { dateFormatting } from '@/utils'
  import ListTreeSide from './listTreeSide.vue'
  import formatResult from '@/utils/formatResult'

  const props = withDefaults(
    defineProps<{
      tableData: TableData
      searchData?: FormData
      beforeRequest?: Function
      afterResponse?: Function | string
      beforeDelete?: Function
      showPage?: boolean
      requestUrl?: string // 请求的api
      deleteUrl?: string // 删除的api
      dict?: object
      fixedBottomScroll?: boolean
      formId?: string | number // 表单id，当前列表所使用的表单id，用于加载数据，新增，编辑删除等数据处理
      autoLoad?: boolean // 初始时自动请求加载数据
    }>(),
    {
      showPage: true,
      tableData: () => {
        return { columns: {} }
      },
      searchData: () => {
        return { list: [], form: {} }
      },
      dict: () => {
        return {}
      },
      fixedBottomScroll: true,
      autoLoad: true
    }
  )
  const emits = defineEmits<{
    (e: 'selectionChange', row: any): void
    (e: 'btnClick', btn: any, row?: any): void // 列表上面及表格列表里添加删除按钮事件
  }>()
  const route = useRoute()
  const router = useRouter()
  const container = ref()
  const searchFormEl = ref()
  const table = ref()
  const state = reactive({
    loading: false,
    tableDataList: [], // 表格行数据
    currentPage: 1,
    pageSize: props.tableData.config?.pageSize || 20,
    total: 0,
    selectionChecked: [],
    dict: {}, // 接口返回的
    searchFormDown: false,
    treeValue: {}, // 侧栏树选中的值
    tableScrollMargin: 0,
    columnsCheck: [],
    currentNodeKey: ''
  })
  const treeData = computed(() => {
    return props.tableData.treeData || {}
  })
  // 可折叠查询表单
  const searchFormExpand = computed(() => {
    return props.searchData?.list?.length && props.tableData.config?.expand
  })
  // 查询点击跳转
  const searchJump = computed(() => {
    return props.tableData.config?.searchJump
  })
  const columnsFilter = computed(() => {
    if (!state.columnsCheck.length) {
      return props.tableData.columns
    } else {
      return props.tableData.columns.filter((item: any) => {
        return state.columnsCheck.includes(item.prop || item.type)
      })
    }
  })
  // 列显示隐藏设置
  const columnsSetting = computed(() => {
    return props.tableData.config?.columnsSetting ?? true
  })
  // 获取存在storage的dict，进入系统时可将所有字典预先加载存入storage
  const listDict = computed(() => {
    const storage = window.localStorage.getItem('akFormDict')
    let storageDict = {}
    if (storage) {
      storageDict = JSON.parse(storage)
    }
    return Object.assign(storageDict, props.dict, state.dict)
  })
  const isFixedBottomScroll = computed(() => {
    // 如果数据里没配置，则使用props
    const fbs = props.tableData.config?.fixedBottomScroll
    return fbs ?? props.fixedBottomScroll
  })
  // 列表行操作按钮下拉时返回第一个，否则返回全部
  const operateBtnList = computed(() => {
    const btn = props.tableData.operateBtn
    if (props.tableData.config?.operateDropdown && btn) {
      return [btn[0]]
    }
    return btn
  })
  // 筛选查询列表数据
  const getListData = (page?: number) => {
    // 优先使用config配置的
    const getUrl = props.tableData.config?.requestUrl || props.requestUrl
    if (!getUrl) {
      console.error(new Error('请先设置请求requestUrl'))
      return
    }
    if (page) {
      state.currentPage = page
    }
    state.loading = true
    // 筛选查询一般不存在校验，这里直接取值
    const formValue = Object.assign(
      {},
      searchFormEl.value?.getValue(true),
      state.treeValue
    )
    let newData: any = formValue
    const beforeRequest = props.tableData.events?.beforeRequest
    if (typeof beforeRequest === 'function') {
      newData = beforeRequest(formValue || {}, route)
    }
    if (typeof props.beforeRequest === 'function') {
      newData = props.beforeRequest(formValue || {}, route)
    }
    if (newData === false) {
      return
    }
    if (!newData) {
      // beforeRequest没有return时
      newData = formValue
    }
    const params = {
      pageInfo: {
        pageSize: state.pageSize,
        pageIndex: state.currentPage
      },
      formId: props.formId,
      ...newData
    }
    getRequest(getUrl, params)
      .then(res => {
        state.loading = false
        let formatRes: any = res.data
        const afterResponse = props.tableData.events?.afterResponse
        if (typeof afterResponse === 'string' && afterResponse) {
          formatRes = formatResult(formatRes, afterResponse)
        } else if (typeof afterResponse === 'function') {
          formatRes = afterResponse(formatRes) ?? formatRes
        }
        if (props.afterResponse && typeof props.afterResponse === 'string') {
          formatRes = formatResult(formatRes, props.afterResponse)
        } else if (typeof props.afterResponse === 'function') {
          formatRes = props.afterResponse(formatRes) ?? formatRes
        }
        if (formatRes === false) {
          return
        }
        state.tableDataList = formatRes?.list || formatRes // 兼容下可以不返回list
        setTimeout(() => {
          setFixedBottomScroll()
        }, 200) // 加个延时主要是等待列表渲染完，即列表查询区域等，计算才准确。
        state.dict = formatRes.dict || {}
        state.total = formatRes.pageInfo?.total || 0
      })
      .catch((res: any) => {
        state.tableDataList = []
        state.total = 0
        state.dict = {}
        state.loading = false
        ElMessage.error(res.message || '数据加载异常')
      })
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
  const addOrEdit = (btn: any, row?: any) => {
    // 数据添加编辑打开方式为弹窗时，这里不处理
    if (props.tableData.config?.openType === 'dialog') {
      return false
    }
    if (!props.formId) {
      console.error('请设置表单ID或去掉key=add/edit属性')
      return
    }
    router.push({
      path: `/design/form/form`,
      query: { form: props.formId, id: row?.id }
    })
  }
  // 删除 idList支持多个 ,params为附近参数
  const delClick = (idList: string | number | string[], params?: any) => {
    state.loading = true
    const delUrl = props.tableData.config?.deleteUrl || props.deleteUrl
    const delParams = Object.assign(
      {
        formId: props.formId,
        id: idList.toString() // 多个时转字符串
      },
      params || {}
    )
    let delParamsAll
    const beforeDelete = props.tableData.events?.beforeDelete
    if (typeof beforeDelete === 'function') {
      delParamsAll = beforeDelete(delParams, route)
    }
    if (typeof props.beforeDelete === 'function') {
      delParamsAll = props.beforeDelete(delParams, route)
    }
    if (delParamsAll === false) {
      return
    }
    getRequest(delUrl, delParamsAll ?? delParams)
      .then((res: any) => {
        state.loading = false
        ElMessage.success(res.message || '删除成功')
        getListData() // 请求列表数据
      })
      .catch(res => {
        state.loading = false
        ElMessage.error(res.message || '删除失败')
      })
  }
  // 表格每行的操作按钮点击事件
  const operateBtnClick = (btn: any, row: any) => {
    emits('btnClick', btn, row)
    if (btn.click) {
      const result = btn.click(row)
      if (result === false) {
        return // 回调事件里处理
      }
    }
    if (btn.key === 'edit') {
      addOrEdit(btn, row)
    } else if (btn.key === 'del') {
      if (btn.tip) {
        // 有删除提示
        ElMessageBox.confirm(btn.tip, '温馨提示', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delClick(row.id)
        })
      } else {
        delClick(row.id)
      }
    }
  }
  // 根据条件显示操作按钮
  const getOperateVisible = (btn: any, row: any) => {
    if (btn.visible && typeof btn.visible === 'string') {
      const Fn = new Function('$', `return (${btn.visible})`)
      return Fn(row)
    }
    return btn.visible !== false
  }
  const controlBtnClick = (row: any) => {
    // 对外抛个事件，方便添加了其他按钮时，同时添加回调事件，
    emits('btnClick', row)
    if (row.click) {
      const result = row.click(row)
      if (result === false) {
        return // 回调事件里处理
      }
    }
    if (row.key === 'add') {
      // 跳到新增页
      addOrEdit(row)
    } else if (row.key === 'del') {
      // 批量删除
      if (state.selectionChecked.length) {
        const idList: any = []
        state.selectionChecked.forEach((item: any) => {
          idList.push(item.id)
        })
        delClick(idList)
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
      const val = scope.row[item.prop]
      if (type === 'formatter' && val) {
        // 时间日期类格式化
        return dateFormatting(val, item.config?.formatter)
      } else {
        const key = (listDict.value as any)[item.config?.dictKey]
        if (Object.keys(listDict.value).length && key) {
          return key[val]
        } else {
          return val
        }
      }
    }
  }

  const getParamsJump = () => {
    const formValue = Object.assign(
      {},
      searchFormEl.value?.getValue(true),
      state.treeValue
    )
    const params = Object.assign({}, route.query, formValue || {})
    router.push({ path: route.path, query: params })
  }
  const formBtnClick = (type: string) => {
    if (searchJump.value) {
      // 带参数跳转
      getParamsJump()
    } else {
      if (type === 'submit') {
        getListData(1)
      } else if (type === 'reset') {
        searchClear()
      }
    }
  }
  // 侧栏树点击事件
  const treeNodeClick = (val: string | number) => {
    if (!treeData.value.name) {
      console.error(new Error('请设置侧栏树name值'))
      return
    }
    state.currentNodeKey = val
    state.treeValue = { [treeData.value.name]: val }
    if (searchJump.value) {
      // 带参数跳转
      getParamsJump()
    } else {
      getListData(1)
    }
  }
  // 固定横向滚动条在浏览器底部
  const setFixedBottomScroll = () => {
    if (isFixedBottomScroll.value) {
      nextTick(() => {
        const tableEl = container.value
        if (!tableEl) {
          return
        }
        const tableBodyWrapDom = tableEl.querySelector('.el-scrollbar__wrap') // table父一级
        if (!tableBodyWrapDom) {
          return
        }
        const tableBodyDom = tableEl.querySelector('.el-table__body') // table
        const { top: tableBodyDomTop } =
          tableBodyWrapDom.getBoundingClientRect()
        const tableHeight = tableBodyDom.offsetHeight // 表格的高度
        const windowHeight = window.innerHeight
        if (
          tableBodyDomTop > windowHeight ||
          tableBodyWrapDom.classList.contains('is-scrolling-none')
        ) {
          // 此时列表在可视窗口的下侧不可见区域，因此不做任何修改
          tableBodyWrapDom.style.height = 'unset'
          tableBodyWrapDom.style.marginBottom = 'unset'
          tableBodyWrapDom.style.overflowY = ''
        } else {
          // 窗口高度 - 列表距顶部值 且 不超过自身实际值
          const wrapHeight = Math.min(
            windowHeight - tableBodyDomTop - 10,
            tableHeight
          )
          // console.log(
          //   `window.innerHeight:${windowHeight},tableBodyDomTop:${tableBodyDomTop},tableBodyDom.offsetHeight:${tableHeight}`
          // )
          tableBodyWrapDom.style.minHeight = '60px'
          tableBodyWrapDom.style.height = wrapHeight + 10 + 'px'
          // 需要用marginBottom填充，以保持列表原有高度，避免页面的纵向滚动条变化导致页面滚动的不流畅
          state.tableScrollMargin = tableHeight - wrapHeight + 'px'
        }
      })
    }
  }
  const scrollBox = computed(() => {
    // 当前框架滚动区域
    return document.querySelector('.overflow-scroll')
  })
  // 显示隐藏列设置
  const popoverShowClick = () => {
    if (!state.columnsCheck?.length) {
      // 为空时，则全部勾选上
      props.tableData.columns.forEach((item: any) => {
        state.columnsCheck.push(item.prop || item.type)
      })
    }
  }
  // 可根据条件设置表单初始查询值
  const setSearchFormValue = (obj: { [key: string]: string[] }) => {
    searchFormEl.value.setValue(obj)
  }
  // 列显示隐藏设置收起时，这里可将设置保存于服务端或本地
  const popoverHideClick = () => {}
  // 监听url参数变化重新请求数据
  const setSearchValueFormQuery = () => {
    const routeQuery = route.query
    if (Object.keys(routeQuery).length) {
      searchFormEl.value.setValue(routeQuery, true)
      const { show, name } = treeData.value
      const val = routeQuery[name]
      if (show && val) {
        // 开启树时
        setTimeout(() => {
          state.currentNodeKey = isNaN(val) ? val : parseInt(val)
          state.treeValue = { [treeData.value.name]: val }
        }, 500)
      }
    }
  }
  watch(
    () => route.query,
    () => {
      state.currentPage = 1
      setSearchValueFormQuery()
      getListData(1)
    },
    { deep: true }
  )
  onMounted(() => {
    setSearchValueFormQuery() // url带有参数时，先对搜索表单设置
    if (props.autoLoad) {
      getListData(1)
      // 这里不能自动加载数据，需要依赖于tableData各种判断，会出现先于tableData加载完成
    }
    if (isFixedBottomScroll.value) {
      scrollBox.value.addEventListener('scroll', setFixedBottomScroll)
      window.addEventListener('resize', setFixedBottomScroll)
    }
  })
  onBeforeUnmount(() => {
    if (isFixedBottomScroll.value) {
      scrollBox.value.removeEventListener('scroll', setFixedBottomScroll)
      window.removeEventListener('resize', setFixedBottomScroll)
    }
  })
  defineExpose({
    getListData,
    delClick,
    table,
    setSearchFormValue
  })
</script>
