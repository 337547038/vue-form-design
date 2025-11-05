<!--自定义地图组件-->
<template>
  <echartsInt
    :option="option"
    :width="width"
    :height="height"
  />
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { getRequest } from '@/api'
  import echartsInt from '../../components/echartsInt.vue'

  const props = withDefaults(
    defineProps<{
      width: string | number
      height: string | number
      mapType?: string
    }>(),
    {
      mapType: 'gd'
    }
  )
  const option = ref({})
  const optionGd = ref({
    animation: true,
    tooltip: {
      show: true
    },
    visualMap: {
      min: 0,
      max: 131686.1,
      text: ['高', '低'],
      orient: 'horizontal',
      itemWidth: 15,
      itemHeight: 200,
      right: 0,
      bottom: 30,
      inRange: {
        color: ['#75ddff', '#0e94eb']
      },
      textStyle: {
        color: 'white'
      }
    },
    series: [
      {
        name: '数据名称',
        type: 'map',
        mapType: 'guangdong',
        selectedMode: 'multiple',
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (件)'
        },
        itemStyle: {
          normal: {
            borderWidth: 1,
            borderColor: '#0e94eb',
            label: {
              show: false
            }
          },
          emphasis: {
            borderWidth: 1,
            borderColor: '#fff',
            backgroundColor: 'red',
            label: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
          }
        },
        data: [
          {
            name: '广州市',
            value: 120057.34
          },
          {
            name: '韶关市',
            value: 15477.48
          },
          {
            name: '深圳市',
            value: 131686.1
          },
          {
            name: '珠海市',
            value: 6992.6
          },
          {
            name: '汕头市',
            value: 44045.49
          },
          {
            name: '佛山市',
            value: 40689.64
          },
          {
            name: '江门市',
            value: 37659.78
          },
          {
            name: '湛江市',
            value: 45180.97
          },
          {
            name: '茂名市',
            value: 5204.26
          },
          {
            name: '肇庆市',
            value: 21900.9
          },
          {
            name: '惠州市',
            value: 4918.26
          },
          {
            name: '梅州市',
            value: 5881.84
          },
          {
            name: '汕尾市',
            value: 4178.01
          },
          {
            name: '河源市',
            value: 2227.92
          },
          {
            name: '阳江市',
            value: 2180.98
          },
          {
            name: '清远市',
            value: 9172.94
          },
          {
            name: '东莞市',
            value: 3368
          },
          {
            name: '中山市',
            value: 306.98
          },
          {
            name: '潮州市',
            value: 810.66
          },
          {
            name: '揭阳市',
            value: 542.2
          },
          {
            name: '云浮市',
            value: 256.38
          }
        ]
      }
    ]
  })
  const optionChina = ref({
    tooltip: {
      trigger: 'item'
    },
    geo: {
      map: 'china',
      label: {
        show: true,
        position: 'insideLeft',
        color: 'white',
        fontSize: '10',
        emphasis: {
          show: true
        }
      },
      roam: true,
      silent: true,
      itemStyle: {
        normal: {
          areaColor: 'transparent',
          borderColor: '#0e94eb',
          shadowBlur: 10,
          shadowColor: '#0e94ea'
        }
      },
      left: 10,
      right: 10
    },
    series: [
      {
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 1.5,
          trailLength: 0.5,
          color: '#ffeb40',
          symbol: 'pin',
          symbolSize: 6
        },
        lineStyle: {
          normal: {
            color: '#ffeb40',
            width: 1,
            opacity: 0.4,
            curveness: 0.2
          }
        },
        data: [
          {
            coords: [
              [117.12, 39.02],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [112.59, 28.12],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [119.18, 26.05],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [116.24, 39.55],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [118.46, 32.03],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [108.77, 19.1],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [104.04, 30.4],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [120.1, 30.16],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [106.54, 29.59],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [114.1, 22.2],
              [113.52, 22.3]
            ]
          },
          {
            coords: [
              [108.41, 40.48],
              [113.52, 22.3]
            ]
          }
        ]
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          period: 4,
          scale: 2.5,
          brushType: 'stroke'
        },
        symbol: 'none',
        symbolSize: 4,
        itemStyle: {
          normal: {
            color: '#fff'
          }
        },
        data: [
          {
            name: '天津市',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [117.12, 39.02]
          },
          {
            name: '湖南省',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [112.59, 28.12]
          },
          {
            name: '福建省',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [119.18, 26.05]
          },
          {
            name: '北京市',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [116.24, 39.55]
          },
          {
            name: '江苏省',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [118.46, 32.03]
          },
          {
            name: '海南',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [108.77, 19.1]
          },
          {
            name: '四川省',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [104.04, 30.4]
          },
          {
            name: '浙江省',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [120.1, 30.16]
          },
          {
            name: '重庆市',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [106.54, 29.59]
          },
          {
            name: '香港特别行政区',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [114.1, 22.2]
          },
          {
            name: '内蒙古',
            symbolSize: 2,
            itemStyle: {
              normal: {
                color: '#ffeb40'
              }
            },
            value: [108.41, 40.48]
          },
          {
            name: '珠海',
            value: [113.52, 22.3],
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#2ef358'
              }
            }
          }
        ]
      }
    ]
  })
  const getMapJson = () => {
    const path = props.mapType === 'gd' ? 'guangdong' : 'china'
    getRequest(`/static/demo1/${path}.json`)
      .then(res => {})
      .catch(res => {
        echarts.registerMap(path, res)
        option.value =
          props.mapType === 'gd' ? optionGd.value : optionChina.value
      })
  }

  onMounted(() => {
    getMapJson()
  })
</script>