<!-- Created by 337547038 -->
<template>
  <div class="container-screen">
    <control-left :style="{ width: state.widthLeft }" />
    <div class="main-box">
      <head-tools />
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
          ref="designCanvasEl"
          @mousedown="onmousedown"
          class="design-canvas"
          @click="canvasClick"
          :style="canvasStyle"
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
            <template #item="{ element }">
              <a-screen
                :data="element"
                @click.stop="itemClick(element)"
                :type="0"
                :current="getActive"
              />
            </template>
          </draggable>
        </div>
      </div>
      <div class="design-footer">
        <i class="icon-menu icon" @click="toggle('left')"></i>
        <div class="center">
          <div class="item"
            ><label class="label">标尺</label
            ><el-switch size="small" v-model="state.ruler"
          /></div>
          <div class="item"
            ><label class="label">参考线</label
            ><el-switch size="small" v-model="state.showLine"
          /></div>
          <div class="item slider"
            ><label class="label">缩放比例</label>
            <el-slider
              show-stops
              :max="200"
              :min="20"
              size="small"
              :marks="marks"
              v-model="state.scale"
          /></div>
          <div class="item"
            ><el-button type="primary" link @click="defaultScaleClick"
              >自适应</el-button
            ></div
          >
        </div>
        <i class="icon-menu icon" @click="toggle()"></i>
      </div>
    </div>
    <config-control
      :style="{ width: state.widthRight }"
      v-model:config="screenData.config"
      @open-drawer="openDrawer"
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
  import md5 from 'md5'
  import AceDrawer from '../components/aceDrawer.vue'
  import {
    json2string,
    objToStringify,
    string2json,
    stringToObj
  } from '@/utils/form'
  import { OpenDrawer } from '../types'
  import { appendOrRemoveStyle } from '../utils'

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
    moveFlag: false
  })
  const current = ref()
  const configEl = ref()
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
    return {
      width: width,
      height: height,
      background: background,
      transform: `scale(${state.scale / 100}) translate(${state.translateX}px,${
        state.translateY
      }px)`,
      color: primary
    }
  })
  const canvasClick = () => {
    current.value = ''
    setCurrentConfig({})
  }
  const itemClick = (obj: any) => {
    current.value = obj
    setCurrentConfig(obj)
  }
  const getActive = computed(() => {
    if (current.value && current.value.position) {
      return md5(JSON.stringify(current.value.position))
    }
    return ''
  })
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
    const x = evt.pageX - state.translateX
    const y = evt.pageY - state.translateY
    document.onmousemove = (evt: MouseEvent) => {
      if (!state.moveFlag) {
        return
      }
      state.translateX = parseInt(`${evt.pageX - x}`)
      state.translateY = parseInt(`${evt.pageY - y}`)
    }
    document.onmouseup = function () {
      state.moveFlag = false
      document.onmousemove = null
    }
  }
  // 设计区域自定义右键菜单
  const designCanvasEl = ref()
  const setContextmenu = () => {
    nextTick(() => {
      designCanvasEl.value.addEventListener('contextmenu', (e: MouseEvent) => {
        e.preventDefault()

        console.log('00', e)
      })
    })
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
    obj.position.left = parseInt(`${pageX - state.offset[0]}`)
    obj.position.top = parseInt(`${pageY - state.offset[1]}`)
    current.value = obj
    setCurrentConfig(obj)
  }
  const setCurrentConfig = (obj: any) => {
    configEl.value.setCurrent(obj)
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
          // case 'dict':
          //   state.formDict = string2json(editVal)
          //   break
          // case 'beforeRequest':
          // case 'beforeSubmit':
          // case 'afterResponse':
          // case 'afterSubmit':
          //   if (!state.formData.events) {
          //     state.formData.events = {}
          //   }
          //   state.formData.events[drawer.type] = stringToObj(editVal)
          //   break
          // default:
          //   state.formData = stringToObj(editVal)
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
  onMounted(() => {
    getInitScale()
    setContextmenu()
  })
</script>
