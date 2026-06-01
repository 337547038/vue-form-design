<template>
  <div
    ref="containerRef"
    class="design-main"
  >
    <a-ruler
      :size="canvasStyle.width"
    />
    <a-ruler
      direction="v"
      :size="canvasStyle.height"
    />
    <div
      tabindex="0"
      :style="canvasStyle"
      class="design-canvas design-border"
      @mousedown.left="canvasMousedown"
      @mousemove="canvasMouseMove"
      @mouseup="canvasMouseUp"
      @mouseleave="canvasMouseUp"
      @keydown="canvasKeyDown"
      @focus="isCanvasFocused = true"
      @blur="isCanvasFocused = false"
    >
      <design
        v-model="store.designData"
        @click-focus="isCanvasFocused = true"
        @contextmenu-event="contextmenuEvent"
      />
      <context-menu ref="contextMenuRef" />
      <div
        v-if="store.isShowGrid"
        class="show-grid"
      />
    </div>
    <div
      v-if="designDataLen===0"
      class="no-date"
    >
      请从左则组件栏拖动组件到设计区域
    </div>
  </div>
</template>
<script setup lang="ts">
  import {computed, nextTick, onMounted, onUnmounted, reactive, ref, watch} from 'vue'
  import ARuler from './ruler.vue'
  import {useScreenStore} from "@/store/screen"
  import Design from "./design.vue"
  import type {Component} from '@/types/screen'
  import {groupWrapStyle, showTempRect, toNumber, cannotDragScale} from "./utils"
  import ContextMenu from "./contextMenu.vue"

  const store = useScreenStore()

  const containerRef = ref()
  const contextMenuRef = ref()

  const designDataLen = computed(() => {
    return store.designFilterData?.length
  })
  const designConfig = computed(() => {
    return store.designConfig
  })
  const state = reactive({
    moveFlag: false,
    startX: 0,
    startY: 0,
    currentComponent: null // 当前组件
  })
  const getComponentRect = (key?: string) => {
    const rect = containerRef.value.getBoundingClientRect()
    return key ? rect[key] : rect
  }
  const getInit = () => {
    nextTick(() => {
      const boxWidth = containerRef.value.offsetWidth
      const screenWidth = parseInt(designConfig.value?.width)
      if (boxWidth && screenWidth) {
        const scale = parseInt(`${(boxWidth / screenWidth) * 100}`)
        store.setAutoScale(scale)
        store.setScale(parseInt(store.scale) || scale)
      }
      /*state.offset[0] = componentRect.value.x + 20
      state.offset[1] = componentRect.value.y + 20*/
    })
  }

  const canvasStyle = computed(() => {
    const {width, height, background, primary} = designConfig.value || {}
    const scale = store.scale / 100
    return {
      width: width,
      height: height,
      background: background,
      transform: `scale(${scale})`,
      color: primary
    }
  })
  watch([() => store.showComponentPanel, () => store.showPropertyPanel], () => {
    // 展开收起有过渡动画时间
    setTimeout(() => {
      getInit()
    }, 500)
  })
  // 计算点击位置的相对坐标，支持缩放
  const getXY = (x: number, y: number) => {
    return {
      x: (x - (getComponentRect('left') + 20) + containerRef.value.scrollLeft) / store.scale * 100,
      y: (y - (getComponentRect('top') + 20) + containerRef.value.scrollTop) / store.scale * 100
    }
  }
  // 绘制选区
  const canvasMousedown = (evt: MouseEvent) => {
    // 确保关闭右键菜单
    contextmenuEvent({close: true})
    // 清空
    store.setSelectedComp([])

    const position = {
      x: getXY(evt.clientX, evt.clientY).x,
      y: getXY(evt.clientX, evt.clientY).y
    }
    state.startX = position.x
    state.startY = position.y
    state.currentComponent = showTempRect(position)
    state.moveFlag = true
    store.setControlTip('')
  }
  const canvasMouseMove = (evt: MouseEvent) => {
    if (!state.moveFlag) return
    const endX = getXY(evt.clientX, evt.clientY).x
    const endY = getXY(evt.clientX, evt.clientY).y
    Object.assign(state.currentComponent, {
      x: Math.min(state.startX, endX),
      y: Math.min(state.startY, endY),
      width: Math.abs(endX - state.startX),
      height: Math.abs(endY - state.startY),
      display: '',
    })
  }
  const canvasMouseUp = () => {
    if (!state.moveFlag) return
    state.moveFlag = false
    // 太小的选区不处理
    const {width, height, x, y} = state.currentComponent
    if (width < 30 || height < 30) {
      state.currentComponent.display = true
      state.currentComponent.class = ''
      state.currentComponent = null
      return
    }
    const selRect = {
      x: x,
      y: y,
      w: width,
      h: height
    }
    // 遍历匹配重叠box
    store.designFilterData?.forEach((item: Component) => {
      // 排除不符合条件的
      if (cannotDragScale(item)) {
        const boxRect = {
          x: toNumber(item.x),
          y: toNumber(item.y),
          w: toNumber(item.width),
          h: toNumber(item.height)
        }
        if (isRectOverlap(selRect, boxRect)) {
          store.setSelectedComp(item, true)
        }
      }
    })
    const len = store.selectedComp.length
    if (len > 1) {
      //选中两个以上,重新计算选区位置
      Object.assign(state.currentComponent, groupWrapStyle())
    } else {
      // 只有一条或没有时隐藏不显示
      state.currentComponent.display = true
      state.currentComponent.class = ''
      store.deleteRect() // 确保不现出选区
    }
    state.currentComponent = null
  }

  // 矩形碰撞检测
  const isRectOverlap = (
    r1: { x: number; y: number; w: number; h: number },
    r2: { x: number; y: number; w: number; h: number }
  ) => {
    return !(
      r1.x + r1.w < r2.x ||
      r1.x > r2.x + r2.w ||
      r1.y + r1.h < r2.y ||
      r1.y > r2.y + r2.h
    )
  }
  // 绘制选区结束
  // 右键菜单事件
  const contextmenuEvent = (data: { x?: number, y?: number, component?: Component, close?: boolean }) => {
    //处理下位置坐标,
    if (data.x && data.y) {
      data.x = getXY(data.x, data.y).x
      data.y = getXY(data.x, data.y).y
    }
    contextMenuRef.value.open(data)
  }
  // 右键菜单事件结束
  // 键盘事件
  const isCanvasFocused = ref(false) // 当前焦点在container中才执行键盘事件
  const canvasKeyDown = (e: KeyboardEvent) => {
    // 判断是方向键
    const arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (arrowKeys.includes(e.key)) {
      // 关键：阻止浏览器默认滚动
      e.preventDefault();
      // 执行你的组件移动逻辑
      moveByKeyArrow(e.key);
    }
  };
  const moveByKeyArrow = (key: string) => {
    const {selectedComp, designData} = store;
    const len = selectedComp.length;

    // 统一：获取选区矩形（只有多选时才找）
    const selectRect = len > 1
      ? designData.find((i: any) => i.type === 'rect' && !i.display)
      : undefined;

    // 统一移动方法
    const move = (dx: number, dy: number) => {
      // 移动所有选中组件
      selectedComp.forEach((item: any) => {
        item.x = toNumber(item.x) + dx;
        item.y = toNumber(item.y) + dy;
      });
      // 移动选区框
      if (selectRect) {
        selectRect.x = toNumber(selectRect.x) + dx;
        selectRect.y = toNumber(selectRect.y) + dy;
      }
    };

    // 方向映射
    const directionMap: Record<string, [dx: number, dy: number]> = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
    };

    // 执行移动
    const offset = directionMap[key];
    if (offset) move(...offset);
  };
  const pressFlag = ref(false)
  const keydown = (evt: KeyboardEvent) => {
    if (evt.key === 'Control' && isCanvasFocused.value) {
      store.setCtrlPress(true)
      const num = store.selectedComp.length
      store.setControlTip(num > 0 ? `当前选中${num}个` : '')
      pressFlag.value = true
    }
  }
  const keyup = (evt: KeyboardEvent) => {
    // 撤销事件
    if (evt.key === 'z' && store.ctrlPress && store.canUndo) {
      store.setUndo()
      return;
    }
    if (!isCanvasFocused.value) {
      return
    }
    store.setCtrlPress(false)
    if (pressFlag.value) {
      store.setControlTip('')
    }
    pressFlag.value = false
    if (evt.key === 'Delete') {
      //获取需要删除的id从设计数组中删除
      const ids = store.selectedComp.map((item: Component) => item.id)
      store.setDeleteDesignData(ids)
      // 从store中删除已选择的
      store.setSelectedComp([])
      // 清空选区
      store.deleteRect()
    }
  }
  // 键盘事件结束
  onMounted(() => {
    getInit()
    window.addEventListener('keydown', keydown)
    window.addEventListener('keyup', keyup)
  })
  onUnmounted(() => {
    window.removeEventListener('keydown', keydown)
    window.removeEventListener('keyup', keyup)
  })
</script>
