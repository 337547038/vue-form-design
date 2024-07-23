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
        <div class="control-btn-group">
          <operate-button
            v-if="data.controlBtn?.length"
            position="top"
            class="-group"
            :row="state.selectionChecked"
            :buttons="mergeDefaultBtn(data.controlBtn, 'top')"
            @click="btnClick"
          />
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
                  :value="item.prop || item.type"
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
              <template #default="scope">
                <slot
                  v-if="$slots[item.prop]"
                  :index="scope.$index"
                  :name="item.prop"
                  :row="scope.row"
                  :dict="listDict"
                  :value="scope.row[item.prop]"
                >
                </slot>
                <el-switch
                  v-if="item.prop && item.render === 'switch'"
                  v-bind="item.config"
                  :loading="switchLoading"
                  :before-change="
                    switchBeforeChange.bind(this, scope.row[item.prop])
                  "
                  @change="switchChange($event, item, scope.row)"
                  v-model="scope.row[item.prop]"
                />
                <el-image
                  v-if="item.prop && item.render === 'image'"
                  v-bind="item.config"
                  :style="{
                    width: item.config?.width || '100px',
                    height: item.config?.height || '100px'
                  }"
                  :preview-teleported="true"
                  :z-index="99"
                  :preview-src-list="getImgSrc(scope.row[item.prop], 'preview')"
                  :src="getImgSrc(scope.row[item.prop])"
                />
                <el-tag
                  v-if="item.prop && item.render === 'tag'"
                  v-bind="item.config"
                  :type="getTagType(scope.row[item.prop], item.config?.custom)"
                  >{{
                    getTagVal(scope.row[item.prop], item.config?.replaceValue)
                  }}
                </el-tag>
                <el-text
                  v-if="item.prop && item.render === 'text'"
                  v-bind="item.config"
                  :type="getTagType(scope.row[item.prop], item.config?.custom)"
                  >{{
                    getTagVal(scope.row[item.prop], item.config?.replaceValue)
                  }}
                </el-text>
                <el-link
                  v-if="item.prop && item.render === 'link'"
                  v-bind="item.config"
                  >{{ scope.row[item.prop] }}</el-link
                >
                <span
                  v-if="
                    item.prop &&
                    item.render &&
                    ['datetime', 'date'].includes(item.render)
                  "
                >
                  {{ getDateFormat(item, scope.row[item.prop]) }}
                </span>
                <template
                  v-if="
                    item.render === 'buttons' && item.config?.buttons?.length
                  "
                >
                  <operate-button
                    class="btn-group"
                    :row="scope.row"
                    :buttons="mergeDefaultBtn(item.config?.buttons)"
                    @click="tableBtnClick(scope.row, $event)"
                    :dropdown="item.config.dropdown"
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
    watch,
    markRaw
  } from 'vue'
  import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
  import Tooltip from '@/components/tooltip/index.vue'
  import { Delete, Edit, Histogram, Plus } from '@element-plus/icons-vue'
  import type { FormData } from '@/types/form'
  import { TableData, ApiKey, Button } from '@/types/table'
  import { dateFormatting, getStorage } from '@/utils'
  import ListTreeSide from './treeSide.vue'
  import { useDesignStore } from '@/store/design'
  import { useEventListener } from '@/utils/useEvent'
  import OperateButton from './components/operateButton.vue'
  import * as request from './components/request'

  const props = withDefaults(
    defineProps<{
      data: TableData
      searchData?: FormData
      apiKey?: ApiKey
      before?: (type: EventType, params: any, rout: any) => boolean
      after?: (type: EventType, res: any, isSuccess?: boolean) => any
      pagination?: { pageSize: number; current: number } | boolean
      dict?: { [key: string | number]: string | number }
      fixedBottomScroll?: boolean
      query?: { [key: string]: any } // 一些附加的请求参数
      autoLoad?: boolean // 初始时自动请求加载数据
      pk?: string // 主键
    }>(),
    {
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
      query: () => {
        return {}
      },
      pagination: () => {
        //分页信息，false时不显示分页信息
        return {
          pageSize: 20,
          current: 1
        }
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
    const storage = getStorage('akAllDict', true)
    return Object.assign(storage || {}, props.dict, state.dict) || {}
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
  //数据处理开始
  // 筛选查询列表数据
  const getListData = (page?: number) => {
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
  //数据处理结束

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

  //处理switch切换事件
  const switchLoading = ref(false)
  const oldVal = ref() //修改前的值
  const switchBeforeChange = (val: number | string | boolean) => {
    oldVal.value = val
    return true
  }
  const switchChange = (val: string | number | boolean, obj: any, row: any) => {
    //提交修改
    request.switchEvent({
      props,
      switchLoading,
      val,
      rowProp: obj.prop,
      oldVal: oldVal.value,
      params: row //这里使用当前行的所有数据，可根据实际如取pk
    })
  }
  //处理switch切换事件结束

  //处理图片开始
  const getImgSrc = (src: string | string[], type?: string) => {
    if (!src) {
      return
    }
    if (type === 'preview') {
      if (typeof src !== 'object') {
        return src.split(',')
      }
      return src
    } else {
      //如果是数组则返回第一张
      if (typeof src === 'object') {
        return src[0]
      } else {
        return src.split(',')[0]
      }
    }
  }
  //处理图片结束

  //处理tag
  const getTagType = (val: string | number, custom: any) => {
    if (!custom) {
      return
    }
    return custom[val]
  }
  const getTagVal = (val: string | number, replaceValue: any) => {
    if (!replaceValue) {
      return val
    } else {
      return replaceValue[val] || val
    }
  }
  //处理tag结束

  //处理时间
  const getDateFormat = (obj: any, val: any) => {
    if (!obj) {
      return val
    }
    let formatType = obj.config?.timeFormat //指定格式时
    if (!formatType) {
      //没有指定格式时
      if (obj.render === 'date') {
        formatType = '{yyyy}-{mm}-{dd}'
      } else {
        formatType = ''
      }
    }
    return dateFormatting(val, formatType)
  }
  //处理时间结束

  //处理表格行右侧及上方操作按钮
  const defaultBtn = ref<Button>({
    add: {
      type: 'primary',
      name: 'Add',
      label: '',
      tooltip: '添加',
      icon: markRaw(Plus),
      class: '',
      key: 'add'
    },
    edit: {
      type: 'primary',
      name: 'Edit',
      label: '',
      tooltip: '编辑',
      icon: markRaw(Edit),
      class: '',
      key: 'edit'
    },
    detail: {
      type: 'primary',
      tooltip: '查看',
      key: 'detail',
      name: 'Detail',
      class: '',
      icon: markRaw(Histogram)
    },
    del: {
      render: 'confirm',
      type: 'danger',
      label: '',
      tooltip: '删除',
      name: 'Del',
      icon: markRaw(Delete),
      key: 'del',
      popConfirm: {
        title: '确认删除该记录吗？',
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        confirmButtonType: 'danger'
      }
    },
    export: {
      type: 'primary',
      name: 'Export',
      label: '导出',
      tooltip: '导出',
      icon: 'icon-export',
      class: '',
      key: 'export'
    }
  })
  /**
   * 列表右侧按钮
   * @param btn 自定义的按钮
   * @param position 位置 top为表格上面位置，不传默认为表格右侧
   * @return 合并了初始配置的按钮数组
   */
  const mergeDefaultBtn = (btn: Button[], position?: string) => {
    const temp: any = []
    //表格上方按钮预设有add/edit/del，表格行右侧预设有edit/detail/del
    const includeBtn =
      position === 'top'
        ? ['edit', 'add', 'del', 'export']
        : ['edit', 'detail', 'del']
    btn.forEach((item: Button) => {
      if (item.key && includeBtn.includes(item.key)) {
        if (item.key === 'del') {
          item.popConfirm = Object.assign(
            defaultBtn.value[item.key].popConfirm,
            item.popConfirm || {}
          )
        }
        //表格上方时默认添加label
        let defaultLabel: any = {}
        if (position === 'top' && !item.label) {
          const labelArray: any = {
            add: '新增',
            edit: '编辑',
            del: '批量删除',
            export: '导出'
          }
          defaultLabel = { label: labelArray[item.key] || item.label }
        }
        temp.push(
          Object.assign({}, defaultBtn.value[item.key], defaultLabel, item)
        )
      } else {
        temp.push(item)
      }
    })
    return temp
  }
  //列表右侧按钮事件，处理预设key的内置事件
  const tableBtnClick = (row: any, key: string) => {
    if (key === 'del' && pk.value) {
      delClick([row[pk.value]])
    } else {
      // todo 编辑或查看时请数据拉回来，或者是对外暴露拉取数据的方法
    }
  }
  //表格上方操作按钮事件，处理预设key的内置事件
  const btnClick = (key: string) => {
    if (key === 'del' && state.selectionChecked && pk.value) {
      const ids = state.selectionChecked.map(item => item[pk.value])
      delClick(ids)
    } else if (key === 'export') {
      const ids = state.selectionChecked.map(item => item[pk.value])
      request.exportEvent({ props, state, route, params: ids })
    } else {
      // todo 编辑或查看时请数据拉回来，或者是对外暴露拉取数据的方法
    }
  }

  //处理操作按钮结束

  const selectionChange = (row: any) => {
    state.selectionChecked = row
    emits('selectionChange', row)
  }

  const getParamsJump = (type?: string) => {
    const searchFormVal = Object.assign(
      {},
      searchFormEl.value?.getValue(),
      state.treeValue
    ) //这里需要获取到搜索表单全部的字段

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
      state.currentPage = 1
      setSearchValueFormQuery()
      getListData(1)
    },
    {
      deep: true
    }
  )

  useEventListener(scrollBox.value, 'scroll', setFixedBottomScroll)
  useEventListener(window, 'resize', setFixedBottomScroll)
  onBeforeRouteLeave(() => {
    unWatch() //销毁监听器
  })
  onMounted(() => {
    setSearchValueFormQuery() // url带有参数时，先对搜索表单设置
    if (props.autoLoad) {
      // 列表其他数据通过接口获取时，需先加载列表配置数据，才能请求列表的数据
      getListData(1)
    }
  })
  onBeforeUnmount(() => {})
  defineExpose({
    getListData,
    delClick,
    table,
    setSearchFormValue,
    getSearchFormValue
  })
</script>
