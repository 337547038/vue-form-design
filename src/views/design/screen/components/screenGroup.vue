<template>
  <draggable
    v-bind="{
      group: 'screen',
      animation: 200,
      handle: '.none'
    }"
    :list="model"
    class="drag"
    item-key="id"
    name="fade"
    ghost-class="ghost"
    @add="draggableAdd"
  >
    <template #item="{ element }">
      <screen
        :data="element"
        :scale="stateData.scale"
        :type="0"
        @change-event="changeEvent(element, $event)"
        @click.stop="itemClick(element)"
      />
    </template>
  </draggable>
</template>
<script setup lang="ts">
  import { computed, inject } from 'vue'
  import type { ScreenData, UpdatePosition } from '../types.ts'
  import Draggable from 'vuedraggable-es'
  import { useScreenStore } from '@/store/screen'
  import Screen from './screen.vue'

  const props = withDefaults(
    defineProps<{
      pId?: string
    }>(),
    {
      pId: ''
    }
  )
  const emits = defineEmits<{
    (e: 'itemClick', val: string[]): void
  }>()

  const model = defineModel<ScreenData>()
  const screenData = inject('screenData') || {}
  const stateData = inject('stateData') || {}
  const screenStore = useScreenStore()

  const canvasWidth = computed(() => {
    const { width } = screenData.value.config
    return width
  })

  const itemClick = (data: ScreenData) => {
    if (stateData.ctrlPress) {
      // 当前选中type=div内的元素时，则选中当前div，不允许选中div内的单个
      if (props.pId) {
        // 这里选中还有点问题，因递归没传事件，不会触发矩形，暂不让选中
        // screenStore.setTempActiveId(props.pId)
        return
      } else {
        screenStore.setTempActiveId(data.id)
      }
      screenStore.setActiveId(data.id)
      screenStore.setControlAttr(data)
      const len = screenStore.tempActiveId?.length
      screenStore.setControlTip(`当前选中${len}个`)
      if (len > 1) {
        // 选中了两个或以上时，显示id=rect的图层并计算宽高位置信息
        // 放外面处理，外面还有点击鼠标拖动选区选中的效果
        screenStore.setActiveId('rect')
        emits('itemClick')
      }
    } else {
      setCurrentConfig(data)
      screenStore.setControlTip('可使用键盘方向键调整位置')
    }
  }
  const changeEvent = (data: ScreenData, obj: UpdatePosition) => {
    if (obj.type === 'moveTip') {
      screenStore.setControlTip(`当前位置：${obj.left}:${obj.top}`)
    }
    data.position.left = obj.left
    data.position.top = obj.top
    if (obj.width) {
      data.position.width = obj.width
    }
    if (obj.height) {
      data.position.height = obj.height
    }
    // 临时选区移动时，则移动下面所有选中的。这里不是实时移动，要实时移动还需要先取出鼠标按下时的位置，为一个固定值然后才能+obj.moveX
    if (data.type === 'tempRect' && obj.type === 'move') {
      model.value.forEach((item: ScreenData) => {
        if (screenStore.tempActiveId.includes(item.id)) {
          item.position.left = parseInt(item.position.left) + obj.moveX
          item.position.top = parseInt(item.position.top) + obj.moveY
        }
      })
    }
  }

  const draggableAdd = (evt: any) => {
    const newIndex = evt.newIndex
    const obj: any = model.value[newIndex]
    // 不能嵌套
    const isNested = evt.target && evt.target.getAttribute('data-type')
    if (isNested === 'div' && obj.type === 'div') {
      model.value.splice(newIndex, 1)
      return
    }
    delete obj.label
    delete obj.icon
    const { offsetX, offsetY } = evt.originalEvent
    if (!obj.position) {
      obj.position = {}
    }
    if (!obj.config) {
      obj.config = {}
    }
    obj.id = obj.type + new Date().getTime()
    obj.layerName = obj.id
    if (obj.type === 'div') {
      obj.position.width = canvasWidth.value
    }
    obj.position.left = offsetX
    obj.position.top = offsetY
    setCurrentConfig(obj)
  }

  const setCurrentConfig = (obj: ScreenData) => {
    screenStore.setActiveId(obj.id)
    screenStore.setControlAttr(obj)
  }
</script>
<style scoped lang="scss"></style>
