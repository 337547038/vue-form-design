<!-- Created by 337547038 表单设计. -->
<template>
  <div class="design-container">
    <drag-control
      @click-check="searchCheckField as any"
      @click="selectTemplate"
    />
    <div class="main-body">
      <head-tools @click="headToolClick" />
      <div
        v-loading="state.loading"
        class="main-form"
      >
        <div
          v-if="formData.list?.length === 0"
          class="empty-tips"
        >
          从左侧拖拽来添加字段
        </div>
        <ak-form
          :data="formData"
          :operate-type="$route.query.type === 'search' ? 'search' : 'design'"
        />
      </div>
    </div>
    <form-control-attr
      ref="formControlAttrEl"
      @open-dialog="openAceEditDrawer"
    />
    <ace-drawer
      v-model="drawer.visible"
      :title="drawer.title"
      :direction="drawer.direction"
      :content="drawer.content"
      :code-type="drawer.codeType"
      @before-close="drawerBeforeClose"
      @confirm="dialogConfirm"
    />
    <vue-file
      v-if="!['search'].includes(state.operateType)"
      ref="vueFileEl"
    />
    <el-dialog
      v-model="state.previewVisible"
      title="预览"
      :fullscreen="true"
    >
      <ak-form
        v-if="state.previewVisible"
        ref="previewForm"
        :data="state.formDataPreview"
      />
      <template #footer>
        <div class="dialog-footer">
          <el-button
            size="small"
            type="primary"
            @click="previewSubmit"
          >
            提交
          </el-button>
          <el-button
            size="small"
            @click="state.previewVisible = false"
          >
            取消
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script setup lang="ts">
  import { ref, reactive, provide, onMounted } from 'vue'
  import HeadTools from '../components/headTools.vue'
  import DragControl from './components/dragControl.vue'
  import FormControlAttr from './components/formControlAttr.vue'
  import VueFile from '../components/vueFile.vue'
  import AceDrawer from '../components/aceDrawer.vue'
  import { useDesignStore } from '@/store/design'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { useRoute, useRouter } from 'vue-router'
  import { objToStringify, string2json, stringToObj } from '@/utils/design'
  import { useLayoutStore } from '@/store/layout'
  import type { FormData } from '@/types/form'
  import { getDrawerTitle, getDrawerContent } from '../components/aceTooptip'
  import getOneFormCreation from './components/oneFormCreation'

  defineOptions({ name: 'DesignFormIndex' })
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '系统工具' }, { label: '表单设计' }])

  const store = useDesignStore()
  const router = useRouter()
  const route: any = useRoute()
  const formData = ref({
    list: [],
    form: {
      size: 'default'
    },
    config: {
      submitCancel: true
    },
    apiKey: {}
  })
  const stringFormData = ref() // 用于恢复初始值
  provide('formData', formData)
  const state = reactive({
    editor: {},
    loading: false,
    formDataPreview: {},
    previewVisible: false, // 预览窗口
    operateType: route.query.type // 当前页面设计类型
  })
  const drawer = reactive({
    visible: false,
    type: '',
    title: '',
    codeType: '',
    direction: undefined, // 弹出方向rtl / ltr
    callback: ''
  })
  const vueFileEl = ref()
  const formControlAttrEl = ref()

  const getInitData = () => {
    const id = route.query.id // 当前记录保存的id
    if (id) {
      // 获取初始表单数据
      state.loading = true
      getRequest('designById', { id: id })
        .then((res: { data: any }) => {
          const result = res.data
          // 初始设计搜索时res.data=''
          if (result.data) {
            const resultData = stringToObj(result.data)
            if (resultData && Object.keys(resultData).length) {
              formData.value = resultData
            }
          }
          // 恢复表单名称
          formData.value.config.sourceId = result.source
          formData.value.config.name = result.name
          if (result.source && state.operateType !== 'search') {
            // 加载属性侧边栏的字段标识，搜索时不需要请求
            formControlAttrEl.value.getFormFieldBySource(result.source)
          }
          state.loading = false
        })
        .catch((res: any) => {
          // console.log(res)
          ElMessage.error(res.message || '加载异常')
          state.loading = false
        })
    }
  }
  // 将数据保存在服务端
  const saveData = () => {
    // 添加校验，没有选择数据源时则必须要配置接口url
    const { id, redirect } = route.query
    const { submitUrl, requestUrl } = formData.value.config
    if (
      !formData.value.config.sourceId
      && (!submitUrl || !requestUrl)
      && state.operateType !== 'search'
    ) {
      ElMessage.error('请选择数据源或配置接口url地址，否则表单无法提交保存')
      return
    }
    let params: any = {
      data: objToStringify(formData.value),
      source: formData.value.config.sourceId, // 数据源允许在表单属性设置里修改的
      name: formData.value.config.name || '未命名', // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 1 // 1表单 2列表
    }
    let apiKey = 'designSave'
    if (id) {
      // 编辑状态 当前记录id
      Object.assign(params, { id: id })
      apiKey = 'designEdit'
    } else {
      params.status = 1 // 添加时默认启用
    }
    // 列表搜索模式下只有修改
    if (state.operateType === 'search') {
      params = {
        data: objToStringify(formData.value),
        id: id
      }
    }
    state.loading = true
    getRequest(apiKey, params)
      .then((res: any) => {
        ElMessage({
          message: res.message || '保存成功！',
          type: 'success'
        })
        // 根据不同情况跳转到不同地址
        const path = redirect || '/design/form/list'
        const query: any = {}
        if (redirect && redirect.indexOf('?') !== -1) {
          // 带有问号参数时，放在path传是有问题的，将id=1转为{id:1}
          const p = redirect.split('?')[1]
          const pSplit = p.split('&')
          pSplit.forEach((item: string) => {
            const splitItem = item.split('=')
            query[splitItem[0]] = splitItem[1]
          })
        }
        router.push({ path: path, query: query })
        state.loading = false
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '保存异常')
        state.loading = false
      })
    // 清空右侧栏信息
    store.setActiveKey('')
    store.setControlAttr({})
  }

  const headToolClick = (type: string) => {
    switch (type) {
      case 'del':
        formData.value = JSON.parse(stringFormData.value)
        store.setActiveKey('')
        store.setControlAttr({})
        break
      case 'eye':
        // 打开预览窗口
        store.setActiveKey('')
        store.setControlAttr({})
        state.previewVisible = true
        let stringPreview = objToStringify(formData.value) // 防止预览窗口数据修改影响
        const formName = formData.value.form.name

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
        openAceEditDrawer({ type: 'creatJson', content: formData.value })
        break
      case 'save':
        saveData()
        break
      case 'vue':
        vueFileEl.value.open(formData.value)
        break
    }
  }
  /**
   * 打开编辑器
   * @param params
   */
  const openAceEditDrawer = (params: any) => {
    const { type, direction, codeType, callback, content } = params
    drawer.direction = direction || 'ltr' // 窗口位置ltr/rtl
    drawer.type = type // 作为窗口唯一标识，在窗口关闭时可根据type作不同处理
    drawer.codeType = codeType || '' // 显示代码类型
    drawer.title = (getDrawerTitle as any)[type]
    drawer.visible = true
    drawer.callback = callback
    let editData
    switch (type) {
      case 'editCss':
        editData = formData.value.config?.style || ''
        break
      case 'before':
      case 'after':
      case 'change':
        const beforeData: any = formData.value.events || {}
        if (beforeData[type]) {
          editData = objToStringify(beforeData[type], true)
        } else {
          let eventType = type
          if (type !== 'change') {
            eventType = type + 'Type'
          }
          editData = getDrawerContent(eventType, 'form')
        }
        break
      case 'beforeOption':
      case 'afterOption':
        const keyType = type.replace('Option', '')
        if (!content) {
          editData = getDrawerContent(keyType)
        } else {
          editData = objToStringify(content, true)
        }
        drawer.title = (getDrawerTitle as any)[keyType]
        break
      case 'creatJson':
        editData = objToStringify(content, true)
        break
      default:
        editData = objToStringify(content, true)
    }
    drawer.content = editData
  }
  /**
   * 编辑器确认事件
   * @param editVal
   */
  const dialogConfirm = (editVal: string) => {
    // 生成脚本预览和导入json，都是将编辑器内容更新至formData.value
    try {
      let newObj
      switch (drawer.codeType) {
        case 'json':
          newObj = string2json(editVal)
          break
        case 'css':
          newObj = editVal
          break
        default:
          newObj = stringToObj(editVal)
      }
      if (typeof drawer.callback === 'function') {
        drawer.callback(newObj)
      }
      switch (drawer.type) {
        case 'editCss':
          // 表单属性－编辑表单样式
          if (!formData.value.config) {
            formData.value.config = {}
          }
          formData.value.config.style = newObj
          break
        case 'before':
        case 'after':
        case 'change':
          if (!formData.value.events) {
            formData.value.events = {}
          }
          formData.value.events[drawer.type] = newObj
          break
        case 'creatJson':
          formData.value = newObj
          break
      }
      dialogCancel()
    } catch (e: any) {
      ElMessage.error(e.message || '未知原因')
    }
  }
  const drawerBeforeClose = () => {
    dialogCancel()
  }
  const dialogCancel = () => {
    drawer.visible = false
    drawer.type = ''
    drawer.title = ''
    drawer.codeType = ''
    drawer.callback = ''
    drawer.content = ''
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
    formData.value = stringToObj(objToStringify(data))
  }
  // 搜索设计时左侧快速添加字段
  const searchCheckField = (data: FormData) => {
    formData.value.list.push(data)
  }
  onMounted(() => {
    getInitData()
    stringFormData.value = JSON.stringify(formData.value)
    const source = route.query.source
    if (source) {
      // 从数据源一键创建过来时带有source参数
      formData.value.config.sourceId = source
      formControlAttrEl.value.getFormFieldBySource(
        source,
        (list: any) => {
          formData.value.list = getOneFormCreation(list)
        }
      )
    }
  })
</script>
