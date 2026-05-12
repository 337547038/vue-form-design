<template>
  <div class="components-list">
    <el-tabs
      model-value="component"
      class="tabs"
    >
      <el-tab-pane
        label="组件"
        name="component"
      >
        <div class="scroll">
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
        <layer-panel/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
  import {ref} from 'vue'
  import draggable from 'vuedraggable-es'
  import {jsonParseStringify} from "@/utils/design";
  import LayerPanel from "./layerPanel.vue";
  import {iconList} from './utils'

  const clone = (origin: any) => {
    return jsonParseStringify(origin);
  }

  const controlList = ref([
    {
      label: '图表',
      children: [
        {
          type: 'line',
          label: '折线图',
          width: 400,
          height: 300,
          option: {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            grid: {left: 0, top: 0, right: 0, bottom: 30},
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
          width: 400,
          height: 300,
          option: {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            grid: {left: 0, top: 0, right: 0, bottom: 30},
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
          width: 300,
          height: 300,
          option: {
            grid: {left: 0, top: 0, right: 0, bottom: 0},
            series: [
              {
                type: 'pie',
                radius: '50%',
                data: [
                  {value: 1048, name: 'Search Engine'},
                  {value: 735, name: 'Direct'},
                  {value: 580, name: 'Email'},
                  {value: 484, name: 'Union Ads'},
                  {value: 300, name: 'Video Ads'}
                ]
              }
            ]
          }
        },
        {
          type: 'echarts',
          label: '通用图表',
          width: 400,
          height: 300,
          option: {
            grid: {left: 0, top: 0, right: 0, bottom: 0}
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
          width: 500,
          height: 300,
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
          width: 100,
          height: 30,
          text: '文本内容'
        },
        {
          type: 'sText',
          label: '滚动文本',
          width: 100,
          height: 30,
          text: '滚动文本内容'
        },
        {
          type: 'image',
          label: '图片',
          width: 100,
          height: 50,
          src: ''
        },
        {
          type: 'background',
          label: '背景边框',
          width: 100,
          height: 50,
          src: ''
        },
        {
          type: 'clock',
          label: '当前时间',
          width: 150,
          height: 30
        }
      ]
    },
    {
      label: '布局',
      children: [
        {
          type: 'div',
          label: 'div布局',
          height: 400,
          width: 500,
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
          width: 200,
          height: 200
        }
      ]
    }
  ])
</script>