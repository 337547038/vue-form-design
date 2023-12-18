<!-- Created by 337547038 表单设计. -->
<template>
  <div class="design-container">
    <drag-control
      :form-id="state.formOtherData.source"
      @click-check="searchCheckField as any"
      @click="selectTemplate"
    />
    <div class="main-body">
      <head-tools @click="headToolClick" />
      <div class="main-form" v-loading="state.loading">
        <div class="empty-tips" v-if="state.formData.list?.length === 0">
          从左侧拖拽来添加字段
        </div>
        <ak-form :type="5" :data="state.formData" :dict="state.formDict" />
      </div>
    </div>
    <form-control-attr
      ref="formControlAttrEl"
      :form-data="state.formData.form"
      :form-config="state.formData.config"
      v-model:form-other-data="state.formOtherData"
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
    <vue-file ref="vueFileEl" v-if="!['search'].includes(state.designType)" />
    <el-dialog v-model="state.previewVisible" title="预览" :fullscreen="true">
      <ak-form
        :data="state.formDataPreview"
        :dict="state.formDict"
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
  import {
    json2string,
    objToStringify,
    string2json,
    stringToObj
  } from '@/utils/design'
  import { useLayoutStore } from '@/store/layout'
  import type { FormData } from '@/types/form'
  import { getDrawerTitle, getDrawerContent } from '../components/aceTooptip'

  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '系统工具' }, { label: '表单设计' }])

  const store = useDesignStore()
  const router = useRouter()
  const route: any = useRoute().query || {}
  const state = reactive({
    formData: {
      list: [],
      form: {
        size: 'default'
      },
      config: {}
    },
    editor: {},
    loading: false,
    formDataPreview: {},
    previewVisible: false, // 预览窗口
    designType: route.type, // 当前页面设计类型，有效值search
    formDict: {},
    formOtherData: {
      source: route.source || '',
      formName: '未命名表单'
    }
  })
  const drawer = reactive({
    visible: false,
    type: '',
    title: '',
    codeType: '',
    direction: undefined, //弹出方向rtl / ltr
    callback: ''
  })
  const vueFileEl = ref()
  const formControlAttrEl = ref()
  // 当前表单设计类型，供各子组件调用以展示不同页面，统一方式不需要每个组件都从路由中取
  provide('formDesignType', state.designType)
  const getInitData = () => {
    const id = route.id // 当前记录保存的id
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
              state.formData = resultData
            }
          }
          state.formDict = string2json(result.dict)
          // 恢复表单名称
          state.formOtherData.source = result.source
          state.formOtherData.formName = result.name
          console.log('ok')
          if (result.source && state.designType !== 'search') {
            console.log('ok2')
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
  const headToolClick = (type: string) => {
    switch (type) {
      case 'del':
        state.formData = {
          list: [],
          form: {
            size: 'default'
          },
          config: {}
        }
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
        // eslint-disable-next-line no-case-declarations
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
        openAceEditDrawer({ type: 'creatJson', content: state.formData })
        break
      case 'save':
        saveData()
        break
      case 'vue':
        vueFileEl.value.open(state.formData)
        break
    }
  }
  // 将数据保存在服务端
  const saveData = () => {
    // 添加校验，没有选择数据源时则必须要配置接口url
    const { submitUrl, editUrl, requestUrl } = state.formData.config
    if (
      !state.formOtherData.source &&
      (!submitUrl || !editUrl || !requestUrl) &&
      state.designType !== 'search'
    ) {
      ElMessage.error('请选择数据源或配置接口url地址，否则表单无法提交保存')
      return
    }
    let params: any = {
      data: objToStringify(state.formData),
      source: state.formOtherData.source, // 数据源允许在表单属性设置里修改的
      name: state.formOtherData.formName, // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 1, // 1表单 2列表
      dict: json2string(state.formDict)
    }
    let apiKey = 'designSave'
    if (route.id) {
      // 编辑状态 当前记录id
      Object.assign(params, { id: route.id })
      apiKey = 'designEdit'
    }
    // 列表搜索模式下只有修改
    if (state.designType === 'search') {
      params = {
        data: objToStringify(state.formData),
        dict: json2string(state.formDict),
        id: route.id
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
        const path = route.redirect || '/design/form/list'
        const query: any = {}
        if (route.redirect && route.redirect.indexOf('?') !== -1) {
          // 带有问号参数时，放在path传是有问题的，将id=1转为{id:1}
          const p = route.redirect.split('?')[1]
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
        editData = state.formData.config?.style || ''
        break
      case 'editDict':
        // 格式化一下
        editData = json2string(state.formDict, true)
        break
      case 'beforeRequest':
      case 'beforeSubmit':
      case 'afterResponse':
      case 'afterSubmit':
      case 'change':
        const beforeData: any = state.formData.events || {}
        if (beforeData[type]) {
          editData = objToStringify(beforeData[type], true)
        } else {
          editData = getDrawerContent(type)
        }
        break
      case 'optionsParams':
      case 'optionsResult':
        if (!content) {
          editData = getDrawerContent(type)
        } else {
          editData = objToStringify(content, true)
        }
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
    // 生成脚本预览和导入json，都是将编辑器内容更新至state.formData
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
          if (!state.formData.config) {
            state.formData.config = {}
          }
          state.formData.config.style = newObj
          break
        case 'editDict':
          state.formDict = newObj
          break
        case 'beforeRequest':
        case 'beforeSubmit':
        case 'afterResponse':
        case 'afterSubmit':
        case 'change':
          if (!state.formData.events) {
            state.formData.events = {}
          }
          state.formData.events[drawer.type] = newObj
          break
        case 'creatJson':
          state.formData = newObj
          return
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
    state.formData = stringToObj(objToStringify(data))
  }
  // 搜索设计时左侧快速添加字段
  const searchCheckField = (data: FormData) => {
    state.formData.list.push(data)
  }
  getInitData()
  // 从数据源点创建表单过来时，带有参数source
  const oneFormCreation = (list: any) => {
    const temp: any = []
    list.forEach((item: { name: any; label: any }) => {
      temp.push({
        type: 'input',
        control: {
          modelValue: ''
        },
        config: {},
        name: `${item.name}`,
        formItem: {
          label: `${item.label}`
        }
      })
    })
    state.formData.list = temp
  }
  onMounted(() => {
    if (route.source) {
      //从数据源一键创建过来时带有source参数
      formControlAttrEl.value.getFormFieldBySource(
        route.source,
        oneFormCreation
      )
    }
  })
</script>
