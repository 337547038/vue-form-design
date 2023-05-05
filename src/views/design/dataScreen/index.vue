<!-- Created by 337547038 -->
<template>
  <div class="container-screen" v-loading="state.loading">
    <i
      class="icon-close close-preview"
      v-if="state.isEye"
      @click="state.isEye = false"
    ></i>
    <control-left
      :style="{ width: state.widthLeft }"
      ref="controlLeftEl"
      v-model:active="state.active"
      @update="controlLeftUpdate"
    />
    <div class="main-box">
      <head-tools @click="headToolsClick" />
      <div class="design-box" ref="designBoxEl" @scroll="designScroll">
        <a-ruler
          size="1920px"
          :scale="state.scale"
          :offset="state.offset"
          :scroll="state.scroll"
          :show-ruler="state.ruler"
          :show-line="state.showLine"
        />
        <a-ruler
          size="1080px"
          :scale="state.scale"
          :offset="state.offset"
          :scroll="state.scroll"
          :show-ruler="state.ruler"
          :show-line="state.showLine"
          direction="v"
        />
        <div
          @mousedown="onmousedown"
          class="design-canvas"
          :class="{ preview: state.isEye }"
          :style="canvasStyle"
          @click="canvasClick"
          @contextmenu="contextmenu"
        >
          <draggable
            itemKey="id"
            :list="screenData.list"
            name="fade"
            class="drag"
            v-bind="{
              group: 'form',
              animation: 200,
              handle: '.none'
            }"
            @add="draggableAdd"
          >
            <template #item="{ element, index }">
              <a-screen
                :data="element"
                @click.stop="itemClick(element, index)"
                :type="0"
                :current="index === state.active"
                @control-click="controlClick(index, $event)"
              />
            </template>
          </draggable>
        </div>
        <div class="no-date" v-if="!screenData.list.length"
          >请从左则组件栏拖动组件到设计区域
        </div>
      </div>
      <div class="design-footer">
        <i class="icon-menu icon" @click="toggle('Left')"></i>
        <div class="center">
          <div class="item"
            ><label class="label">标尺</label>
            <el-switch size="small" v-model="state.ruler" />
          </div>
          <div class="item"
            ><label class="label">参考线</label>
            <el-switch size="small" v-model="state.showLine" />
          </div>
          <div class="item slider"
            ><label class="label">缩放比例</label>
            <el-slider
              show-stops
              :max="200"
              :min="state.autoScale - 5"
              size="small"
              :marks="marks"
              v-model="state.scale"
            />
          </div>
          <div class="item">
            <el-button type="primary" link @click="defaultScaleClick"
              >自适应
            </el-button>
          </div>
        </div>
        <i class="icon-menu icon" @click="toggle('Right')"></i>
      </div>
    </div>
    <config-control
      :style="{ width: state.widthRight }"
      v-model:config="screenData.config"
      @open-drawer="openDrawer"
      @update="setLayerList"
      ref="configEl"
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
    <vue-file ref="vueFileEl" />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, reactive, onMounted, nextTick, provide } from 'vue'
  import HeadTools from '../components/headTools.vue'
  import ConfigControl from './components/configControl.vue'
  import ControlLeft from './components/controlLeft.vue'
  import ARuler from './components/ruler.vue'
  import AScreen from './components/screen.vue'
  import Draggable from 'vuedraggable-es'
  import AceDrawer from '../components/aceDrawer.vue'
  import {
    json2string,
    objToStringify,
    string2json,
    stringToObj
  } from '@/utils/form'
  import { OpenDrawer } from '../types'
  import { appendOrRemoveStyle } from '../utils'
  import { ElMessage } from 'element-plus'
  import { getRequest } from '@/api'
  import { useRoute, useRouter } from 'vue-router'
  import VueFile from '../components/vueFile.vue'
  import { getSetStorage, jsonParseStringify } from '@/utils'
  import { getInitData, getGlobalData } from './getData'
  import { useLayoutStore } from '@/store/layout'
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([
    { label: '系统工具' },
    { label: '可视化大屏设计' }
  ])

  const route = useRoute()
  const router = useRouter()

  const wLeft = getSetStorage('screenToolWidthLeft') || ''
  const wRight = getSetStorage('screenToolWidthRight') || ''
  const state = reactive({
    showLine: true,
    scale: 100,
    autoScale: 100,
    ruler: true,
    widthLeft: wLeft === '0' ? '' : wLeft,
    widthRight: wRight === '0' ? '' : wRight,
    offset: [],
    scroll: [0, 0], // 滚动条位置
    translateX: 0,
    translateY: 0,
    moveFlag: false,
    loading: false,
    isEye: false, // 预览模式
    active: null // 当前选中的index
  })
  const configEl = ref()
  const controlLeftEl = ref()
  const vueFileEl = ref()
  const screenData = ref({
    list: [],
    config: {
      width: '1920px',
      height: '1080px',
      background: '#000',
      style: '',
      primary: '#409eff'
    }
  })
  const globalScreen = ref({})
  provide('globalScreen', globalScreen)
  const canvasStyle = computed(() => {
    const { width, height, background, primary } = screenData.value.config
    const scale = state.scale / 100
    // 限制transform范围，不能拖出可视区域
    return {
      width: width,
      height: height,
      background: background,
      transform: `scale(${scale})`,
      color: primary
    }
  })
  const canvasClick = () => {
    state.active = null
    setCurrentConfig({})
  }
  const itemClick = (obj: any, index: number) => {
    state.active = index
    setCurrentConfig(obj)
  }
  const controlClick = (index: number, type: string) => {
    if (type === 'del') {
      screenData.value.list.splice(index, 1)
      canvasClick()
    } else if (type === 'clone') {
      const newObj = jsonParseStringify(screenData.value.list[index])
      screenData.value.list.push(newObj)
      // 选中复制的，即最后一条记录
      const cloneIndex = screenData.value.list.length - 1
      itemClick(newObj, cloneIndex)
    }
    setLayerList()
  }
  const marks = ref({
    100: {
      style: {}
    }
  })
  // 左右两边展开收起
  const toggle = (type?: string) => {
    let val
    if (type === 'Left') {
      state.widthLeft = state.widthLeft === '' ? '0px' : ''
      val = state.widthLeft
      // 展开收起有过渡动画时间
      setTimeout(() => {
        getInitScale()
      }, 500)
    } else {
      state.widthRight = state.widthRight === '' ? '0px' : ''
      val = state.widthRight
    }
    // 这个方法的data为空时是取值，这里要设值
    getSetStorage('screenToolWidth' + type, val || '0')
  }
  //　初始时设置缩放比例，自适应
  const defaultScaleClick = () => {
    state.scale = state.autoScale
  }
  const designBoxEl = ref()
  const getInitScale = () => {
    nextTick(() => {
      const boxWidth = designBoxEl.value.offsetWidth
      const screenWidth = parseInt(screenData.value.config.width)
      if (boxWidth && screenWidth) {
        const scale = parseInt(`${(boxWidth / screenWidth) * 100}`)
        state.autoScale = scale
        state.scale = scale
      }
      // 获取偏移距离
      const componentRect: DOMRect = designBoxEl.value.getBoundingClientRect()
      state.offset[1] =
        componentRect.top +
        (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0)
      state.offset[0] =
        componentRect.left +
        (window.pageXOffset || document.documentElement.scrollLeft) -
        (document.documentElement.clientLeft || 0)
    })
  }
  // 设计区域拖动相关
  const onmousedown = (evt: MouseEvent) => {
    state.moveFlag = true
    const scrollTop = designBoxEl.value.scrollTop
    const scrollLeft = designBoxEl.value.scrollLeft
    const x = evt.pageX + scrollLeft
    const y = evt.pageY + scrollTop
    document.onmousemove = (evt: MouseEvent) => {
      if (!state.moveFlag) {
        return
      }
      const xx = x - evt.pageX
      const yy = y - evt.pageY
      designBoxEl.value.scrollTo(xx, yy)
    }
    document.onmouseup = function () {
      state.moveFlag = false
      document.onmousemove = null
    }
  }
  // 滚动条位置
  const designScroll = () => {
    const scrollTop = designBoxEl.value.scrollTop
    const scrollLeft = designBoxEl.value.scrollLeft
    state.scroll = [scrollLeft, scrollTop]
  }
  // 设计区域自定义右键菜单
  const contextmenu = (evt: MouseEvent) => {
    evt.preventDefault()
  }
  //设计拖动
  const draggableAdd = (evt: any) => {
    const newIndex = evt.newIndex
    const obj: any = screenData.value.list[newIndex]
    delete obj.label
    delete obj.icon
    const { pageX, pageY } = evt.originalEvent
    if (!obj.position) {
      obj.position = {}
    }
    if (!obj.config) {
      obj.config = {}
    }
    obj.position.left = parseInt(`${pageX - state.offset[0] + state.scroll[0]}`)
    obj.position.top = parseInt(`${pageY - state.offset[1] + state.scroll[1]}`)
    state.active = newIndex
    setCurrentConfig(obj)
    setLayerList()
  }
  const setCurrentConfig = (obj: any) => {
    configEl.value.setCurrent(obj)
  }
  const setLayerList = () => {
    controlLeftEl.value.setLayer(screenData.value.list)
  }
  // drawer
  const drawer = reactive({
    visible: false,
    title: '',
    direction: '',
    content: '',
    codeType: '',
    callback: ''
  })
  const drawerBeforeClose = () => {
    dialogCancel()
  }
  const dialogConfirm = (editVal: string) => {
    try {
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
            screenData.value.config.style = editVal
            appendOrRemoveStyle('screenStyle', editVal, true)
            break
          case 'json':
            screenData.value = stringToObj(editVal)
            setLayerList()
            break
        }
      }
      dialogCancel()
    } catch (res) {
      // console.log(res.message)
      //ElMessage.error(res.message)
    }
  }
  const openDrawer = (params: OpenDrawer) => {
    const { type, direction, codeType, title, callback, content } = params
    drawer.direction = direction || 'ltr' // 窗口位置ltr/rtl
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
        editData = screenData.value.config.style || ''
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
  // 顶部工具栏点击事件
  const headToolsClick = (type: string) => {
    switch (type) {
      case 'del':
        screenData.value.list = []
        canvasClick() // 清空右则属性相关
        setLayerList()
        break
      case 'eye':
        state.isEye = true
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
  // 数据处理相关
  const saveData = () => {
    let params: any = {
      data: objToStringify(screenData.value),
      name: '未命名可视化大屏', // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 4 // 1表单 2列表 3流程　4大屏
    }
    let apiKey = 'designSave'
    const queryId = route.query.id
    if (queryId) {
      // 编辑状态 当前记录id
      Object.assign(params, { id: queryId })
      delete params.name // 修改不传名称
      apiKey = 'designEdit'
    }
    state.loading = true
    getRequest(apiKey, params)
      .then((res: any) => {
        ElMessage({
          message: res.message || '保存成功！',
          type: 'success'
        })
        // 根据不同情况跳转到不同地址
        // 修改时不跳转，以免在开发阶段频繁修改跳转
        if (!queryId) {
          router.push({ path: '/design/dataScreen/list' })
        }
        state.loading = false
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '保存异常')
        state.loading = false
      })
    canvasClick() // 清空右则属性相关
  }
  const getData = () => {
    state.loading = true
    getInitData(route.query.id)
      .then((res: any) => {
        state.loading = false
        screenData.value = res
        setLayerList()
        const { requestUrl, afterResponse, beforeRequest, method } =
          screenData.value.config
        if (requestUrl) {
          // 加载处理全局数据
          getGlobalData(requestUrl, afterResponse, beforeRequest, method).then(
            (res: any) => {
              globalScreen.value = res
            }
          )
        }
      })
      .catch(() => {
        state.loading = false
      })
  }
  // 数据处理相关结束
  // 设置图层隐藏锁定
  const controlLeftUpdate = (
    key: string,
    index: number,
    val: number | boolean
  ) => {
    //　console.log(key, index, val)
    switch (key) {
      case 'display':
      case 'zIndex':
        screenData.value.list[index].position[key] = val
        break
      case 'lock':
        screenData.value.list[index].config[key] = val
        break
      case 'del':
        return controlClick(index, 'del')
    }
    setCurrentConfig(screenData.value.list[index]) // 右则属性
  }
  onMounted(() => {
    getInitScale()
    getData()
  })
</script>
