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
  import { aceEdit, constControlChange } from '../utils'
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
        if (
          item.config?.type === 'async' &&
          item.config?.source === 1 &&
          item.config?.sourceFun
        ) {
          // 单选多选下拉等方法设值
          // const optionsValue = ref([{label: "选项1", value: '1'}])
          // provide("getCheckbox", optionsValue)
          sourceFun += `// todo ${item.item.label}设置选项值\n`
          sourceFun += `　const ${item.name}Option = ref([{label: "选项1", value: '1'}])\n`
          sourceFun += `　provide("${item.config.sourceFun}", ${item.name}Option)\n`
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
    const html = `<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :formData="formData"
      requestUrl=""
      addUrl=""
      editUrl=""
      :beforeSubmit="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${objToStringify(obj)})
    // todo 存在编辑时，可根据路由等参数设置当前表单模式　1新增　2编辑
  const formType = computed(() => {
     return 1
  })
  ${getHtml.rulesMethods}
  ${getHtml.sourceFun}
  // 表单提交时参数处理
  const beforeSubmit = (params: any)=>{
    //　如编辑时添加参数
    //  params.id='xxx'
    return params
  }
  // 表单组件值改变事件
  /*provide('${constControlChange}', ({key, value}) => {
     console.log(key)
     console.log(value)
  })*/

<\/script>`
    nextTick(() => {
      editor.value = aceEdit(html, 'editJsonCopy', 'html')
    })
  }
  // 打开弹窗，导出表格数据
  const openTable = (obj: any) => {
    visible.value = true
    const html = `<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl=""
      deleteUrl=""
      :searchData="searchData"
      :tableData="tableData">
    </ak-list>
  </div>
</template>

<script setup>
    // import {useRoute, useRouter} from 'vue-router'
    import { ref } from 'vue'
    // const route = useRoute()
    // const router = useRouter()
    // const tableListEl = ref()
    const searchData = ref({})
    const tableData = ref(${objToStringify(obj)})
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
