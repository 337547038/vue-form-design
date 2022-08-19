<!-- Created by 337547038 列表设计. -->
<template>
  <div class="design-container design-table" v-loading="state.loading">
    <div class="components-list">
      <template v-if="state.filedList?.length">
        <div class="title">可选字段</div>
        <div class="content">
          <el-checkbox-group v-model="state.checkboxGroup" size="small">
            <el-checkbox
              v-for="item in state.filedList"
              :label="item.label"
              :border="true"
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
            :border="true"
            :key="item.prop"
            @change="checkChange(item)"
          />
        </el-checkbox-group>
      </div>
      <div class="title">操作按钮</div>
      <div class="content">
        <el-checkbox-group v-model="state.controlBtnGroup" size="small">
          <el-checkbox
            v-for="item in state.controlBtn"
            :label="item.key"
            :key="item.prop"
            @change="btnCheckChange(item)"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </div>
      <div class="title">
        <el-button size="small" @click="editOtherField"
          >编辑自定义字段
        </el-button>
      </div>
    </div>
    <div class="main-body">
      <headTools @click="headToolClick" type="2" />
      <div class="main-form main-table">
        <p style="padding: 10px 0">提示：点击表头可拖动改变顺序；</p>
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
          v-bind="state.tableData.config"
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
                <span v-else @click.stop="rowClick(item)"
                  >点击单元格可对列个性化设置</span
                >
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
              <el-form-item label="值匹配字典">
                <el-input
                  placeholder="字典对应的key"
                  v-model="state.config.dictKey"
                  @change="configChange"
                />
              </el-form-item>
              <!--              <el-form-item label="Tag标签显示">
                <el-switch
                  v-model="state.config.isTag"
                  @change="configChange"
                />
              </el-form-item>-->
              <el-form-item
                v-for="(tag, index) in state.config.tagList"
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
                <i class="icon-del" @click="delTagOption(index)"></i>
              </el-form-item>
              <el-form-item>
                <el-button @click="tagAdd">新增Tag标签显示</el-button>
              </el-form-item>
            </div>
          </el-tab-pane>
          <el-tab-pane label="表格属性" name="second">
            请使用生成脚本预览功能，编辑config属性
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
    <el-drawer
      v-model="state.visibleDialog"
      size="60%"
      direction="rtl"
      custom-class="json-dialog"
      :append-to-body="true"
      :before-close="drawerBeforeClose"
    >
      <div v-if="state.visibleDialog" id="editJson"></div>
      <div class="dialog-footer">
        <el-button type="primary" size="small" @click="dialogConfirm">
          确定
        </el-button>
      </div>
    </el-drawer>
    <vue-File ref="vueFileEl" />
  </div>
</template>

