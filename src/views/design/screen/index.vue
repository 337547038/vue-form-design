<!-- Created by weiXin:337547038 -->
<template>
  <div v-loading="loading" class="container-screen">
    <i
      v-if="preview"
      class="icon-close close-preview"
      @click="preview = false"
    ></i>
    <control-left
      ref="controlLeftEl"
      :style="{ width: toolVisible('left') ? '' : '0px' }"
      @update="controlEvent"
    />
    <div class="main-box">
      <head-tools @click="headToolsClick" />
      <screen-design
        :preview="preview as boolean"
        :data="screenData"
        :update-position="updatePosition"
        :screenContextmenu="screenContextmenu"
        @draggable-add="setLayerList"
      />
    </div>
    <config-control
      ref="configEl"
      v-model:config="screenData.config"
      :style="{ width: toolVisible('right') ? '' : '0px' }"
      @update="setLayerList"
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
    <right-menu ref="rightMenuEl" @click="rightMenuClick" />
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
    appendOrRemoveStyle,
    jsonParseStringify
  } from '@/utils/design'

  import { useLayoutStore } from '@/store/layout'
  import { useDesignStore } from '@/store/design'
  import AceDrawer from '../components/aceDrawer.vue'
  import VueFile from '../components/vueFile.vue'
  import HeadTools from '../components/headTools.vue'
  import ConfigControl from './components/configControl.vue'
  import ControlLeft from './components/controlLeft.vue'
  import ScreenDesign from './components/design.vue'
  import type {
    Contextmenu2,
    OpenDrawer,
    ScreenData,
    UpdatePosition
  } from './types'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import { getInitData } from './getData'
  import { removeUnit } from './utils'
  import RightMenu from './components/rightMenu.vue'
  import { randomString } from '@/utils'
  import { getDrawerContent, getDrawerTitle } from '../components/aceTooptip'

  const route = useRoute()
  const router = useRouter()
  const layoutStore = useLayoutStore()
  const designStore = useDesignStore()
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
    return !designStore.getDataScreen(type)
  }
  const loading = ref(false)
  const preview = ref(false) // 预览模式
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

  /**
   * 设计左侧图层信息
   */
  const setLayerList = () => {
    controlLeftEl.value.setLayer(screenData.value.list)
  }
  // 顶部工具栏点击事件
  const headToolsClick = (type: string) => {
    designStore.setScreenControlAttr({}) // 清空右则属性相关
    switch (type) {
      case 'del':
        screenData.value.list = []
        setLayerList()
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
  const drawer = reactive({
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
          screenData.value.config.style = editVal
          appendOrRemoveStyle('screenStyle', editVal, true)
          break
        case 'json':
          screenData.value = stringToObj(editVal)
          setLayerList()
          break
      }
      dialogCancel()
    } catch (res: any) {
      ElMessage.error(res.message || '未知原因')
    }
  }
  const openDrawer = (params: OpenDrawer) => {
    const { type = '', direction, codeType, title, callback, content } = params
    drawer.direction = direction || 'ltr' // 窗口位置ltr/rtl
    drawer.type = type // 作为窗口唯一标识，在窗口关闭时可根据type作不同处理
    drawer.codeType = codeType || '' // 显示代码类型
    drawer.title = title || (getDrawerTitle as any)[type]
    drawer.visible = true
    drawer.callback = callback
    let editData =
      codeType === 'json'
        ? json2string(content, true)
        : objToStringify(content, true)
    switch (type) {
      case 'editCss':
        editData = screenData.value.config.style || ''
        break
      case 'beforeFetch':
      case 'afterFetch':
      case 'afterFetchScreen':
        if (!content) {
          editData = getDrawerContent(type)
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

  /**
   * 更新位置数据
   * @param index 数组下标
   * @param obj 相关数据
   * @param tempRectIndex 临时选中的下标
   */
  const updatePosition = (
    index: number,
    obj: UpdatePosition,
    tempRectIndex: number[]
  ) => {
    if (obj.type === 'move') {
      // 移动时
      const list = screenData.value.list[index]
      list.position.left = obj.left
      list.position.top = obj.top
      if (list.type === 'tempRect') {
        //临时选区移动时，则移动下面所有选中的。这里移动不是实时的鼠标弹起触发
        tempRectIndex.forEach((index: number) => {
          const tempIndex = screenData.value.list[index]
          tempIndex.position.left =
            parseInt(tempIndex.position.left) + obj.moveX
          tempIndex.position.top = parseInt(tempIndex.position.top) + obj.moveY
        })
      }
    }
    if (obj.type === 'resize') {
      //缩放
      const list = screenData.value.list[index]
      list.position.left = obj.left
      list.position.top = obj.top
      list.position.width = obj.width
      list.position.height = obj.height
    }
    if (obj.type === 'keydown') {
      //通过键盘方向键移动
      const { type } = screenData.value.list[index]
      keydownMove(index, obj.eventKey as string)
      if (type === 'tempRect' && tempRectIndex?.length) {
        // 同时移动当前选中的
        tempRectIndex.forEach((item: number) => {
          keydownMove(item, obj.eventKey as string)
        })
      }
    }
    function keydownMove(index: number, eventKey: string) {
      const { position } = screenData.value.list[index]
      const leftNum = removeUnit(position.left)
      const topNum = removeUnit(position.top)
      switch (eventKey) {
        case 'ArrowRight':
          position.left = leftNum + 1
          break
        case 'ArrowLeft':
          position.left = leftNum - 1
          break
        case 'ArrowDown':
          position.top = topNum + 1
          break
        case 'ArrowUp':
          position.top = topNum - 1
          break
      }
    }
  }
  /**
   * 左侧图层事件隐藏锁定删除事件
   * @param key
   * @param index
   * @param val
   */
  const controlEvent = (key: string, index: number, val?: boolean) => {
    const list = screenData.value.list
    const currentData = list[index]
    const isGroupId = currentData.id

    if (['display', 'lock'].includes(key)) {
      if (key === 'display') {
        list[index].position[key] = val
      } else {
        list[index].config[key] = val
      }
      if (isGroupId && currentData.type === 'group') {
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
    }
    if (key === 'active') {
      designStore.setScreenControlAttr(list[index]) // 右则属性
    }
    if (key === 'del') {
      screenData.value.list.splice(index, 1)
      if (isGroupId && currentData.type === 'group') {
        screenData.value.list = list.filter((item: ScreenData) => {
          return item.groupId !== isGroupId
        })
      }
    }
    setLayerList() // 重置左侧
  }

  const rightMenuEl = ref()
  /**
   *右键菜单相关
   */
  const screenContextmenu = (data: Contextmenu2) => {
    rightMenuEl.value.open(data)
  }
  const rightMenuClick = (key: string, data: any) => {
    console.log(key, data)
    const list = screenData.value.list
    const currentData = list[data.activeIndex]
    const isGroupId = currentData.id
    const type = currentData.type
    const { left, top, width, height } = currentData.position
    switch (key) {
      case 'copy':
        const newObj = jsonParseStringify(currentData)
        if (isGroupId) {
          const randId = randomString(8)
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
        break
      case 'del':
        screenData.value.list.splice(data.activeIndex, 1)
        if (isGroupId && currentData.type === 'group') {
          screenData.value.list = list.filter((item: ScreenData) => {
            return item.groupId !== isGroupId
          })
        }
        if (type === 'tempRect') {
          for (let i = data.tempRectIndex.length - 1; i >= 0; i--) {
            screenData.value.list.splice(data.tempRectIndex[i], 1)
          }
        }
        data.callback('canvasClick')
        break
      case 'lock':
      case 'display':
        if (type !== 'tempRect') {
          //临时选中矩形没有这些属性
          if (key === 'display') {
            currentData.position[key] = true
          } else {
            currentData.config[key] = true
          }
        }
        if (isGroupId) {
          // 将组内所有设置
          list.forEach((item: ScreenData) => {
            if (item.groupId === isGroupId) {
              if (key === 'display') {
                item.position.display = true
              } else {
                item.config.lock = true
              }
            }
          })
        }
        if (type === 'tempRect') {
          for (let i = 0; i < data.tempRectIndex.length; i++) {
            if (key === 'display') {
              list[data.tempRectIndex[i]].position.display = true
            } else {
              list[data.tempRectIndex[i]].config.lock = true
            }
          }
          currentData.position.display = true
        }
        break
      case 'merge':
        const randId = randomString(8)
        screenData.value.list.push({
          type: 'group',
          position: {
            left: left,
            top: top,
            width: width,
            height: height,
            zIndex: 110 // 这个层要确保高于组内的其他图层
          },
          config: {},
          id: randId
        })
        const index = screenData.value.list.length - 1
        data.callback('merge', { index: index })
        //todo 要实现组缩放，需将组内组件放在一个div里并使用定位方式
        //4.重置图层
        setLayerList()
        break
      case 'split':
        list.forEach((item: any) => {
          if (item.groupId === isGroupId) {
            delete item.groupId
          }
        })
        screenData.value.list.splice(data.activeIndex, 1)
        // 3.清空当前选中
        data.callback('canvasClick')
        setLayerList()
        break
      case 'left':
      case 'top':
        //左对齐。按从选中的左则最小值为基准对齐
        //type=0临时矩形选中，对当前选中的，1时组内
        const wh = key === 'left' ? 'width' : 'height'
        if (type === 'tempRect') {
          const min = removeUnit(currentData.position[key])
          let max = 0
          for (const i in data.tempRectIndex) {
            const obj = list[data.tempRectIndex[i]]
            obj.position[key] = min
            if (obj.position[wh] > max) {
              max = removeUnit(obj.position[wh])
            }
          }
          // 重设组或临时选区的宽度
          currentData.position[wh] = max + 'px'
        }
        break
      case 'right':
        if (type === 'tempRect') {
          const min = removeUnit(width) + removeUnit(left)
          let max = 0
          for (const key in data.tempRectIndex) {
            const obj = list[data.tempRectIndex[key]]
            obj.position.left = min - removeUnit(obj.position.width)
            if (obj.position.width > max) {
              max = removeUnit(obj.position.width)
            }
          }
          // 重设组或临时选区的宽度
          currentData.position.width = max + 'px'
          currentData.position.left = `${min - max}px`
        }
        break
      case 'bottom':
        if (type === 'tempRect') {
          const min = removeUnit(height) + removeUnit(top)
          let max = 0
          for (const key in data.tempRectIndex) {
            const obj = list[data.tempRectIndex[key]]
            obj.position.top = min - removeUnit(obj.position.height)
            if (obj.position.height > max) {
              max = removeUnit(obj.position.height)
            }
          }
          // 重设组或临时选区的宽度
          currentData.position.height = max + 'px'
          currentData.position.top = `${min - max}px`
        }
        break
      case 'horizontally':
      case 'verticalCenter':
        let center = removeUnit(top) + removeUnit(height) / 2
        let leftTop = 'top'
        let widthHeight = 'height'
        if (key === 'verticalCenter') {
          center = removeUnit(left) + removeUnit(width) / 2
          leftTop = 'left'
          widthHeight = 'width'
        }
        let max = 0
        for (const key in data.tempRectIndex) {
          const obj = list[data.tempRectIndex[key]]
          obj.position[leftTop] =
            center - removeUnit(obj.position[widthHeight]) / 2
          if (obj.position[widthHeight] > max) {
            max = removeUnit(obj.position[widthHeight])
          }
        }
        currentData.position[widthHeight] = max + 'px'
        currentData.position[leftTop] = center - max / 2
        break
    }
  }
  //****************数据相关****************//
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
      .then((res: any) => {
        loading.value = false
        screenData.value = res.screenData
        globalScreen.value = res.globalData
        setLayerList()
      })
      .catch(() => {
        loading.value = false
      })
  }
  //****************数据相关****************//
  onMounted(() => {
    getData()
  })
  onBeforeUnmount(() => {})
</script>
