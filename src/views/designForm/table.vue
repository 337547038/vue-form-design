<!-- Created by 337547038 列表设计. -->
<template>
  <div class="design-container design-table" v-loading="state.loading">
    <div class="components-list">
      <template v-if="state.filedList?.length && state.id && !isTableType">
        <div class="title">可选字段</div>
        <div class="content">
          <el-checkbox-group v-model="state.checkboxGroup" size="small">
            <el-checkbox
              v-for="item in state.filedList"
              :label="item.label"
              :key="item.prop"
              @change="checkChange(item)"
            />
          </el-checkbox-group>
        </div>
      </template>
      <div class="title">其他字段</div>
      <div class="content">
        <el-checkbox-group v-model="state.checkboxGroup" size="small">
          <el-checkbox
            v-for="item in state.otherFiled"
            :label="item.label"
            :key="item.prop"
            @change="checkChange(item)"
          />
        </el-checkbox-group>
      </div>
      <div class="title">操作按钮</div>
      <div class="content">
        <el-checkbox-group v-model="state.controlBtnGroup" size="small">
          <el-checkbox
            v-for="item in state.controlBtn.filter((item) => !item.hide)"
            :label="item.key"
            :key="item.prop"
            @change="btnCheckChange(item)"
            >{{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="title">
        <el-button size="small" @click="editOpenDrawer('columns')"
          >编辑自定义字段
        </el-button>
      </div>
    </div>
    <div class="main-body">
      <headTools @click="headToolClick" type="2" />
      <div class="main-form main-table">
        <p style="padding: 10px 0">提示：点击表头可拖动改变顺序</p>
        <DesignForm
          :type="2"
          v-if="state.searchData?.list?.length"
          :form-data="state.searchData"
          :dict="state.dict"
          :requestUrl="false"
        />
        <div class="control-btn">
          <el-button
            v-for="item in state.tableData?.controlBtn"
            v-bind="item"
            :key="item.label"
          >
            {{ item.label }}
          </el-button>
        </div>
        <el-table
          :data="state.dataList"
          v-bind="state.tableData.tableProps"
          ref="tableEl"
        >
          <template
            v-for="item in state.tableData.columns"
            :key="item.prop || item.label"
          >
            <el-table-column v-bind="item">
              <template #header="scope" v-if="item.help">
                {{ scope.column.label }}
                <el-tooltip placement="top">
                  <template #content>
                    <span v-html="item.help"></span>
                  </template>
                  <i class="icon-help"></i>
                </el-tooltip>
              </template>
              <template #default v-if="item.type !== 'index'">
                <el-checkbox v-if="item.type === 'selection'" />
                <span v-else-if="item.prop === '__control'">编辑 删除</span>
                <span v-else @click.stop="rowClick(item)">设置</span>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
    </div>
    <div class="sidebar-tools">
      <el-form size="small">
        <el-tabs modelValue="first">
          <el-tab-pane label="字段属性" name="first">
            <el-form-item label="选择表头字段">
              <el-select v-model="state.selectCheck" @change="selectChange">
                <el-option
                  v-for="item in state.tableData.columns"
                  :key="item.prop"
                  :value="item.prop"
                  :label="item.label"
                />
              </el-select>
            </el-form-item>
            <div v-show="Object.keys(state.attrObj).length">
              <h3>{{ state.attrObj.label }}个性化设置</h3>
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
                      <el-option label="default" value="default" />
                      <el-option label="success" value="success" />
                      <el-option label="info" value="info" />
                      <el-option label="warning" value="warning" />
                      <el-option label="danger" value="danger" />
                    </el-select>
                  </template>
                </el-input>
                <i class="icon-del" @click="delTagOption(index)"></i>
              </el-form-item>
              <el-form-item>
                <el-button @click="tagAdd">新增Tag标签显示</el-button>
              </el-form-item>
            </div>
          </el-tab-pane>
          <el-tab-pane label="数据列表配置" name="second">
            <template v-if="isTableType">
              <el-form-item label="数据列表名称">
                <el-input
                  v-model="state.name"
                  placeholder="请输入数据列表名称"
                />
              </el-form-item>
              <el-form-item label="数据源Id">
                <el-input v-model="state.formId" placeholder="请输入数据源Id" />
              </el-form-item>
            </template>
            <el-form-item label="开启侧栏树">
              <el-switch v-model="state.treeData.show" @change="treeSwitch" />
            </el-form-item>
            <el-form-item v-show="state.treeData.show">
              <el-button @click="editOpenDrawer('tree')"
                >编辑侧栏树属性
              </el-button>
            </el-form-item>
            <el-form-item class="event-btn">
              <el-button @click="editOpenDrawer('tableConfig')"
                >编辑表格属性
              </el-button>
              <el-button @click="editOpenDrawer('dict')"
                >设置数据字典
                <el-tooltip
                  content="数据字典，用于匹配多选组、下拉选择等，提供动态获取Options接口字典数据，一般不设置，从接口dict获取。格式：{0:'男',1:'女'}"
                  placement="top"
                >
                  <el-icon>
                    <QuestionFilled />
                  </el-icon>
                </el-tooltip>
              </el-button>
              <el-button @click="editOpenDrawer('beforeRequest')"
                >beforeRequest
              </el-button>
              <el-button @click="editOpenDrawer('afterResponse')"
                >afterResponse
              </el-button>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
    <el-drawer
      v-model="state.visibleDialog"
      size="60%"
      :direction="state.direction"
      custom-class="ace-dialog"
      :append-to-body="true"
      :before-close="drawerBeforeClose"
    >
      <template #header>
        <div v-html="state.dialogTitle"></div>
      </template>
      <div v-if="state.visibleDialog" id="editJson"></div>
      <div class="dialog-footer">
        <el-button type="primary" size="small" @click="dialogConfirm">
          确定
        </el-button>
      </div>
    </el-drawer>
    <VueFile ref="vueFileEl" />
  </div>
</template>

<script setup lang="ts">
  import HeadTools from './components/headTools.vue'
  import DesignForm from './components/form.vue'
  import { getRequest } from '@/api'
  import {
    reactive,
    ref,
    nextTick,
    onUnmounted,
    onMounted,
    getCurrentInstance,
    computed
  } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import VueFile from './components/vueFile.vue'
  import { aceEdit, afterResponse, beforeRequest } from './components/utils'
  import { ElMessage } from 'element-plus'
  import Sortable from 'sortablejs'
  import {
    json2string,
    objToStringify,
    string2json,
    stringToObj
  } from '@/utils/form'
  import { FormList } from './types'

  const router = useRouter()
  const route = useRoute()
  const { proxy } = getCurrentInstance()
  const vueFileEl = ref()
  const isTableType = computed(() => {
    return route.query.type === 'table'
  })
  const state = reactive({
    direction: 'rtl',
    filedList: [], // 可选字段
    otherFiled: [
      { label: '勾选', prop: '__selection', type: 'selection' },
      { label: '序号', prop: '__index', type: 'index', width: '70px' },
      { label: '操作', prop: '__control' }
    ],
    checkboxGroup: [], // 左则已勾选的值
    controlBtn: [
      {
        label: '新增',
        key: 'add',
        type: 'primary',
        size: 'small',
        hide: isTableType.value
      },
      {
        label: '删除',
        key: 'del',
        size: 'small'
      }
    ],
    controlBtnGroup: [],
    tableData: {
      tableProps: {}, //表格所有参数
      columns: [],
      controlBtn: []
    },
    editor: {},
    visibleDialog: false,
    loading: false,
    id: route.query.id,
    selectCheck: '', // 属于选择的值
    editIndex: '', // 当前编辑的属于在数组的位置
    dataList: [{}], // 表格行数据
    dataTemp: {}, // 暂存接口获取到的数据
    attrObj: {}, // 当前选中设置的字段属性
    tagList: [],
    config: {},
    name: '',
    formId: '',
    dict: {},
    searchData: {},
    dialogTitle: '',
    treeData: {} // 左侧树相关
  })
  const excludeType = ['txt', 'title', 'table', 'component', 'upload']
  const filterFiled = (obj: any) => {
    obj?.list.forEach((item: FormList) => {
      if (item.type === 'grid' || item.type === 'tabs') {
        item.columns.forEach((col: FormList) => {
          filterFiled(col)
        })
      } else if (item.type === 'card') {
        filterFiled(item)
      } else if (excludeType.indexOf(item.type) === -1) {
        state.filedList.push({
          prop: item.name,
          label: item.item?.label,
          help: item.config.help || ''
        })
      }
    })
  }
  const headToolClick = (type: string) => {
    switch (type) {
      case 'del':
        // 清空
        state.tableData.columns = []
        state.checkboxGroup = []
        break
      case 'json':
        // 生成脚本
        dialogOpen(state.tableData)
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
  const checkChange = (item: any) => {
    // 判断是否存在
    const indexOf = state.checkboxGroup.indexOf(item.label)
    if (indexOf === -1) {
      // 存在，点击时checkboxGroup的值会先改变，再执行checkChange方法，因此这里＝＝＝-1表示存在
      state.tableData.columns.forEach((col: any, index: number) => {
        if (col.label === item.label && col.prop === item.prop) {
          state.tableData.columns.splice(index, 1)
        }
      })
    } else {
      state.tableData.columns.push(item)
    }
  }
  // 打开
  const dialogOpen = (obj: any, params: any = {}) => {
    state.direction = params.direction || 'rtl'
    state.visibleDialog = true
    state.dialogTitle = params.title
    const editData =
      params.type === 'dict'
        ? json2string(obj, true)
        : objToStringify(obj, true)
    nextTick(() => {
      state.editor = aceEdit(editData)
    })
  }
  const dialogConfirm = () => {
    try {
      const val = stringToObj(state.editor.getValue())
      switch (state.editIndex) {
        case 'columns':
          // 编辑自定义字段
          state.tableData.columns = val
          break
        case 'tableConfig':
          // 表格属性
          state.tableData.tableProps = val
          break
        case 'dict':
          state.dict = string2json(state.editor.getValue())
          break
        case 'beforeRequest':
        case 'afterResponse':
          if (!state.tableData.events) {
            state.tableData.events = {}
          }
          state.tableData.events[state.editIndex] = val
          break
        case 'tree':
          state.tableData.tree = val
          break
      }
      if (state.editIndex !== '') {
        // 将当前数据更新至state.tableData
        // 表示编辑单个属性
        state.tableData.columns[state.editIndex] = val
      } else {
        state.tableData = val
      }
      state.editIndex = '' // 清空
      state.visibleDialog = false
    } catch (res: any) {
      // console.log(res.message)
      ElMessage.error(res.message)
    }
  }
  // 保存数据，将数据保存到服务端
  const saveData = () => {
    const name = state.name || state.dataTemp.name
    if (!name) {
      ElMessage.error(
        isTableType.value ? '请输入数据列表名称' : '请输入表单名称'
      )
      return
    }
    state.loading = true
    const prams = Object.assign(state.dataTemp, {
      tableData: objToStringify(state.tableData),
      id: state.id, // 修改时，当前记录id
      name: name, // 表单名称，用于在显示所有已创建的表单列表里显示
      formId: state.formId || state.dataTemp.formId,
      type: state.dataTemp.type || 2,
      dict: json2string(state.dict)
    })
    getRequest('saveForm', prams)
      .then((res: any) => {
        console.log(res)
        ElMessage({
          message: res.data.message || '保存成功！',
          type: 'success'
        })
        router.push({ path: '/designform/formlist' })
        state.loading = false
      })
      .catch((res: any) => {
        ElMessage.error(res.data.message || '保存异常')
        state.loading = false
      })
  }
  const drawerBeforeClose = (done: any) => {
    state.editIndex = '' // 清空
    done()
  }
  const editOpenDrawer = (type: string) => {
    state.editIndex = type
    switch (type) {
      case 'dict':
        dialogOpen(state.dict || {}, { direction: 'ltr', type: type })
        break
      case 'tableConfig':
        dialogOpen(state.tableData.tableProps, { direction: 'ltr' })
        break
      case 'columns':
        dialogOpen(state.tableData.columns)
        break
      case 'beforeRequest':
      case 'afterResponse':
        const newData = state.tableData.events || {}
        const fn = type === 'beforeRequest' ? beforeRequest : afterResponse
        dialogOpen(newData[type] || fn, { direction: 'ltr' })
        break
      case 'tree':
        let tree = state.tableData.tree || {}
        if (Object.keys(tree).length === 1) {
          tree = {
            show: true,
            name: '唯一标识', // 唯一标识
            request: 'post',
            sourceFun: '请求url'
          }
        }
        dialogOpen(tree, { direction: 'ltr', title: '更多参数详见ak-list组件' })
        break
    }
  }
  // 字段属性编辑下拉选择
  const selectChange = (prop: string) => {
    let obj = {}
    state.tableData.columns.forEach((item: any, index: number) => {
      if (item.prop === prop) {
        obj = item
        state.editIndex = index
      }
    })
    // 打开编辑窗口
    dialogOpen(obj)
  }
  const btnCheckChange = (obj: any) => {
    let btn = state.tableData?.controlBtn
    let index = -1
    if (btn) {
      btn.forEach((item: any, i: number) => {
        if (item.key === obj.key || item.label === obj.label) {
          index = i
        }
      })
    } else {
      state.tableData.controlBtn = []
    }
    if (index !== -1) {
      state.tableData.controlBtn.splice(index, 1)
    } else {
      delete obj.hide
      state.tableData.controlBtn.push(obj)
    }
  }
  const columnDrop = () => {
    // const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
    const wrapperTr = proxy.$el.querySelector('.el-table__header-wrapper tr')
    Sortable.create(wrapperTr, {
      animation: 180,
      delay: 0,
      onEnd: (evt: any) => {
        const oldItem = state.tableData.columns[evt.oldIndex]
        state.tableData.columns.splice(evt.oldIndex, 1)
        state.tableData.columns.splice(evt.newIndex, 0, oldItem)
      }
    })
  }
  // 根据id获取表单可选字段
  const init = () => {
    if (state.id) {
      getRequest('getFormById', { id: state.id }).then((res) => {
        if (res.data.code === 200) {
          const result = res.data.data
          state.dataTemp = result
          filterFiled(stringToObj(result.formData)) // 获取表单数据，从表单里提取可选择的表头字段
          if (result.tableData) {
            state.tableData = stringToObj(result.tableData)
          }
          if (result.searchData) {
            state.searchData = stringToObj(result.searchData)
          }
          if (isTableType.value) {
            state.name = result.name
            state.formId = result.formId
          }
          // 将表头数据在左则对应选中
          state.tableData.columns.forEach((item: any) => {
            state.checkboxGroup.push(item.label)
          })
          state.tableData.controlBtn?.forEach((item: any) => {
            state.controlBtnGroup.push(item.key || item.label)
          })
          state.treeData = state.tableData?.tree || {}
          state.dict = string2json(result.dict)
        }
      })
    }
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
  }
  const delTagOption = (index: number) => {
    state.tagList.splice(index, 1)
    configChange()
  }
  const tagAdd = () => {
    state.tagList.push({
      value: '',
      type: 'default'
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
  // 侧栏树
  const treeSwitch = (val: boolean) => {
    if (!state.tableData.tree) {
      state.tableData.tree = {}
    }
    state.tableData.tree.show = val
  }
  onMounted(() => {
    nextTick(() => {
      init()
      columnDrop()
    })
  })
  onUnmounted(() => {
    if (Object.keys(state.editor).length !== 0) {
      state.editor.destroy()
      state.editor.container.remove()
    }
  })
</script>
