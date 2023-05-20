<template>
  <draggable
    itemKey="id"
    :list="dataList.list"
    name="fade"
    class="drag"
    v-bind="{
      group: 'form',
      ghostClass: 'ghost',
      animation: 200,
      handle: '.drag-move'
    }"
    @add="draggableAdd"
  >
    <template #item="{ element, index }">
      <div
        class="group"
        :class="{
          ['group-' + element.type]: true,
          [element.class]: element.class,
          active: activeKey === element.name
        }"
        @click.stop="groupClick(element)"
      >
        <echarts-int
          :option="element.option"
          :width="element.width"
          :height="element.height"
        />
        <div class="drag-control" v-if="type === 1">
          <div class="item-control">
            <i
              class="icon-clone"
              @click.stop="controlBtnClick('clone', index, element)"
              title="克隆"
            ></i>
            <i
              class="icon-del"
              @click.stop="controlBtnClick('del', index, element)"
            ></i>
          </div>
          <div class="drag-move icon-move"></div>
        </div>
        <div class="tooltip">{{ element.name }}</div>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import Draggable from 'vuedraggable-es'
  import EchartsInt from '../../components/echartsInt.vue'

  const props = withDefaults(
    defineProps<{
      data?: object
      type?: number // 两种模式1设计 2显示
    }>(),
    {
      type: 2
    }
  )
  const emits = defineEmits<{
    (e: 'controlBtnClick', obj: any): void
  }>()
  const activeKey = ref()
  const dataList = ref({
    list: [],
    config: {}
  })
  watch(
    () => props.data,
    (val: any) => {
      if (val) {
        dataList.value = val
      }
    },
    {
      immediate: true
    }
  )
  const draggableAdd = (evt: any) => {
    if (props.type !== 1) {
      return // 非设计模式
    }
    const newIndex = evt.newIndex
    const key = new Date().getTime().toString()
    const obj: any = dataList.value.list[newIndex]
    if (!obj) {
      return
    }
    delete obj.label
    delete obj.icon

    Object.assign(obj, { name: obj.type + key })
    groupClick(obj)
  }
  const groupClick = (obj: any) => {
    console.log('groupClick', obj)
    activeKey.value = obj.name
    emits('controlBtnClick', obj)
  }
  const controlBtnClick = (type: string, index: number, item?: any) => {
    if (props.type === 2) {
      return // 非设计模式
    }
    if (type === 'clone') {
      const key = item.type + new Date().getTime().toString()
      const newItem = JSON.parse(JSON.stringify(item))
      dataList.value.list.splice(
        index,
        0,
        Object.assign(newItem, { name: key })
      )
    } else if (type === 'del') {
      dataList.value.list.splice(index, 1)
      // 清空右侧栏信息
    }
    emits('controlBtnClick', '')
  }
  const getData = () => {
    return dataList.value
  }
  // 设置初始数据
  const setDataList = (obj: any) => {
    dataList.value = obj
  }
  // 设备图标数据
  const setData = (data: any) => {
    console.log(data)
  }
  defineExpose({ getData, setDataList, setData })
</script>
