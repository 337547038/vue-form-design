<template>
  <div class="container">
    <formControl></formControl>
    <div class="main-body">
      <headTools @click="_headToolClick(arguments)"></headTools>
      <div class="empty-tips" v-if="formData.list.length===0">从左侧拖拽来添加字段</div>
      <div class="main-form">
        <form-design :data="formData" :form-type="0"></form-design>
      </div>
    </div>
    <form-control-attr :formConfig="formData.config" />
    <ak-dialog
      v-model="visible"
      confirm="保存"
      :callback="_getDialogJson"
      :width="800"
      :height="500"
      title="生成代码">
      <div v-if="visible" id="editJson"></div>
    </ak-dialog>
  </div>
</template>
<script>
import headTools from './components/headTools'
import formControl from './components/formControl'
import formDesign from './components/formDesign'
import formControlAttr from './components/formControlAttr'
import {obj2string, evil} from '@/utils'
import jsbeautify from 'js-beautify'

export default {
  name: 'Index',
  components: {headTools, formControl, formDesign, formControlAttr},
  data() {
    return {
      visible: false,
      formData: {
        list: [],
        config: {
          labelWidth: '',
          className: '',
          name: 'form' + new Date().getTime()
        }
      }
    }
  },
  created() {
    this.$store.commit('setControlAttr', {})
    this.init()
  },
  methods: {
    _headToolClick(obj) {
      const type = obj[0]
      if (type === 'del') {
        this.formData.list = []
        this.$store.commit('setControlAttr', {})
      }
      if (type === 'save') {
        // 将数据保存在本地供测试
        this._saveFormData('opt=' + obj2string(this.formData))
      }
      if (type === 'preview') {
        window.localStorage.setItem(type, obj2string(this.formData))
        const query = {
          id: this.formData.config.name,
          type: type
        }
        const routeData = this.$router.resolve({path: 'form', query: query})
        window.open(routeData.href, '_blank')
      }
      if (type === 'json') {
        this.visible = true
        const beautifyOpt = {
          'indent_size': 2,
          'brace_style': 'expand'
        }
        const editFormData = jsbeautify('opt=' + obj2string(this.formData), beautifyOpt)
        this.$nextTick(() => {
          const editor = ace.edit('editJson')
          editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
          })
          editor.setFontSize(14)
          editor.setShowPrintMargin(false)
          editor.session.setMode('ace/mode/javascript')
          editor.setValue(editFormData)
          this.aceEditor = editor
        })
      }
    },
    init() {
      const queryId = this.$route.query.id
      if (queryId) {
        const fd = evil(window.localStorage.getItem(queryId))
        if (fd) {
          this.formData = fd
        }
      }
    },
    _getDialogJson() {
      const val = this.aceEditor.getValue()
      this.visible = false
      this._saveFormData(val)
    },
    _saveFormData(string) {
      // 保存表单数据
      window.localStorage.setItem('formDesign', string)
      this.$msg('保存成功')
      this.$router.push({path: '/'})
    }
  },
  destroy() {
    this.aceEditor.destroy()
    this.aceEditor.container.remove()
  }
}
</script>
