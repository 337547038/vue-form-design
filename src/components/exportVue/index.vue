<template>
  <el-dialog
    v-model="visible"
    title="导出vue文件"
    class="export-dialog"
    width="80%"
  >
    <div id="editJsonCopy" />
    <template #footer>
      <div class="dialog-footer">
        <el-button
          type="primary"
          @click="copyData"
        >
          复制数据
        </el-button>
        <el-button
          type="primary"
          @click="dialogExport"
        >
          导出代码
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import {ref, nextTick} from 'vue'
  import Clipboard from 'clipboard'
  import {ElMessage} from 'element-plus'
  import {aceEdit, objToStringify} from '@/utils/design'
  import tplScreen from './tpl/sereen.tpl?raw'
  import tplForm from './tpl/form.tpl?raw'

  const visible = ref(false)
  const editor = ref()
  // 根据生成的json提取需要导入的组件，远程方法，检验方法
  const open = ({data, type}: { data: any, type: string }) => {
    console.log(type)
    visible.value = true
    let html = ''
    switch (type) {
      case 'screen':
        html = tplScreen.replace('{{designData}}', objToStringify(data, true, ''))
        break
      case 'form':
        html = getFormData(data)
        break
      case 'list':
        break
    }
    nextTick(() => {
      editor.value = aceEdit({content: html, id: 'editJsonCopy', type: 'html'})
    })
  }
  const getFormData = (data: any) => {
    console.log('formdata',objToStringify(data))
    return tplForm.replace('{{formData}}', objToStringify(data, true, ''))
      .replace('{{requestUrl}}', data.config.requestUrl || '')
      .replace('{{submitUrl}}', data.config.submitUrl || '')
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
    open
  })
</script>
