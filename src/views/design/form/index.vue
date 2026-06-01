<!-- Created by 337547038 表单设计. -->
<template>
  <div class="design-container">
    <component-panel />
    <div class="main-body">
      <head-tools @click="headToolClick" />
      <div
        v-loading="loading"
        class="main-form"
      >
        <div
          v-if="designData.length === 0"
          class="empty-tips"
        >
          从左侧拖拽来添加字段
        </div>
        <ak-form
          :data="designDataConfig"
          :operate-type="operateType"
        />
      </div>
    </div>
    <property-panel
      ref="propertyPanelRef"
      @open-dialog="openAceEditDrawer"
    />
    <ace-drawer ref="aceDrawerRef" />
    <vue-file ref="vueFileRef" />
  </div>
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script setup lang="ts">
  import {ref, onMounted, computed, onUnmounted} from 'vue'
  import HeadTools from '../components/headTools.vue'
  import ComponentPanel from './components/componentPanel.vue'
  import PropertyPanel from './components/propertyPanel.vue'
  import VueFile from '@/components/exportVue/index.vue'
  import AceDrawer from '@/components/ace/drawer.vue'
  import {getRequest} from '@/api'
  import {ElMessage} from 'element-plus'
  import {useRoute, useRouter} from 'vue-router'
  import {objToStringify, stringToObj} from '@/utils/design'
  import {useLayoutStore} from '@/store/layout'
  import type {AceDrawerT} from "@/components/ace/type";
  import {useDesignFormStore} from "@/store/form";
  import {getDesignDataBySource} from "./components/utils";
  import {setStorage} from "@/utils"
  import {storeToRefs} from "pinia";

  defineOptions({name: 'DesignFormIndex'})
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{label: '系统工具'}, {label: '表单设计'}])

  const loading = ref(false)
  const designStore = useDesignFormStore()
  const aceDrawerRef = ref()
  const router = useRouter()
  const route: any = useRoute()
  const {designData, designConfig} = storeToRefs(designStore)
  const designDataConfig = computed(() => {
    return {
      list: designData.value,
      config: designConfig.value
    }
  })
  // 设计三个类型，从url参数判断，form/search/flow
  const operateType = computed(() => {
    switch (route.query.type) {
      case 'flow':
        return `designFlow`
      case 'search':
        return `designSearch`
      default:
        return 'designForm'
    }
  })
  const propertyPanelRef = ref()
  const vueFileRef = ref()
  const getInitData = () => {
    const id = route.query.id // 当前记录保存的id
    if (!id) {
      return
    }
    // 获取初始表单数据
    loading.value = true
    getRequest('designById', {id: id})
      .then((res: { data: any }) => {
        const result = res.data
        if (result.data) {
          const resultData = stringToObj(result.data)
          if (resultData && Object.keys(resultData).length) {
            designStore.setDesignData(resultData.list)
            designStore.setDesignConfig(resultData.config)
          }
          if (result.dict) {
            designStore.setFormOptionDict(JSON.parse(result.dict))
          }
          if (result.category === 2) {
            //流程表单
            designStore.setDesignType('designFlow')
          }
        }
        if (result.source && operateType.value !== 'designSearch') {
          // 加载属性侧边栏的字段标识，搜索时不需要请求
          propertyPanelRef.value.getFormFieldBySource(result.source)
        }
        loading.value = false
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '加载异常')
        loading.value = false
      })
  }
  // 将数据保存在服务端
  const saveData = () => {
    // 添加校验，没有选择数据源时则必须要配置接口url
    const {id, redirect} = route.query
    const {submitUrl, requestUrl, sourceId} = designConfig.value
    if (!sourceId && (!submitUrl || !requestUrl) && operateType.value === 'designForm') {
      ElMessage.error('请选择数据源或配置接口url地址，否则表单无法提交保存')
      return
    }
    let params: any = {
      data: objToStringify(designDataConfig.value),
      source: designConfig.value.sourceId, // 数据源允许在表单属性设置里修改的
      name: designConfig.value.name || '未命名', // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 1, // 1表单 2列表
      dict: JSON.stringify(designStore.formOptionDict),
      category: operateType.value === 'designFlow' ? 2 : 1
    }
    let apiKey = 'designSave'
    if (id) {
      // 编辑状态 当前记录id
      Object.assign(params, {id: id})
      apiKey = 'designEdit'
    } else {
      params.status = 1 // 添加时默认启用
    }
    // 列表搜索模式下只有修改
    if (operateType.value === 'designSearch') {
      params = {
        data: objToStringify(designDataConfig.value),
        id: id
      }
    }
    loading.value = true
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
        router.push({path: path, query: query})
        loading.value = false
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '保存异常')
        loading.value = false
      })
    // 清空右侧栏信息
    designStore.setSelectComponent({})
  }

  const headToolClick = (type: string) => {
    switch (type) {
      case 'del':
        designStore.setDesignData([])
        designStore.setDesignConfig({})
        designStore.setSelectComponent({})
        break
      case 'eye':
        // 打开预览窗口
        const routeUrl = router.resolve({
          path: '/design/form/form',
        })
        // 将数据存
        setStorage('formPreviewData', objToStringify(designDataConfig.value))
        window.open(routeUrl.href, '_blank')
        break
      case 'json':
        // 生成脚本预览
        openAceEditDrawer({
          content: designDataConfig.value,
          title: '可编辑修改或将已生成的脚本粘贴进来',
          callback: (content: Record<string, any> | string) => {
            if (typeof content === 'object') {
              designStore.setDesignData(content.list)
              designStore.setDesignConfig(content.config)
            }
          }
        })
        break
      case 'save':
        saveData()
        break
      case 'vue':
        vueFileRef.value.open({data: designDataConfig.value, type: 'form'})
        break
    }
  }
  /**
   * 打开编辑器
   * @param params
   */
  const openAceEditDrawer = (params: AceDrawerT) => {
    aceDrawerRef.value.open(params)
  }

  onMounted(() => {
    // 保持供右侧使用
    designStore.setDesignType(operateType.value)
    getInitData()
    const {source} = route.query
    if (source) {
      // 从数据源一键创建过来时带有source参数
      propertyPanelRef.value.getFormFieldBySource(
        source,
        (list: any, name: string) => {
          Object.assign(designConfig.value, {sourceId: parseInt(source), name: name})
          designStore.setDesignData(getDesignDataBySource(list))
        }
      )
    }
  })
  onUnmounted(() => {
    designStore.setSelectComponent({})
    designStore.setDesignConfig({})
    designStore.setDesignData([])
  })
</script>
