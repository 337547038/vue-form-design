<!-- Created by weiXin:337547038 -->
<template>
  <div class="main-left">
    <el-tabs
      model-value="component"
      class="tabs"
    >
      <el-tab-pane
        label="组件"
        name="component"
      >
        <div class="components-list scroll">
          <div
            v-for="(item, index) in controlList"
            :key="index"
          >
            <div class="title">
              {{ item.label }}
            </div>
            <draggable
              v-model="item.children"
              item-key="label"
              tag="ul"
              :group="{ name: 'screen', pull: 'clone', put: false }"
              ghost-class="ghost"
              :sort="false"
              :clone="clone"
            >
              <template #item="{ element }">
                <li :class="[element.type]">
                  <i :class="`icon-${iconList[element.type]}`" />
                  <span :title="element.label">{{ element.label }}</span>
                </li>
              </template>
            </draggable>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="图层"
        name="layer"
      >
        <div class="scroll layer-list">
          <ul>
            <li
              v-for="(element, index) in layerList"
              :key="index"
              :class="{
                active: screenStore.activeId === element.id,
                lock: element.config?.lock,
                display: element.position?.display,
                'text-indent': element.pid
              }"
            >
              <div
                class="name"
                @click="showLockClick(element, 'active')"
              >
                <i :class="getIcon(element)" />
                <input
                  v-if="screenStore.activeId === element.id"
                  v-model="element.layerName"
                >
                <span
                  v-else
                  :title="element.layerName || element.id"
                >{{
                  element.layerName || element.id
                }}</span>
              </div>
              <div class="icon-group">
                <i
                  class="icon"
                  :class="[
                    element.position?.display ? 'icon-eye-close' : 'icon-eye'
                  ]"
                  @click="showLockClick(element, 'display')"
                />
                <i
                  class="icon"
                  :class="[
                    element.config?.lock ? 'icon-lock' : 'icon-lock-open'
                  ]"
                  @click="showLockClick(element, 'lock')"
                />
                <el-popconfirm
                  title="确认删除"
                  @confirm="showLockClick(element, 'del')"
                >
                  <template #reference>
                    <i class="icon-del" />
                  </template>
                </el-popconfirm>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref, inject, computed } from 'vue'
  import Draggable from 'vuedraggable-es'
  import { jsonParseStringify } from '@/utils/design'
  import { useScreenStore } from '@/store/screen'
  import { ScreenData } from '../types.ts'

  const screenStore = useScreenStore()

  const screenData = inject('screenData') || {}
  const layerList = computed(() => {
    let temp = []
    screenData.value.list.forEach((item: ScreenData) => {
      if (item.id !== 'rect') {
        temp.push(item)
        if (['div', 'group'].includes(item.type) && item.list?.length) {
          item.list.forEach((li: ScreenData) => {
            li.pid = item.id // 添加一个父id作为关系，在图层用于低格样式控制
          })
          temp = [...temp, ...item.list]
        }
      }
    })
    return temp
  })
  const iconList = {
    line: 'line',
    bar: 'bar',
    pie: 'pie',
    echarts: '',
    table: 'table',
    text: 'text2',
    sText: 'sText',
    image: 'image',
    background: 'image',
    border: 'border',
    clock: 'time',
    div: 'div',
    group: 'div',
    component: 'component'
  }
  const getIcon = (data: ScreenData) => {
    return `icon-${iconList[data.type]}`
  }

  const showLockClick = (obj: ScreenData, key: string) => {
    switch (key) {
      case 'display':
        obj.position.display = !obj.position.display
        break
      case 'lock':
        obj.config.lock = !obj.config.lock
        if (obj.type === 'div') {
          // 将子级全锁定
          obj.list?.forEach((item: ScreenData) => {
            item.config.lock = !obj.config.lock
          })
        }
        break
      case 'active': // 点击时选中对应的层
        screenStore.setActiveId(obj.id)
        screenStore.setControlAttr(obj)
        break
      case 'del':
        // 根据id删除
        screenData.value.list.forEach((item: ScreenData, index: number) => {
          if (item.id === obj.id) {
            screenData.value.list.splice(index, 1)
          } else if (
            ['div', 'group'].includes(item.type)
            && item.list?.length
          ) {
            item.list.forEach((li: ScreenData, liIndex: number) => {
              if (li.id === obj.id) {
                item.list.splice(liIndex, 1)
              }
            })
          }
        })
        break
    }
  }

  const controlList = ref([
    {
      label: '图表',
      children: [
        {
          type: 'line',
          label: '折线图',
          position: {
            width: 400,
            height: 300
          },
          option: {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            grid: { left: 0, top: 0, right: 0, bottom: 30 },
            series: [
              {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
              }
            ]
          }
        },
        {
          type: 'bar',
          label: '柱状图',
          position: {
            width: 400,
            height: 300
          },
          option: {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            grid: { left: 0, top: 0, right: 0, bottom: 30 },
            series: [
              {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
              }
            ]
          }
        },
        {
          type: 'pie',
          label: '饼图',
          position: {
            width: 300,
            height: 300
          },
          option: {
            grid: { left: 0, top: 0, right: 0, bottom: 0 },
            series: [
              {
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ]
              }
            ]
          }
        },
        {
          type: 'echarts',
          label: '通用图表',
          position: {
            width: 400,
            height: 300
          },
          option: {
            grid: { left: 0, top: 0, right: 0, bottom: 0 }
          }
        }
      ]
    },
    {
      label: '表格',
      children: [
        {
          type: 'table',
          label: '表格',
          position: {
            width: 500,
            height: 300
          },
          option: {
            columns: [],
            list: []
          }
        }
      ]
    },
    {
      label: '辅助',
      children: [
        {
          type: 'text',
          label: '文本',
          position: {
            width: 100,
            height: 30
          },
          config: {
            text: '文本内容'
          }
        },
        {
          type: 'sText',
          label: '滚动文本',
          position: {
            width: 100,
            height: 30
          },
          config: {
            text: '滚动文本内容'
          }
        },
        {
          type: 'image',
          label: '图片',
          position: {
            width: 100,
            height: 50
          },
          config: {
            src: ''
          }
        },
        {
          type: 'background',
          label: '背景',
          position: {
            width: 100,
            height: 50
          },
          config: {
            src: ''
          }
        },
        {
          type: 'border',
          label: '边框',
          position: {
            width: 100,
            height: 100
          },
          config: {
            style: {
              border: '1px solid #fff'
            }
          }
        },
        {
          type: 'clock',
          label: '当前时间',
          position: {
            width: 150,
            height: 30
          }
        }
      ]
    },
    {
      label: '布局',
      children: [
        {
          type: 'div',
          label: 'div布局',
          position: {
            height: 100
          },
          list: []
        }
      ]
    },
    {
      label: '自定义组件',
      children: [
        {
          type: 'component',
          label: '自定义',
          position: {
            width: 200,
            height: 200
          },
          config: {}
        }
      ]
    }
  ])
  const clone = (origin: any) => {
    return jsonParseStringify(origin)
  }
</script>
