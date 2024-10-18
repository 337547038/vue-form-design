<!-- Created by 337547038  -->
<template>
  <div
    v-show="visible"
    class="screen-right-menu"
    :style="style"
    @mouseleave="mouseleave"
  >
    <ul>
      <li
        v-for="item in list"
        :key="item.key"
        @click="menuClick(item.key)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { computed, inject, ref } from 'vue'
  import type { ScreenData } from '../types'
  import { jsonParseStringify } from '@/utils/design.ts'
  import { ElMessage } from 'element-plus'
  import { useScreenStore } from '@/store/screen'
  import { removeUnit } from '../utils.ts'

  const screenData = inject('screenData')
  const screenStore = useScreenStore()
  const openData = ref({})
  const visible = ref(false)
  const list = computed(() => {
    // tempRect临时选区组合; group 当前组拆分; single 当前单个组件
    let type = openData.value.type // 目前只分三种情况
    if (!['tempRect', 'group'].includes(type)) {
      type = 'single'
    }
    const include: any = {
      tempRect: [
        'merge',
        'left',
        'right',
        'top',
        'bottom',
        'horizontally',
        'verticalCenter',
        'del',
        'lock',
        'display'
      ],
      group: ['copy', 'split', 'del', 'lock', 'display'],
      single: ['copy', 'del', 'lock', 'display']
    }
    return [
      { key: 'merge', label: '组合' },
      { key: 'split', label: '拆分' },
      { key: 'left', label: '左对齐' },
      { key: 'right', label: '右对齐' },
      { key: 'top', label: '顶部对齐' },
      { key: 'bottom', label: '底部对齐' },
      { key: 'horizontally', label: '水平居中' },
      { key: 'verticalCenter', label: '垂直居中' },
      { key: 'copy', label: '复制' },
      { key: 'del', label: '删除' },
      { key: 'lock', label: '锁定' },
      { key: 'display', label: '隐藏' }
    ].filter((item: { key: string, label: string }) => {
      return include[type].includes(item.key)
    })
  })
  const style = computed(() => {
    return {
      left: `${openData.value.x + 10}px`,
      top: `${openData.value.y + 10}px`
    }
  })
  const mouseleave = () => {
    // 隐藏菜单
    setTimeout(() => {
      close()
    }, 1000)
  }
  const menuClick = (key: string) => {
    screenData.value.list.forEach((item: ScreenData, index: number) => {
      if (item.id === openData.value.id) {
        menuEvent(item, index, screenData.value.list)
      }
      if (item.list && Array.isArray(item.list)) {
        item.list.forEach((li: ScreenData, liIndex: number) => {
          if (li.id === openData.value.id) {
            menuEvent(li, liIndex, item.list)
          }
        })
      }
      menuEventBatch(item)
    })
    // 处理关联的其他组件
    function menuEventBatch(item: ScreenData) {
      if (openData.value.type === 'tempRect') {
        switch (key) {
          case 'display':
            if (screenStore.tempActiveId.includes(item.id)) {
              item.position.display = true
            }
            break
          case 'lock':
            if (screenStore.tempActiveId.includes(item.id)) {
              item.config.lock = true
            }
            break
        }
      }
    }
    // 处理当前单个
    function menuEvent(obj: ScreenData, index: number, array: ScreenData[]) {
      const type = openData.value.type
      switch (key) {
        case 'copy':
          const newObj = jsonParseStringify(obj)
          newObj.id = newObj.type + new Date().getTime()
          newObj.layerName = '复制' + newObj.layerName
          array.push(newObj)
          ElMessage.success('复制成功')
          break
        case 'del':
          if (type === 'tempRect') {
            // 隐藏临时选中层即可
            obj.position.display = true
            // 删除选中的
            screenData.value.list = screenData.value.list.filter(
              (item: ScreenData) => !screenStore.tempActiveId.includes(item.id)
            )
          } else {
            array.splice(index, 1)
          }
          ElMessage.success('删除成功')
          break
        case 'lock':
          // tempRect层不需要锁定，锁定选中的即可
          if (type === 'tempRect') {
            // 隐藏临时选中层即可
            obj.position.display = true
          } else {
            obj.config.lock = true
          }
          if (['div', 'group'].includes(type)) {
            if (obj.list && Array.isArray(obj.list)) {
              obj.list.forEach((o: ScreenData) => {
                o.config.lock = true
              })
            }
          }
          ElMessage.success('锁定成功')
          break
        case 'display':
          obj.position.display = true
          ElMessage.success('隐藏成功')
          break
        case 'horizontally':
        case 'verticalCenter':
          const { top, height, left, width } = obj.position
          let center = removeUnit(top) + removeUnit(height) / 2
          let leftTop = 'top'
          let widthHeight = 'height'
          if (key === 'verticalCenter') {
            center = removeUnit(left) + removeUnit(width) / 2
            leftTop = 'left'
            widthHeight = 'width'
          }
          let max = 0
          for (const key in screenStore.tempActiveId) {
            const tempRect = array.filter(
              (item: ScreenData) => item.id === screenStore.tempActiveId[key]
            )[0]
            tempRect.position[leftTop]
              = center - removeUnit(tempRect.position[widthHeight]) / 2
            if (tempRect.position[widthHeight] > max) {
              max = removeUnit(tempRect.position[widthHeight])
            }
          }
          obj.position[widthHeight] = max + 'px'
          obj.position[leftTop] = center - max / 2
          break
        case 'left':
        case 'top':
          // 左对齐。按从选中的左则最小值为基准对齐
          // type=0临时矩形选中，对当前选中的，1时组内
          const wh = key === 'left' ? 'width' : 'height'
          if (type === 'tempRect') {
            const min = removeUnit(obj.position[key])
            let max = 0
            for (const i in screenStore.tempActiveId) {
              const tempRect = array.filter(
                (item: ScreenData) => item.id === screenStore.tempActiveId[i]
              )[0]
              tempRect.position[key] = min
              if (tempRect.position[wh] > max) {
                max = removeUnit(tempRect.position[wh])
              }
            }
            // 重设组或临时选区的宽度
            obj.position[wh] = max + 'px'
          }
          break
        case 'bottom':
          if (type === 'tempRect') {
            const { height, top } = obj.position
            const min = removeUnit(height) + removeUnit(top)
            let max = 0
            for (const key in screenStore.tempActiveId) {
              const tempRect = array.filter(
                (item: ScreenData) => item.id === screenStore.tempActiveId[key]
              )[0]
              tempRect.position.top = min - removeUnit(tempRect.position.height)
              if (tempRect.position.height > max) {
                max = removeUnit(tempRect.position.height)
              }
            }
            // 重设组或临时选区的宽度
            obj.position.height = max + 'px'
            obj.position.top = `${min - max}px`
          }
          break
        case 'right':
          if (type === 'tempRect') {
            const { width, left } = obj.position
            const min = removeUnit(width) + removeUnit(left)
            let max = 0
            for (const key in screenStore.tempActiveId) {
              const tempRect = array.filter(
                (item: ScreenData) => item.id === screenStore.tempActiveId[key]
              )[0]
              tempRect.position.left = min - removeUnit(tempRect.position.width)
              if (tempRect.position.width > max) {
                max = removeUnit(tempRect.position.width)
              }
            }
            // 重设组或临时选区的宽度
            obj.position.width = max + 'px'
            obj.position.left = `${min - max}px`
          }
          break
        case 'merge':
          const mergeObj = jsonParseStringify(obj)
          mergeObj.type = 'group'
          mergeObj.id = mergeObj.type + new Date().getTime()
          mergeObj.layerName = '组合层'
          mergeObj.list = []
          mergeObj.config = {}
          array.forEach((item: ScreenData) => {
            if (screenStore.tempActiveId.includes(item.id)) {
              // 重新计算let,top,width位置信息
              item.position.left = Math.abs(
                mergeObj.position.left - removeUnit(item.position.left)
              )
              item.position.top = Math.abs(
                mergeObj.position.top - removeUnit(item.position.top)
              )
              // 将单位转为百分比
              // 这里简单处理px和%两种单位
              const widthUnit = item.position.width
              if (
                typeof widthUnit === 'number'
                || widthUnit.indexOf('px') !== -1
              ) {
                // px单位
                item.position.width
                  = (removeUnit(widthUnit) / obj.position.width) * 100 + '%'
              } else if (widthUnit.indexOf('%') !== -1) {
                // %单位，这里暂不处理
              }
              // item.width= removeUnit(item.position.width)
              mergeObj.list.push(item)
            }
            // 同时隐藏临时矩形
            if (item.id === 'rect') {
              item.position.display = true
            }
          })
          array.push(mergeObj)
          // 从原数组删除
          screenData.value.list = screenData.value.list.filter(
            (item: ScreenData) => !screenStore.tempActiveId.includes(item.id)
          )
          // 右则选中当前组
          screenStore.setActiveId(mergeObj.id)
          screenStore.setControlAttr(mergeObj)
          break
        case 'split':
          obj.list.forEach((item: ScreenData) => {
            const { left, top, width } = item.position
            const { left: oLeft, top: oTop, width: oWidth } = obj.position
            delete item.pId
            item.position.left = removeUnit(oLeft) + left
            item.position.top = removeUnit(oTop) + top

            // 单位转换计算比较复杂，这里暂简单化，只处理%单位
            if (
              width.toString().indexOf('%') !== -1
              && (typeof oWidth === 'number'
                || oWidth.toString().indexOf('px') !== -1)
            ) {
              item.position.width
                = (removeUnit(oWidth) * removeUnit(width)) / 100 + 'px'
            }
            array.push(item)
          })
          // 删除原组
          screenData.value.list = screenData.value.list.filter(
            (item: ScreenData) => item.id !== obj.id
          )
          break
      }
    }
    close()
  }
  const close = () => {
    visible.value = false
  }
  const open = (data: { type: string, id: string, x: number, y: number }) => {
    openData.value = data
    visible.value = true
  }
  defineExpose({ open, close })
</script>
