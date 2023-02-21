<!-- Created by 337547038 表单设计. -->
<template>
  <div class="design-container">
    <formControl
      :formData="state.formDataList"
      v-model:searchData="state.formData.list"
      :searchDesign="state.searchDesign"
      @click="selectTemplate"
    />
    <div class="main-body">
      <headTools @click="headToolClick" />
      <div class="main-form" v-loading="state.loading">
        <div class="empty-tips" v-if="state.formData.list.length === 0">
          从左侧拖拽来添加字段
        </div>
        <form-design
          :type="4"
          :formData="state.formData"
          :dict="state.formDict"
        />
      </div>
    </div>
    <form-control-attr
      v-model:formData="state.formData.form"
      v-model:formConfig="state.formData.config"
      @openDialog="openAceEditDrawer"
    />
    <el-drawer
      v-model="drawer.visible"
      size="60%"
      :title="drawer.title"
      :direction="drawer.direction"
      custom-class="ace-dialog"
      :append-to-body="true"
      :before-close="drawerBeforeClose"
    >
      <template #header>
        <div v-html="drawer.title"></div>
      </template>
      <div v-if="drawer.visible" id="editJson"></div>
      <div class="dialog-footer">
        <el-button type="primary" size="small" @click="dialogConfirm">
          确定
        </el-button>
      </div>
    </el-drawer>
    <VueFile ref="vueFileEl" v-if="!state.searchDesign" />
    <el-dialog v-model="state.previewVisible" title="预览" :fullscreen="true">
      <form-design
        :form-data="state.formDataPreview"
        :dict="state.formDict"
        :type="1"
        ref="previewForm"
        v-if="state.previewVisible"
      />
      <template #footer>
        <div class="dialog-footer">
          <el-button size="small" type="primary" @click="previewSubmit">
            提交
          </el-button>
          <el-button size="small" @click="state.previewVisible = false">
            取消
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
  import HeadTools from './components/headTools.vue'
  import FormControl from './components/dragControl.vue'
  import FormDesign from './components/form.vue'
  import FormControlAttr from './components/formControlAttr.vue'
  import VueFile from './components/vueFile.vue'
  import { ref, reactive, nextTick, onUnmounted } from 'vue'
  import { useDesignFormStore } from '@/store/designForm'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { useRoute, useRouter } from 'vue-router'
  import { aceEdit, afterResponse, beforeRequest } from './components/utils'
  import {
    json2string,
    objToStringify,
    string2json,
    stringToObj
  } from '@/utils/form'
  import { useLayoutStore } from '@/store/layout'
  import { FormData } from './types'

  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '系统工具' }, { label: '表单设计' }])

  const store = useDesignFormStore()
  const router = useRouter()
  const route = useRoute()
  const state = reactive({
    formData: {
      list: [],
      form: {
        labelWidth: '',
        class: '',
        size: 'default',
        name: 'form' + new Date().getTime()
      },
      config: {
        // title和formId在提交保存时需要
        title: 'form' + new Date().getTime(),
        formId: route.query.formId || ''
      }
    },
    editor: {},
    loading: false,
    formDataPreview: {},
    previewVisible: false, // 预览窗口
    searchDesign: route.query?.type === 'search', // 是否为筛选设计
    formDataList: {}, // 筛选模式下提供给左则快速选择已有表单字段
    formDataTemp: {},
    formDict: {}
  })
  const drawer = reactive({
    visible: false,
    type: '',
    title: '',
    codeType: '',
    direction: 'ltr', //弹出方向rtl / ltr
    callback: ''
  })
  const vueFileEl = ref()

  const getInitData = () => {
    const id = route.query.id // 当前记录保存的id
    if (id) {
      // 获取初始表单数据
      state.loading = true
      getRequest('getFormById', { id: id })
        .then((res) => {
          if (res.data.code === 200) {
            const result = res.data.data
            if (state.searchDesign) {
              // 筛选模式时使用筛选的数据
              if (result.searchData) {
                state.formData = stringToObj(result.searchData)
              }
              state.formDataList = stringToObj(result.formData)
              state.formDataTemp = result // 暂存时，修改保持里需要
            } else {
              if (result.formData) {
                state.formData = stringToObj(result.formData)
              }
            }
            state.formDict = string2json(result.dict)
          }
          state.loading = false
        })
        .catch((res: any) => {
          // console.log(res)
          ElMessage.error(res.data.message || '加载异常')
          state.loading = false
        })
    }
  }
  const headToolClick = (type: string) => {
    switch (type) {
      case 'del':
        state.formData.list = []
        store.setActiveKey('')
        store.setControlAttr({})
        break
      case 'eye':
        // 打开预览窗口
        store.setActiveKey('')
        store.setControlAttr({})
        state.previewVisible = true
        let stringPreview = objToStringify(state.formData) // 防止预览窗口数据修改影响
        const formName = state.formData.form.name
        const reg = new RegExp(`get${formName}ControlByName`, 'g')
        stringPreview = stringPreview.replace(
          reg,
          `getPreview${formName}ControlByName`
        )
        state.formDataPreview = stringToObj(stringPreview)
        state.formDataPreview.form.name = `Preview${formName}` // 修改下表单名
        break
      case 'json':
        // 生成脚本预览
        openAceEditDrawer({
          direction: 'rtl',
          content: state.formData,
          title: '可编辑修改或将已生成的脚本粘贴进来'
        })
        break
      case 'save':
        saveData()
        break
      case 'vue':
        vueFileEl.value.open(state.formData)
        break
    }
  }
  // 弹窗确认
  const dialogConfirm = () => {
    // 生成脚本预览和导入json，都是将编辑器内容更新至state.formData
    try {
      const editVal = state.editor.getValue()
      if (typeof drawer.callback === 'function') {
        // callback
        const newObj =
          drawer.codeType === 'json'
            ? string2json(editVal)
            : stringToObj(editVal)
        drawer.callback(newObj)
      } else {
        switch (drawer.type) {
          case 'css':
            // 表单属性－编辑表单样式
            if (!state.formData.config) {
              state.formData.config = {}
            }
            state.formData.config.style = editVal
            break
          case 'dict':
            state.formDict = string2json(editVal)
            break
          case 'beforeRequest':
          case 'beforeSubmit':
          case 'afterResponse':
          case 'afterSubmit':
            if (!state.formData.events) {
              state.formData.events = {}
            }
            state.formData.events[state.dialogType] = stringToObj(editVal)
            break
          default:
            state.formData = stringToObj(editVal)
        }
      }
      drawer.visible = false
    } catch (res) {
      // console.log(res.message)
      //ElMessage.error(res.message)
    }
  }
  // 将数据保存在服务端
  const saveData = () => {
    const formName = state.formData.config?.title
    if (!state.searchDesign && !formName) {
      ElMessage.error('请切换到表单属性输入表单名称！')
      return
    }
    const prams = Object.assign({}, state.formDataTemp, {
      formData: objToStringify(state.formData),
      id: route.query.id, // 修改时，当前记录id
      formId: state.formData.config?.formId || route.query.formId, // formId允许在表单属性设置里修改的
      name: formName, // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 1, // 1表单 2列表
      dict: json2string(state.formDict)
    })
    if (state.searchDesign) {
      Object.assign(prams, {
        searchData: objToStringify(state.formData),
        formData: state.formDataTemp.formData
      })
    }
    state.loading = true
    getRequest('saveForm', prams)
      .then((res) => {
        if (res.data.code === 200) {
          ElMessage({
            message: '保存成功！',
            type: 'success'
          })
          router.push({ path: '/designform/formlist' })
        } else {
          ElMessage.error(res.data.message)
        }
        state.loading = false
      })
      .catch((res) => {
        ElMessage.error(res.data.message || '保存异常')
        state.loading = false
      })
    // 清空右侧内容管理菜单存在session的内容，刷新时可重新加载新菜单
    if (!route.query.id) {
      // 新增时
      window.sessionStorage.removeItem('formMenuList')
    }
    // 清空右侧栏信息
    store.setActiveKey('')
    store.setControlAttr({})
  }
  const openAceEditDrawer = (params: any) => {
    const { type, direction, codeType, title, callback, content } = params
    drawer.direction = direction // 窗口位置ltr/rtl
    drawer.type = type // 作为窗口唯一标识，在窗口关闭时可根据type作不同处理
    drawer.codeType = codeType || '' // 显示代码类型
    drawer.title = title ? `提示：${title}` : ''
    drawer.visible = true
    drawer.callback = callback
    let editData =
      codeType === 'json'
        ? json2string(content, true)
        : objToStringify(content, true)
    switch (type) {
      case 'css':
        editData = state.formData.config?.style || ''
        break
      case 'dict':
        // 格式化一下
        editData = json2string(state.formDict, true)
        break
      case 'beforeRequest':
      case 'beforeSubmit':
        const beforeData = state.formData.events || {}
        if (beforeData[type]) {
          editData = objToStringify(beforeData[type], true)
        } else {
          editData = beforeRequest
        }
        break
      case 'afterResponse':
      case 'afterSubmit':
        const newData = state.formData.events || {}
        if (newData[type]) {
          editData = objToStringify(newData[type], true)
        } else {
          editData = afterResponse
        }
        break
      case 'optionsParams':
        if (!content) {
          editData = beforeRequest
        }
        break
      case 'optionsResult':
        if (!content) {
          editData = afterResponse
        }
        break
    }
    nextTick(() => {
      state.editor = aceEdit(editData, '', codeType)
    })
  }
  const drawerBeforeClose = (done: () => void) => {
    dialogCancel()
    done()
  }
  const dialogCancel = () => {
    drawer.visible = false
    drawer.type = ''
    drawer.title = ''
    drawer.codeType = ''
    drawer.callback = ''
  }
  // 预览窗口提交测试
  const previewForm = ref()
  const previewSubmit = () => {
    previewForm.value.validate((valid: boolean, fields: any) => {
      if (valid) {
        // alert('校验通过')
        ElMessage.success('校验通过')
        console.log(fields)
      } else {
        // alert('校验不通过')
        // console.log('error submit!', fields)
        ElMessage.error('校验不通过')
        return false
      }
    })
  }
  // 选择模板
  const selectTemplate = (data: FormData) => {
    state.formData = stringToObj(objToStringify(data))
  }
  getInitData()
  onUnmounted(() => {
    if (Object.keys(state.editor).length !== 0) {
      state.editor.destroy()
      state.editor.container.remove()
    }
  })
</script>
