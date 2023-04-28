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
      <div class="design-box" ref="designBoxEl">
        <a-ruler
          :scale="state.scale"
          :offset="state.offset"
          :show-ruler="state.ruler"
          :show-line="state.showLine"
        />
        <a-ruler
          :scale="state.scale"
          :offset="state.offset"
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
                @delClick="delClick(index)"
              />
            </template>
          </draggable>
        </div>
        <div class="no-date" v-if="!screenData.list.length"
          >请从左则组件栏拖动组件到设计区域</div
        >
      </div>
      <div class="design-footer">
        <i class="icon-menu icon" @click="toggle('left')"></i>
        <div class="offset">{{ state.translateX }},{{ state.translateY }}</div>
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
              :min="20"
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
        <i class="icon-menu icon" @click="toggle()"></i>
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
  import { ref, computed, reactive, onMounted, nextTick } from 'vue'
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

  const route = useRoute()
  const router = useRouter()

  const state = reactive({
    showLine: true,
    scale: 100,
    autoScale: 100,
    ruler: true,
    widthLeft: '',
    widthRight: '',
    offset: [],
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
  const canvasStyle = computed(() => {
    const { width, height, background, primary } = screenData.value.config
    const scale = state.scale / 100
    // 限制transform范围，不能拖出可视区域
    const x = state.translateX
    const y = state.translateY
    return {
      width: width,
      height: height,
      background: background,
      transform: `scale(${scale}) translate(${x}px,${y}px)`,
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
  const delClick = (index: number) => {
    screenData.value.list.splice(index, 1)
    canvasClick()
    setLayerList()
  }
  const marks = ref({
    100: {
      style: {}
    }
  })
  // 左右两边展开收起
  const toggle = (type?: string) => {
    if (type === 'left') {
      state.widthLeft === ''
        ? (state.widthLeft = '0px')
        : (state.widthLeft = '')
      // 展开收起有过渡动画时间
      setTimeout(() => {
        getInitScale()
      }, 500)
    } else {
      state.widthRight === ''
        ? (state.widthRight = '0px')
        : (state.widthRight = '')
    }
  }
  //　初始时设置缩放比例，自适应
  const defaultScaleClick = () => {
    state.scale = state.autoScale
    state.translateX = 0
    state.translateY = 0
  }
  const designBoxEl = ref()
  const getInitScale = () => {
    nextTick(() => {
      const boxWidth = designBoxEl.value.offsetWidth
      const screenWidth = parseInt(screenData.value.config.width)
      if (boxWidth && screenWidth) {
        const scale = parseInt(`${(boxWidth / screenWidth) * 100}`)
        state.autoScale = scale
        // todo state.scale = scale
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
    const scale = state.scale / 100
    //const scale = 1
    const x = evt.pageX - state.translateX * scale
    const y = evt.pageY - state.translateY * scale
    document.onmousemove = (evt: MouseEvent) => {
      if (!state.moveFlag) {
        return
      }
      state.translateX = parseInt(`${(evt.pageX - x) / scale}`)
      state.translateY = parseInt(`${(evt.pageY - y) / scale}`)
    }
    document.onmouseup = function () {
      state.moveFlag = false
      document.onmousemove = null
    }
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
    obj.position.left = parseInt(
      `${pageX - state.offset[0] - state.translateX}`
    )
    obj.position.top = parseInt(`${pageY - state.offset[1] - state.translateY}`)
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
  const getInitData = () => {
    const id = route.query.id // 当前记录保存的id
    if (!id) {
      return
    }
    // 获取初始表单数据
    state.loading = true
    getRequest('designById', { id: id })
      .then((res) => {
        const result = res.data
        screenData.value = stringToObj(result.data)
        state.loading = false
        setLayerList()
        if (screenData.value.config.style) {
          appendOrRemoveStyle(
            'screenStyle',
            screenData.value.config.style,
            true
          )
        }
      })
      .catch((res: any) => {
        // console.log(res)
        ElMessage.error(res.message || '加载异常')
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
        return delClick(index)
    }
    setCurrentConfig(screenData.value.list[index]) // 右则属性
  }
  onMounted(() => {
    getInitScale()
    getInitData()
  })
</script>
