<!-- Created by 337547038 -->
<template>
  <div class="main-left">
    <el-tabs model-value="component" class="tabs">
      <el-tab-pane label="组件" name="component">
        <div class="components-list scroll">
          <div v-for="(item, index) in controlList" :key="index">
            <div class="title">{{ item.label }}</div>
            <draggable
              itemKey="label"
              tag="ul"
              v-model="item.children"
              :group="{ name: 'form', pull: 'clone', put: false }"
              ghost-class="ghost"
              :sort="false"
              :clone="clone"
            >
              <template #item="{ element }">
                <li :class="[element.type]">
                  <i :class="`icon-${element.icon}`"></i>
                  <span :title="element.label">{{ element.label }}</span>
                </li>
              </template>
            </draggable>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="图层" name="layer">
        <div class="scroll layer-list">
          <ul>
            <li
              v-for="(element, index) in layerList"
              :key="index"
              :class="{
                active: active.includes(element.index),
                lock: element.lock,
                display: element.display,
                isGroup: element.groupId && !element.type
              }"
            >
              <span @click="showLockClick(element, 'active')"
                ><i :class="`icon-${element.icon}`"></i>
                {{ element.label }}</span
              >
              <i
                @click="showLockClick(element, 'display')"
                class="icon"
                :class="[element.display ? 'icon-eye-close' : 'icon-eye']"
              ></i>
              <i
                @click="showLockClick(element, 'lock')"
                class="icon"
                :class="[element.lock ? 'icon-lock' : 'icon-lock-open']"
              ></i>
              <el-popconfirm
                title="确认删除"
                @confirm="showLockClick({ index: element.index }, 'del')"
              >
                <template #reference>
                  <i class="icon-del"></i>
                </template>
              </el-popconfirm>
            </li>
          </ul>
          <!--          <draggable-->
          <!--            itemKey="itemKey"-->
          <!--            tag="ul"-->
          <!--            ghost-class="ghost"-->
          <!--            :list="layerList"-->
          <!--            animation="300"-->
          <!--            v-bind="{-->
          <!--              group: {-->
          <!--                pull: false-->
          <!--              }-->
          <!--            }"-->
          <!--            @sort="dragEnd"-->
          <!--          >-->
          <!--            <template #item="{ element }"> </template>-->
          <!--          </draggable>-->
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Draggable from 'vuedraggable-es'
  import { jsonParseStringify } from '@/utils'
  import type { ScreenData } from '../types'

  withDefaults(
    defineProps<{
      active: number[]
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update', key: string, index: number, value: number | boolean): void
    (e: 'update:active', index: number[]): void
  }>()
  const dict: any = {
    line: ['折线图', 'line'],
    bar: ['柱状图', 'bar'],
    pie: ['饼图', 'pie'],
    echarts: ['通用图表', ''],
    table: ['表格', 'table'],
    text: ['文本', 'text2'],
    sText: ['滚动文本', 'stext'],
    image: ['图片', 'image'],
    background: ['背景', 'image'],
    border: ['边框', 'border'],
    clock: ['当前时间', 'time'],
    component: ['自定义', 'component']
  }
  const layerList = ref([])
  const controlList = ref([
    {
      label: '图表',
      children: [
        {
          type: 'line',
          label: dict.line[0],
          icon: dict.line[1],
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
          label: dict.bar[0],
          icon: dict.bar[1],
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
          label: dict.pie[0],
          icon: dict.pie[1],
          position: {
            width: 300,
            height: 300
          },
          option: {
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
          label: dict.echarts[0],
          icon: dict.echarts[1],
          position: {
            width: 400,
            height: 300
          },
          option: {}
        }
      ]
    },
    {
      label: '表格',
      children: [
        {
          type: 'table',
          label: dict.table[0],
          icon: dict.table[1],
          position: {
            width: 500,
            height: 300
          },
          option: [],
          columns: []
        }
      ]
    },
    {
      label: '辅助',
      children: [
        {
          type: 'text',
          label: dict.text[0],
          icon: dict.text[1],
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
          label: dict.sText[0],
          icon: dict.sText[1],
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
          label: dict.image[0],
          icon: dict.image[1],
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
          label: dict.background[0],
          icon: dict.background[1],
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
          label: dict.border[0],
          icon: dict.border[1],
          position: {
            width: 100,
            height: 100
          },
          config: {
            style: {
              border: '1px solid #fff'
            }
          }
        }
      ]
    },
    {
      label: '其他',
      children: [
        {
          type: 'clock',
          label: dict.clock[0],
          icon: dict.clock[1],
          position: {
            width: 150,
            height: 30
          }
        }
      ]
    },
    {
      label: '自定义组件',
      children: [
        {
          type: 'component',
          label: dict.component[0],
          icon: dict.component[1],
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
  // 隐藏或锁定
  const showLockClick = (obj: any, key: string) => {
    let newVal = false
    switch (key) {
      case 'display':
        newVal = !obj.display
        obj.display = newVal
        break
      case 'lock':
        newVal = !obj.lock
        obj.lock = newVal
        break
      case 'active': // 点击时选中对应的层
        emits('update:active', [obj.index])
        break
    }
    // 通知外层处理
    emits('update', key, obj.index, newVal)
  }
  // 添加或删除图层时
  const setLayer = (data: ScreenData[]) => {
    const temp: any = []
    data.forEach((item: ScreenData, index: number) => {
      if (item.type === 'group') {
        temp.push({
          label: '合并组',
          zIndex: item.position.zIndex || 0,
          display: item.position.display,
          lock: item.config.lock,
          index: index,
          icon: '',
          groupId: item.id,
          type: 'group'
        })
      } else {
        temp.push({
          label: dict[item.type][0],
          icon: dict[item.type][1],
          zIndex: item.position.zIndex || 0,
          display: item.position.display,
          lock: item.config.lock,
          index: index,
          groupId: item.groupId
        })
      }
    })
    //layerList.value = temp
    // layerList.value = temp.sort((a: any, b: any) => {
    //   return a.icon.localeCompare(b.icon)
    // })
    //先按组排序
    layerList.value = temp.sort(function (a, b) {
      if (a.groupId < b.groupId) {
        return -1
      } else if (a.groupId > b.groupId) {
        return 1
      } else {
        // 组id相同，
        return a.icon.localeCompare(b.icon)
      }
    })
  }
  defineExpose({ setLayer })
</script>
