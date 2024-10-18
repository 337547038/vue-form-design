<!-- Created by 337547038 on 2021/9/8. -->
<template>
  <draggable
    v-if="['design', 'search'].includes(formProps.operateType)"
    item-key="id"
    :list="dataList"
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
      <group-control
        :key="getGroupName(element, index)"
        :element="element"
        :active="activeKey"
        @group-click="groupClick"
      >
        <div class="drag-control">
          <div class="item-control">
            <i
              v-if="state.gridAdd"
              class="icon-plus"
              title="添加列"
              @click.stop="click('gridAdd', index, element)"
            />
            <i
              v-if="state.clone"
              class="icon-clone"
              title="克隆"
              @click.stop="click('clone', index, element)"
            />
            <i
              class="icon-del"
              @click.stop="click('del', index)"
            />
          </div>
          <div class="drag-move icon-move" />
        </div>
        <div class="tooltip">
          {{ element.name }}
        </div>
      </group-control>
    </template>
  </draggable>
  <template v-else>
    <template
      v-for="(item, index) in dataList"
      :key="index"
    >
      <group-control :element="item" />
    </template>
  </template>
</template>

<script lang="ts" setup>
  import { reactive, computed, inject, onUnmounted } from 'vue'
  import { onBeforeRouteLeave } from 'vue-router'
  import Draggable from 'vuedraggable-es'
  import GroupControl from './groupControl.vue'
  import { useDesignStore } from '@/store/design'
  import type { FormList } from '@/types/form'
  import { getGroupName, jsonParseStringify } from '@/utils/design'

  const dataList = defineModel<FormList>('data')
  const store = useDesignStore() as any
  const formProps = inject('akFormProps', {}) as any

  const state = reactive({
    clone: true, // 允许clone
    gridAdd: false
  })

  const activeKey = computed(() => {
    return store.activeKey
  })

  // 不能嵌套
  const notNested = (type: string) => {
    const controlType = ['grid', 'table', 'tabs', 'div', 'flex', 'card']
    return controlType.includes(type)
  }
  /**
   * 删除或复制
   * @param action
   * @param index
   * @param item
   */
  const click = (action: string, index: number, item?: any) => {
    if (!['design', 'search'].includes(formProps.operateType)) {
      return // 非设计模式
    }
    if (action === 'clone') {
      const key = item.type + new Date().getTime().toString()
      const newItem = jsonParseStringify(item)
      dataList.value.splice(index, 0, Object.assign(newItem, { name: key }))
    } else if (action === 'del') {
      dataList.value.splice(index, 1)
      // 清空右侧栏信息
      store.setActiveKey('')
      store.setControlAttr({})
    } else if (action === 'gridAdd') {
      item.columns.push({
        list: [],
        attr: { span: 12 }
      })
    }
  }

  /**
   * 设计拖拽事件
   * @param evt
   */
  const draggableAdd = (evt: any) => {
    const newIndex = evt.newIndex
    const key = new Date().getTime().toString()
    const obj: any = dataList.value[newIndex]
    const isNested = evt.target && evt.target.getAttribute('data-type') // 不能嵌套
    if (isNested === 'not-nested' && notNested(obj.type)) {
      dataList.value.splice(newIndex, 1)
      return
    }
    if (!obj) {
      return
    }
    const label = obj.label || obj.formItem?.label
    delete obj.label
    delete obj.icon
    let objectItem = {}
    // 不需要添加item的项
    const notNeedItem = [
      'txt',
      'title',
      'button',
      'table',
      'grid',
      'tabs',
      'flex',
      'div'
    ]
    if (!notNeedItem.includes(obj.type)) {
      objectItem = {
        formItem: {
          label: label
        }
      }
    }
    // 不需要name的组件
    let nameObj = {}
    const notNeedName = [
      'txt',
      'title',
      'button',
      'grid',
      'tabs',
      'divider',
      'div',
      'card'
    ]
    if (!notNeedName.includes(obj.type) && !obj.name) {
      nameObj = {
        name: obj.type + key
      }
    }
    // table和flex添加了name后会执行onUnmounted事件，导致新拖拽的没办法默认选中
    Object.assign(obj, nameObj, objectItem)
    groupClick(obj)
  }
  /**
   * 点击激活当前
   * @param item
   * @param index
   */
  const groupClick = (item: any, index?: number) => {
    store.setActiveKey(getGroupName(item, index))
    store.setControlAttr(item)
    // grid时显示添加列按钮
    state.gridAdd = item.type === 'grid'
    state.clone = !notNested(item.type)
  }
  onBeforeRouteLeave(() => {
    // unWatch() //销毁监听器
  })
  onUnmounted(() => {
    store.setActiveKey('')
    store.setControlAttr({})
  })
</script>
