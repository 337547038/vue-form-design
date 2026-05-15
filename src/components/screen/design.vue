<template>
  <draggable
    v-bind="{
      group: 'screen',
      animation: 200,
      handle: '.none'
    }"
    :list="designData"
    class="drag"
    item-key="id"
    name="fade"
    ghost-class="ghost"
    @add="draggableAdd"
  >
    <template #item="{ element }">
      <div
        class="component-wrapper"
        :class="{
          ['group-' + element.type]: true,
          [element.class]: element.class,
          'active':activeIds?.includes(element.id)
        }"
        :style="getPositionStyle(element)"
        @contextmenu.stop.prevent="componentContextMenu(element, $event)"
        @mousedown.left.stop="dragStart($event, element)"
      >
        <div
          v-show="activeIds?.includes(element.id)&&cannotDragScale(element)"
          class="resize-box"
        >
          <span
            v-for="item in 8"
            :key="item"
            :class="`rs${item}`"
            @mousedown.stop="startResize($event, element,item)"
          />
          <div
            class="position-tips"
          >
            {{ getPositionStyle(element) }}
          </div>
        </div>
        <template v-if="['container','div'].includes(element.type)">
          <design
            v-model="element.children"
            data-type="div"
          />
        </template>
        <component-factory
          v-else
          :data="element"
        />
      </div>
    </template>
  </draggable>
