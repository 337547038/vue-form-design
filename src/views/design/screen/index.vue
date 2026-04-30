<template>
  <div
    v-loading="loading"
    class="design-container screen-container"
  >
    <component-panel />
    <div class="main-body">
      <head-tools @click="headToolsClick" />
      <screen-design />
    </div>
    <property-panel />
    <ace-drawer
      v-model="drawer.visible"
      :code-type="drawer.codeType"
      :content="drawer.content"
      :direction="drawer.direction"
      :title="drawer.title"
      @confirm="drawerConfirm"
      @before-close="drawerBeforeClose"
    />
    <vue-file ref="vueFileEl" />
  </div>
</template>
<script setup lang="ts">
  import {useLayoutStore} from "@/store/layout";
  import {onMounted, reactive, ref} from "vue";
  import ComponentPanel from "@/components/screen/componentPanel.vue";
  import PropertyPanel from "@/components/screen/propertyPanel.vue";
  import HeadTools from "../components/headTools.vue";
  import ScreenDesign from "@/components/screen/design.vue";
  import AceDrawer from '../components/aceDrawer.vue'
  import type {AceOpenDrawer} from '@/types/aceDrawer'
  import {getDrawerContent, getDrawerTitle} from "../components/aceTooptip";
  import {json2string, objToStringify} from "@/utils/design.ts";
  import VueFile from "../components/vueFile.vue";
  import {getRequest} from "@/api";
  import {useRoute,useRouter} from "vue-router";
  import {ElMessage} from "element-plus";

  definePage({meta: {permissions: 'none'}})

  const route = useRoute()
  const router = useRouter()
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([
    {label: '系统工具'},
    {label: '可视化大屏设计'}
  ])
  layoutStore.setCollapseMenu(true) // 收起左侧栏菜单

  const loading = ref(false)
  const data = ref({
    list: [],
    config: {
      width: '1920px',
      height: '1080px',
      background: '#000',
      style: '', //页面样式
      styleLink: '', //外链css样式
      primary: '#409eff',
      method: 'get'
    }
  })
  const defaultData = JSON.stringify(data)
  // 顶部事件弹窗相关
  const drawer = reactive({
    visible: false,
    title: '',
    direction: 'ltr',
    content: '',
    codeType: '',
    callback: ''
  })
  const openDrawer = (params: AceOpenDrawer) => {
    const {type = '', direction, codeType, title, callback, content} = params
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
        editData = data.value.config.style || ''
        break
      case 'before':
      case 'after':
        if (!content) {
          let eventType = type
          if (type === 'after') {
            // todo eventType = isGlobal ? 'afterScreenGlobal' : 'afterScreen'
          }
          editData = getDrawerContent(eventType)
        }
        break
    }
    drawer.content = editData
  }
  const drawerConfirm = () => {
  }
  const drawerBeforeClose = () => {
  }
  const vueFileEl = ref()
  // 顶部工具栏点击事件
  const headToolsClick = (type: string) => {
    // todo 清空右则属性相关
    switch (type) {
      case 'del':
        data.value = JSON.parse(defaultData)
        break
      case 'eye':
        break
      case 'json':
        openDrawer({
          type: 'json',
          content: data.value,
          title: '可编辑修改或将已生成的脚本粘贴进来'
        })
        break
      case 'vue':
        vueFileEl.value.openScreen(data.value)
        break
      case 'save':
        saveData()
        break
    }
  }

  //* ***************数据相关****************//
  const saveData = () => {
    const params: any = {
      data: objToStringify(data.value),
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
    /*getInitData(route.query.id)
        .then((data: any) => {
          loading.value = false
          data.value = data
        })
        .catch(() => {
          loading.value = false
        })*/
  }
  //* ***************数据相关****************//

  onMounted(() => {
    getData()
  })
</script>
<style scoped lang="scss">

</style>