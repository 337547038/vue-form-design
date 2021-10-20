<template>
  <el-dialog v-model="visible" title="导出vue文件">
    <div id="editJsonCopy"></div>
    <template #footer>
      <div class="dialog-footer">
        <el-button
          size="small"
          type="primary"
          @click="copyData">
          复制数据
        </el-button>
        <el-button
          type="primary"
          size="small"
          @click="dialogExport">
          导出代码
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import {reactive, toRefs, nextTick} from 'vue'
import {obj2string} from '@/utils'
import Clipboard from 'clipboard'
import {ElMessage} from 'element-plus'

export default {
  name: "vueFile",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      visible: false,
      editor: ''
    })
    const open = obj => {
      state.visible = true
      const html = '<template>\n' +
        '  <div>\n' +
        '    <design-form :formData="formData" ref="formName">\n' +
        '    </design-form>\n' +
        '    <el-button type="primary" @click="submit">提交</el-button>\n' +
        '  </div>\n' +
        '</template>' +
        '<script>\n' +
        'import designForm from \'@/components/form/index.vue\'\n' +
        'import {reactive, toRefs, provide, ref} from \'vue\'\n' +
        'import {useRoute, useRouter} from \'vue-router\'\n' +
        'import {getDesignFormRow} from \'@/api\'\n' +
        'import {evil} from "@/utils"\n' +
        'import testCom from "@/views/test.vue"\n' +
        '\n' +
        'export default {\n' +
        '  name: "add",\n' +
        '  props: {},\n' +
        '  components: {designForm},\n' +
        '  setup(props) {\n' +
        '    const route = useRoute()\n' +
        '    const dataSource = route.query.dataSource\n' +
        '    const id = route.query.id\n' +
        '    const state = reactive({\n' +
        '      loading: false,\n' +
        '      formData: ' + obj2string(obj) + '\n' +
        '    })\n' +
        '    // 注入选项方法获取值\n' +
        '    const optionsValue = ref([{label: "选项1", value: \'1\'}])\n' +
        '    provide("getCheckbox", optionsValue)\n' +
        '    // 注入自定义组件\n' +
        '    provide(\'componentName\', testCom)\n' +
        '    const formName=ref()\n' +
        '    const submit = () => {\n' +
        '      formName.value.validate((valid) => {\n' +
        '        console.log(valid)\n' +
        '        if (valid) {\n' +
        '          alert(\'submit!\')\n' +
        '        } else {\n' +
        '          console.log(\'error submit!00!\')\n' +
        '          return false\n' +
        '        }\n' +
        '      })\n' +
        '    }\n' +
        '    return {\n' +
        '      ...toRefs(state),\n' +
        '      submit,\n' +
        '      formName\n' +
        '    }\n' +
        '  }\n' +
        '}\n' +
        '<\/script>'
      nextTick(() => {
        const editor = ace.edit('editJsonCopy')
        editor.setOptions({
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true
        })
        editor.setFontSize(14)
        editor.setShowPrintMargin(false)
        editor.session.setMode('ace/mode/html')
        editor.setTheme("ace/theme/tomorrow_night")
        editor.setValue(html)
        state.editor = editor
      })
    }
    const copyData = (e) => {
      nextTick(() => {
        const clipboard = new Clipboard(e.target, {
          text: () => {
            return state.editor.getValue()
          }
        })
        clipboard.on('success', function () {
          ElMessage({
            message: '复制成功！',
            type: 'success',
          })
          clipboard.destroy()
        })
        clipboard.on('error', function () {
          ElMessage.error('复制失败')
          clipboard.destroy()
        })
        clipboard.onClick(e)
      })
    }
    // 导出文件
    const dialogExport = () => {
      const content = "data:text/csv;charset=utf-8," + state.editor.getValue()
      const fileName = new Date().getTime() + '.vue'
      const encodedUri = encodeURI(content)
      const actions = document.createElement("a")
      actions.setAttribute("href", encodedUri)
      actions.setAttribute("download", fileName)
      actions.click()
    }
    return {
      ...toRefs(state),
      open,
      dialogExport,
      copyData
    }
  }
}
</script>
