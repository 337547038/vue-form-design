<!-- Created by 337547038 on 通用数据表格页. -->
<template>
  <div
    ref="container"
    v-loading="state.loading"
    class="table-list-comm"
  >
    <list-tree-side
      v-if="treeData.show"
      :current-node-key="state.currentNodeKey"
      :data="treeData"
      @node-click="treeNodeClick"
    />
    <div class="table-list">
      <div
        v-if="searchData?.list?.length"
        class="table-search"
      >
        <Transition name="autoHeight">
          <ak-form
            v-show="!state.searchFormDown"
            ref="searchFormEl"
            :data="searchData"
            :disabled="state.loading"
            operate-type="search"
            request-url=""
            @btn-click="formBtnClick"
          >
            <slot name="searchForm" />
          </ak-form>
        </Transition>
      </div>
      <div class="control-btn">
        <div class="control-btn-group">
          <operate-button
            v-if="data.config?.controlBtn?.length"
            position="top"
            :row="state.selectionChecked"
            :buttons="mergeDefaultBtn(data.config.controlBtn)"
            @click="btnClick"
          />
          <slot name="controlBtn" />
        </div>
        <expand-comp
          :id="route.path"
          v-model="state.columnsCheck"
          :search-form-toggle="searchFormExpand"
          :columns-setting="columnsSetting"
          :columns="data.columns"
          @toggle-click="state.searchFormDown = !state.searchFormDown"
        />
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
            <el-table-column
              v-bind="item"
              config=""
            >
              <template
                v-if="item.help"
                #header="scope"
              >
                {{ scope.column.label }}
                <tooltip :content="item.help" />
              </template>
              <template #default="scope">
                <slot
                  v-if="$slots[item.prop]"
                  :index="scope.$index"
                  :name="item.prop"
                  :row="scope.row"
                  :dict="listDict"
                  :value="scope.row[item.prop]"
                />
                <el-switch
                  v-if="item.prop && item.render === 'switch'"
                  v-bind="item.config"
                  :loading="switchLoading"
                  :before-change="
                    switchBeforeChange.bind(
                      this,
                      getRenderFormatValue(scope.row, item)
                    )
                  "
                  :model-value="getRenderFormatValue(scope.row, item)"
                  @change="switchChange($event, item, scope.row)"
                />
                <el-image
                  v-if="item.prop && item.render === 'image'"
                  v-bind="item.config"
                  :style="{
                    width: (item.config?.width || 100) + 'px',
                    height: (item.config?.height || 100) + 'px'
                  }"
                  :preview-teleported="true"
                  :z-index="99"
                  :preview-src-list="getImgSrc(scope.row, item, 'preview')"
                  :src="getImgSrc(scope.row, item)"
                />
                <el-tag
                  v-if="
                    item.prop && item.render === 'tag' && scope.row[item.prop]!==undefined
                  "
                  v-bind="item.config"
                  :type="getTagType(scope.row, item)"
                >
                  {{ getTagVal(scope.row, item) }}
                </el-tag>
                <el-text
                  v-if="item.prop && item.render === 'text'"
                  v-bind="item.config"
                  :type="getTagType(scope.row, item)"
                >
                  {{ getTagVal(scope.row, item) }}
                </el-text>
                <el-link
                  v-if="item.prop && item.render === 'link'"
                  v-bind="item.config"
                >
                  {{ getRenderFormatValue(scope.row, item) }}
                </el-link>
                <span
                  v-if="
                    item.prop &&
                      item.render &&
                      ['datetime', 'date'].includes(item.render)
                  "
                >
                  {{ getDateFormat(item, scope.row) }}
                </span>
                <template
                  v-if="item.render === 'buttons' && item.buttons?.length"
                >
                  <operate-button
                    class="btn-group"
                    :row="scope.row"
                    :buttons="mergeDefaultBtn(item.buttons, 'right')"
                    :dropdown="config.operateDropdown"
                    @click="tableBtnClick(scope.row, $event)"
                  />
                </template>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
      <div
        v-if="props.pagination"
        v-show="state.total > state.pageSize"
        class="table-page"
      >
        <el-pagination
          v-model:current-page="state.currentPage"
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
      />
    </div>
  </div>
  <dialog-form
    v-if="isDialogForm"
    v-model="state.formVisible"
    :width="config.width"
    :title="state.formTitle"
  >
    <slot />
  </dialog-form>
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
  import {onBeforeRouteLeave, useRoute, useRouter} from 'vue-router'
  import Tooltip from '@/components/tooltip/index.vue'
  import type {FormData} from '@/types/form'
  import type {TableData, ApiKey} from '@/types/table'
  import {dateFormatting, getStorage} from '@/utils'
  import ListTreeSide from './treeSide.vue'
  import {useEventListener} from '@/utils/useEvent'
  import OperateButton from './components/operateButton.vue'
  import {mergeDefaultBtn} from './components/defaultBtn'
  import {ElMessage} from 'element-plus'
  import ExpandComp from './components/expand.vue'
  import {beforeAfter} from "@/utils/beforeAfter";
  import DialogForm from './components/dialogForm.vue'
  import type {After, Before} from "@/types";

  defineOptions({name: 'AkList'})
  const props = withDefaults(
    defineProps<{
      data: TableData
      searchData?: FormData
      apiKey?: ApiKey
      before?: Before
      after?: After
      pagination?: { pageSize: number, current: number } | boolean
      fixedBottomScroll?: boolean
      query?: { [key: string]: any } // 一些附加的请求参数
      autoLoad?: boolean // 初始时自动请求加载数据
      pk?: string // 主键
      dict?: Record<string, any> | undefined
    }>(),
    {
      searchData: () => {
        return {list: [], form: {}}
      },
      apiKey: () => {
        return {}
      },
      fixedBottomScroll: true,
      autoLoad: true,
      query: () => {
        return {}
      },
      pagination: () => {
        // 分页信息，false时不显示分页信息
        return {
          pageSize: 20,
          current: 1
        }
      },
      pk: 'id',
      before: () => {
      },
      after: () => {
      },
      dict: null
    }
  )
  const emits = defineEmits<{
    (e: 'selectionChange', row: any): void
    (e: 'btnClick', key: string, row?: any, close?: () => void): void // 列表上面及表格列表里添加删除按钮事件
  }>()
  const route = useRoute()
  const router = useRouter()
  const container = ref()
  const searchFormEl = ref()
  const table = ref()
  const tableDataList = ref([]) // 表格行数据

  const pk = computed(() => {
    return props.data.pk || props.pk
  })
  const config = computed(() => {
    return props.data.config || {}
  })
  const treeData = computed(() => {
    return config.value.treeData || {}
  })
  const state = reactive({
    loading: false,
    currentPage: 1,
    pageSize:
      parseInt(config.value.pageSize) || props.pagination?.pageSize,
    total: 0,
    selectionChecked: [],
    searchFormDown: false,
    treeValue: {}, // 侧栏树选中的值
    tableScrollMargin: 0,
    columnsCheck: [],
    currentNodeKey: '',
    formVisible: false,
    formTitle: '',
    dict: {}
  })
  // 可折叠查询表单
  const searchFormExpand = computed(() => {
    return props.searchData?.list?.length && config.value.expand
  })
  // 列显示隐藏设置
  const columnsSetting = computed(() => {
    return config.value.columnsSetting ?? true
  })
  const isFixedBottomScroll = computed(() => {
    // 如果数据里没配置，则使用props
    const fbs = config.value.fixedBottomScroll
    return fbs ?? props.fixedBottomScroll
  })
  const columnsFilter = computed(() => {
    if (!state.columnsCheck?.length) {
      return props.data.columns
    } else {
      return props.data.columns?.filter((item: any) => {
        return state.columnsCheck.includes(item.prop)
      })
    }
  })
  // 获取存在storage的dict，进入系统时可将所有字典预先加载存入storage。这里接口返回的和props传参的及公共的
  const listDict = computed(() => {
    const storage = getStorage('akAllDict')
    return Object.assign(storage || {}, props.dict, state.dict) || {}
  })

  // 搜索表单的值
  const searchFormValue = computed(() => {
    return Object.assign(
      {},
      searchFormEl.value?.getValue(true),
      state.treeValue
    )
  })
  const isDialogForm = computed(() => {
    return config.value.openType === 'dialog'
  })

  //点击按钮弹出表单窗口时，同时传递关闭方法
  const closeFormDialog = () => {
    state.formVisible = false
  }
  // 列表右侧按钮事件，处理预设key的内置事件
  const tableBtnClick = (row: any, key: string) => {
    if (key === 'del' && pk.value) {
      delClick([row[pk.value]])
    }
    if (['detail', 'edit'].includes(key) && isDialogForm.value) {
      //使用弹窗口表单时
      state.formVisible = true
      state.formTitle = '编辑/查看'
    }
    emits('btnClick', key, row, closeFormDialog)
  }
  // 表格上方操作按钮事件，处理预设key的内置事件
  const btnClick = (key: string) => {
    const ids = state.selectionChecked.map((item: any) => item[pk.value])
    if (key === 'del' && state.selectionChecked && pk.value) {
      delClick(ids)
    } else if (key === 'export') {
      exportClick(ids)
    } else if (key === 'edit') {
      if (ids?.length > 1) {
        return ElMessage({
          message: '每次只能编辑一条数据',
          type: 'warning'
        })
      }
      if (isDialogForm.value) {
        state.formVisible = true //打出弹窗暂不处理数据
        state.formTitle = '编辑'
      }
      emits('btnClick', key, {[pk.value]: ids[0]}, closeFormDialog)
    } else if (key === 'add' && isDialogForm.value) {
      state.formVisible = true //打出弹窗
      state.formTitle = '新增'
    }
    emits('btnClick', key, ids, closeFormDialog)
  }

  // 处理操作按钮结束
  // ===========================================数据处理开始
  // 筛选查询列表数据
  const getListData = (page?: number) => {
    state.loading = true
    const getUrl = config.value.apiKey?.list || props.apiKey?.list
    if (!getUrl) {
      console.warn(new Error('请先设置请求apiKey.list'))
      state.loading = false
      return
    }
    if (page) {
      state.currentPage = page
    }
    // 筛选查询一般不存在校验，这里直接取值
    const formValue = searchFormValue.value || {}
    const {orderSort, before, after} = config.value
    const params = {
      extend: {
        sort: orderSort,
        pageSize: state.pageSize,
        pageNum: state.currentPage
      },
      query: Object.assign({}, formValue, props.query)
    }
    beforeAfter({
      apiKey: getUrl,
      params: params,
      before: [props.before, before],
      after: [props.before, after],
      route: route,
      type: 'fetch'
    })
      .then((res: any) => {
        const data = res.data
        tableDataList.value = data?.list || data
        // 预防返回的data={}时
        if (Object.keys(data).length === 0 && data.constructor === Object) {
          tableDataList.value = []
        }
        state.dict = data.dict || {}
        setTimeout(() => {
          setFixedBottomScroll()
          state.loading = false
        }, 200)
        state.total = data.total || 0
      })
      .catch(() => {
        state.total = 0
        state.loading = false
        tableDataList.value = []
      })
  }
  // 删除 idList支持多个 ,params为附近参数
  const delClick = (idList: string | number | string[]) => {
    state.loading = true
    const delUrl = config.value.apiKey?.del || props.apiKey?.del
    if (!pk.value) {
      console.warn('请配置主键pk')
      return
    }
    const delParams = {
      [pk.value]: idList.toString() // 多个时转字符串
    }
    if (!delUrl) {
      console.warn('请先配置apiKey.del')
      return
    }
    const {before, after} = config.value
    beforeAfter({
      apiKey: delUrl,
      params: delParams,
      before: [props.before, before],
      after: [props.before, after],
      route: route,
      type: 'del'
    })
      .then((res: any) => {
        state.loading = false
        ElMessage.success(res.message || '删除成功')
        getListData() // 请求列表数据
      })
      .catch((res: { message: string, code: string | number }) => {
        state.loading = false
        ElMessage.error(res.message || '删除失败')
        getListData() // 不管什么情况都刷新下请求列表数据
      })
  }
  // 处理switch切换事件
  const switchLoading = ref(false)
  const oldVal = ref(undefined) // 修改前的值
  const switchBeforeChange = (val: number | string | boolean) => {
    oldVal.value = val
    return true
  }
  const switchChange = (val: string | number | boolean, obj: any, row: any) => {
    // 提交修改，这里通过请求数据再使用v-bind绑定参数，初始时也会触发change,但没有触发beforeChange
    if (oldVal.value === undefined) {
      return
    }
    const apiKey = config.value.apiKey?.edit || props.apiKey?.edit
    if (!apiKey) {
      console.warn('请先配置apiKey.edit')
      row[obj.prop] = oldVal // 回退状态
      return
    }
    switchLoading.value = true
    const data: any = Object.assign({}, {[pk.value]: row[pk.value], [obj.prop]: val})
    const {before, after} = config.value
    beforeAfter({
      apiKey: apiKey,
      params: data,
      before: [props.before, before],
      after: [props.before, after],
      type: 'submit'
    })
      .then((res: any) => {
        switchLoading.value = false
        // 修改成功，不刷新更新值
        row[obj.prop] = val
        ElMessage.success(res.message || '操作成功')
      })
      .catch(() => {
        // 修改失败，回退状态
        row[obj.prop] = oldVal // 回退状态
        switchLoading.value = false
      })
  }
  // 处理switch切换事件结束
  const exportClick = (ids: string[]) => {
    state.loading = true
    const exportUrl = config.value.apiKey?.exportExcel || props.apiKey?.exportExcel
    if (!exportUrl) {
      console.warn('请先配置apiKey.exportUrl')
      return
    }
    const {before, after} = config.value
    beforeAfter({
      apiKey: exportUrl,
      params: {
        [pk.value]: ids.toString() // 多个时转字符串
      },
      before: [props.before, before],
      after: [props.before, after],
      route: route, // 为方便需要从路由获取参数提供便利
      type: 'export',
      options: {responseType: 'blob'}
    })
      .then((res: any) => {
        state.loading = false
        const {data, headers} = res.data
        const filename: string = decodeURI(
          headers['content-disposition']?.split(';')[1]?.split('=')[1]
        )
        const downloadUrl: string = window.URL.createObjectURL(
          new Blob([data], {type: data.type})
        )
        const link = document.createElement('a')
        link.style.display = 'none'
        link.href = downloadUrl
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        ElMessage.success(res.message || '导出成功')
      })
      .catch((res: { message: string, code: string | number }) => {
        state.loading = false
        ElMessage.error(res.message || '导出失败')
      })
  }
  // 数据处理结束

  const handleSizeChange = (page: number) => {
    state.pageSize = page
    getListData(1)
  }
  const handleCurrentChange = (page: number) => {
    getListData(page)
  }

  // 使用了 render 属性时,渲染前对字段值的预处理方法，需返回新值
  const getRenderFormatValue = (row: any, column: any) => {
    if (typeof column.renderFormatter === 'function') {
      return column.renderFormatter(row[column.prop], row)
    }
    return row[column.prop]
  }

  // 处理图片开始
  const getImgSrc = (row: any, column: any, type?: string) => {
    const src = getRenderFormatValue(row, column)
    if (!src) {
      return
    }
    if (type === 'preview') {
      if (typeof src !== 'object') {
        return src.split(',')
      }
      return src
    } else {
      // 如果是数组则返回第一张
      if (typeof src === 'object') {
        return src[0]
      } else {
        return src.split(',')[0]
      }
    }
  }
  // 处理图片结束

  // 处理tag
  const getTagType = (row: any, column: any) => {
    if (!column.custom) {
      return
    }
    return column.custom[getRenderFormatValue(row, column)]
  }
  const getTagVal = (row: any, column: any) => {
    const val = getRenderFormatValue(row, column)
    const replaceValue = column.replaceValue
    if (!replaceValue) {
      return val
    } else if (typeof replaceValue === 'string') {
      // 字符串时为字典
      return listDict.value[replaceValue]?.[val] || val
    } else {
      return replaceValue[val] || val
    }
  }
  // 处理tag结束

  // 处理时间
  const getDateFormat = (obj: any, row: any) => {
    const val = getRenderFormatValue(row, obj)
    if (!obj || !val) {
      return val
    }
    let formatType = obj.timeFormat // 指定格式时
    if (!formatType) {
      // 没有指定格式时
      if (obj.render === 'date') {
        formatType = '{yyyy}-{mm}-{dd}'
      } else {
        formatType = ''
      }
    }
    return dateFormatting(val, formatType)
  }
  // 处理时间结束

  // el-table事件
  const selectionChange = (row: any) => {
    state.selectionChecked = row
    emits('selectionChange', row)
  }

  const getParamsJump = (type?: string) => {
    const searchFormVal = Object.assign(
      {},
      searchFormEl.value?.getValue(),
      state.treeValue
    ) // 这里需要获取到搜索表单全部的字段

    if (type === 'reset') {
      for (const key in searchFormVal) {
        searchFormVal[key] = undefined
      }
    }
    const params = Object.assign({}, route.query, searchFormVal)
    router.replace({query: params})
  }
  const formBtnClick = (type: string) => {
    if (config.value.searchJump) {
      // 将参数拼接到url上
      getParamsJump(type)
    }
    if (type === 'submit') {
      getListData(1)
    } else if (type === 'reset') {
      searchFormEl.value.resetFields() // 这个只是清空了model的值
      searchFormEl.value.setValue(searchFormValue.value, true) // 重新将取到的空值对筛选表单赋值
      getListData(1) // 重新请求数据
    }
  }
  // 侧栏树点击事件
  const treeNodeClick = (val: string | number) => {
    if (!treeData.value.name) {
      console.error(new Error('请设置侧栏树name值'))
      return
    }
    state.currentNodeKey = val
    state.treeValue = {[treeData.value.name]: val}
    if (config.value.searchJump) {
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
        const {top: tableBodyDomTop}
          = tableBodyWrapDom.getBoundingClientRect()
        const tableHeight = tableBodyDom.offsetHeight // 表格的高度
        const windowHeight = window.innerHeight
        if (
          tableBodyDomTop > windowHeight
          || tableBodyWrapDom.classList.contains('is-scrolling-none')
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
      document.querySelector('.overflow-scroll')
      || document.querySelector('body')
    )
  })

  // 可根据条件设置表单初始查询值
  const setSearchFormValue = (obj: { [key: string]: string[] }) => {
    searchFormEl.value.setValue(obj)
  }
  const getSearchFormValue = () => {
    return searchFormValue.value
  }

  // 监听url参数变化重新请求数据
  const setSearchValueFormQuery = () => {
    const routeQuery = route.query
    if (Object.keys(routeQuery).length) {
      if (searchFormEl.value) {
        searchFormEl.value.setValue(routeQuery, true)
      }
      const {show, name} = treeData.value
      const val = routeQuery[name]
      if (show && val) {
        // 开启树时
        setTimeout(() => {
          state.currentNodeKey = isNaN(val) ? val : parseInt(val)
          state.treeValue = {[treeData.value.name]: val}
        }, 500)
      }
    }
  }
  const unWatch = watch(
    () => route.query,
    () => {
      if (props.autoLoad) {
        // todo 这里要区分跳转根据url查询，不自动加载跳转也需加载
        state.currentPage = 1
        setSearchValueFormQuery()
        getListData(1)
      }
    },
    {
      deep: true
    }
  )

  useEventListener(scrollBox.value, 'scroll', setFixedBottomScroll)
  useEventListener(window, 'resize', setFixedBottomScroll)
  onBeforeRouteLeave(() => {
    unWatch() // 销毁监听器
  })
  onMounted(() => {
    setSearchValueFormQuery() // url带有参数时，先对搜索表单设置
    if (props.autoLoad) {
      // 列表其他数据通过接口获取时，需先加载列表配置数据，才能请求列表的数据
      getListData(1)
    }
  })
  // 重置列表
  const resetList = () => {
    tableDataList.value = []
  }
  onBeforeUnmount(() => {
  })
  defineExpose({
    getListData,
    delClick,
    table,
    setSearchFormValue,
    getSearchFormValue,
    resetList
  })
</script>
