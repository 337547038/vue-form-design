<!-- Created by 337547038 列表设计. -->
<template>
  <div class="container design-table" v-loading="loading">
    <div class="components-list">
      <template v-if="queryId">
        <div class="title">可选字段</div>
        <div class="content">
          <el-checkbox-group v-model="checkboxGroup" size="small">
            <el-checkbox
              v-for="item in filedList"
              :label="item.label"
              :border="true"
              :key="item.prop"
              @change="checkChange(item)">
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </template>
      <div class="title">其他字段</div>
      <div class="content">
        <el-checkbox-group v-model="checkboxGroup" size="small">
          <el-checkbox
            v-for="item in otherFiled"
            :label="item.label"
            :border="true"
            :key="item.prop"
            @change="checkChange(item)">
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="title">
        <el-button size="small" @click="editOtherField">编辑自定义字段</el-button>
      </div>
    </div>
    <div class="main-body">
      <headTools @click="headToolClick" type="2"></headTools>
      <div class="main-form main-table">
        <p>点击表头可拖动改变顺序</p>
        <main-table :tableData="tableData" :is-design="true"></main-table>
      </div>
    </div>
    <div class="sidebar-tools">
      <el-form size="small">
        <el-tabs modelValue="first">
          <el-tab-pane label="字段属性" name="first">
            <el-form-item label="选择表头字段">
              <el-select v-model="selectCheck" @change="selectChange">
                <el-option
                  v-for="item in tableData.columns"
                  :key="item.prop"
                  :value="item.prop"
                  :label="item.label">
                </el-option>
              </el-select>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="表格属性" name="second">
            请使用生成脚本预览功能，编辑config属性
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
    <el-drawer
      v-model="visibleDialog"
      size="60%"
      direction="rtl"
      custom-class="json-dialog"
      :append-to-body="true"
      :before-close="drawerBeforeClose">
      <div v-if="visibleDialog" id="editJson"></div>
      <div class="dialog-footer">
        <el-button
          type="primary"
          size="small"
          @click="dialogConfirm">
          确定
        </el-button>
      </div>
    </el-drawer>
    <vue-File ref="vueFileEl"></vue-File>
  </div>
</template>

<script>
import headTools from "./components/headTools.vue"
import {saveDesignForm, getDesignFormRow} from '@/api'
import {reactive, toRefs, ref, computed, nextTick, onUnmounted, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import mainTable from './components/table.vue'
import vueFile from "./components/vueFile.vue"
import {aceEdit} from "./components/aceEdit"
import {ElMessage} from 'element-plus'

export default {
  name: "list",
  props: {},
  components: {headTools, mainTable, vueFile},
  setup() {
    const route = useRoute()
    const vueFileEl = ref()
    const state = reactive({
      filedList: [], // 可选字段
      otherFiled: [
        {label: '勾选框', prop: '__selection'},
        {label: '序号', prop: '__index'},
        {label: '操作', prop: '__control'}
      ],
      checkboxGroup: [], // 左则已勾选的值
      tableData: {
        config: {},//表格所有参数
        columns: []
      },
      editor: {},
      visibleDialog: false,
      loading: false,
      queryId: '',
      selectCheck: '', // 属于选择的值
      editIndex: '' // 当前编辑的属于在数组的位置
    })
    // 根据id获取表单可选字段
    state.queryId = route.query.id
    if (state.queryId) {
      getDesignFormRow(state.queryId)
        .then(res => {
          if (res.data.code === 200) {
            filterFiled(JSON.parse(res.data.data[0].formData)) // 获取表单数据，从表单里提取可选择的表头字段
            state.tableData = JSON.parse(res.data.data[0].tableData)
            // 将表头数据在左则对应选中
            state.tableData.columns.forEach(item => {
              state.checkboxGroup.push(item.label)
            })
          }
        })
    }
    const excludeType = ['txt', 'title', 'table', 'component', 'upload']
    const filterFiled = obj => {
      obj.list.forEach(item => {
        if (item.type === 'grid' || item.type === 'tabs') {
          item.columns.forEach(col => {
            filterFiled(col)
          })
        } else if (item.type === 'card') {
          filterFiled(item)
        } else if (excludeType.indexOf(item.type) === -1) {
          state.filedList.push({
            prop: item.name,
            label: item.item.label,
            help: item.config.help
          })
        }
      })
    }
    const headToolClick = type => {
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
    const checkChange = item => {
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
    const dialogOpen = obj => {
      state.visibleDialog = true
      const editData = JSON.stringify(obj, null, 2)
      nextTick(() => {
        state.editor = aceEdit(editData)
      })
    }
    const dialogConfirm = () => {
      // 将当前数据更新至state.tableData
      if (state.editIndex !== '') {
        // 表示编辑单个属性
        state.tableData.columns[state.editIndex] = JSON.parse(state.editor.getValue())
        state.editIndex = '' // 清空
      } else {
        state.tableData = JSON.parse(state.editor.getValue())
      }
      state.visibleDialog = false
    }
    // 保存数据，将数据保存到服务端
    const saveData = () => {
      state.loading = true
      const prams = {
        tableData: JSON.stringify(state.tableData),
        id: state.queryId // 修改时，当前记录id
      }
      saveDesignForm(prams)
        .then(res => {
          if (res.data.code === 200) {
            ElMessage({
              message: '保存成功！',
              type: 'success',
            })
            // todo 保存成功后应该要跳转页面
          } else {
            ElMessage.error(res.data.message)
          }
          state.loading = false
        })
        .catch(res => {
          ElMessage.error('保存异常')
          state.loading = false
        })
    }
    const drawerBeforeClose = done => {
      state.editIndex = '' // 清空
      done()
    }
    const editOtherField = () => {
      dialogOpen(state.tableData)
    }
    // 字段属性编辑下拉选择
    const selectChange = prop => {
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
    onUnmounted(() => {
      if (Object.keys(state.editor).length !== 0) {
        state.editor.destroy()
        state.editor.container.remove()
      }
    })
    return {
      headToolClick,
      checkChange,
      ...toRefs(state),
      dialogConfirm,
      drawerBeforeClose,
      vueFileEl,
      editOtherField,
      selectChange
    }
  }
}
</script>
