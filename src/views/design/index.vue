<template>
  <div class="container">
    <formControl></formControl>
    <div class="main-body">
      <headTools @click="_headToolClick(arguments)"></headTools>
      <div class="empty-tips" v-if="formData.list.length===0">从左侧拖拽来添加字段</div>
      <div class="main-form">
        <formDrag :data="formData"></formDrag>
      </div>
    </div>
    <form-control-attr :formConfig="formData.config" />
    <ak-dialog v-model="visible" confirm="保存" :callback="_getJson" :width="800" :height="500">
      <div v-if="visible" id="editJson">{{editFormData}}</div>
    </ak-dialog>
  </div>
</template>
<script>
import headTools from './components/headTools'
import formControl from './components/formControl'
import formDrag from './components/formDrag'
import formControlAttr from './components/formControlAttr'

export default {
  name: 'Index',
  components: {headTools, formControl, formDrag, formControlAttr},
  data() {
    return {
      visible: false,
      formData: {
        list: [],
        config: {
          labelWidth: '',
          className: '',
          name: 'form' + new Date().getTime(),
          change: function () {
            console.log('000')
            return 'a'
          }
        }
      },
      editFormData: {}
    }
  },
  created() {
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
        this._saveFormData(JSON.stringify(this.formData))
      }
      if (type === 'preview') {
        window.localStorage.setItem(type, JSON.stringify(this.formData))
        const query = {
          id: this.formData.config.name,
          type: type
        }
        const routeData = this.$router.resolve({path: 'form', query: query})
        window.open(routeData.href, '_blank')
      }
      if (type === 'json') {
        this.visible = true
        this.editFormData = this.formData
        this.$nextTick(() => {
          const editor = ace.edit('editJson')
          editor.session.setMode('ace/mode/javascript')
          this.aceEditor = editor
        })
      }
    },
    init() {
      const queryId = this.$route.query.id
      if (queryId) {
        this.formData = JSON.parse(window.localStorage.getItem(queryId))
      }
    },
    _getJson() {
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
