<!-- Created by 337547038 on 2021/9/8. -->
<template>
  <draggable
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
      <component-factory
        :element="element"
      >
        <template v-if="store.getIsActive(element)&&store.designType.indexOf('design')!==-1">
          <div
            class="drag-control"
          >
            <div class="item-control">
              <i
                v-if="element.type === 'grid'"
                class="icon-plus"
                title="添加列"
                @click.stop="click('gridAdd', index, element)"
              />
              <i
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
        </template>
      </component-factory>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
  import {onUnmounted} from 'vue'
  import {onBeforeRouteLeave} from 'vue-router'
  import draggable from 'vuedraggable-es'
  import ComponentFactory from './componentFactory.vue'
  import {useFormStore} from '@/store/form'
  import type {Component} from '@/types/designForm'
  import {jsonParseStringify} from "@/utils/design.ts";
  import {ElMessage} from "element-plus";

  const dataList = defineModel<Component[]>('data', {
    default: () => {
    }
  })
  const store = useFormStore()

  // 不能嵌套
  const notNested = (type: string) => {
    return ['grid', 'table', 'tabs', 'div', 'flex', 'card'].includes(type)
  }
  /**
   * 删除或复制
   * @param action
   * @param index
   * @param item
   */
  const click = (action: string, index: number, item?: any) => {
    if (action === 'clone') {
      const key = item.type + new Date().getTime().toString()
      const newItem = jsonParseStringify(item)
      dataList.value.splice(index, 0, Object.assign(newItem, {name: key}))
    } else if (action === 'del') {
      dataList.value.splice(index, 1)
      // 清空右侧栏信息
      store.setSelectedComponents({})
    } else if (action === 'gridAdd') {
      item.columns.push({
        list: [],
        attr: {span: 12}
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
    const obj: any = dataList.value?.[newIndex]
    const isNested = evt.target && evt.target.getAttribute('data-nested') // 不能嵌套
    if (isNested === 'not-nested' && notNested(obj.type)) {
      ElMessage.warning('当前区域不能嵌套' + obj.label)
      dataList.value.splice(newIndex, 1)
      return
    }
    // 父级类型
    const parentType = evt.target && evt.target.getAttribute('data-type')
    if (parentType === 'table') {
      //子表时只能放的组件
      const compList = ['input', 'radio', 'checkbox', 'select', 'datePicker', 'timePicker', 'switch']
      if (!compList.includes(obj.type)) {
        ElMessage.warning('子表区域不能使用组件：' + obj.label)
        dataList.value.splice(newIndex, 1)
        return
      }
    }
    if (!obj) {
      return
    }
    // 不需要添加item的项
    const notNeedItem = [
      'txt',
      'title',
      'button',
      'table',
      'grid',
      'tabs',
      'flex',
      'div',
      'card'
    ]
    if (!notNeedItem.includes(obj.type)) {
      Object.assign(obj, {
        formItem: {
          label: obj.label || obj.formItem?.label
        }
      })
    }
    // 不需要name的组件,减少些代码量
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
      Object.assign(obj, {
        name: obj.type + key
      })
    }
    delete obj.label
    delete obj.icon
    store.setSelectComponent(obj)
  }

  onBeforeRouteLeave(() => {
    // unWatch() //销毁监听器
  })
  onUnmounted(() => {

  })
</script>
