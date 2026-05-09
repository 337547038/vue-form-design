<template>
  <div style="height: 600px">
  <div
    class="container"
    ref="containerRef"
    style="width: 1920px; height: 1080px; position: relative; background: #f5f5f5"
    @mousedown="startDraw"
    @mousemove="onDrawMove"
    @mouseup="stopDraw"
    @mouseleave="stopDraw"
  >
    <!-- 单个元素盒子 -->
    <div
      class="box"
      v-for="(item, index) in list"
      :key="index"
      :class="{ active: selectedList.has(index) }"
      :style="{
        width: `${item.width}px`,
        height: `${item.height}px`,
        left: `${item.x}px`,
        top: `${item.y}px`,
      }"
      @mousedown.stop="(e) => handleBoxMouseDown(e, index)"
    >
      <!-- 8个缩放控制点 -->
      <div class="handle lt" @mousedown.stop="(e) => startResize(e, index, 'lt')"></div>
      <div class="handle t" @mousedown.stop="(e) => startResize(e, index, 't')"></div>
      <div class="handle rt" @mousedown.stop="(e) => startResize(e, index, 'rt')"></div>
      <div class="handle l" @mousedown.stop="(e) => startResize(e, index, 'l')"></div>
      <div class="handle r" @mousedown.stop="(e) => startResize(e, index, 'r')"></div>
      <div class="handle lb" @mousedown.stop="(e) => startResize(e, index, 'lb')"></div>
      <div class="handle b" @mousedown.stop="(e) => startResize(e, index, 'b')"></div>
      <div class="handle rb" @mousedown.stop="(e) => startResize(e, index, 'rb')"></div>
    </div>

    <!-- 拖拽绘制临时选区 -->
    <div
      v-if="isDrawing"
      class="selection-box"
      :style="selectionStyle"
    />

    <!-- 多选组合包围框 -->
    <div
      v-if="selectedList.size > 1"
      class="group-wrap"
      :style="groupWrapStyle"
      @mousedown.stop="startGroupDrag"
    />
  </div></div>
</template>

