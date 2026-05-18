<template>
  <div
    v-loading="loading"
    class="design-container screen-container"
  >
    <component-panel :style="{ width: toolVisible('left')}" />
    <div class="main-body">
      <head-tools @click="headToolsClick">
        <el-button
          type="primary"
          link
          :disabled="!screenStore.canUndo"
          @click="screenStore.setUndo"
        >
          <el-icon :size="22">
            <RefreshLeft />
          </el-icon>
          撤销
        </el-button>
        <el-button
          type="primary"
          link
          :disabled="!screenStore.canRedo"
          @click="screenStore.setRedo"
        >
          <i class="icon-refresh" /> 重做
        </el-button>
      </head-tools>
      <design-area />
      <footer-panel />
    </div>
    <property-panel
      :style="{ width: toolVisible('right')}"
      @open-drawer="openDrawer"
    />
    <ace-drawer ref="aceDrawerRef" />
    <export-vue-file ref="exportVueFileRef" />
  </div>
</template>
<script setup lang="ts">
  import {useLayoutStore} from "@/store/layout";
  import {useScreenStore} from "@/store/screen";
  import {computed, onMounted, ref, onUnmounted} from "vue";
  import ComponentPanel from "@/components/screen/componentPanel.vue";
  import PropertyPanel from "@/components/screen/propertyPanel.vue";
  import HeadTools from "../components/headTools.vue";
  import DesignArea from "@/components/screen/designArea.vue";
  import FooterPanel from "@/components/screen/footerPanel.vue";
  import AceDrawer from '@/components/ace/drawer.vue'
  import type {AceDrawerT} from "@/components/ace/type";

  import {objToStringify} from "@/utils/design";
  import ExportVueFile from "@/components/exportVue/index.vue";
  import {getRequest} from "@/api";
  import {useRoute, useRouter} from "vue-router";
  import {ElMessage} from "element-plus";
  import {getInitData} from '@/components/screen/getData'
  import {setStorage} from "@/utils";
  import type {Command} from "@/types/screen";


  definePage({meta: {permissions: 'none'}})

  const route = useRoute()
  const router = useRouter()
  const screenStore = useScreenStore()
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([
    {label: '系统工具'},
    {label: '可视化大屏设计'}
  ])
  layoutStore.setCollapseMenu(true) // 收起左侧栏菜单

  const loading = ref(false)
  const aceDrawerRef = ref()
  const designData = computed(() => {
    return {
      list: screenStore.designFilterData,
      config: screenStore.designConfig
    }
  })
  const defaultConfig = JSON.stringify(designData.value.config)
  // 顶部事件弹窗相关
  const openDrawer = (params: AceDrawerT) => {
    aceDrawerRef.value.open(params)
  }

  const exportVueFileRef = ref()
  // 顶部工具栏点击事件
  const historyCommand = (design: any, config: any) => {
    const originalComponents = [...screenStore.designFilterData]
    const oldDefaultConfig = screenStore.designConfig
    const command: Command = {
      execute: () => {
        screenStore.setDesignConfig(config)
        screenStore.setDesignData(design)
      },
      undo: () => {
        screenStore.setDesignData(originalComponents)
        screenStore.setDesignConfig(oldDefaultConfig)
      }
    }
    screenStore.setHistory(command)
    command.execute()
  }
  const headToolsClick = (type: string) => {
    switch (type) {
      case 'del':
        historyCommand([], JSON.parse(defaultConfig))
        screenStore.setSelectedComp([])
        screenStore.deleteRect()
        break
      case 'eye':
        // 新窗口预览
        const routeUrl = router.resolve({
          path: '/design/screen/show/preview',
        })
        // 将数据存
        setStorage('screenPreviewData', designData.value)
        window.open(routeUrl.href, '_blank')
        break
      case 'json':
        openDrawer({
          content: designData.value,
          title: '可编辑修改或将已生成的脚本粘贴进来',
          callback: (content: Record<string, any> | string) => {
            if (typeof content === 'object') {
              historyCommand(content.list, content.config)
            }
          }
        })
        break
      case 'vue':
        exportVueFileRef.value.open({data: designData.value, type: 'screen'})
        break
      case 'save':
        saveData()
        break
    }
  }

  /**
   * 左右两边工具栏显示隐藏控制
   * @param type
   */
  const toolVisible = (type: string) => {
    if (type === 'left') {
      const status = screenStore.showComponentPanel
      return status ? '' : '0px';
    } else {
      const status = screenStore.showPropertyPanel
      return status ? '' : '0px';
    }
  }

  //* ***************数据相关****************//
  const saveData = () => {
    const params: any = {
      data: objToStringify(designData.value),
      name: '未命名可视化大屏', // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 4, // 1表单,2列表,3流程,4大屏
      status: 1
    }
    let apiKey = 'designSave'
    const queryId = route.query.id
    if (queryId) {
      // 编辑状态 当前记录id
      Object.assign(params, {id: queryId})
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
          router.push({path: '/design/screen/list'})
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
        screenStore.setDesignConfig(data.config)
        screenStore.setDesignData(data.list)
      })
      .catch(() => {
        loading.value = false
      })
  }
  //* ***************数据相关****************//

  onMounted(() => {
    getData()
  })
  onUnmounted(() => {
    screenStore.clearOnExitDesign()
  })
</script>