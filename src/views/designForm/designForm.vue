<!-- Created by 337547038 表单设计. -->
<template>
  <div class="container">
    <formControl
      :formData="formDataList"
      :searchData="formData"
      :searchDesign="searchDesign">
    </formControl>
    <div class="main-body">
      <headTools @click="headToolClick"></headTools>
      <div class="empty-tips" v-if="formData.list.length===0">
        从左侧拖拽来添加字段
      </div>
      <div class="main-form" v-loading="loading">
        <form-design :form-data="formData" :type="4"/>
      </div>
    </div>
    <form-control-attr
      v-model:formStyle="formData.style"
      :formConfig="formData.config"
      @openDialog="dialogOpen"/>
    <el-drawer
      v-model="visibleDialog"
      size="60%"
      :direction="drawerDirection"
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
    <vue-File ref="vueFileEl" v-if="!searchDesign"></vue-File>
    <el-dialog v-model="previewVisible" title="预览" :fullscreen="true">
      <form-design :form-data="formDataPreview" :type="1" ref="previewForm"/>
      <template #footer>
        <div class="dialog-footer">
          <el-button
            size="small"
            type="primary"
            @click="previewSubmit">
            提交
          </el-button>
          <el-button
            size="small"
            @click="previewVisible=false">
            取消
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import headTools from './components/headTools.vue'
import formControl from './components/dragControl.vue'
import formDesign from './components/form.vue'
import formControlAttr from './components/formControlAttr.vue'
import {ref, reactive, toRefs, nextTick, onUnmounted} from 'vue'
import {useStore} from 'vuex'
import {saveDesignForm, getDesignFormRow} from '@/api'
import {ElMessage} from 'element-plus'
import {useRoute} from 'vue-router'
import vueFile from "./components/vueFile.vue"
import {aceEdit} from "./components/comm.js"
import {objToStringify, stringToObj, localStorage} from '@/utils'

