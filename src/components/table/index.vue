<!-- Created by 337547038 on 通用数据表格页. -->
<template>
  <div ref="container" v-loading="state.loading" class="table-list-comm">
    <list-tree-side
      v-if="treeData.show"
      :current-node-key="state.currentNodeKey"
      :data="treeData"
      @node-click="treeNodeClick"
    />
    <div class="table-list">
      <div v-if="searchData?.list?.length" class="table-search">
        <Transition name="autoHeight">
          <ak-form
            v-show="!state.searchFormDown"
            ref="searchFormEl"
            :data="searchData"
            :dict="listDict"
            :disabled="state.loading"
            is-search
            request-url=""
            @btn-click="formBtnClick"
          >
            <slot name="searchForm"></slot>
          </ak-form>
        </Transition>
      </div>
      <slot></slot>
      <div class="control-btn">
        <div class="btn-group">
          <el-button
            v-permission="item.permission"
            v-bind="item"
            v-for="item in data.controlBtn"
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
                  v-for="item in data.columns"
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
                title="设置列显示隐藏"
                size="small"
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
          v-bind="data.tableProps"
          ref="table"
          :data="tableDataList"
          @selection-change="selectionChange"
        >
          <template
            v-for="item in columnsFilter"
            :key="item.prop || item.label"
          >
            <el-table-column v-bind="item" config="">
              <template v-if="item.help" #header="scope">
                {{ scope.column.label }}
                <tooltip :content="item.help" />
              </template>
              <template v-if="$slots[item.prop]" #default="scope">
                <slot :index="scope.$index" :name="item.prop" :row="scope.row">
                </slot>
              </template>
              <template v-else-if="item.config?.imgWidth" #default="scope">
                <img
                  :width="item.config.imgWidth"
                  :src="scope.row[item.prop]"
                  alt=""
                />
              </template>
              <template
                v-else-if="
                  item.config?.tagList &&
                  Object.keys(item.config?.tagList).length
                "
                #default="scope"
              >
                <el-tag
                  v-if="scope.row[item.prop] || scope.row[item.prop] === 0"
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
                    v-for="(btn, index) in operateBtnList('prev')"
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
                            text
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
                        text
                        size="small"
                        type="primary"
                        @click="operateBtnClick(btn, scope.row)"
                        >{{ btn.label }}
                      </el-button>
                    </template>
                  </template>
                  <el-dropdown v-if="operateBtnList('len')">
                    <el-button
                      size="small"
                      type="primary"
                      text
                      style="outline: none"
                    >
                      更多
                      <el-icon class="el-icon--right">
                        <arrow-down />
                      </el-icon>
                    </el-button>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <template
                          v-for="(m, index) in operateBtnList()"
                          :key="index"
                        >
                          <el-dropdown-item
                            v-if="getOperateVisible(m, scope.row)"
                            @click="operateBtnClick(m, scope.row, 'down')"
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
  import {
    computed,
    nextTick,
    onBeforeUnmount,
    onMounted,
    reactive,
    ref,
    watch
  } from 'vue'
  import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
  import Tooltip from '@/components/tooltip/index.vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import type { FormData } from '@/types/form'
  import type { TableData } from '@/types/table'
  import { dateFormatting, getStorage } from '@/utils'
  import ListTreeSide from './treeSide.vue'
  import { useDesignStore } from '@/store/design'
  import { permission } from '@/directive/permissions'
  import { getRequestEvent, requestResponse } from '@/utils/requestRespone'

  const props = withDefaults(
    defineProps<{
      data: TableData
      searchData?: FormData
      beforeRequest?: (params: any, rout: any) => any
      afterResponse?: (result: any) => any | string
      beforeDelete?: (params: any, route: any) => any
      showPage?: boolean
      requestUrl?: string // 请求的api
      deleteUrl?: string // 删除的api
      dict?: { [key: string | number]: string | number }
      fixedBottomScroll?: boolean
      query?: { [key: string]: any } // 一些附加的请求参数
      autoLoad?: boolean // 初始时自动请求加载数据
      delKey?: string // 删除标识
    }>(),
    {
      showPage: true,
      data: () => {
        return { columns: {} }
      },
      searchData: () => {
        return { list: [], form: {} }
      },
      dict: () => {
        return {}
      },
      fixedBottomScroll: true,
      autoLoad: true,
      delKey: 'id',
      query: () => {
        return {}
      }
    }
  )
  const emits = defineEmits<{
    (e: 'selectionChange', row: any): void
    (e: 'btnClick', btn: any, row?: any): void // 列表上面及表格列表里添加删除按钮事件
  }>()
  const designStore = useDesignStore()
  const route = useRoute()
  const router = useRouter()
  const container = ref()
  const searchFormEl = ref()
  const table = ref()
  const tableDataList = ref([]) // 表格行数据
  const state = reactive({
    loading: false,
    currentPage: 1,
    pageSize: parseInt(props.data.config?.pageSize) || 20,
    total: 0,
    selectionChecked: [],
    dict: {}, // 接口返回的
    searchFormDown: false,
    treeValue: {}, // 侧栏树选中的值
    tableScrollMargin: 0,
    columnsCheck: designStore.getColumnsCheck(route.path),
    currentNodeKey: ''
  })
  const treeData = computed(() => {
    return props.data.treeData || {}
  })
  // 可折叠查询表单
  const searchFormExpand = computed(() => {
    return props.searchData?.list?.length && props.data.config?.expand
  })
  // 查询点击是否跳转
  const searchJump = computed(() => {
    return props.data.config?.searchJump
  })
  const columnsFilter = computed(() => {
    if (!state.columnsCheck?.length) {
      return props.data.columns
    } else {
      return props.data.columns.filter((item: any) => {
        return state.columnsCheck.includes(item.prop || item.type)
      })
    }
  })
  // 列显示隐藏设置
  const columnsSetting = computed(() => {
    return props.data.config?.columnsSetting ?? true
  })
  // 获取存在storage的dict，进入系统时可将所有字典预先加载存入storage。这里接口返回的和props传参的及公共的
  const listDict = computed(() => {
    const storage = getStorage('akAllDict')
    return Object.assign(storage || {}, props.dict, state.dict)
  })
  const isFixedBottomScroll = computed(() => {
    // 如果数据里没配置，则使用props
    const fbs = props.data.config?.fixedBottomScroll
    return fbs ?? props.fixedBottomScroll
  })

  // 搜索表单的值
  const searchFormValue = computed(() => {
    return Object.assign(
      {},
      searchFormEl.value?.getValue(true),
      state.treeValue
    )
  })

  /**
   * 根据设置的下拉按钮数，返回显示的和下拉的
   * @param type pre前面的，否则后面的
   */
  const operateBtnList = (type?: string) => {
    const downLen = props.data.config?.operateDropdown // 大于多少个时显示
    const btn = props.data.operateBtn || []
    if ((downLen && isNaN(Number(downLen))) || !btn.length) {
      return btn // 不是数字时，0长度
    }
    // 过滤掉没有权限的
    const filterBtn = btn.filter((item: { permission: string }) => {
      if (item.permission) {
        return permission(item.permission)
      } else {
        return true
      }
    })
    if (type === 'len') {
      return downLen < filterBtn.length // 返回需要下拉
    }
    if (downLen < filterBtn.length) {
      // 满足下拉条件
      if (type === 'prev') {
        return filterBtn.slice(0, downLen)
      } else {
        return filterBtn.slice(downLen)
      }
    }
    return filterBtn
  }
  // 根据条件显示操作按钮
  const getOperateVisible = (btn: any, row: any) => {
    if (Object.keys(row).length === 0) {
      return true
    }
    if (btn.visible && typeof btn.visible === 'string') {
      const Fn = new Function('$', `return (${btn.visible})`)
      return Fn(row)
    }
    return btn.visible !== false
  }
  //删除标识
  const delKey = computed(() => {
    return props.data.config?.delKey || props.delKey
  })

  // 筛选查询列表数据
  const getListData = (page?: number) => {
    // 优先使用config配置的
    const getUrl = props.data.config?.requestUrl || props.requestUrl
    if (!getUrl) {
      console.error(new Error('请先设置请求requestUrl'))
      return
    }
    if (page) {
      state.currentPage = page
    }
    state.loading = true
    // 筛选查询一般不存在校验，这里直接取值
    const formValue = searchFormValue.value || {}
    const params = {
      pageInfo: {
        sort: props.data.config?.sort,
        pageSize: state.pageSize,
        pageNum: state.currentPage
      },
      query: Object.assign({}, formValue, props.query)
    }
    /*let beforeRequest
    if (typeof props.beforeRequest === 'function') {
      beforeRequest = props.beforeRequest
    } else if (typeof props.data.events?.beforeRequest === 'function') {
      beforeRequest = props.data.events?.beforeRequest
    }
    let afterResponse
    if (typeof props.afterResponse === 'function') {
      afterResponse = props.afterResponse
    } else if (typeof props.data.events?.afterResponse === 'function') {
      afterResponse = props.data.events?.afterResponse
    }*/
    requestResponse({
      requestUrl: getUrl,
      params: params,
      beforeRequest: getRequestEvent(props, 'beforeRequest'),
      afterResponse: getRequestEvent(props, 'afterResponse'),
      route: route
    })
      .then((res: any) => {
        const data = res.data
        tableDataList.value = data?.list || data // 兼容下可以不返回list
        setTimeout(() => {
          setFixedBottomScroll()
          state.loading = false
        }, 200) // 加个延时主要是等待列表渲染完，即列表查询区域等，计算才准确。
        state.dict = data.dict || {}
        state.total = data.pageInfo?.total || 0
      })
      .catch((res: any) => {
        //beforeRequest返回了false时，只拦截请求，不用重置
        if (res.code !== 'return false') {
          tableDataList.value = []
          state.total = 0
          state.dict = {}
        }
        state.loading = false
      })
  }
  // 仅清空筛选输入
  const searchClear = () => {
    searchFormEl.value.resetFields() // 这个只是清空了model的值
    searchFormEl.value.setValue(searchFormValue.value, true) // 重新将取到的空值对筛选表单赋值
    getListData(1) // 重新请求数据
  }
  const handleSizeChange = (page: number) => {
    state.pageSize = page
    getListData(1)
  }
  const handleCurrentChange = (page: number) => {
    getListData(page)
  }
  // 删除 idList支持多个 ,params为附近参数
  const delClick = (idList: string | number | string[]) => {
    state.loading = true
    const delUrl = props.data.config?.deleteUrl || props.deleteUrl
    const delParams = {
      id: idList.toString() // 多个时转字符串
    }
    requestResponse({
      requestUrl: delUrl,
      params: delParams,
      beforeRequest: getRequestEvent(props, 'beforeDelete'),
      afterResponse: getRequestEvent(props, 'afterResponse'),
      route: route
    })
      .then((res: any) => {
        state.loading = false
        ElMessage.success(res.message || '删除成功')
        getListData() // 请求列表数据
      })
      .catch((res: { message: any }) => {
        state.loading = false
        ElMessage.error(res.message || '删除失败')
      })
  }

  /**
   * 列表左上方控制按钮事件
   * @param row
   */
  const controlBtnClick = (row: any) => {
    // 对外抛个事件，方便添加了其他按钮时，同时添加回调事件，
    emits('btnClick', row)
    if (row.click) {
      const result = row.click(row)
      if (result === false) {
        return // 回调事件里处理
      }
    }
    if (row.key === 'del') {
      // 批量删除
      if (state.selectionChecked.length) {
        const idList: any = []
        state.selectionChecked.forEach((item: any) => {
          idList.push(item[delKey.value])
        })
        delClick(idList)
      } else {
        ElMessage.error('请选择需要删除的选项！')
      }
    }
  }
  /**
   * 表格每行的操作按钮点击事件
   * @param btn
   * @param row
   * @param type
   */
  const operateBtnClick = (btn: any, row: any, type?: string) => {
    emits('btnClick', btn, row)
    if (btn.click) {
      const result = btn.click(row)
      if (result === false) {
        return // 回调事件里处理
      }
    }
    if (btn.key === 'del') {
      if (type === 'down') {
        // 下拉菜单删除时警告
        ElMessageBox.confirm(btn.tip, '温馨提示', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delClick(row[delKey.value])
        })
      } else {
        delClick(row[delKey.value])
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

  const getParamsJump = (type?: string) => {
    const searchFormVal = searchFormValue.value
    if (type === 'reset') {
      for (const key in searchFormVal) {
        searchFormVal[key] = undefined
      }
    }
    const params = Object.assign({}, route.query, searchFormVal)
    router.push({ path: route.path, query: params })
  }
  const formBtnClick = (type: string) => {
    if (searchJump.value) {
      // 带参数跳转
      getParamsJump(type)
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
          tableBodyWrapDom.style.minHeight = '60px'
          tableBodyWrapDom.style.height = wrapHeight + 10 + 'px'
          // 需要用marginBottom填充，以保持列表原有高度，避免页面的纵向滚动条变化导致页面滚动的不流畅
          state.tableScrollMargin = tableHeight - wrapHeight + 'px'
        }
      })
    }
  }
  const scrollBox = computed(() => {
    // 当前框架滚动区域，不包在layout框架时
    return (
      document.querySelector('.overflow-scroll') ||
      document.querySelector('body')
    )
  })
  // 显示隐藏列设置
  const popoverShowClick = () => {
    if (!state.columnsCheck?.length) {
      // 为空时，则全部勾选上
      props.data.columns.forEach((item: any) => {
        if (item.prop) {
          state.columnsCheck.push(item.prop)
        }
      })
    }
  }
  // 可根据条件设置表单初始查询值
  const setSearchFormValue = (obj: { [key: string]: string[] }) => {
    searchFormEl.value.setValue(obj)
  }
  const getSearchFormValue = () => {
    return searchFormValue.value
  }
  // 列显示隐藏设置收起时，这里可将设置保存于服务端或本地
  const popoverHideClick = () => {
    if (state.columnsCheck?.length !== props.data.columns.length) {
      // 非全选状态时
      designStore.setColumnsCheck(route.path, state.columnsCheck)
    }
  }
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
  const unWatch = watch(
    () => route.query,
    () => {
      state.currentPage = 1
      setSearchValueFormQuery()
      getListData(1)
    },
    {
      deep: true
    }
  )
  onBeforeRouteLeave(() => {
    unWatch() //销毁监听器
  })
  onMounted(() => {
    setSearchValueFormQuery() // url带有参数时，先对搜索表单设置
    if (props.autoLoad) {
      // 列表其他数据通过接口获取时，需先加载列表配置数据，才能请求列表的数据
      getListData(1)
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
    setSearchFormValue,
    getSearchFormValue
  })
</script>