</template>
<script setup lang="ts">
  import {computed, onMounted, onUnmounted, ref} from 'vue'
  import draggable from 'vuedraggable-es'
  import {useScreenStore} from '@/store/screen'
  import ComponentFactory from './componentFactory.vue'
  import {groupWrapStyle, showTempRect, toNumber, getPositionStyle, cannotDragScale} from "./utils";
  import type {Command, Component} from '@/types/screen'
  import {ElMessage} from "element-plus";

  const emits = defineEmits<{
    (e: 'contextmenuEvent', val: { x?: number, y?: number, component?: Component, close?: boolean }): void
    (e: 'clickFocus'): void
  }>()

  const store = useScreenStore()
  const designData = defineModel<Component>()
  const MIN_SIZE = 1

  const activeIds = computed(() => {
    return store.selectedComp.map((item: { id: any; }) => item.id)
  })
  // 拖动和缩放
  const resizeDrag = ref({
    resizeFlag: false,
    dragFlag: false,
    hasMove: false,
    index: -1,
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    startXPos: 0,
    startYPos: 0,
    obj: {},
    groupPos: {}
  })
  const resetResizeDrag = JSON.stringify(resizeDrag.value)
  const startResize = (evt: MouseEvent, obj: Component, index: number) => {
    evt.preventDefault()
    evt.stopPropagation()
    const {width, height, x, y} = obj || {}
    resizeDrag.value = {
      resizeFlag: true,
      startX: evt.clientX,
      startY: evt.clientY,
      startWidth: toNumber(width),
      startHeight: toNumber(height),
      startXPos: toNumber(x),
      startYPos: toNumber(y),
      index: index,
      obj: obj
    }
  }
  const onResizeMove = (evt: MouseEvent) => {
    const {resizeFlag, index, startX, startY, startWidth, startHeight, startXPos, startYPos, obj} = resizeDrag.value
    if (!resizeFlag) return

    const dx = evt.clientX - startX
    const dy = evt.clientY - startY

    let newW = startWidth
    let newH = startHeight
    let newX = startXPos
    let newY = startYPos

    switch (index) {
      case 1:
        newW = startWidth - dx
        newH = startHeight - dy
        newX = startXPos + dx
        newY = startYPos + dy
        break
      case 2:
        newH = startHeight - dy
        newY = startYPos + dy
        break
      case 3:
        newW = startWidth + dx
        newH = startHeight - dy
        newY = startYPos + dy
        break
      case 4:
        newW = startWidth - dx
        newX = startXPos + dx
        break
      case 5:
        newW = startWidth + dx
        break
      case 6:
        newW = startWidth - dx
        newH = startHeight + dy
        newX = startXPos + dx
        break
      case 7:
        newH = startHeight + dy
        break
      case 8:
        newW = startWidth + dx
        newH = startHeight + dy
        break
    }
    // 最小尺寸
    newW = Math.max(newW, MIN_SIZE)
    newH = Math.max(newH, MIN_SIZE)

    // 最终赋值
    obj.width = newW
    obj.height = newH
    obj.x = newX
    obj.y = newY
    // 表示有移动过
    if (startWidth !== newW && startHeight !== newH) {
      resizeDrag.value.hasMove = true
    }
    console.log('resizeDrag.value.hasMove', resizeDrag.value.hasMove)
  }
  const dragStart = (evt: MouseEvent, obj: Component) => {
    emits('clickFocus') // 设置焦点，确保焦点在父节点，否则删除可能失败
    // 锁定的不能操作
    if (obj.locked) {
      return
    }
    // 不符合移动组合等条件的，只选中
    if (!cannotDragScale(obj)) {
      store.setSelectedComp(obj)
      return false
    }
    evt.preventDefault()
    // 关闭右键菜单
    emits('contextmenuEvent', {close: true})
    const {x, y} = obj || {}
    resizeDrag.value = {
      dragFlag: true,
      hasMove: false,
      startX: evt.clientX,
      startY: evt.clientY,
      startXPos: toNumber(x),
      startYPos: toNumber(y),
      obj: obj
    }
    if (obj.type === 'rect') {
      // 当前移动的是矩形选框时，则连同选中的子节点一起移动．记录初始点
      resizeDrag.value.groupPos = store.selectedComp.map((item: Component) => [item.x, item.y])
    }
    const isCtrlPress = store.ctrlPress
    // 设置当前为选中状态
    if (obj.type !== 'rect') {
      store.setSelectedComp(obj, isCtrlPress)
      if (!isCtrlPress) {
        store.deleteRect()
      }
    }
    if (isCtrlPress && store.selectedComp.length > 1) {
      // 按住多选时显示临时选区
      resizeDrag.value.obj = showTempRect(groupWrapStyle())
    }
    store.setControlTip('可使用键盘调整位置或按下delete键可删除')
  }
  const onMouseMove = (evt: MouseEvent) => {
    const {startX, startY, startXPos, startYPos, dragFlag, obj, groupPos} = resizeDrag.value
    if (!dragFlag) return
    // 计算偏移量
    const dx = evt.clientX - startX
    const dy = evt.clientY - startY

    // 计算新位置
    let newX = startXPos + dx
    let newY = startYPos + dy

    // 赋值
    obj.x = newX
    obj.y = newY
    if (obj.type === 'rect') {
      // 当前移动的是矩形选框时，则连同选中的子节点一起移动
      store.selectedComp.forEach((item: Component, index: number) => {
        item.x = toNumber(groupPos[index][0]) + dx
        item.y = toNumber(groupPos[index][1]) + dy
      })
    }
    // 表示有移动
    if (dx !== 0 && dy !== 0) {
      resizeDrag.value.hasMove = true
    }
    store.setControlTip(`${newX}:${newY}`)
  }
  const onMouseUp = () => {
    // 添加更新历史
    const {
      startXPos,
      startYPos,
      dragFlag,
      obj,
      groupPos,
      hasMove,
      resizeFlag,
      startWidth,
      startHeight
    } = resizeDrag.value
    if (hasMove) {
      const updateComponents = [obj]
      let oldProps: any = [{x: startXPos, y: startYPos}]
      if (dragFlag) {
        if (obj.type === 'rect') {
          store.selectedComp.forEach((item: Component, index: number) => {
            updateComponents.push(item)
            oldProps.push({x: toNumber(groupPos[index][0]), y: groupPos[index][1]})
          })
        }
      }
      if (resizeFlag) {
        oldProps = [{x: startXPos, y: startYPos, width: startWidth, height: startHeight}]
      }
      store.updateComponentHistory(updateComponents, oldProps, true)
    }
    resizeDrag.value = JSON.parse(resetResizeDrag)
  }

  // 拖拽添加
  const draggableAdd = (evt: any) => {
    const newIndex = evt.newIndex
    const obj: Component = designData.value[newIndex]
    // 不能嵌套
    const isNested = evt.target && evt.target.getAttribute('data-type')
    if (isNested === 'div' && obj.type === 'div') {
      designData.value.splice(newIndex, 1)
      ElMessage.warning('不能嵌套div标签')
      return
    }
    const {offsetX, offsetY} = evt.originalEvent
    obj.id = obj.type + new Date().getTime()
    /*if (obj.type === 'div') {
      obj.width = parseInt(canvasWidth.value) - offsetX
    }*/
    obj.x = offsetX
    obj.y = offsetY
    store.setSelectedComp(obj)
    store.deleteRect() // 确保不会出现选区
    //记录历史
    const command: Command = {
      execute: () => {
        store.setDesignData(obj, true)
      },
      undo: () => {
        store.setDeleteDesignData(obj.id)
      }
    }
    store.setHistory(command)
  }

  // 鼠标右键事件
  const componentContextMenu = (component: Component, evt: MouseEvent) => {
    evt.preventDefault()
    // 如果组件被锁定，不处理
    //if (component.locked) return
    emits('contextmenuEvent', {x: evt.clientX, y: evt.clientY, component: component})
  }
  onMounted(() => {
    window.addEventListener('mousemove', (e: MouseEvent) => {
      onMouseMove(e)
      onResizeMove(e)
    })
    window.addEventListener('mouseup', onMouseUp)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', (e: MouseEvent) => {
      onMouseMove(e)
      onResizeMove(e)
    })
    window.removeEventListener('mouseup', onMouseUp)
  })
</script>