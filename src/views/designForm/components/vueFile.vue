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
  import { aceEdit, constControlChange } from './utils'
  import { objToStringify } from '@/utils/form'

  const visible = ref(false)
  const editor = ref()
  // 根据生成的json提取需要导入的组件，远程方法，检验方法
  const getObjHtml = (obj: any) => {
    let rulesMethods = ''
    let sourceFun = ''
    obj &&
      obj.list.forEach((item: any) => {
        if (item.customRules?.length) {
          // 使用自定义校验方法
          item.customRules.forEach((c: any) => {
            if (c.type === 'methods' && c.methods) {
              rulesMethods += `// todo ${item.item.label}校验方法
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
      rulesMethods: rulesMethods,
      sourceFun: sourceFun
    }
  }
  const open = (obj: any) => {
    visible.value = true
    const getHtml = getObjHtml(obj)
    // 判断有没配置有提交按钮
    const hasBtn = obj.config?.confirm
    let submitBtn = ``
    let submitHtml = ''
    // let submitUrl = ''
    if (!hasBtn) {
      submitBtn = `    <el-button type="primary" @click="submit">提交</el-button>`
      submitHtml = `    const submit = () => {
      formName.value.validate((valid, fields) => {
        console.log(valid)
        console.log(fields) // 校验通过时返回当前表单的值
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }`
      // submitUrl = `:submitUrl="submitUrl"`
    }
    const html = `<template>
  <div>
    <ak-form :formData="formData" ref="formName" :requestUrl="requestUrl" :submitUrl="submitUrl">
    </ak-form>
    ${submitBtn}
  </div>
</template>
<script setup>
    import { ref } from 'vue'
    const formData = ref(${objToStringify(obj)})
    ${getHtml.rulesMethods}
    ${getHtml.sourceFun}
    // 表单控件值改变事件
    /*provide('${constControlChange}', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const submitUrl = ref(false) // 表单提交url
    const requestUrl = ref(false) // 获取表单初始数据
    const formName = ref()
    ${submitHtml}
    <\/script>`
    nextTick(() => {
      editor.value = aceEdit(html, 'editJsonCopy', 'html')
    })
  }
  // 打开弹窗，导出表格数据
  const openTable = (obj: any) => {
    visible.value = true
    const html = `<template>
  <div class="form-list-page">
    <ak-list
      ref="tableListEl"
      :requestUrl="requestUrl"
      :searchData="searchData"
      :tableData="tableData">
      <!--<template #__control="scope">
        <el-button link @click="btnClick(scope.row.id,'show')">查看</el-button>
        <el-button link @click="btnClick(scope.row.id,'edit')">编辑</el-button>
        <el-button link @click="btnClick(scope.row.id,'del')">删除</el-button>
      </template>-->
    </ak-list>
  </div>
</template>

<script setup>
    // import {useRoute, useRouter} from 'vue-router'
    import { ref } from 'vue'
    // const route = useRoute()
    // const router = useRouter()
    // const tableListEl = ref()
    const tableData = ref(${objToStringify(obj)})
    const searchData = ref({}) // 筛选表单
    const requestUrl = ref('')
    /*const btnClick = (id, type) => {
      switch (type) {
        case 'show':
          break
        case 'edit':
          break
        case 'del':
          // tableListEl.value.getListData() // 调用组件内部方法重新拉数据
          break
      }
    }*/
<\/script>`
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
    openTable
  })
</script>
