<template>
  <el-dialog
    v-model="visible"
    title="导出vue文件"
    class="export-dialog"
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
  import { aceEdit } from '../utils'
  import { objToStringify } from '@/utils/form'

  const visible = ref(false)
  const editor = ref()
  // 根据生成的json提取需要导入的组件，远程方法，检验方法
  const getObjHtml = (obj: any) => {
    let rulesMethods = ''
    const sourceFun = ''
    obj &&
      obj.list.forEach((item: any) => {
        if (item.customRules?.length) {
          // 使用自定义校验方法
          item.customRules.forEach((c: any) => {
            if (c.type === 'methods' && c.methods) {
              rulesMethods += `// todo 请完善${item.item.label}校验方法
  provide("${c.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`
            }
          })
        }
        /*if (item.config?.optionsType === 2 && item.config?.optionsFun) {
      // 单选多选下拉等方法设值
      // const optionsValue = ref([{label: "选项1", value: '1'}])
      // provide("getCheckbox", optionsValue)
      sourceFun += `// todo ${item.item.label}设置选项值\n`
      sourceFun += `　const ${item.name}Option = ref([{label: "选项1", value: '1'}])\n`
      sourceFun += `　provide("${item.config.optionsFun}", ${item.name}Option)\n`
    }*/
      })
    return {
      rulesMethods: rulesMethods,
      sourceFun: sourceFun
    }
  }
  const open = (obj: any) => {
    visible.value = true
    const getHtml = getObjHtml(obj)
    const { addUrl, editUrl, requestUrl } = obj.config
    if (requestUrl) {
      // 从obj里删除使用props方式
      delete obj.config.requestUrl
    }
    if (editUrl) {
      // 从obj里删除使用props方式
      delete obj.config.editUrl
    }
    if (addUrl) {
      // 从obj里删除使用props方式
      delete obj.config.addUrl
    }

    const html = `<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :formData="formData"
      requestUrl="${requestUrl}"
      addUrl="${addUrl}"
      editUrl="${editUrl}"
      :beforeSubmit="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${objToStringify(obj)})
    // todo 存在编辑时，可根据路由等参数设置当前表单模式 1新增 2编辑
  const formType = computed(() => {
     return 1
  })
  ${getHtml.rulesMethods}
  ${getHtml.sourceFun}
  // 表单提交时参数处理
  const beforeSubmit = (params)=>{
    // 如编辑时添加参数
    //  params.id='xxx'
    return params
  }

<\/script>`
    nextTick(() => {
      editor.value = aceEdit(html, 'editJsonCopy', 'html')
    })
  }
  // 打开弹窗，导出表格数据
  const openTable = (obj: any) => {
    const openDialog = obj.config?.openType === 'dialog'
    const dialogWidth = obj.config?.dialogWidth || '600px'
    const requestUrl = obj.config?.requestUrl
    if (requestUrl) {
      // 从obj里删除使用props方式
      delete obj.config.requestUrl
    }
    const deleteUrl = obj.config?.deleteUrl
    if (deleteUrl) {
      // 从obj里删除使用props方式
      delete obj.config.deleteUrl
    }
    let formHtml = ''
    let formContent = ''
    let listBtn = ''
    if (openDialog) {
      // 弹窗打开
      listBtn = `@btn-click="listBtnClick"`
      formHtml = `<el-dialog
      destroy-on-close
      v-model="dialog.visible"
      :title="dialog.title"
      width="${dialogWidth}"
    >
      <ak-form
        ref="formEl"
        :formData="formData"
        :dict="dialog.dict"
        :type="dialog.formType"
        requestUrl=""
        addUrl=""
        editUrl=""
        :beforeSubmit="beforeSubmit"
        :afterSubmit="afterSubmit"
        @btn-click="dialogBtnClick"
      ></ak-form>
    </el-dialog>`
      formContent = `const formEl = ref()
  // todo 表单数据可从设计表单导出vue文件或保存生成脚本
  const formData = ref({list:[],form:{},config:{}})
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 1,
    dict: {},
    editId: ''
  })
  const listBtnClick = (btn, row) => {
    // 使用弹窗方式打开新增编辑
    if (btn.key === 'add' || btn.key === 'edit') {
      // 打开弹窗
      dialog.visible = true
      dialog.title = btn.key === 'add' ? '新增' : '编辑'
      dialog.formType = btn.key === 'add' ? 1 : 2
      dialog.editId = row && row.id

      if (btn.key === 'add' && formData.value.config?.addLoad) {
        // 添加时需要加载数据
        nextTick(() => {
          formEl.value.getData()
        })
      }
      // 编辑，根据id加载
      if (btn.key === 'edit') {
        nextTick(() => {
       // eslint-disable-next-line no-irregular-whitespace
       　 // todo 当表单内容字段比较少，所需值从列表数据就可以获取
       　　// formEl.value.setValue(row)
          formEl.value.getData({ id: row.id })
        })
      }
    }
  }
  // 提交表单前事件
  const beforeSubmit = (params) => {
    if(dialog.formType===2){ // 编辑模式下添加参数
      params.id = dialog.editId
    }
    return params
  }
  // 提交表单后事件
  const afterSubmit = (type) => {
    if (type === 'success') {
      // 添加成功，刷新列表数据
      closeResetDialog()
      tableListEl.value.getListData()
    }
  }
  // 关闭弹窗并重置表单，否则下次打开会保留上次数据
  const closeResetDialog = () => {
    dialog.visible = false
    dialog.editId = ''
    // formEl.value.resetFields() // 重置表单
  }
  //　点击弹窗取消按钮时
  const dialogBtnClick = (type) => {
    if (type === 'reset') {
      closeResetDialog()
    }
  }
`
    }
    visible.value = true
    const html = `<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="${requestUrl}"
      deleteUrl="${deleteUrl}"
      :searchData="searchData"
      :tableData="tableData"
      ${listBtn}>
    </ak-list>
    ${formHtml}
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
  import { ref, nextTick,reactive } from 'vue'
  // const route = useRoute()
  // const router = useRouter()
  const tableListEl = ref()
  const searchData = ref({})
  const tableData = ref(${objToStringify(obj)})
  ${formContent}
<\/script>`
    nextTick(() => {
      editor.value = aceEdit(html, 'editJsonCopy', 'html')
    })
  }
  const openScreen = (obj: any) => {
    visible.value = true
    let styleCss = ''
    let globalData = ''
    let globalImport = ''
    const style = obj.config.style
    if (style) {
      styleCss = `<style>
${style}
<\/style>`
    }
    if (obj.config.requestUrl) {
      // 全局大屏数据
      globalImport = `import { getGlobalData } from '@/views/design/dataScreen/getData'`
      globalData = `const globalScreen = ref({})
  provide('globalScreen', globalScreen)
  const {requestUrl, afterResponse, beforeRequest, method} = screenData.value.config
  getGlobalData(requestUrl, afterResponse, beforeRequest, method)
  .then((res: any) => {
       globalScreen.value = res
   })`
    }
    const html = `<template>
  <div :style="screenStyle" class="design-canvas">
    <ak-screen
      v-for="(element, index) in screenData.list"
      :key="index"
      :data="element"
    ></ak-screen>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  ${globalImport}
  const loading = ref(true)
  const screenData = ref(${objToStringify(obj)})
  const screenStyle = computed(() => {
    const { width, height, background, primary } = screenData.value.config
    return {
      width: width,
      height: height,
      background: background,
      color: primary,
      position: 'relative'
    }
  })
  ${globalData}
<\/script>
${styleCss}`
    nextTick(() => {
      editor.value = aceEdit(html, 'editJsonCopy', 'html')
    })
  }

  const copyData = (e: any) => {
    nextTick(() => {
      const clipboard: any = new Clipboard(e.target, {
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
    const content = 'data:text/csv;charset=utf-8,' + editor.value?.getValue()
    const fileName = new Date().getTime() + '.vue'
    const encodedUri = encodeURI(content)
    const actions = document.createElement('a')
    actions.setAttribute('href', encodedUri)
    actions.setAttribute('download', fileName)
    actions.click()
  }
  defineExpose({
    open,
    openTable,
    openScreen
  })
</script>
