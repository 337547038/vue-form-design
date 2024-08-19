<template>
  <div>
    <div
      class="design-container design-table"
      v-loading="state.loading"
      ref="container"
    >
      <div class="main-body">
        <div class="header">
          <div class="field">
            <el-popover placement="bottom" :width="420" trigger="hover">
              <template #reference>
                <el-button type="primary" plain size="small"
                  >添加表格列字段
                </el-button>
              </template>
              <div class="table-field-list">
                <div
                  class="item"
                  v-for="(item, index) in fieldOptions"
                  :key="index"
                >
                  <h3>{{ item.label }}</h3>
                  <div class="list">
                    <el-checkbox
                      :label="li.label"
                      v-for="li in item.options"
                      :key="li.prop"
                      @change="fieldSelectClick(li, $event)"
                    />
                  </div>
                </div>
              </div>
            </el-popover>
          </div>
          <head-tools @click="headToolClick" />
        </div>
        <div class="main-form main-table">
          <div
            class="search-box"
            @click="searchFormClick"
            title="条件查询搜索区域，单击可编辑"
          >
            <ak-form
              is-search
              v-if="state.searchData?.list?.length"
              :data="state.searchData"
              request-url=""
            />
            <div class="tip" v-else>条件查询搜索区域，单击可编辑</div>
          </div>
          <el-divider border-style="dashed" />
          <div class="control-btn">
            <div
              class="btn-group"
              @click="editOpenDrawer('controlBtn')"
              title="单击可编辑"
            >
              <div
                class="tip"
                v-if="
                  tableData?.controlBtn?.length === 0 || !tableData?.controlBtn
                "
              >
                操作按钮区域，点击可添加如新增、删除
              </div>
              <operate-btn
                v-else
                position="top"
                :buttons="mergeDefaultBtn(tableData?.controlBtn)"
                :row="{}"
              />
            </div>
            <div class="control-other">
              <el-button-group>
                <el-button
                  circle
                  icon="Search"
                  title="展开/收起筛选"
                  v-if="tableData.config?.expand"
                />
                <el-button
                  circle
                  icon="SetUp"
                  title="设置列显示隐藏"
                  v-if="tableData.config?.columnsSetting !== false"
                />
              </el-button-group>
            </div>
          </div>
          <div class="tip" v-if="!tableData.columns?.length">
            表格列设置区域，可从左上角 添加表格列字段
            选择已有列或直接从上方工具栏 生成脚本预览 编辑
          </div>
          <el-table
            :data="[{}]"
            v-bind="tableData.tableProps || {}"
            ref="tableEl"
            v-if="state.refreshTable"
          >
            <template
              v-for="item in tableData.columns"
              :key="item.prop || item.label"
            >
              <el-table-column v-bind="item">
                <template #header="scope">
                  {{ scope.column.label }}
                  <i class="icon-close" @click="delCol(item)"></i>
                  <el-tooltip placement="top" v-if="item.help">
                    <template #content>
                      <span v-html="item.help"></span>
                    </template>
                    <i class="icon-help"></i>
                  </el-tooltip>
                </template>
                <template #default v-if="item.type !== 'index'">
                  <el-checkbox v-if="item.type === 'selection'" />
                  <div @click.stop="rowClick(item)" v-else>
                    <el-switch v-if="item.render === 'switch'" />
                    <el-image
                      v-else-if="item.render === 'image'"
                      :style="{
                        width: item.config.width,
                        height: item.config.height
                      }"
                    />
                    <el-tag v-else-if="item.render === 'tag'">设置</el-tag>
                    <operate-btn
                      class="btn-group"
                      v-else-if="item.render === 'buttons'"
                      position="demo"
                      :buttons="mergeDefaultBtn(item.buttons, 'right')"
                      :row="{}"
                    />
                    <span v-else>设置</span>
                  </div>
                </template>
              </el-table-column>
            </template>
          </el-table>
          <div class="table-tip">
            操作提示：<br />
            *从数据列表配置中选择 所属表单<br />
            *从左上角 添加表格字段 选择预设字段<br />
            *可拖动表头字段移动调整表头字段排列顺序<br />
            *可通过顶部工具栏 生成脚本预览 查看或编辑添加自定义字段
          </div>
        </div>
      </div>
      <control-attr
        @changeEvent="controlAttrChangeEvent"
        v-model:tabsName="state.tabsName"
        ref="controlAttrEl"
      />
    </div>
    <ace-drawer
      v-model="drawer.visible"
      :title="drawer.title"
      :direction="drawer.direction"
      :content="drawer.content"
      :code-type="drawer.codeType"
      @before-close="drawerBeforeClose"
      @confirm="dialogConfirm"
    />
    <vue-file ref="vueFileEl" />
    <el-dialog v-model="state.previewVisible" title="预览" :fullscreen="true">
      <ak-list
        :data="tableData"
        :search-data="state.searchData"
        v-if="state.previewVisible"
      />
    </el-dialog>
  </div>
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script setup lang="ts">
  import { reactive, ref, nextTick, onMounted, computed, provide } from 'vue'
  import HeadTools from '../components/headTools.vue'
  import VueFile from '../components/vueFile.vue'
  import AceDrawer from '../components/aceDrawer.vue'
  import Sortable from 'sortablejs'
  import {
    json2string,
    objToStringify,
    string2json,
    stringToObj
  } from '@/utils/design'
  import { getRequest } from '@/api'
  import { useRouter, useRoute } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import { useLayoutStore } from '@/store/layout'
  import { getDrawerContent, getDrawerTitle } from '../components/aceTooptip'
  import ControlAttr from './components/controlAttr.vue'
  import { getFormColumns, getInitData } from './components/request'
  import OperateBtn from '@/components/table/components/operateButton.vue'
  import { mergeDefaultBtn } from '@/components/table/components/defaultBtn.ts'

  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '设计管理' }, { label: '列表页设计' }])
  const vueFileEl = ref()
  const container = ref()
  const routeQuery = useRoute().query
  const router = useRouter()
  const state = reactive({
    searchData: {},
    loading: false,
    attrObj: {},
    config: {},
    previewVisible: false,
    tabsName: 'second',
    formFieldList: [], // 表单数据源所有可选字段
    dict: {},
    refreshTable: true
  })
  const tableData = ref({
    tableProps: {}, //表格所有参数
    columns: [],
    config: {
      openType: 'page', // 页面打开方式
      fixedBottomScroll: true,
      columnsSetting: true,
      expand: true
    },
    apiKey: {},
    controlBtn: []
  })
  const stringTableData = ref()
  provide('tableData', tableData)
  const currentObj = ref({})
  provide('currentObj', currentObj)
  const drawer = reactive({
    visible: false,
    title: '',
    direction: 'ltr',
    content: '',
    codeType: '',
    type: ''
  })

  //右侧边栏事件
  const controlAttrChangeEvent = ({
    type,
    value
  }: {
    type: string
    value: any
  }) => {
    if (type === 'formId') {
      //改变表单数据源时，重新加载可选表头信息
      getFormColumns(value).then(data => {
        state.formFieldList = data
      })
    } else if (type === 'openDrawer') {
      //打开编辑drawer
      editOpenDrawer(value)
    }
  }

  const drawerBeforeClose = () => {
    drawer.visible = false
    drawer.content = ''
    drawer.codeType = ''
    drawer.title = ''
    drawer.type = ''
  }

  const fieldOptions = computed(() => {
    const formField = {
      label: '表单字段',
      options: state.formFieldList
    }
    const temp = [
      {
        label: '其他字段',
        options: [
          {
            label: '多选',
            type: 'selection'
          },
          { label: '序号', type: 'index', width: '70px' },
          { label: '操作' }
        ]
      }
    ]
    if (state.formFieldList?.length) {
      temp.unshift(formField)
    }
    return temp
  })

  // 删除表头列字段
  const delCol = (row: any) => {
    tableData.value.columns.forEach((item: any, index: number) => {
      if (item.prop === row.prop) {
        tableData.value.columns.splice(index, 1)
      }
    })
  }
  // 添加表头列
  const fieldSelectClick = (row: any, val: boolean) => {
    if (val) {
      // 先检查是否已存在
      let has = false
      tableData.value.columns.forEach((item: any) => {
        if (
          (item.prop && item.prop === row.prop) ||
          (item.type && item.type === row.type)
        ) {
          has = true
        }
      })
      if (!has) {
        tableData.value.columns.push(row)
      }
    } else {
      tableData.value.columns.forEach((item: any, index: number) => {
        if (item.prop === row.prop) {
          tableData.value.columns.splice(index, 1)
        }
      })
    }
  }
  const headToolClick = (type: string) => {
    switch (type) {
      case 'del':
        // 清空
        tableData.value = JSON.parse(stringTableData.value)
        state.selectField = []
        currentObj.value = {}
        break
      case 'eye':
        // 预览
        state.previewVisible = true
        break
      case 'json':
        // 生成脚本
        editOpenDrawer('json')
        break
      case 'vue':
        // 导出vue文件
        vueFileEl.value.openTable(tableData.value)
        break
      case 'save':
        // 保存
        saveData()
        break
    }
  }
  const editOpenDrawer = (type: string) => {
    const codeType = ''
    let editData
    let title = ''
    let isString = false
    let direction = 'ltr'
    switch (type) {
      case 'json': // 生成脚本
        editData = tableData.value
        direction = 'rtl'
        break
      case 'tableConfig':
        title = 'el-table的相关属性'
        editData = tableData.value.tableProps || {}
        break
      case 'before':
      case 'after':
        const newData: any = tableData.value.events || {}
        editData = newData[type]
        if (!editData) {
          editData = getDrawerContent(type)
          isString = true
        }
        break
      case 'treeProp':
        // eslint-disable-next-line no-case-declarations
        editData = tableData.value.treeData || {}
        if (Object.keys(editData).length === 1) {
          editData = {
            show: true,
            treeProps: {}, // tree props
            name: '唯一标识', // 唯一标识，用于
            method: 'post'
          }
        }
        title = '更多参数详见ak-list组件'
        break
      case 'treeBefore':
        editData = tableData.value.treeData?.before
        title = getDrawerTitle.before
        if (!editData) {
          editData = getDrawerContent('before')
          isString = true
        }
        break
      case 'treeAfter':
        editData = tableData.value.treeData?.after
        title = getDrawerTitle.after
        if (!editData) {
          editData = getDrawerContent('after')
          isString = true
        }
        break
      case 'buttons':
        editData = currentObj.value.buttons || []
        title = '可设置多个操作按钮，可使用内置key=edit/del快速设置按钮'
        break
      case 'controlBtn':
        editData = tableData.value.controlBtn
        title = '操作按钮列表，可使用内置key=add/edit/del/export快速设置按钮'
        break
      case 'columns':
        editData = currentObj.value || []
        title = '支持el-table-column所有属性'
        break
    }
    switch (codeType) {
      case 'json':
        editData = json2string(editData, true)
        break
      default:
        if (!isString) {
          // before,after为空时，使用的默认值已经是字符串了，这里不用再次转换
          editData = objToStringify(editData, true)
        }
    }
    drawer.visible = true
    drawer.direction = direction
    drawer.title = title ? title : (getDrawerTitle as any)[type]
    drawer.content = editData
    drawer.codeType = codeType
    drawer.type = type
  }

  const dialogConfirm = (content: string) => {
    const val = stringToObj(content)
    switch (drawer.type) {
      case 'json':
        tableData.value = val
        break
      case 'treeProp':
        tableData.value.treeData = val
        break
      case 'buttons':
        currentObj.value.buttons = val
        break
      case 'controlBtn':
        tableData.value.controlBtn = val
        break
      case 'before':
      case 'after':
        if (!tableData.value.events) {
          tableData.value.events = {}
        }
        tableData.value.events[drawer.type] = val
        break
      case 'tableConfig':
        tableData.value.tableProps = val
        break
      case 'treeBefore':
        tableData.value.treeData.before = val
        break
      case 'treeAfter':
        tableData.value.treeData.after = val
        break
      case 'columns':
        currentObj.value = val
        break
    }
    drawerBeforeClose()
  }
  const controlAttrEl = ref()
  const rowClick = (column: any) => {
    currentObj.value = column
    // 切换到字段属性
    state.tabsName = 'first'
    controlAttrEl.value.rowChange()
  }
  const searchFormClick = () => {
    if (!routeQuery.id) {
      ElMessage.error('请先保存设计的列表')
      return
    }
    router.push({
      path: '/design/form',
      query: {
        id: routeQuery.id,
        type: 'search',
        redirect: `/design/list?id=${routeQuery.id}`
      }
    })
  }
  const columnDrop = () => {
    const wrapperTr = container.value.querySelector(
      '.el-table__header-wrapper tr'
    )
    Sortable.create(wrapperTr, {
      animation: 180,
      delay: 0,
      onEnd: (evt: any) => {
        const oldItem = tableData.value.columns[evt.oldIndex]
        tableData.value.columns.splice(evt.oldIndex, 1)
        tableData.value.columns.splice(evt.newIndex, 0, oldItem)
        // 重染表格，否则点下面的设置对不上了
        state.refreshTable = false
        nextTick(() => {
          state.refreshTable = true
          nextTick(() => {
            columnDrop() // 拖完后拖不到了，再执行一下
          })
        })
      }
    })
  }
  // 数据相关
  // 根据所选择的表单获取当前设计的所有字段

  const saveData = () => {
    const { formId, name } = tableData.value.config
    const { list, del } = tableData.value.apiKey
    if (!formId && (!list || !del)) {
      return ElMessage.error('请选择所属表单或配置接口url')
    }
    const params = {
      listData: objToStringify(tableData.value), // 列表数据
      data: '{}', // 搜索表单数据，搜索设置不在这里修改
      source: formId,
      name: name || '未命名列表', // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 2 // 1表单 2列表
    }
    let apiKey = 'designSave'
    if (routeQuery.id) {
      // 编辑状态 当前记录id
      Object.assign(params, { id: routeQuery.id })
      apiKey = 'designEdit'
    } else {
      params.status = 1 //添加时默认启用
    }
    state.loading = true
    getRequest(apiKey, params)
      .then(() => {
        ElMessage({
          message: '保存成功！',
          type: 'success'
        })
        router.push({ path: '/design/list/list' })
        state.loading = false
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '保存异常')
        state.loading = false
      })
  }

  // 数据相关结束
  onMounted(() => {
    stringTableData.value = JSON.stringify(tableData.value) // 用于恢复初始值
    nextTick(() => {
      columnDrop()
    })
    if (routeQuery.id) {
      getInitData(routeQuery.id).then(
        ({ tableData: tableData2, searchData, dict, source }) => {
          tableData.value = tableData2 // 列表数据
          state.searchData = searchData // 搜索表单数据
          if (tableData2.config.formId) {
            // 根据选择的表单获取可供选择的表头
            getFormColumns(source).then(data => {
              state.formFieldList = data
            })
          }
        }
      )
    }
    // 从表单列表点创建列表，带有当前表单id，一键创建表单时
    if (routeQuery.form) {
      tableData.value.config.formId = routeQuery.form
      getFormColumns(routeQuery.form).then(data => {
        tableData.value.columns = data
        //todo 添加上方及右侧按钮
      })
    }
  })
</script>