<script setup lang="ts">
  import {ref, computed, onMounted, onUnmounted} from 'vue'

  // 容器常量
  const CONTAINER_WIDTH = 1920
  const CONTAINER_HEIGHT = 1080
  const MIN_SIZE = 20

  // 类型定义
  interface BoxItem {
    x: number
    y: number
    width: number
    height: number
  }

  type Point = { x: number; y: number }
  type DragState = {
    isDragging: boolean
    activeIndex: number
    startX: number
    startY: number
    elementStartX: number
    elementStartY: number
  }
  type ResizeState = {
    isResizing: boolean
    activeIndex: number
    direction: string
    startX: number
    startY: number
    startWidth: number
    startHeight: number
    startXPos: number
    startYPos: number
  }

  // 容器实例
  const containerRef = ref<HTMLDivElement | null>(null)

  // 盒子列表
  const list = ref<BoxItem[]>([
    {x: 150, y: 100, width: 120, height: 80},
    {x: 300, y: 150, width: 100, height: 100}
  ])

  // 选中集合
  const selectedList = ref<Set<number>>(new Set())

  // 单个拖拽、缩放状态
  const dragState = ref<DragState>({
    isDragging: false,
    activeIndex: -1,
    startX: 0,
    startY: 0,
    elementStartX: 0,
    elementStartY: 0,
  })
  const resizeState = ref<ResizeState>({
    isResizing: false,
    activeIndex: -1,
    direction: '',
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    startXPos: 0,
    startYPos: 0,
  })

  // 选区绘制状态
  const isDrawing = ref(false)
  const drawStart = ref<Point>({x: 0, y: 0})
  const drawEnd = ref<Point>({x: 0, y: 0})

  // 组合拖拽状态
  const groupDragState = ref({
    isDragging: false,
    startX: 0,
    startY: 0,
    boxOrigin: [] as { index: number; ox: number; oy: number }[]
  })

  // 选区样式
  const selectionStyle = computed(() => {
    const left = Math.min(drawStart.value.x, drawEnd.value.x)
    const top = Math.min(drawStart.value.y, drawEnd.value.y)
    const width = Math.abs(drawEnd.value.x - drawStart.value.x)
    const height = Math.abs(drawEnd.value.y - drawStart.value.y)
    return {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`
    }
  })

  // 计算多选包围盒位置大小
  const groupWrapStyle = computed(() => {
    const idxArr = Array.from(selectedList.value)
    let minX = Infinity, minY = Infinity
    let maxX = -Infinity, maxY = -Infinity

    idxArr.forEach(idx => {
      const item = list.value[idx]
      minX = Math.min(minX, item.x)
      minY = Math.min(minY, item.y)
      maxX = Math.max(maxX, item.x + item.width)
      maxY = Math.max(maxY, item.y + item.height)
    })

    return {
      left: `${minX}px`,
      top: `${minY}px`,
      width: `${maxX - minX}px`,
      height: `${maxY - minY}px`
    }
  })

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

  // 开始绘制选区
  const startDraw = (e: MouseEvent) => {
    // 点击空白处清空选中
    selectedList.value.clear()
    isDrawing.value = true
    const rect = containerRef.value!.getBoundingClientRect()
    drawStart.value = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
    //drawEnd.value = {...drawStart.value}
  }

  // 绘制移动
  const onDrawMove = (e: MouseEvent) => {
    if (!isDrawing.value) return
    const rect = containerRef.value!.getBoundingClientRect()
    drawEnd.value = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  // 结束绘制：选区碰撞选中box，不生成新box
  const stopDraw = () => {
    if (!isDrawing.value) return
    isDrawing.value = false

    // 获取选区矩形
    const selRect = {
      x: Math.min(drawStart.value.x, drawEnd.value.x),
      y: Math.min(drawStart.value.y, drawEnd.value.y),
      w: Math.abs(drawEnd.value.x - drawStart.value.x),
      h: Math.abs(drawEnd.value.y - drawStart.value.y)
    }

    // 太小的选区不处理
    if (selRect.w < 5 || selRect.h < 5) return

    // 遍历匹配重叠box
    list.value.forEach((item, idx) => {
      const boxRect = {
        x: item.x,
        y: item.y,
        w: item.width,
        h: item.height
      }
      if (isRectOverlap(selRect, boxRect)) {
        selectedList.value.add(idx)
      }
    })
  }

  // 点击单个box
  const handleBoxMouseDown = (e: MouseEvent, index: number) => {
    // 按住ctrl可多选，这里简化：单击单选
    selectedList.value.clear()
    selectedList.value.add(index)
    startDrag(e, index)
  }

  // ========== 单个box拖拽 ==========
  const startDrag = (e: MouseEvent, index: number) => {
    e.preventDefault()
    const box = list.value[index]
    dragState.value = {
      isDragging: true,
      activeIndex: index,
      startX: e.clientX,
      startY: e.clientY,
      elementStartX: box.x,
      elementStartY: box.y,
    }
  }

  const onMouseMove = (e: MouseEvent) => {
    // 单个拖拽
    if (dragState.value.isDragging) {
      const {activeIndex, startX, startY, elementStartX, elementStartY} = dragState.value
      const box = list.value[activeIndex]
      const dx = e.clientX - startX
      const dy = e.clientY - startY

      let newX = elementStartX + dx
      let newY = elementStartY + dy
      newX = Math.max(0, Math.min(newX, CONTAINER_WIDTH - box.width))
      newY = Math.max(0, Math.min(newY, CONTAINER_HEIGHT - box.height))

      box.x = newX
      box.y = newY
    }

    // 缩放
    if (resizeState.value.isResizing) {
      handleResizeMove(e)
    }

    // 组合拖拽
    if (groupDragState.value.isDragging) {
      handleGroupDragMove(e)
    }
  }

  // ========== 缩放逻辑 ==========
  const startResize = (e: MouseEvent, index: number, direction: string) => {
    e.preventDefault()
    e.stopPropagation()
    selectedList.value.clear()
    selectedList.value.add(index)

    const box = list.value[index]
    resizeState.value = {
      isResizing: true,
      activeIndex: index,
      direction,
      startX: e.clientX,
      startY: e.clientY,
      startWidth: box.width,
      startHeight: box.height,
      startXPos: box.x,
      startYPos: box.y,
    }
  }

  const handleResizeMove = (e: MouseEvent) => {
    const {direction, activeIndex, startX, startY, startWidth, startHeight, startXPos, startYPos} = resizeState.value
    const dx = e.clientX - startX
    const dy = e.clientY - startY
    const box = list.value[activeIndex]

    let newW = startWidth
    let newH = startHeight
    let newX = startXPos
    let newY = startYPos

    switch (direction) {
      case 'r':
        newW = startWidth + dx;
        break
      case 'l':
        newW = startWidth - dx;
        newX = startXPos + dx;
        break
      case 'b':
        newH = startHeight + dy;
        break
      case 't':
        newH = startHeight - dy;
        newY = startYPos + dy;
        break
      case 'rb':
        newW = startWidth + dx;
        newH = startHeight + dy;
        break
      case 'rt':
        newW = startWidth + dx;
        newH = startHeight - dy;
        newY = startYPos + dy;
        break
      case 'lb':
        newW = startWidth - dx;
        newH = startHeight + dy;
        newX = startXPos + dx;
        break
      case 'lt':
        newW = startWidth - dx;
        newH = startHeight - dy;
        newX = startXPos + dx;
        newY = startYPos + dy;
        break
    }

    newW = Math.max(newW, MIN_SIZE)
    newH = Math.max(newH, MIN_SIZE)
    newX = Math.max(newX, 0)
    newY = Math.max(newY, 0)
    newW = Math.min(newW, CONTAINER_WIDTH - newX)
    newH = Math.min(newH, CONTAINER_HEIGHT - newY)

    box.width = newW
    box.height = newH
    box.x = newX
    box.y = newY
  }

  // ========== 多选组合拖拽 ==========
  const startGroupDrag = (e: MouseEvent) => {
    groupDragState.value.isDragging = true
    groupDragState.value.startX = e.clientX
    groupDragState.value.startY = e.clientY
    // 记录每个选中box初始位置
    groupDragState.value.boxOrigin = Array.from(selectedList.value).map(idx => ({
      index: idx,
      ox: list.value[idx].x,
      oy: list.value[idx].y
    }))
  }

  const handleGroupDragMove = (e: MouseEvent) => {
    const dx = e.clientX - groupDragState.value.startX
    const dy = e.clientY - groupDragState.value.startY

    groupDragState.value.boxOrigin.forEach(item => {
      const box = list.value[item.index]
      let newX = item.ox + dx
      let newY = item.oy + dy
      // 边界限制：整体不能移出容器
      newX = Math.max(0, Math.min(newX, CONTAINER_WIDTH - box.width))
      newY = Math.max(0, Math.min(newY, CONTAINER_HEIGHT - box.height))
      box.x = newX
      box.y = newY
    })
  }

  // 全局鼠标抬起
  const onMouseUp = () => {
    dragState.value.isDragging = false
    resizeState.value.isResizing = false
    groupDragState.value.isDragging = false
  }

  // 全局事件
  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)


    const data = {name: 'a', position: {x: 100, y: 100, width: 1, height: 2}}
    const newData = Object.assign(data, {position: { ...data.position, x: 5 }})
    console.log('newData', newData)
    console.log('data', data)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  })
</script>

<style scoped>
  .container {
    position: relative;
    user-select: none;
    cursor: crosshair;
    overflow: auto;
  }

  .selection-box {
    position: absolute;
    background: rgba(64, 158, 255, 0.15);
    border: 1px dashed #409eff;
    pointer-events: none;
  }

  .box {
    position: absolute;
    background: #409eff;
    cursor: move;
    border-radius: 4px;
  }

  .box.active {
    box-shadow: 0 0 0 2px #1890ff;
  }

  .handle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    border: 1px solid #409eff;
    border-radius: 50%;
    z-index: 2;
  }

  .lt { top: -5px; left: -5px; cursor: nwse-resize; }

  .t { top: -5px; left: 50%; transform: translateX(-50%); cursor: ns-resize; }

  .rt { top: -5px; right: -5px; cursor: nesw-resize; }

  .l { top: 50%; left: -5px; transform: translateY(-50%); cursor: ew-resize; }

  .r { top: 50%; right: -5px; transform: translateY(-50%); cursor: ew-resize; }

  .lb { bottom: -5px; left: -5px; cursor: nesw-resize; }

  .b { bottom: -5px; left: 50%; transform: translateX(-50%); cursor: ns-resize; }

  .rb { bottom: -5px; right: -5px; cursor: nwse-resize; }

  /* 多选包围框 */
  .group-wrap {
    position: absolute;
    border: 1px dashed #f5222d;
    background: rgba(245, 34, 45, 0.05);
    cursor: move;
    z-index: 3;
  }
</style>