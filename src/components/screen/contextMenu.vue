<template>
  <div
    v-show="visible"
    class="context-menu"
    :style="style"
    @mousedown.stop=""
  >
    <div
      v-for="item in menuList"
      :key="item.key"
      class="menu-item"
      :class="{divider:item.key==='divider','disabled':disabled.includes(item.key)}"
      @click.stop="menuClick(item.key)"
    >
      <icon
        v-if="item.icon"
        :name="item.icon"
        size="18px"
      />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {ref, computed} from 'vue'
  import Icon from '@/components/icon/index.vue'
  import type {Command, Component} from "@/types/screen";
  import {useScreenStore} from "@/store/screen";
  import {objToStringify, stringToObj} from "@/utils/design";
  import {ElMessage} from 'element-plus'
  import {toNumber} from "@/components/screen/utils";

  const store = useScreenStore()
  const visible = ref(false)
  const style = ref({})
  const component = ref({})
  const disabled = ref([])
  const setDisabled = (component: Component) => {
    const {type, locked} = component
    const result = []
    // 组合，当前为选区并选中两个以上
    if (!(type === 'rect' && store.selectedComp.length > 1)) {
      result.push('link')
    }
    // 拆分，当前为组集合是
    if (type !== 'container') {
      result.push('split')
    }
    // 锁定解锁
    if (locked) {
      const list = menuList.value
        .filter((item: any) => item.key !== 'unlock')
        .map((item: any) => item.key)
      result.push(...list) // 仅支持解锁，其它不可操作
    } else {
      result.push('unlock')
    }
    disabled.value = result
  }
  const menuList = computed(() => {
    return [
      {key: 'copy', label: '复制', icon: 'DocumentCopy'},
      {key: 'del', label: '删除', icon: 'Delete'},
      {key: 'divider', label: ''},
      {key: 'link', label: '组合', icon: 'Link'},
      {key: 'split', label: '拆分', icon: 'icon-split'},
      {key: 'divider', label: ''},
      {key: 'unlock', label: '解锁', icon: 'Unlock'},
      {key: 'lock', label: '锁定', icon: 'Lock'},
      {key: 'divider', label: ''},
      {key: 'left', label: '左对齐', icon: 'icon-left-align'},
      {key: 'right', label: '右对齐', icon: 'icon-right-align'},
      {key: 'top', label: '顶部对齐', icon: 'icon-top-align'},
      {key: 'bottom', label: '底部对齐', icon: 'icon-bottom-align'},
      {key: 'horizontally', label: '水平居中', icon: 'icon-horizontal'},
      {key: 'verticalCenter', label: '垂直居中', icon: 'icon-vertical'}
    ]
  })
  const menuClick = (key: string) => {
    if (disabled.value.includes(key)) {
      return;
    }
    const {width: canvasWidth, height: canvasHeight} = store.designConfig
    const selectedList = store.selectedComp
    const activeComp = component.value
    const hasMultiSelected = activeComp.type === 'rect' && selectedList.length > 1
    const updateSelected = (callback: (item: Component) => void) => {
      selectedList.forEach(callback)
    }
    const updateComponents: Component[] = hasMultiSelected ? [...selectedList] : [activeComp]
    const newProps: { x?: number, y?: number, width?: number, height?: number }[] = []

    switch (key) {
      case 'copy':
        const targets = hasMultiSelected ? selectedList : [activeComp]
        const temp: Component[] = []
        targets.forEach((item: Component) => {
          const newComp = stringToObj(objToStringify(item))
          newComp.id += '_copy'
          temp.push(newComp)
        })
        // 这里要一次添加进去，否则会记录多条操作历史
        store.setDesignData(temp, true, true)
        ElMessage.success('复制成功')
        break
      case 'del':
        const ids = hasMultiSelected
          ? selectedList.map((i: { id: string }) => i.id)
          : activeComp.id
        store.setDeleteDesignData(ids, true)
        ElMessage.success('删除成功')
        break
      case 'link': {
        if (!hasMultiSelected) return
        const parsed = selectedList.map((item: Component) => ({
          x: toNumber(item.x),
          y: toNumber(item.y),
          w: toNumber(item.width),
          h: toNumber(item.height),
        }))
        const minX = Math.min(...parsed.map((p: { x: number }) => p.x))
        const minY = Math.min(...parsed.map((p: { y: number }) => p.y))
        const maxX = Math.max(...parsed.map((p: { x: number; w: number }) => p.x + p.w))
        const maxY = Math.max(...parsed.map((p: { y: number; h: number }) => p.y + p.h))

        const container: Component = {
          id: 'container_' + Date.now(),
          type: 'container',
          label: '组合容器',
          x: minX,
          y: minY,
          width: maxX - minX,
          height: maxY - minY,
          children: selectedList.map((c: { x: any; y: any; }) => ({
            ...c,
            x: toNumber(c.x) - minX,
            y: toNumber(c.y) - minY,
          }))
        }
        const delComponent: Component[] = [...selectedList]
        const command: Command = {
          execute: () => {
            store.setDeleteDesignData(selectedList.map((i: { id: any; }) => i.id))
            store.setDesignData(container, true)
          },
          undo: () => {
            // 删除组合组件
            store.setDeleteDesignData(container.id)
            // 将删除的恢复,不管原位置
            store.setDesignData(delComponent, true)
          }
        }
        store.setHistory(command)
        command.execute()
        store.deleteRect()
        store.setSelectedComp(container)
        ElMessage.success('组合成功')
        break
      }
      case 'split': {
        if (activeComp.type !== 'container') return
        const children = activeComp.children!.map((child: { x: any; y: any; }) => ({
          ...child,
          x: toNumber(child.x) + toNumber(activeComp.x),
          y: toNumber(child.y) + toNumber(activeComp.y),
        }))
        const delComponent: Component[] = [activeComp]
        const delIds = activeComp.children.map((i: Component) => i.id)
        const command: Command = {
          execute: () => {
            store.setDesignData(children, true)
            store.setDeleteDesignData(activeComp.id)
          },
          undo: () => {
            // 添加组件
            store.setDesignData(delComponent, true)
            // 删除子组件
            store.setDeleteDesignData(delIds)
          }
        }
        store.setHistory(command)
        command.execute()
        ElMessage.success('已拆分')
        break
      }
      case 'left': {
        if (hasMultiSelected) {
          const xs = selectedList.map((i: any) => toNumber(i.x))
          const min = Math.min(...xs)
          updateSelected(() => newProps.push({x: min}))
        } else {
          newProps.push({x: 0})
        }
        store.updateComponentHistory(updateComponents, newProps)
        // 清空选择
        store.setSelectedComp([])
        break
      }
      case 'right': {
        if (hasMultiSelected) {
          const rights = selectedList.map((i: any) => toNumber(i.x) + toNumber(i.width))
          const max = Math.max(...rights)
          updateSelected(item => {
            newProps.push({x: max - toNumber(item.width)})
          })
        } else {
          newProps.push({x: toNumber(canvasWidth) - toNumber(activeComp.width)})
        }
        store.updateComponentHistory(updateComponents, newProps)
        // 清空选择
        store.setSelectedComp([])
        break
      }
      case 'top': {
        if (hasMultiSelected) {
          const ys = selectedList.map((i: any) => toNumber(i.y))
          const min = Math.min(...ys)
          updateSelected(() => {
            newProps.push({y: min})
          })
        } else {
          newProps.push({y: 0})
        }
        store.updateComponentHistory(updateComponents, newProps)
        // 清空选择
        store.setSelectedComp([])
        break
      }
      case 'bottom': {
        if (hasMultiSelected) {
          const bottoms = selectedList.map((i: any) => toNumber(i.y) + toNumber(i.height))
          const max = Math.max(...bottoms)
          updateSelected(item => {
            newProps.push({y: max - toNumber(item.height)})
          })
        } else {
          newProps.push({y: toNumber(canvasHeight) - toNumber(activeComp.height)})
        }
        store.updateComponentHistory(updateComponents, newProps)
        // 清空选择
        store.setSelectedComp([])
        break
      }
      case 'horizontally': {
        if (hasMultiSelected) {
          const first = selectedList[0]
          const centerX = toNumber(first.x) + toNumber(first.width) / 2
          updateSelected(item => {
            newProps.push({x: centerX - toNumber(item.width) / 2})
          })
        } else {
          newProps.push({x: (toNumber(canvasHeight) - toNumber(activeComp.width)) / 2})
        }
        store.updateComponentHistory(updateComponents, newProps)
        // 清空选择
        store.setSelectedComp([])
        break
      }
      case 'verticalCenter': {
        if (hasMultiSelected) {
          const first = selectedList[0]
          const centerY = toNumber(first.y) + toNumber(first.height) / 2
          updateSelected(item => {
            newProps.push({y: centerY - toNumber(item.height) / 2})
          })
        } else {
          newProps.push({y: (toNumber(canvasHeight) - toNumber(activeComp.height)) / 2})
        }
        store.updateComponentHistory(updateComponents, newProps)
        // 清空选择
        store.setSelectedComp([])
        break
      }
      case 'lock':
      case 'unlock':
        const boolean = key === 'lock'
        if (hasMultiSelected) {
          updateSelected(item => item.locked = boolean)
        } else {
          activeComp.locked = boolean
        }
        break
    }
    // 清空选区
    store.deleteRect()
    visible.value = false
  }
  const open = (obj: { x?: number, y?: number, component?: Component, close?: boolean }) => {
    if (obj.close) { // 关闭
      visible.value = false
      return
    }
    visible.value = true
    if (obj.x && obj.y) {
      style.value = {
        left: `${obj.x + 5}px`,
        top: `${obj.y + 5}px`
      }
    }
    obj.component && setDisabled(obj.component)
    component.value = obj.component
  }
  defineExpose({open})
</script>
