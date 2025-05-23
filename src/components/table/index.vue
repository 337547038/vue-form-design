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
      <slot />
      <div class="control-btn">
        <div class="control-btn-group">
          <operate-button
            v-if="data.controlBtn?.length"
            position="top"
            :row="state.selectionChecked"
            :buttons="mergeDefaultBtn(data.controlBtn)"
            @click="btnClick"
          />
          <slot name="controlBtn" />
        </div>
        <div class="control-other">
          <el-button-group>
            <el-button
              v-if="searchFormExpand"
              circle
              icon="Search"
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
                    :value="item.prop || item.type"
                    :label="item.label"
                  />
                </el-checkbox-group>
              </template>
              <template #reference>
                <el-button
                  circle
                  icon="SetUp"
                  title="设置列显示隐藏"
                />
              </template>
            </el-popover>
          </el-button-group>
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
                    :dropdown="props.data.config?.operateDropdown"
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
  import type { FormData } from '@/types/form'
  import type { EventType } from '@/types/table'
  import { TableData, ApiKey } from '@/types/table'
  import { dateFormatting, getStorage } from '@/utils'
  import ListTreeSide from './treeSide.vue'
  import { useDesignStore } from '@/store/design'
  import { useEventListener } from '@/utils/useEvent'
  import OperateButton from './components/operateButton.vue'
  import * as request from './components/request'
  import { mergeDefaultBtn } from './components/defaultBtn'
  import { ElMessage } from 'element-plus'
  defineOptions({ name: 'AkList' })
  const props = withDefaults(
    defineProps<{
      data: TableData
      searchData?: FormData
      apiKey?: ApiKey
      before?: string | ((params: any, obj: any) => any)
      after?: string | ((res: any, obj: any) => any)
      pagination?: { pageSize: number, current: number } | boolean
      fixedBottomScroll?: boolean
      query?: { [key: string]: any } // 一些附加的请求参数
      autoLoad?: boolean // 初始时自动请求加载数据
      pk?: string // 主键
    }>(),
    {
      searchData: () => {
        return { list: [], form: {} }
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
      }
    }
  )
  const emits = defineEmits<{
    (e: 'selectionChange', row: any): void
    (e: 'btnClick', key: string, row?: any): void // 列表上面及表格列表里添加删除按钮事件
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
    pageSize:
      parseInt(props.data.config?.pageSize) || props.pagination?.pageSize,
    total: 0,
    selectionChecked: [],
    dict: {}, // 接口返回的
    searchFormDown: false,
    treeValue: {}, // 侧栏树选中的值
    tableScrollMargin: 0,
    columnsCheck: designStore.getColumnsCheck(route.path),
    currentNodeKey: ''
  })
  const pk = computed(() => {
    return props.data.pk || props.pk
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
    return Object.assign(storage || {}, state.dict) || {}
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
  // 数据处理开始
  // 筛选查询列表数据
  const getListData = (page?: number) => {
    state.loading = true
    request
      .getData({
        props,
        state,
        page,
        searchFormValue: searchFormValue.value,
        route
      })
      .then((data: any) => {
        tableDataList.value = data?.list || data
        setTimeout(() => {
          setFixedBottomScroll()
          state.loading = false
        }, 200)
      })
      .catch(() => {
        tableDataList.value = []
      })
  }
  // 删除 idList支持多个 ,params为附近参数
  const delClick = (idList: string | number | string[]) => {
    request
      .del({ idList, pk: pk.value, props, state, route })
      .then(() => {
        getListData() // 请求列表数据
      })
      .catch(() => {
        getListData() // 不管什么情况都刷新下请求列表数据
      })
  }
  // 数据处理结束

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

  // 使用了 render 属性时,渲染前对字段值的预处理方法，需返回新值
  const getRenderFormatValue = (row: any, column: any) => {
     if (typeof column.renderFormatter === 'function') {
      return column.renderFormatter(row[column.prop], row)
    }
    return row[column.prop]
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
    console.log('switchChange')
    console.log(val)
    console.log(obj)
    console.log(row)
    if (oldVal.value === undefined) {
      return
    }
    request.switchEvent({
      props,
      switchLoading,
      val,
      rowProp: obj.prop,
      oldVal: oldVal.value,
      params: row // 这里使用当前行的所有数据，可根据实际如取pk
    })
  }
  // 处理switch切换事件结束

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

  // 列表右侧按钮事件，处理预设key的内置事件
  const tableBtnClick = (row: any, key: string) => {
    if (key === 'del' && pk.value) {
      delClick([row[pk.value]])
    } else {
      // todo 这里目前先对外提示点击事件
      emits('btnClick', key, row)
    }
  }
  // 表格上方操作按钮事件，处理预设key的内置事件
  const btnClick = (key: string) => {
    const ids = state.selectionChecked.map((item) => item[pk.value])
    if (key === 'del' && state.selectionChecked && pk.value) {
      delClick(ids)
    } else if (key === 'export') {
      request.exportEvent({ props, state, route, params: ids })
    } else if (key === 'edit') {
      // todo 编辑或查看时请数据拉回来，或者是对外暴露拉取数据的方法
      if (ids?.length > 1) {
        return ElMessage({
          message: '每次只能编辑一条数据',
          type: 'warning'
        })
      }
      emits('btnClick', key, { [pk.value]: ids[0] })
    } else {
      emits('btnClick', key, ids)
    }
  }

  // 处理操作按钮结束

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
    // router.push({ path: route.path, query: params })
     router.replace({ query: params })
  }
  const formBtnClick = (type: string) => {
    if (searchJump.value) {
      // 将参数拼接到url上
      getParamsJump(type)
    }
    if (type === 'submit') {
      getListData(1)
    } else if (type === 'reset') {
      searchClear()
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
        const { top: tableBodyDomTop }
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
      if (searchFormEl.value) {
        searchFormEl.value.setValue(routeQuery, true)
      }
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
  onBeforeUnmount(() => {})
  defineExpose({
    getListData,
    delClick,
    table,
    setSearchFormValue,
    getSearchFormValue,
    resetList
  })
</script>
