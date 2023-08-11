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
                  >添加表格列字段</el-button
                >
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
            <design-form
              is-search
              v-if="state.searchData?.list?.length"
              :form-data="state.searchData"
              :dict="state.dict"
              requestUrl=""
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
                  state.tableData?.controlBtn?.length === 0 ||
                  !state.tableData?.controlBtn
                "
              >
                操作按钮区域，点击可添加如新增、删除
              </div>
              <el-button
                v-for="item in state.tableData?.controlBtn"
                v-bind="item"
                :key="item.label"
              >
                {{ item.label }}
              </el-button>
            </div>
            <div class="control-other">
              <el-button
                size="small"
                circle
                icon="Search"
                v-if="state.tableData.config?.expand"
              />
              <el-button
                size="small"
                circle
                icon="SetUp"
                v-if="state.tableData.config?.columnsSetting !== false"
              />
            </div>
          </div>
          <div class="tip" v-if="!state.tableData.columns?.length">
            表格列设置区域，可从左上角 添加表格列字段
            选择已有列或直接从上方工具栏 生成脚本预览 编辑
          </div>
          <el-table
            :data="[{}]"
            v-bind="state.tableData.tableProps || {}"
            ref="tableEl"
            v-if="state.refreshTable"
          >
            <template
              v-for="item in state.tableData.columns"
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
                  <span v-else @click.stop="rowClick(item)">设置</span>
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
      <div class="sidebar-tools">
        <el-form size="small" class="form">
          <el-tabs v-model="state.tabsName">
            <el-tab-pane label="字段属性" name="first">
              <div v-show="Object.keys(state.attrObj).length">
                <div class="h3">
                  <h3>{{ state.attrObj.label }}</h3>
                  个性化设置
                </div>
                <template v-if="state.attrObj.prop === '__control'">
                  <el-form-item>
                    <el-button @click="editOpenDrawer('operateBtn')"
                      >操作按钮设置</el-button
                    >
                  </el-form-item>
                </template>
                <template v-else>
                  <el-form-item label="时间格式化">
                    <el-select
                      v-model="state.config.formatter"
                      @change="objectMerge"
                    >
                      <el-option
                        label="{y}-{m}-{d} {h}:{i}:{s}"
                        value="{y}-{m}-{d} {h}:{i}:{s}"
                      />
                      <el-option label="{y}-{m}-{d}" value="{y}-{m}-{d}" />
                      <el-option label="{h}:{i}:{s}" value="{h}:{i}:{s}" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="值匹配字典">
                    <el-input
                      placeholder="字典对应的key"
                      v-model="state.config.dictKey"
                      @change="objectMerge"
                    />
                  </el-form-item>
                  <el-form-item
                    v-for="(tag, index) in state.tagList"
                    :key="index"
                    class="table-tag"
                  >
                    <el-input
                      placeholder="值对应的类型"
                      v-model="tag.value"
                      @change="configChange"
                    >
                      <template #append>
                        <el-select
                          style="width: 80px"
                          v-model="tag.type"
                          @change="configChange"
                        >
                          <el-option label="success" value="success" />
                          <el-option label="info" value="info" />
                          <el-option label="warning" value="warning" />
                          <el-option label="danger" value="danger" />
                        </el-select>
                      </template>
                    </el-input>
                    <i
                      class="icon-del"
                      @click="delTagOption(index as number)"
                    ></i>
                  </el-form-item>
                  <el-form-item>
                    <el-button @click="tagAdd">新增Tag标签显示</el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button @click="editAttr"
                      >编辑{{ state.attrObj.label }}属性
                    </el-button>
                  </el-form-item>
                </template>
              </div>
            </el-tab-pane>
            <el-tab-pane label="数据列表配置" name="second">
              <el-form-item
                v-for="(item, index) in tableListAttr.filter(
                  item => !item.hide
                )"
                :label="item.label"
                :key="index"
              >
                <el-select
                  v-if="item.type === 'select'"
                  v-model="item.value"
                  :placeholder="item.placeholder"
                  :clearable="true"
                  @change="tableListAttrChange(item)"
                >
                  <el-option
                    :label="opt.label || opt.name"
                    v-for="opt in item.options"
                    :key="opt.label || opt.name"
                    :value="formatNumber(opt.value ?? opt.id)"
                  />
                </el-select>
                <el-switch
                  v-else-if="item.type === 'switch'"
                  v-model="item.value"
                  @input="tableListAttrChange(item, $event)"
                />
                <el-input
                  v-else
                  v-model="item.value"
                  :placeholder="item.placeholder"
                  @input="tableListAttrChange(item)"
                />
              </el-form-item>
              <el-form-item
                v-show="state.tableData.treeData?.show"
                class="event-btn"
              >
                <el-button @click="editOpenDrawer('tree')"
                  >编辑侧栏树属性
                </el-button>
                <el-button @click="editOpenDrawer('treeBeforeRequest')"
                  >beforeRequest
                </el-button>
                <el-button @click="editOpenDrawer('treeAfterResponse')"
                  >afterResponse
                </el-button>
              </el-form-item>
              <el-form-item class="event-btn">
                <el-button @click="editOpenDrawer('tableConfig')"
                  >编辑表格属性
                </el-button>
                <el-button @click="editOpenDrawer('dict')"
                  >设置数据字典
                  <el-tooltip :content="tooltip.dict" placement="top">
                    <el-icon>
                      <QuestionFilled />
                    </el-icon>
                  </el-tooltip>
                </el-button>
              </el-form-item>
              <div class="h3"><h3>接口数据事件</h3></div>
              <el-form-item label="列表数据请求URL">
                <el-input
                  placeholder="一般不需要填写，使用默认值"
                  v-model="state.tableData.config.requestUrl"
                />
              </el-form-item>
              <el-form-item label="删除列表数据URL">
                <el-input
                  placeholder="一般不需要填写，使用默认值"
                  v-model="state.tableData.config.deleteUrl"
                />
              </el-form-item>
              <el-form-item class="event-btn">
                <el-button @click="editOpenDrawer('beforeRequest')"
                  >beforeRequest
                </el-button>
                <el-button @click="editOpenDrawer('afterResponse')"
                  >afterResponse
                </el-button>
                <el-button @click="editOpenDrawer('beforeDelete')"
                  >beforeDelete
                </el-button>
              </el-form-item>
            </el-tab-pane>
          </el-tabs>
        </el-form>
      </div>
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
      <table-list
        :tableData="state.tableData"
        :searchData="state.searchData"
        v-if="state.previewVisible"
      />
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
  import { reactive, ref, nextTick, onMounted, computed } from 'vue'
  import HeadTools from '../components/headTools.vue'
  import DesignForm from '../form/components/form.vue'
  import VueFile from '../components/vueFile.vue'
  import AceDrawer from '../components/aceDrawer.vue'
  import TableList from './components/list.vue'
  import Sortable from 'sortablejs'
  import {
    json2string,
    objToStringify,
    string2json,
    stringToObj
  } from '@/utils/form'
  import { beforeRequest, afterResponse, formatNumber } from '../utils'
  import { getRequest } from '@/api'
  import type { FormList } from '../types'
  import { useRouter, useRoute } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import { useLayoutStore } from '@/store/layout'
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '设计管理' }, { label: '列表页设计' }])
  const vueFileEl = ref()
  const container = ref()
  const routeQuery = useRoute().query
  const router = useRouter()
  const state = reactive({
    tableData: {
      // tableProps: {}, //表格所有参数
      columns: [],
      config: {}
    },
    searchData: {},
    loading: false,
    attrObj: {},
    config: {},
    tagList: {},
    formId: routeQuery.form || '',
    formList: [], // 所有可选表单数据源
    name: '',
    treeData: {}, // 左侧树相关
    previewVisible: false,
    tabsName: 'second',
    formFieldList: [], // 表单数据源所有可选字段
    dict: {},
    refreshTable: true
  })
  const drawer = reactive({
    visible: false,
    title: '',
    direction: '',
    content: '',
    codeType: ''
  })
  const tooltip = reactive({
    dict: '数据字典，用于匹配多选组、下拉选择等，提供动态获取Options接口字典数据，一般不设置，从接口dict获取。格式JSON："sex":{"0":"男","1":"女"}',
    afterResponse:
      '提示：获取列表初始数据后事件，可对请求返回数据进行处理，也可为字符串，如opt="formatTest"',
    beforeRequest: '提示：获取列表初始数据前事件，可修改请求参数',
    beforeDelete: '提示：可对删除前提交参数处理'
  })
  const drawerBeforeClose = () => {
    drawer.visible = false
    drawer.content = ''
    drawer.codeType = ''
    drawer.title = ''
  }
  const tableListAttr = computed(() => {
    return [
      {
        label: '所属表单',
        placeholder: '请选择所属表单',
        value: parseInt(state.formId) || '',
        key: 'formId',
        type: 'select',
        options: state.formList,
        clearable: true
      },
      {
        label: '数据列表名称',
        placeholder: '保存的数据列表名称',
        value: state.name,
        key: 'name'
      },
      // {
      //   label: '类别',
      //   placeholder: '保存的类别，方便管理',
      //   value: state.category,
      //   type: 'select',
      //   key: 'category',
      //   options: [
      //     { label: 'large', value: '1' },
      //     { label: 'default', value: '2' },
      //     { label: 'small', value: '3' }
      //   ]
      // },
      {
        label: '数据添加编辑打开方式',
        placeholder: '默认新页面打开',
        value: state.tableData.config?.openType,
        type: 'select',
        options: [
          { label: '弹窗', value: 'dialog' },
          { label: '新页面', value: 'page' }
        ],
        key: 'openType',
        path: 'config',
        clearable: true
        //hide: !state.formId
      },
      {
        label: '窗口宽度',
        placeholder: '弹窗宽度',
        value: state.tableData.config?.dialogWidth,
        type: 'input',
        key: 'dialogWidth',
        path: 'config',
        hide: state.tableData.config?.openType !== 'dialog'
      },
      {
        label: '横向滚动固定在底部',
        value: state.tableData.config?.fixedBottomScroll,
        key: 'fixedBottomScroll',
        type: 'select',
        placeholder: '默认开启',
        path: 'config',
        options: [
          {
            label: '启用',
            value: true
          },
          { label: '禁用', value: false }
        ],
        clearable: true
      },
      {
        label: '列显示隐藏设置',
        value: state.tableData.config?.columnsSetting,
        key: 'columnsSetting',
        type: 'select',
        placeholder: '默认开启',
        path: 'config',
        options: [
          {
            label: '启用',
            value: true
          },
          { label: '禁用', value: false }
        ],
        clearable: true
      },
      {
        label: '可折叠查询表单',
        value: state.tableData.config?.expand,
        key: 'expand',
        type: 'switch',
        path: 'config'
      },
      {
        label: '查询跳转页面',
        value: state.tableData.config?.searchJump,
        key: 'searchJump',
        type: 'switch',
        path: 'config'
      },
      {
        label: '操作列按钮下拉',
        value: state.tableData.config?.operateDropdown,
        key: 'operateDropdown',
        type: 'switch',
        path: 'config'
      },
      {
        label: '开启侧栏树',
        value: state.tableData.treeData?.show,
        key: 'tree',
        type: 'switch'
      }
    ]
  })
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
            //prop: '__selection',
            type: 'selection'
          },
          { label: '序号', type: 'index', width: '70px' },
          { label: '操作', prop: '__control' }
        ]
      }
    ]
    if (state.formFieldList?.length) {
      temp.unshift(formField)
    }
    return temp
  })
  const tableListAttrChange = (obj: any, val?: any) => {
    if (obj.key === 'tree') {
      if (!state.tableData.treeData) {
        state.tableData.treeData = {}
      }
      state.tableData.treeData.show = val
      return
    }
    if (obj.path === 'config') {
      state.tableData.config[obj.key] = obj.value
    } else {
      state[obj.key] = obj.value
    }
    if (obj.key === 'formId') {
      // 列表数据源选择时，需查当前表单所有字段
      if (!val && state.tableData.config?.openType === 'dialog') {
        // 没有选数据源时，将数据添加编辑打开方式改为默认，直接删除属性
        delete state.tableData.config.openType
      }
      getFormField(obj.value)
    }
  }
  // 删除表头列字段
  const delCol = (row: any) => {
    state.tableData.columns.forEach((item: any, index: number) => {
      if (item.prop === row.prop) {
        state.tableData.columns.splice(index, 1)
      }
    })
  }
  // 添加表头列
  const fieldSelectClick = (row: any, val: boolean) => {
    if (val) {
      // 先检查是否已存在
      let has = false
      state.tableData.columns.forEach((item: any) => {
        if (
          (item.prop && item.prop === row.prop) ||
          (item.type && item.type === row.type)
        ) {
          has = true
        }
        /*if (item.prop) {
          if (item.prop === row.prop) {
            has = true
          }
        } else {
          if (item.type === row.type) {
            has = true
          }
        }*/
      })
      if (!has) {
        state.tableData.columns.push(row)
      }
    } else {
      state.tableData.columns.forEach((item: any, index: number) => {
        if (item.prop === row.prop) {
          state.tableData.columns.splice(index, 1)
        }
      })
    }
  }
  const headToolClick = (type: string) => {
    switch (type) {
      case 'del':
        // 清空
        state.tableData.columns = []
        state.selectField = []
        break
      case 'eye':
        // 预览
        state.previewVisible = true
        break
      case 'json':
        // 生成脚本
        dialogOpen(state.tableData, { direction: 'rtl', type: 'json' })
        break
      case 'vue':
        // 导出vue文件
        vueFileEl.value.openTable(state.tableData)
        break
      case 'save':
        // 保存
        saveData()
        break
    }
  }
  const tagAdd = () => {
    state.tagList.push({
      value: '',
      type: 'success'
    })
  }
  const configChange = () => {
    // 转换tagList格式
    const temp: any = {}
    state.tagList.forEach((item: any) => {
      temp[item.value] = item.type
    })
    if (Object.keys(temp).length) {
      state.config.tagList = temp
    } else {
      delete state.config.tagList // 没有时删除字段
    }
    objectMerge()
  }
  const objectMerge = () => {
    // 将数据合并
    Object.assign(state.attrObj, { config: state.config })
  }
  const delTagOption = (index: number) => {
    state.tagList.splice(index, 1)
    configChange()
  }
  const editAttr = () => {
    dialogOpen(state.attrObj, {
      type: 'attr',
      title: '组件el-table-column属性'
    })
  }
  const editOpenDrawer = (type: string) => {
    switch (type) {
      case 'dict':
        dialogOpen(state.dict || {}, { type: type, title: tooltip.dict })
        break
      case 'tableConfig':
        dialogOpen(state.tableData.tableProps || {}, {
          type: type,
          title: 'el-table的相关属性'
        })
        break
      case 'beforeRequest':
      case 'afterResponse':
      case 'beforeDelete':
        // eslint-disable-next-line no-case-declarations
        const newData = state.tableData.events || {}
        dialogOpen(newData[type], { type: type, title: tooltip[type] })
        break
      case 'tree':
        // eslint-disable-next-line no-case-declarations
        let tree = state.tableData.treeData || {}
        if (Object.keys(tree).length === 1) {
          tree = {
            show: true,
            treeProps: {}, // tree props
            name: '唯一标识', // 唯一标识，用于
            method: 'post',
            requestUrl: ''
          }
        }
        dialogOpen(tree, {
          title: '更多参数详见ak-list组件',
          type: type
        })
        break
      case 'treeBeforeRequest':
        // eslint-disable-next-line no-case-declarations
        const treeData = state.tableData.treeData?.beforeRequest
        dialogOpen(treeData, {
          type: type,
          title: '侧栏树请求前处理事件，可对参数作处理'
        })
        break
      case 'treeAfterResponse':
        // eslint-disable-next-line no-case-declarations
        const treeData2 = state.tableData.treeData?.afterResponse
        dialogOpen(treeData2, {
          type: type,
          title:
            '侧栏树请求返回事件，可对返回数据处理；也可为字符串，如opt="formatTest"'
        })
        break
      case 'operateBtn':
        // eslint-disable-next-line no-case-declarations
        const btnObj = [
          {
            label: '编辑',
            key: 'edit'
          },
          {
            label: '删除',
            key: 'del'
          }
        ]
        dialogOpen(state.tableData.operateBtn || btnObj, {
          type: type,
          title:
            '可设置多个操作按钮，其中key=edit/del有内置处理事件，还可根据条件显示与隐藏'
        })
        break
      case 'controlBtn':
        // eslint-disable-next-line no-case-declarations
        const btnObj2 = [
          {
            label: '新增',
            key: 'add',
            type: 'primary',
            size: 'small',
            icon: 'plus'
          },
          {
            label: '批量删除',
            key: 'del',
            type: 'danger',
            size: 'small',
            icon: 'delete'
          }
        ]
        dialogOpen(state.tableData.controlBtn || btnObj2, {
          type: type,
          title: '可设置多个操作按钮，其中key=add/del有内置处理事件',
          direction: 'rtl'
        })
        break
    }
  }
  const dialogOpen = (obj: any, params: any = {}) => {
    drawer.visible = true
    Object.assign(drawer, { direction: 'ltr' }, params)
    let editData = objToStringify(obj, true)
    switch (params.type) {
      case 'dict':
        editData = json2string(obj, true)
        break
      case 'beforeRequest':
      case 'beforeDelete':
      case 'treeBeforeRequest':
        if (!obj) {
          editData = beforeRequest
        }
        break
      case 'afterResponse':
      case 'treeAfterResponse':
        if (!obj) {
          editData = afterResponse
        }
        break
    }
    drawer.content = editData
  }
  const dialogConfirm = (content: string) => {
    const val = stringToObj(content)
    switch (drawer.type) {
      case 'json':
        state.tableData = val
        break
      case 'tree':
        console.log(val)
        state.tableData.treeData = val
        break
      case 'operateBtn':
        state.tableData.operateBtn = val
        break
      case 'controlBtn':
        state.tableData.controlBtn = val
        break
      case 'dict':
        state.dict = string2json(content)
        break
      case 'beforeRequest':
      case 'afterResponse':
      case 'beforeDelete':
        if (!state.tableData.events) {
          state.tableData.events = {}
        }
        state.tableData.events[drawer.type] = val
        break
      case 'tableConfig':
        //if(state.tableData.p)
        state.tableData.tableProps = val
        break
      case 'treeBeforeRequest':
        state.tableData.treeData.beforeRequest = val
        break
      case 'treeAfterResponse':
        state.tableData.treeData.afterResponse = val
        break
    }
    drawerBeforeClose()
  }
  const rowClick = (column: any) => {
    state.attrObj = column
    state.config = column.config || {}
    const tagList = state.config.tagList
    state.tagList = []
    if (tagList) {
      for (const key in tagList) {
        state.tagList.push({
          value: key,
          type: tagList[key]
        })
      }
    }
    // 切换到字段属性
    state.tabsName = 'first'
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
        redirect: `/design/dataList?id=${routeQuery.id}`
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
        const oldItem = state.tableData.columns[evt.oldIndex]
        state.tableData.columns.splice(evt.oldIndex, 1)
        state.tableData.columns.splice(evt.newIndex, 0, oldItem)
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
  // 获取所有可用的表单数据源
  const getFormSourceList = () => {
    const params = {
      pageInfo: {
        pageSize: 100
      },
      type: 1 // 只获取表单的
    }
    getRequest('designList', params).then(res => {
      console.log('获取列表数据源', res)
      state.formList = res.data.list
    })
  }
  // 根据所选择的表单获取当前设计的所有字段
  const getFormField = (id: number) => {
    getRequest('designById', { id: id }).then(res => {
      console.log('获取当前数据下所有字段')
      const content = stringToObj(res.data.data)
      console.log('content', content)
      filterFiled(content)
    })
  }
  const excludeType = [
    'txt',
    'title',
    'table',
    'component',
    'upload',
    'button',
    'tinymce'
  ]
  const filterFiled = (obj: any) => {
    obj?.list.forEach((item: FormList) => {
      if (item.type === 'grid' || item.type === 'tabs') {
        item.columns.forEach((col: FormList) => {
          filterFiled(col)
        })
      } else if (['card', 'div'].includes(item.type)) {
        filterFiled(item)
      } else if (excludeType.indexOf(item.type) === -1 && item.name) {
        state.formFieldList.push({
          prop: item.name,
          label: item.item?.label,
          help: item.config.help || ''
        })
      }
    })
  }
  const saveData = () => {
    const { requestUrl, deleteUrl } = state.tableData.config
    if (!state.formId && (!requestUrl || !deleteUrl)) {
      return ElMessage.error('请选择所属表单或配置接口url')
    }
    const params = {
      listData: objToStringify(state.tableData), // 列表数据
      //data: state.searchData, // 搜索表单数据，搜索设置不在这里修改
      source: state.formId,
      name: state.name || '未命名列表', // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 2, // 1表单 2列表
      dict: json2string(state.dict)
    }
    let apiKey = 'designSave'
    if (routeQuery.id) {
      // 编辑状态 当前记录id
      Object.assign(params, { id: routeQuery.id })
      apiKey = 'designEdit'
    }
    state.loading = true
    getRequest(apiKey, params)
      .then(() => {
        ElMessage({
          message: '保存成功！',
          type: 'success'
        })
        router.push({ path: '/design/dataList/list' })
        state.loading = false
        window.sessionStorage.removeItem('formMenuList') // 清空菜单数据
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '保存异常')
        state.loading = false
      })
    // 清空右侧内容管理菜单存在session的内容，刷新时可重新加载新菜单
    if (!routeQuery.id) {
      // 新增时
      window.sessionStorage.removeItem('formMenuList')
    }
  }
  // 修改时获取初始数据
  const getInitData = (id: number) => {
    getRequest('designById', { id: id }).then(res => {
      const result = res.data
      state.tableData = stringToObj(result.listData) // 列表数据
      state.searchData = stringToObj(result.data) // 搜索表单数据
      state.name = result.name // 表单名称，用于在显示所有已创建的表单列表里显示
      state.formId = result.source
      state.dict = string2json(result.dict)
      // 如果有表单数据源，则加载，用于显示在 添加表格列字段处
      if (result.source) {
        getFormField(result.source)
      }
    })
  }
  // 数据相关结束
  onMounted(() => {
    nextTick(() => {
      columnDrop()
    })
    getFormSourceList()
    if (routeQuery.id) {
      getInitData(routeQuery.id)
    }
    // 从表单列表点创建列表，带有当前表单id
    if (routeQuery.form) {
      getFormField(routeQuery.form)
    }
  })
</script>
