<template>
  <div class="container">
    <formControl></formControl>
    <div class="main-body">
      <headTools @click="headToolClick"></headTools>
      <div class="empty-tips" v-if="formData.list.length===0">从左侧拖拽来添加字段</div>
      <div class="main-form">
        <el-form
          ref="form"
          :size="formData.config.size"
          :label-width="formData.config.labelWidth"
          :class="[formData.config.className]"
          class="design-form">
          <form-group :data="formData"></form-group>
        </el-form>
      </div>
    </div>
    <form-control-attr
      :formConfig="formData.config"
      @openDialog="dialogOpen" />
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
import formGroup from './formGroup.vue'
import formControlAttr from './formControlAttr.vue'
import {ref, reactive, toRefs, nextTick, onUnmounted} from 'vue'
import {useStore} from 'vuex'
import jsbeautify from 'js-beautify'
import {obj2string, evil} from '@/utils'
import {saveDesignForm} from '@/api'
import {ElMessage} from 'element-plus'

export default {
  name: 'designIndex',
  components: {headTools, formControl, formGroup, formControlAttr},
  setup(props, {emit}) {
    const store = useStore()
    const state = reactive({
      formData: {
        list: [],
        config: {
          labelWidth: '',
          className: '',
          size: 'medium',
          name: 'form' + new Date().getTime()
        }
      },
      visibleDialog: false,
      sourceDialog: '',
      aceEditor: {},
      dialogConfirmBtn: '确定'
    })
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
        const sData = {
          data: val
        }
        saveDesignForm(sData)
          .then(res => {
            ElMessage({
              message: '保存成功！',
              type: 'success',
            })
          })
          .catch(res => {
            ElMessage.error('保存异常')
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
