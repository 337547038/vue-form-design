<template>
  <div class="container">
    <formControl></formControl>
    <div class="main-body">
      <headTools @click="headToolClick"></headTools>
      <div class="empty-tips" v-if="formData.list.length===0">从左侧拖拽来添加字段</div>
      <div class="main-form" v-loading="loading">
        <form-design :form-data="formData"/>
      </div>
    </div>
    <form-control-attr
        :formConfig="formData.config"
        @openDialog="dialogOpen"/>
    <el-dialog
        v-model="visibleDialog"
        title="编辑属性"
        width="600px"
        custom-class="json-dialog"
        :append-to-body="true">
      <div v-if="visibleDialog" id="editJson"></div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">{{ dialogConfirmBtn }}</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import headTools from './headTools.vue'
import formControl from './formControl.vue'
import formDesign from '../form/index.vue'
import formControlAttr from './formControlAttr.vue'
import {ref, reactive, toRefs, nextTick, onUnmounted} from 'vue'
import {useStore} from 'vuex'
import jsbeautify from 'js-beautify'
import {obj2string, evil} from '@/utils'
import {saveDesignForm, getDesignFormRow} from '@/api'
import {ElMessage} from 'element-plus'
import {useRoute} from 'vue-router'

export default {
  name: 'designIndex',
  components: {headTools, formControl, formDesign, formControlAttr},
  setup(props, {emit}) {
    const store = useStore()
    const router = useRoute()
    const state = reactive({
      formData: {
        list: [],
        config: {
          labelWidth: '',
          class: '',
          size: 'medium',
          name: 'form' + new Date().getTime()
        }
      },
      visibleDialog: false,
      sourceDialog: '',
      aceEditor: {},
      dialogConfirmBtn: '确定',
      loading: false
    })
    const id = router.query.id
    if (id) {
      // 获取初始表单数据
      state.loading = true
      getDesignFormRow(id)
          .then(res => {
            if (res.data.code === 200) {
              state.formData = evil(res.data.data[0].content)
            }
            state.loading = false
          })
          .catch(res => {
            console.log(res)
            state.loading = false
          })
    }
    const headToolClick = type => {
      switch (type) {
        case 'del':
          state.formData.list = []
          store.commit('setActiveKey', '')
          store.commit('setControlAttr', {})
          break
        case 'eye':
          break
        case 'json':
          // 生成脚本预览
          state.dialogConfirmBtn = '保存'
          dialogOpen(state.formData)
          break
        case 'save':
          dialogConfirm('save')
          break
      }
    }
    const dialogConfirm = source => {
      let val = ''
      if (source === 'save') {
        // 点击工具栏直接保存
        val = 'opt=' + obj2string(state.formData)
      } else {
        val = state.aceEditor.getValue()
      }
      if (state.sourceDialog) {
        // 右侧栏弹窗，回调
        state.sourceDialog(evil(val))
      } else {
        // 保存至后端服务并更新当前数据
        state.formData = evil(val)
        if (state.formData.list.length === 0) {
          ElMessage.error('保存失败，请先添加表单字段')
          return
        }
        const sData = {
          content: val,
          formName: state.formData.config.name, // 表单名称
          dataSource: router.query.dataSource, // 表单创建完后，添加数据保存到的数据表名，根据数据源创建表单时
          id: router.query.id // 修改时，当前记录id
        }
        state.loading = true
        saveDesignForm(sData)
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
      // 关闭窗口
      state.visibleDialog = false
    }
    const dialogOpen = (obj, source) => {
      state.sourceDialog = source // 打开窗口来源回调
      state.visibleDialog = true
      const beautifyOpt = {
        'indent_size': 2,
        'brace_style': 'expand'
      }
      const editData = jsbeautify('opt=' + obj2string(obj), beautifyOpt)
      nextTick(() => {
        const editor = ace.edit('editJson')
        editor.setOptions({
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true
        })
        editor.setFontSize(14)
        editor.setShowPrintMargin(false)
        editor.session.setMode('ace/mode/javascript')
        editor.setValue(editData)
        state.aceEditor = editor
      })
    }
    onUnmounted(() => {
      if (Object.keys(state.aceEditor).length !== 0) {
        state.aceEditor.destroy()
        state.aceEditor.container.remove()
      }
    })
    return {
      ...toRefs(state),
      headToolClick,
      dialogConfirm,
      dialogOpen
    }
  }
}
</script>
