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
          <draggable
            itemKey="itemKey"
            tag="ul"
            v-model="layerList"
            animation="300"
            :move="onMove"
            @sort="sort"
          >
            <template #item="{ element }">
              <li>{{ element.label }}</li>
            </template>
          </draggable>
          <!--            <li v-for="item in layerList" :key="item">
              <i :class="`icon-${item.icon}`"></i>{{ item.label }}
            </li>-->
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Draggable from 'vuedraggable-es'
  import { jsonParseStringify } from '@/utils'
  const layerList = ref([
    { label: '折线图1', icon: 'line', zIndex: 1 },
    { label: '折线图2', icon: 'line', zIndex: 2 },
    { label: '折线图3', icon: 'line', zIndex: 3 },
    { label: '折线图4', icon: 'line2', zIndex: 4 }
  ])
  const controlList = ref([
    {
      label: '图表',
      children: [
        {
          type: 'line',
          label: '折线图',
          icon: 'line',
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
          label: '柱状图',
          icon: 'bar',
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
          label: '饼图',
          icon: 'pie',
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
          label: '通用图表',
          icon: '',
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
          label: '表格',
          icon: 'table',
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
          label: '文本',
          icon: 'text2',
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
          icon: 'stext',
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
          icon: 'image',
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
          icon: 'image',
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
          icon: 'border',
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
          label: '当前时间',
          icon: 'time',
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
          label: '自定义',
          icon: 'component',
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
  const onMove = (e, originalEvent) => {
    //console.log(e)
    //console.log(originalEvent)
    //false表示阻止拖拽
    return false
  }
  const sort = () => {
    console.log('sort')
  }
</script>