<script setup>
  import headTools from './components/headTools.vue'
  import { getRequest } from '@/api'
  import {
    reactive,
    ref,
    nextTick,
    onUnmounted,
    onMounted,
    getCurrentInstance
  } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import vueFile from './components/vueFile.vue'
  import { aceEdit } from './components/comm'
  import { ElMessage } from 'element-plus'
  import Sortable from 'sortablejs'
  import { objToStringify, stringToObj } from '@/utils/form'

  const router = useRouter()
  const route = useRoute()
  const { proxy } = getCurrentInstance()
  const vueFileEl = ref()
  const state = reactive({
    filedList: [], // 可选字段
    otherFiled: [
      { label: '勾选', prop: '__selection', type: 'selection' },
      { label: '序号', prop: '__index', type: 'index' },
      { label: '操作', prop: '__control' }
    ],
    checkboxGroup: [], // 左则已勾选的值
    controlBtn: [
      {
        label: '新增',
        key: 'add',
        type: 'primary',
        size: 'small'
      },
      {
        label: '删除',
        key: 'del',
        size: 'small'
      }
    ],
    controlBtnGroup: [],
    tableData: {
      config: {}, //表格所有参数
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
    config: {
      tagList: []
    }
  })
  const excludeType = ['txt', 'title', 'table', 'component', 'upload']
  const filterFiled = (obj) => {
    obj?.list.forEach((item) => {
      if (item.type === 'grid' || item.type === 'tabs') {
        item.columns.forEach((col) => {
          filterFiled(col)
        })
      } else if (item.type === 'card') {
        filterFiled(item)
      } else if (excludeType.indexOf(item.type) === -1) {
        state.filedList.push({
          prop: item.name,
          label: item.item.label,
          help: item.config.help || ''
        })
      }
    })
  }
  const headToolClick = (type) => {
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
      case 'import':
        // 导入脚本
        dialogOpen({})
        break
      case 'save':
        // 保存
        saveData()
        break
    }
  }
  const checkChange = (item) => {
    // 判断是否存在
    const indexOf = state.checkboxGroup.indexOf(item.label)
    if (indexOf === -1) {
      // 存在，点击时checkboxGroup的值会先改变，再执行checkChange方法，因此这里＝＝＝-1表示存在
      state.tableData.columns.forEach((col, index) => {
        if (col.label === item.label && col.prop === item.prop) {
          state.tableData.columns.splice(index, 1)
        }
      })
    } else {
      state.tableData.columns.push(item)
    }
  }
  // 打开
  const dialogOpen = (obj) => {
    state.visibleDialog = true
    const editData = objToStringify(obj, true)
    nextTick(() => {
      state.editor = aceEdit(editData)
    })
  }
  const dialogConfirm = () => {
    try {
      // 将当前数据更新至state.tableData
      if (state.editIndex !== '') {
        // 表示编辑单个属性
        state.tableData.columns[state.editIndex] = stringToObj(
          state.editor.getValue()
        )
        state.editIndex = '' // 清空
      } else {
        state.tableData = stringToObj(state.editor.getValue())
      }
      state.visibleDialog = false
    } catch (res) {
      // console.log(res.message)
      ElMessage.error(res.message)
    }
  }
  // 保存数据，将数据保存到服务端
  const saveData = () => {
    state.loading = true
    const prams = {
      tableData: objToStringify(state.tableData),
      id: state.id, // 修改时，当前记录id
      searchData: state.dataTemp.searchData,
      formData: state.dataTemp.formData,
      name: state.dataTemp.name // 表单名称，用于在显示所有已创建的表单列表里显示
    }
    getRequest('saveForm', prams)
      .then((res) => {
        ElMessage({
          message: res.data || '保存成功！',
          type: 'success'
        })
        router.push({ path: '/designform/formlist' })
        state.loading = false
      })
      .catch((res) => {
        ElMessage.error(res.data || '保存异常')
        state.loading = false
      })
  }
  const drawerBeforeClose = (done) => {
    state.editIndex = '' // 清空
    done()
  }
  const editOtherField = () => {
    dialogOpen(state.tableData)
  }
  // 字段属性编辑下拉选择
  const selectChange = (prop) => {
    let obj = {}
    state.tableData.columns.forEach((item, index) => {
      if (item.prop === prop) {
        obj = item
        state.editIndex = index
      }
    })
    // 打开编辑窗口
    dialogOpen(obj)
  }
  const btnCheckChange = (obj) => {
    let btn = state.tableData?.controlBtn
    let index = -1
    if (btn) {
      btn.forEach((item, i) => {
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
      state.tableData.controlBtn.push(obj)
    }
  }
  const columnDrop = () => {
    // const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
    const wrapperTr = proxy.$el.querySelector('.el-table__header-wrapper tr')
    Sortable.create(wrapperTr, {
      animation: 180,
      delay: 0,
      onEnd: (evt) => {
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
          // 将表头数据在左则对应选中
          state.tableData.columns.forEach((item) => {
            state.checkboxGroup.push(item.label)
          })
          state.tableData.controlBtn?.forEach((item) => {
            state.controlBtnGroup.push(item.key || item.label)
          })
        }
      })
    }
  }
  const rowClick = (column) => {
    state.attrObj = column
    state.config = column.config || {}
  }
  const delTagOption = (index) => {
    state.config.tagList.splice(index, 1)
  }
  const tagAdd = () => {
    if (!state.config?.tagList) {
      state.config.tagList = []
    }
    state.config.tagList.push({
      value: '',
      type: ''
    })
  }
  const configChange = () => {
    // 将数据合并
    Object.assign(state.attrObj, { config: state.config })
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