export default {
  name: 'designIndex',
  components: {headTools, formControl, formDesign, formControlAttr, vueFile},
  setup(props, {emit}) {
    const store = useStore()
    const query = useRoute().query
    const state = reactive({
      formData: {
        list: [],
        config: {
          labelWidth: '',
          class: '',
          size: 'default',
          name: 'form' + new Date().getTime(),
          rulesComm: []
        }
      },
      visibleDialog: false,
      sourceDialog: '',
      editor: {},
      loading: false,
      drawerDirection: 'rtl', // 默认右边弹出
      formDataPreview: {},
      previewVisible: false, // 预览窗口
      searchDesign: query.type === 'search', // 是否为筛选设计
      formDataList: [], // 筛选模式下提供给左则快速选择已有表单字段
      editCodeType: '' // 编辑代码类型
    })
    const vueFileEl = ref()
    const id = query.id // 当前记录保存的id
    const formName = query.formName // 使用的是哪个表单数据源
    if (id) {
      // 获取初始表单数据
      state.loading = true
      getDesignFormRow(id)
        .then(res => {
          if (res.data.code === 200) {
            if (state.searchDesign) {
              // 筛选设计时取不同的数据
              const sD = res.data.data[0].searchData
              state.formData = sD ? objToStringify(sD) : []
              state.formDataList = objToStringify(res.data.data[0].formData).list
            } else {
              state.formData = objToStringify(res.data.data[0].formData)
            }
          }
          state.loading = false
        })
        .catch(res => {
          console.log(res)
          state.loading = false
        })
    }
    if (!id && !formName) {
      // 没保存到数据库时，从本地取值
      const storage = localStorage()
      if (storage) {
        if (state.searchDesign) {
          if (storage.searchData) {
            state.formData = storage.searchData
          }
          if (storage.formData) {
            state.formDataList = storage.formData.list
          }
        } else {
          if (storage.formData) {
            state.formData = storage.formData
          }
        }
      }
    }
    const headToolClick = type => {
      state.sourceDialog = '' // 清空下防意外
      switch (type) {
        case 'del':
          state.formData.list = []
          state.formData.config.rulesComm = []
          store.commit('setActiveKey', '')
          store.commit('setControlAttr', {})
          break
        case 'eye':
          // 打开预览窗口
          state.previewVisible = true
          let stringPreview = objToStringify(state.formData) // 防止预览窗口数据修改影响
          const formName = state.formData.config.name
          const reg = new RegExp(`get${formName}ControlByName`, 'g')
          stringPreview = stringPreview.replace(reg, `getPreview${formName}ControlByName`)
          state.formDataPreview = stringToObj(stringPreview)
          state.formDataPreview.config.name = `Preview${formName}` // 修改下表单名
          break
        case 'json':
          // 生成脚本预览
          dialogOpen(state.formData)
          break
        case 'save':
          saveData()
          break
        case 'vue':
          vueFileEl.value.open(state.formData)
          break
        case "import":
          dialogOpen({})
          break
      }
    }
    // 弹窗确认
    const dialogConfirm = () => {
      // 生成脚本预览和导入json，都是将编辑器内容更新至state.formData
      try {
        const editVal = state.editor.getValue()
        let val = editVal
        if (state.editCodeType !== 'css') { // css类型时不需要处理
          val = stringToObj(editVal)
        }
        if (state.sourceDialog) {
          // 这里是编辑当前项的其它属性或校验
          state.sourceDialog(val)
        } else {
          state.formData = val
        }
        state.visibleDialog = false
      } catch (res) {
        // console.log(res.message)
        ElMessage.error(res.message)
      }
    }
    // 将数据保存在服务端
    const saveData = () => {
      const formData = objToStringify(state.formData)
      const dataType = state.searchDesign ? 'searchData' : 'formData'
      if (!formName) {
        // 不提交保存，条件不全 。暂存在session代设计筛选和表格时提供支持
        localStorage(dataType, state.formData)
        ElMessage.info('数据已暂存在localStorage')
      } else {
        let prams = {
          formData: formData,
          id: query.id, // 修改时，当前记录id
          formName: state.formData.config.name, // 表单名称，用于在显示所有已创建的表单列表里显示
          dataTableName: formName // 表同上
        }
        if (state.searchDesign) {
          // 提交不同的字段
          prams = {
            searchData: formData,
            id: query.id
          }
        }
        state.loading = true
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
            localStorage(dataType, state.formData)
            ElMessage.info('请求异常，数据已暂存在localStorage')
            state.loading = false
          })
      }
      // 清空右侧栏信息
      store.commit('setActiveKey', '')
      store.commit('setControlAttr', {})
    }
    const dialogOpen = (obj, source, codeStyle) => {
      // 编辑属性和校验规则时从左边弹出
      state.drawerDirection = source ? 'ltr' : 'rtl'
      state.sourceDialog = source // 打开窗口来源回调
      state.visibleDialog = true
      state.editCodeType = codeStyle
      let editData = objToStringify(obj, true)
      if (codeStyle === 'css') {
        editData = obj
      }
      nextTick(() => {
        state.editor = aceEdit(editData, '', codeStyle)
      })
    }
    const drawerBeforeClose = done => {
      dialogCancel()
      done()
    }
    const dialogCancel = () => {
      state.visibleDialog = false
      state.sourceDialog = ''
    }
    // 预览窗口提交测试
    const previewForm = ref()
    const previewSubmit = () => {
      previewForm.value.validate((valid) => {
        if (valid) {
          alert('校验通过')
        } else {
          alert('校验不通过')
          return false
        }
      })
    }
    onUnmounted(() => {
      if (Object.keys(state.editor).length !== 0) {
        //state.editor.dispose()
        state.editor.destroy()
        state.editor.container.remove()
      }
    })
    return {
      ...toRefs(state),
      headToolClick,
      dialogConfirm,
      dialogOpen,
      drawerBeforeClose,
      dialogCancel,
      vueFileEl,
      previewForm,
      previewSubmit
    }
  }
}
</script>
