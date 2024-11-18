<!-- Created by weiXin:337547038 -->
<template>
  <div
    v-loading="loading"
    class="container-screen"
  >
    <i
      v-if="preview"
      class="icon-close close-preview"
      @click="preview = false"
    />
    <control-left :style="{ width: toolVisible('left') ? '' : '0px' }" />
    <div class="main-box">
      <head-tools @click="headToolsClick" />
      <screen-design :preview="preview as boolean" />
    </div>
    <config-control
      :style="{ width: toolVisible('right') ? '' : '0px' }"
      @open-drawer="openDrawer"
    />
    <ace-drawer
      v-model="drawer.visible"
      :code-type="drawer.codeType"
      :content="drawer.content"
      :direction="drawer.direction"
      :title="drawer.title"
      @confirm="dialogConfirm"
      @before-close="drawerBeforeClose"
    />
    <vue-file ref="vueFileEl" />
  </div>
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script lang="ts" setup>
  import { ref, reactive, onMounted, onBeforeUnmount, provide } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import {
    json2string,
    objToStringify,
    string2json,
    stringToObj,
    appendOrRemoveStyle
  } from '@/utils/design'

  import { useLayoutStore } from '@/store/layout'
  import { useScreenStore } from '@/store/screen'
  import AceDrawer from '../components/aceDrawer.vue'
  import VueFile from '../components/vueFile.vue'
  import HeadTools from '../components/headTools.vue'
  import ConfigControl from './components/configControl.vue'
  import ControlLeft from './components/controlLeft.vue'
  import ScreenDesign from './components/design.vue'
  import type { OpenDrawer } from './types'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { getInitData } from './getData'
  import { getDrawerContent, getDrawerTitle } from '../components/aceTooptip'
  import defaultData from './components/defaultData'

  const route = useRoute()
  const router = useRouter()
  const layoutStore = useLayoutStore()
  const screenStore = useScreenStore()
  layoutStore.changeBreadcrumb([
    { label: '系统工具' },
    { label: '可视化大屏设计' }
  ])
  layoutStore.setCollapseMenu(true) // 收起左侧栏菜单

  /**
   * 左右两边工具栏显示隐藏控制
   * @param type
   */
  const toolVisible = (type: string) => {
    return !screenStore.getScreenConfig(type)
  }
  const loading = ref(false)
  const preview = ref(false) // 预览模式
  const vueFileEl = ref()
  const screenData = ref(JSON.parse(defaultData))
  provide('screenData', screenData)

  // 顶部工具栏点击事件
  const headToolsClick = (type: string) => {
    screenStore.setControlAttr({}) // 清空右则属性相关
    switch (type) {
      case 'del':
        screenData.value = JSON.parse(defaultData)
        break
      case 'eye':
        preview.value = true
        break
      case 'json':
        openDrawer({
          type: 'json',
          content: screenData.value,
          title: '可编辑修改或将已生成的脚本粘贴进来'
        })
        break
      case 'vue':
        vueFileEl.value.openScreen(screenData.value)
        break
      case 'save':
        saveData()
        break
    }
  }
  // 顶部事件弹窗相关
  const drawer = reactive<any>({
    visible: false,
    title: '',
    direction: 'ltr',
    content: '',
    codeType: '',
    callback: ''
  })
  const drawerBeforeClose = () => {
    dialogCancel()
  }
  const dialogConfirm = (editVal: string) => {
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
          screenData.value.config!.style = editVal
          appendOrRemoveStyle('screenStyle', editVal, true)
          break
        case 'json':
          screenData.value = stringToObj(editVal)
          break
      }
      dialogCancel()
    } catch (res: any) {
      ElMessage.error(res.message || '未知原因')
    }
  }
  const openDrawer = (params: OpenDrawer) => {
    const { type = '', direction, codeType, title, callback, content, isGlobal } = params
    drawer.direction = direction || 'ltr' // 窗口位置ltr/rtl
    drawer.type = type // 作为窗口唯一标识，在窗口关闭时可根据type作不同处理
    drawer.codeType = codeType || '' // 显示代码类型
    drawer.title = title || (getDrawerTitle as any)[type]
    drawer.visible = true
    drawer.callback = callback
    let editData
      = codeType === 'json'
        ? json2string(content, true)
        : objToStringify(content, true)
    switch (type) {
      case 'editCss':
        editData = screenData.value.config.style || ''
        break
      case 'before':
      case 'after':
        if (!content) {
          let eventType = type
          if (type === 'after') {
            eventType = isGlobal ? 'afterScreenGlobal' : 'afterScreen'
          }
          editData = getDrawerContent(eventType)
        }
        break
    }
    drawer.content = editData
  }
  const dialogCancel = () => {
    drawer.visible = false
    drawer.type = ''
    drawer.title = ''
    drawer.codeType = ''
    drawer.callback = ''
    drawer.content = ''
  }

  //* ***************数据相关****************//
  const saveData = () => {
    const params: any = {
      data: objToStringify(screenData.value),
      name: '未命名可视化大屏', // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 4 // 1表单,2列表,3流程,4大屏
    }
    let apiKey = 'designSave'
    const queryId = route.query.id
    if (queryId) {
      // 编辑状态 当前记录id
      Object.assign(params, { id: queryId })
      delete params.name // 修改不传名称
      apiKey = 'designEdit'
    }
    loading.value = true
    getRequest(apiKey, params)
      .then((res: any) => {
        ElMessage({
          message: res.message || '保存成功！',
          type: 'success'
        })
        // 这里可根据不同情况跳转到对应地址
        // 修改时不跳转，以免在开发阶段频繁修改跳转
        if (!queryId) {
          router.push({ path: '/design/screen/list' })
        }
        loading.value = false
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '保存异常')
        loading.value = false
      })
  }
  const getData = () => {
    loading.value = true
    getInitData(route.query.id)
      .then((data: any) => {
        loading.value = false
        screenData.value = data
      })
      .catch(() => {
        loading.value = false
      })
  }
  //* ***************数据相关****************//
  onMounted(() => {
    getData()
  })
  onBeforeUnmount(() => {})
</script>
