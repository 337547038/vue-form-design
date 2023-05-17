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
      v-model:active="state.activeIndex"
      @update="controlEvent"
    />
    <div class="main-box">
      <head-tools @click="headToolsClick">
        <div class="control-tools">
          <i
            class="icon-mouse"
            title="矩形选择工具"
            :class="{ active: state.activeTool === 'mouse' }"
            @click="state.activeTool = 'mouse'"
          ></i>
          <i
            class="icon-hand"
            title="手拖动工具"
            :class="{ active: state.activeTool === 'hand' }"
            @click="state.activeTool = 'hand'"
          ></i>
        </div>
      </head-tools>
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
          @mousedown.left="onmousedown"
          class="design-canvas"
          :class="{ preview: state.isEye }"
          :style="canvasStyle"
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
                :scale="state.scale"
                :current="state.activeIndex.includes(index)"
                @contextmenu="screenContextmenu"
                @moveOrResize="moveOrResize"
              />
            </template>
          </draggable>
          <div
            class="draw-react"
            :style="state.rect"
            @contextmenu="drawReactContextmenu"
          >
            <span v-if="state.activeIndex?.length"
              >选中{{ state.activeIndex.length }}个</span
            >
          </div>
        </div>
        <div class="no-date" v-if="!screenData.list.length">
          请从左则组件栏拖动组件到设计区域
        </div>
      </div>
      <div class="design-footer">
        <i class="icon-menu icon" @click="toggle('Left')"></i>
        <div class="center">
          <div class="item">
            <label class="label">标尺</label>
            <el-switch size="small" v-model="state.ruler" />
          </div>
          <div class="item">
            <label class="label">参考线</label>
            <el-switch size="small" v-model="state.showLine" />
          </div>
          <div class="item slider">
            <label class="label">缩放比例</label>
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
            <el-button type="primary" link @click="defaultScaleClick('auto')"
              >自适应
            </el-button>
            <el-button type="primary" link @click="defaultScaleClick('100')"
              >100%
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
    <right-menu ref="rightMenuEl" @click="rightMenuClick" />
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    computed,
    reactive,
    onMounted,
    nextTick,
    provide,
    onUnmounted
  } from 'vue'
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
  import { getSetStorage, jsonParseStringify, randomString } from '@/utils'
  import { getInitData, getGlobalData } from './getData'
  import { useLayoutStore } from '@/store/layout'
  import { canControlRect } from './utils.ts'
  import RightMenu from './components/rightMenu.vue'
  import { ScreenData } from './types.ts'

  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([
    { label: '系统工具' },
    { label: '可视化大屏设计' }
  ])

  const route = useRoute()
  const router = useRouter()

  const wLeft = getSetStorage('screenToolWidthLeft') || ''
  const wRight = getSetStorage('screenToolWidthRight') || ''
  const state = reactive<any>({
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
    activeIndex: [], // 当前选中的index，默认情况下只有一个，矩形选择时存在多个
    activeTool: 'mouse',
    rect: {
      left: '0px',
      top: '0px',
      width: '0px',
      height: '0px',
      display: 'none'
    }
  })
  const configEl = ref()
  const controlLeftEl = ref()
  const vueFileEl = ref()
  const rightMenuEl = ref()
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
      color: primary,
      cursor: state.activeTool === 'mouse' ? 'default' : 'pointer'
    }
  })
  const canvasClick = () => {
    state.activeIndex = []
    setCurrentConfig({})
  }

  const itemClick = (obj: any, index: number) => {
    state.rect.display = 'none'
    state.activeIndex = [index]
    setCurrentConfig(obj)
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
    } else {
      state.widthRight = state.widthRight === '' ? '0px' : ''
      val = state.widthRight
    }
    // 展开收起有过渡动画时间
    setTimeout(() => {
      getInitScale()
    }, 500)
    // 这个方法的data为空时是取值，这里要设值
    getSetStorage('screenToolWidth' + type, val || '0')
  }
  // 初始时设置缩放比例，自适应
  const defaultScaleClick = (scale: string) => {
    // 将滚动条移回0,0位置
    designBoxEl.value.scrollTo(0, 0)
    if (scale === 'auto') {
      state.scale = state.autoScale
    } else {
      state.scale = 100
    }
    getSetStorage('screenScale', state.scale + '')
  }
  const designBoxEl = ref()
  const getInitScale = () => {
    nextTick(() => {
      const boxWidth = designBoxEl.value.offsetWidth
      const screenWidth = parseInt(screenData.value.config.width)
      if (boxWidth && screenWidth) {
        const scale = parseInt(`${(boxWidth / screenWidth) * 100}`)
        state.autoScale = scale
        const storage = getSetStorage('screenScale') as string
        state.scale = parseInt(storage) || scale
      }
      // 获取偏移距离
      const componentRect: DOMRect = designBoxEl.value.getBoundingClientRect()
      state.offset[1] =
        componentRect.top +
        document.documentElement.scrollTop -
        (document.documentElement.clientTop || 0)
      state.offset[0] =
        componentRect.left +
        document.documentElement.scrollLeft -
        (document.documentElement.clientLeft || 0)
    })
  }
  // 设计区域拖动/选中矩形相关
  const onmousedown = (evt: MouseEvent) => {
    canvasClick() // 先清空当前选中的
    state.moveFlag = true
    const scrollTop = designBoxEl.value.scrollTop
    const scrollLeft = designBoxEl.value.scrollLeft
    const x = evt.pageX + scrollLeft
    const y = evt.pageY + scrollTop
    const rx =
      (evt.pageX - state.offset[0] - 20 + state.scroll[0]) / (state.scale / 100)
    const ry =
      (evt.pageY - state.offset[1] - 20 + state.scroll[1]) / (state.scale / 100)
    //if (state.activeTool === 'mouse') {
    // 矩形选择工具，初始点击位置
    state.rect = {
      left: rx + 'px',
      top: ry + 'px',
      width: '0px',
      height: '0px',
      display: 'none'
    }
    // }
    document.onmousemove = (evt: MouseEvent) => {
      if (!state.moveFlag) {
        return
      }
      if (state.activeTool === 'mouse') {
        // 矩形选择工具，选中当前区域所有组件
        const rxE =
          (evt.pageX - state.offset[0] - 20 + state.scroll[0]) /
          (state.scale / 100) // 移动当前实时位置
        const ryE =
          (evt.pageY - state.offset[1] - 20 + state.scroll[1]) /
          (state.scale / 100)
        const sx = rx > rxE ? rxE : rx // 矩形起始位置，使用两个坐标位置小的作为开始点
        const sy = ry > ryE ? ryE : ry
        state.rect = {
          left: sx + 'px',
          top: sy + 'px',
          width: Math.abs(rx - rxE) + 'px',
          height: Math.abs(ry - ryE) + 'px',
          display: 'block'
        }
      } else {
        const xx = x - evt.pageX
        const yy = y - evt.pageY
        // 可拖动状态
        designBoxEl.value.scrollTo(xx, yy)
      }
    }
    document.onmouseup = function () {
      const { width, height } = state.rect
      if (parseInt(width) > 10 && parseInt(height) > 10) {
        findComponentsInRect()
      } else {
        // 选区太小时
        state.rect.display = 'none'
      }
      state.moveFlag = false
      document.onmousemove = null
    }
  }
  /***
   * 查找当前矩形中所有组件并选中
   */
  const findComponentsInRect = () => {
    // 因存在宽高为其他单位以及支持right和top定位，计算重叠比较复杂。这里简单化排除那些不符合规则的
    screenData.value.list.forEach((item: ScreenData, index: number) => {
      // 已经组合的组件不能再次被选中，锁定隐藏的也不能选中
      if (
        canControlRect(item.position) &&
        isRectOverlap(item.position) &&
        item.type !== 'group' &&
        !item.groupId &&
        !item.config.lock
      ) {
        if (!state.activeIndex.includes(index)) {
          // 防意外重复push
          state.activeIndex.push(index)
        }
      }
    })
    // 如果有选中组件时，根据所选中的组件重新设置选区大小
    if (state.activeIndex.length) {
      const { left, top, width, height } = getRectPosition()
      state.rect = {
        left: left + 'px',
        top: top + 'px',
        width: width + 'px',
        height: height + 'px',
        display: 'block'
      }
    } else {
      // 选区中没有组件时，隐藏
      state.rect.display = 'none'
    }

    function isRectOverlap(rect1) {
      // 计算两个矩形的左上角和右下角坐标
      const rect1Left = rect1.left
      const rect1Top = rect1.top
      const rect1Right = rect1.left + parseInt(rect1.width)
      const rect1Bottom = rect1.top + parseInt(rect1.height)
      const rect2Left = parseInt(state.rect.left) // 都带有px单位
      const rect2Top = parseInt(state.rect.top)
      const rect2Right = rect2Left + parseInt(state.rect.width)
      const rect2Bottom = rect2Top + parseInt(state.rect.height)

      // 判断两个矩形是否水平方向和垂直方向都有重叠
      const isOverlapX = rect1Left < rect2Right && rect2Left < rect1Right
      const isOverlapY = rect1Top < rect2Bottom && rect2Top < rect1Bottom
      return isOverlapX && isOverlapY
    }
  }
  // 设置选区及合并组宽高及坐标点
  const getRectPosition = () => {
    const autoRect = { left: 0, top: 0, ex: 0, ey: 0 }
    screenData.value.list.forEach((item: ScreenData, index: number) => {
      // 已经组合的组件不能再次被选中，锁定隐藏的也不能选中
      if (state.activeIndex.includes(index)) {
        const { left, top, width, height } = item.position
        autoRect.left = getMin(autoRect.left, left)
        autoRect.top = getMin(autoRect.top, top)
        autoRect.ex = Math.max(autoRect.ex, parseInt(`${width}`) + left) // 结束坐标点
        autoRect.ey = Math.max(autoRect.ey, parseInt(`${height}`) + top)
      }
    })
    return {
      left: autoRect.left,
      top: autoRect.top,
      width: Math.abs(autoRect.ex - autoRect.left),
      height: Math.abs(autoRect.ey - autoRect.top)
    }

    function getMin(num1: number, num2: number) {
      if (num1 === 0) {
        return num2
      } else {
        return Math.min(num1, num2)
      }
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
    state.rect.display = 'none' // 防意外，清空下
    state.activeIndex = [newIndex]
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
  // 组件属性等操作事件处理
  const controlEvent = (key: string, index: number, val?: boolean) => {
    // 确保意外，这里清除下
    state.rect.display = 'none'
    const isGroupId = screenData.value.list[index].id
    const list = screenData.value.list
    if (['display', 'lock'].includes(key)) {
      if (key === 'display') {
        list[index].position[key] = val
      } else {
        list[index].config[key] = val
      }
      if (isGroupId) {
        // 将组内所有设置
        list.forEach((item: ScreenData) => {
          if (item.groupId === isGroupId) {
            if (key === 'display') {
              item.position.display = val
            } else {
              item.config.lock = val
            }
          }
        })
      }
      setCurrentConfig(list[index]) // 右则属性
    }
    if (key === 'del') {
      screenData.value.list.splice(index, 1)
      canvasClick()
      if (isGroupId) {
        screenData.value.list = list.filter((item: ScreenData) => {
          return item.groupId !== isGroupId
        })
      }
    }
    if (key === 'copy') {
      let randId = ''
      const newObj = jsonParseStringify(screenData.value.list[index])
      if (isGroupId) {
        randId = randomString(8)
        // 修改下当前组的id
        newObj.id = randId
        // 找出组内的所有组件依次追加
        list.forEach((item: ScreenData) => {
          if (item.groupId === isGroupId) {
            const newGroupObj = jsonParseStringify(item)
            //修改groupId，指向新组
            newGroupObj.groupId = randId
            screenData.value.list.push(newGroupObj)
          }
        })
      }
      screenData.value.list.push(newObj)
      // 选中复制的，即最后一条记录
      const cloneIndex = screenData.value.list.length - 1
      itemClick(newObj, cloneIndex)
    }
    setLayerList() // 重置左侧
  }
  // 支持键盘控制调整位置
  const controlMoveByKeydown = (event: any) => {
    if (!state.activeIndex?.length) {
      return
    }
    const moveIndex = jsonParseStringify(state.activeIndex)
    // 当前移动为合并组时
    const groupId = screenData.value.list[state.activeIndex[0]].id
    if (state.activeIndex.length === 1 && groupId) {
      screenData.value.list.forEach((item: ScreenData, index: number) => {
        if (item.groupId === groupId) {
          moveIndex.push(index)
        }
      })
    }
    for (const key in moveIndex) {
      const index = moveIndex[key]
      const objActive = screenData.value.list[index]
      const canMove = canControlRect(objActive?.position)
      if (!canMove) {
        console.log('不能移')
        break
      }
      if (event.key === 'ArrowRight') {
        objActive.position.left++
      } else if (event.key === 'ArrowLeft') {
        objActive.position.left--
      } else if (event.key === 'ArrowDown') {
        objActive.position.top++
      } else if (event.key === 'ArrowUp') {
        objActive.position.top--
      }
    }
    // 临时选中的矩形框也允许移动
    if (state.rect.display === 'block') {
      if (event.key === 'ArrowRight') {
        state.rect.left = parseInt(state.rect.left) + 1 + 'px'
      } else if (event.key === 'ArrowLeft') {
        state.rect.left = parseInt(state.rect.left) - 1 + 'px'
      } else if (event.key === 'ArrowDown') {
        state.rect.top = parseInt(state.rect.top) + 1 + 'px'
      } else if (event.key === 'ArrowUp') {
        state.rect.top = parseInt(state.rect.top) - 1 + 'px'
      }
    }
    event.preventDefault()
  }
  // 临时框选矩形右键菜单
  const drawReactContextmenu = (evt: MouseEvent) => {
    rightMenuEl.value.open({ x: evt.pageX, y: evt.pageY })
    evt.preventDefault()
  }
  // 视图组件右键事件
  const screenContextmenu = ({
    x,
    y,
    type
  }: {
    x: number
    y: number
    type: number
  }) => {
    rightMenuEl.value.open({ x: x, y: y, type: type })
  }
  const rightMenuClick = (key: string, type: number) => {
    const { list } = screenData.value
    const { id, position } = list[state.activeIndex[0]] // 当前选中的组id
    let min
    let max = 0
    switch (key) {
      case 'merge':
        rightMenuMerge()
        break
      case 'split':
        // 1.先移除组id标志
        // 2.删除组图层
        list.forEach((item: any) => {
          if (item.groupId === id) {
            delete item.groupId
          }
        })
        screenData.value.list.splice(state.activeIndex[0], 1)
        // 3.清空当前选中
        canvasClick()
        setLayerList()
        break
      case 'left':
        //左对齐。按从选中的左则最小值为基准对齐
        //type=0临时矩形选中，对当前选中的，1时组内
        if (type === 0) {
          min = parseInt(state.rect.left)
        } else if (type === 1) {
          min = position.left
        }
        screenData.value.list.forEach((item: ScreenData, index: number) => {
          if (
            (type === 0 && state.activeIndex.includes(index)) ||
            (type === 1 && item.groupId === id)
          ) {
            item.position.left = min
            if (item.position.width > max) {
              max = parseInt(item.position.width as string)
            }
          }
        })
        // 重设组或临时选区的宽度
        if (type === 0) {
          state.rect.width = max + 'px'
        } else if (type === 1) {
          screenData.value.list[state.activeIndex[0]].position.width = max
        }
        break
      case 'right':
      case 'top':
      case 'bottom':
      case 'horizontally':
      case 'verticalCenter':
        // 这里对齐方式后面根据情况完善
        break
      case 'copy':
      case 'del':
      case 'lock':
      case 'display':
        controlEvent(key, state.activeIndex[0], true)
        break
    }
  }
  const rightMenuMerge = () => {
    // 此合并方法不易扩展，实现拖动缩放等比较困难。
    // 可行方案：在合并时应将所选标签和组作为嵌套关系，并将所选标签转为百分比定位
    // 1.在list里追加一个组的记录
    // 2.将当前选中的使用groupId标志为一个组
    const randId = randomString(8)
    screenData.value.list.push({
      type: 'group',
      position: {
        left: parseInt(state.rect.left),
        top: parseInt(state.rect.top),
        width: parseInt(state.rect.width),
        height: parseInt(state.rect.height),
        zIndex: 110 // 这个层要确保高于组内的其他图层
      },
      config: {},
      id: randId
    })
    screenData.value.list.forEach((item: any, index: number) => {
      if (state.activeIndex.includes(index)) {
        item.groupId = randId
      }
    })
    // 3.选中当前整个组，即最后一条记录
    const index = screenData.value.list.length - 1
    itemClick(screenData.value.list[index], index)
    //4.重置图层
    setLayerList()
  }
  // 右键菜单相关结束
  //组件移动缩放事件，用于处理合并组
  const moveOrResize = () => {}
  onMounted(() => {
    getInitScale()
    getData()
    document.addEventListener('keydown', controlMoveByKeydown)
  })
  onUnmounted(() => {
    document.removeEventListener('keydown', controlMoveByKeydown)
  })
</script>
