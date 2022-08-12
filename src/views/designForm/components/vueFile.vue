<template>
  <el-dialog
    v-model="visible"
    title="导出vue文件"
    custom-class="export-dialog"
    width="80%"
  >
    <div id="editJsonCopy"></div>
    <template #footer>
      <div class="dialog-footer">
        <el-button size="small" type="primary" @click="copyData">
          复制数据
        </el-button>
        <el-button type="primary" size="small" @click="dialogExport">
          导出代码
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { ref, nextTick } from 'vue'
  import Clipboard from 'clipboard'
  import { ElMessage } from 'element-plus'
  import { aceEdit } from './comm'
  import { objToStringify } from '@/utils/form'

  const visible = ref<boolean>(false)
  const editor = ref<string>('')
  // 根据生成的json提取需要导入的组件，远程方法，检验方法
  const getObjHtml = (obj: any) => {
    let importComponent = ''
    let componentProvide = ''
    let rulesMethods = ''
    let sourceFun = ''
    obj &&
      obj.list.forEach((item: any) => {
        if (item.type === 'component') {
          // 自定义组件
          importComponent += `    // todo ${item.item.label}\nimport ${item.config.template} from "@/xxxxxxx.vue"\n`
          componentProvide += `    // todo ${item.item.label}自定义组件\n    provide("${item.config.template}", ${item.config.template})\n`
        }
        if (item.customRules && item.customRules.length > 0) {
          // 使用自定义校验方法
          item.customRules.forEach((c: any) => {
            if (c.type === 'methods' && c.methods) {
              rulesMethods += `    // todo ${item.item.label}校验方法\n    provide("${c.methods}", (rule, value, callback) => {})\n`
            }
          })
        }
        if (
          item.config &&
          item.config.type === 'async' &&
          item.config.source === 1 &&
          item.config.sourceFun
        ) {
          // 单选多选下拉等方法取值
          // const optionsValue = ref([{label: "选项1", value: '1'}])
          // provide("getCheckbox", optionsValue)
          sourceFun += `    // todo ${item.item.label}获取选项值\n`
          sourceFun += `    const ${item.name}Option = ref([{label: "选项1", value: '1'}])\n`
          sourceFun += `    provide("${item.config.sourceFun}", ${item.name}Option)\n`
        }
      })
    return {
      importComponent: importComponent,
      componentProvide: componentProvide,
      rulesMethods: rulesMethods,
      sourceFun: sourceFun
    }
  }
  const open = (obj: any) => {
    visible.value = true
    const getHtml = getObjHtml(obj)
    const html =
      '<template>\n' +
      '  <div>\n' +
      '    <ak-form-design :formData="formData" ref="formName">\n' +
      '    </ak-form-design>\n' +
      '    <el-button type="primary" @click="submit">提交</el-button>\n' +
      '  </div>\n' +
      '</template>\n' +
      '<script setup>\n' +
      "import {provide, ref} from 'vue'\n" +
      '' +
      getHtml.importComponent +
      '' +
      '\n' +
      '    const formData = ref(' +
      objToStringify(obj) +
      ')\n' +
      '' +
      getHtml.sourceFun +
      '' +
      '' +
      getHtml.componentProvide +
      '' +
      '' +
      getHtml.rulesMethods +
      '' +
      '    // 表单控件值改变事件\n' +
      "    /*provide('AKControlChange', ({key, value}) => {\n" +
      '      console.log(key)\n' +
      '      console.log(value)\n' +
      '    })*/\n' +
      '    const formName=ref()\n' +
      '    const submit = () => {\n' +
      '      formName.value.validate((valid) => {\n' +
      '        console.log(valid)\n' +
      '        if (valid) {\n' +
      "          alert('submit')\n" +
      '        } else {\n' +
      "          console.log('error submit')\n" +
      '          return false\n' +
      '        }\n' +
      '      })\n' +
      '    }\n' +
      '<\/script>'
    nextTick(() => {
      editor.value = aceEdit(html, 'editJsonCopy', 'html')
    })
  }
  // 打开弹窗，导出表格数据
  const openTable = (obj: any) => {
    visible.value = true
    const html =
      '<template>\n' +
      '  <div class="form-list-page">\n' +
      '    <h3>列表数据</h3>\n' +
      '    <ak-table-list\n' +
      '      ref="tableListEl"\n' +
      '      :searchData="searchData"\n' +
      '      :tableData="tableData"\n' +
      '      :requestUrl="requestUrl">\n' +
      '      <template #__control="scope">\n' +
      '        <el-button link @click="btnClick(scope.row.id,\'show\')">查看</el-button>\n' +
      '        <el-button link @click="btnClick(scope.row.id,\'edit\')">编辑</el-button>\n' +
      '        <el-button link @click="btnClick(scope.row.id,\'del\')">删除</el-button>\n' +
      '      </template>\n' +
      '    </ak-table-list>\n' +
      '  </div>\n' +
      '</template>\n' +
      '\n' +
      '<script setup>\n' +
      "import {useRoute, useRouter} from 'vue-router'\n" +
      "import {ref} from 'vue'\n" +
      '\n' +
      '    const route = useRoute()\n' +
      '    const router = useRouter()\n' +
      '    const tableListEl = ref()\n' +
      '    const tableData=ref( ' +
      JSON.stringify(obj) +
      ')\n' +
      '    const searchData=ref({}) // 筛选表单\n' +
      "    const requestUrl=ref('') // 数据列表接口\n" +
      '    const onSubmit = () => {\n' +
      '      tableListEl.value.searchClick()\n' +
      '    }\n' +
      '    const btnClick = (id, type) => {\n' +
      '      switch (type) {\n' +
      "        case 'show':\n" +
      '          break\n' +
      "        case 'edit':\n" +
      '          break\n' +
      "        case 'del':\n" +
      '          // tableListEl.value.getListData() // 调用组件内部方法重新拉数据\n' +
      '          break\n' +
      '      }\n' +
      '    }\n' +
      '<\/script>\n'
    nextTick(() => {
      editor.value = aceEdit(html, 'editJsonCopy', 'html')
    })
  }
  const copyData = (e) => {
    nextTick(() => {
      const clipboard = new Clipboard(e.target, {
        text: () => {
          return editor.value.getValue()
        }
      })
      clipboard.on('success', function () {
        ElMessage({
          message: '复制成功！',
          type: 'success'
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
    const content = 'data:text/csv;charset=utf-8,' + editor.value.getValue()
    const fileName = new Date().getTime() + '.vue'
    const encodedUri = encodeURI(content)
    const actions = document.createElement('a')
    actions.setAttribute('href', encodedUri)
    actions.setAttribute('download', fileName)
    actions.click()
  }
  defineExpose({
    open,
    openTable
  })
</script>
