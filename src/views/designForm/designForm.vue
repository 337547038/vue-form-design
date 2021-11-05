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
        <form-design :form-data="formData" :type="4" />
      </div>
    </div>
    <form-control-attr
      :formConfig="formData.config"
      @openDialog="dialogOpen" />
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
      <form-design :form-data="formDataPreview" :type="1" ref="previewForm" />
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
import {aceEdit} from "./components/aceEdit.js"

export default {
  name: 'designIndex',
  components: {headTools, formControl, formDesign, formControlAttr, vueFile},
  setup(props, {emit}) {
    const store = useStore()
    const route = useRoute()
    const state = reactive({
      formData: {
        list: [],
        config: {
          labelWidth: '',
          class: '',
          size: 'medium',
          name: 'form' + new Date().getTime(),
          rulesComm: [
            {key: 'a', require: true, message: '123'}
          ]
        }
      },
      visibleDialog: false,
      sourceDialog: '',
      editor: {},
      loading: false,
      drawerDirection: 'rtl', // 默认右边弹出
      formDataPreview: {},
      previewVisible: false, // 预览窗口
      searchDesign: route.query.type === 'search', // 是否为筛选设计
      formDataList: [] // 筛选模式下提供给左则快速选择已有表单字段
    })
    const vueFileEl = ref()
    const id = route.query.id
    if (id) {
      // 获取初始表单数据
      state.loading = true
      getDesignFormRow(id)
        .then(res => {
          if (res.data.code === 200) {
            if (state.searchDesign) {
              // 筛选设计时取不同的数据
              const sD = res.data.data[0].searchData
              state.formData = sD ? JSON.parse(sD) : []
              state.formDataList = JSON.parse(res.data.data[0].formData).list
            } else {
              state.formData = JSON.parse(res.data.data[0].formData)
            }
          }
          state.loading = false
        })
        .catch(res => {
          console.log(res)
          state.loading = false
        })
    }
    const headToolClick = type => {
      state.sourceDialog = '' // 清空下防意外
      switch (type) {
        case 'del':
          state.formData.list = []
          store.commit('setActiveKey', '')
          store.commit('setControlAttr', {})
          break
        case 'eye':
          // 打开预览窗口
          state.formDataPreview = JSON.parse(JSON.stringify(state.formData))
          state.previewVisible = true
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
      const val = JSON.parse(state.editor.getValue())
      if (state.sourceDialog) {
        // 这里是编辑当前项的其它属性或校验
        state.sourceDialog(val)
      } else {
        state.formData = val
      }
      state.visibleDialog = false
    }
    // 将数据保存在服务端
    const saveData = () => {
      let prams = {
        formData: JSON.stringify(state.formData),
        id: route.query.id, // 修改时，当前记录id
        formName: state.formData.config.name, // 表单名称，用于在显示所有已创建的表单列表里显示
        dataTableName: route.query.dataSource // 表同上
      }
      if (state.searchDesign) {
        // 提交不同的字段
        prams = {
          searchData: JSON.stringify(state.formData),
          id: route.query.id
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
          ElMessage.error('保存异常')
          state.loading = false
        })
      // 清空右侧栏信息
      store.commit('setActiveKey', '')
      store.commit('setControlAttr', {})
    }
    const dialogOpen = (obj, source) => {
      // 编辑属性和校验规则时从左边弹出
      state.drawerDirection = source ? 'ltr' : 'rtl'
      state.sourceDialog = source // 打开窗口来源回调
      state.visibleDialog = true
      const editData = JSON.stringify(obj, null, 2)
      nextTick(() => {
        state.editor = aceEdit(editData)
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
    onUnmounted(() => {
      if (Object.keys(state.editor).length !== 0) {
        //state.editor.dispose()
        state.editor.destroy()
        state.editor.container.remove()
      }
    })
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
