<template>
  <el-row style="flex-wrap: nowrap">
    <el-input v-model="value" :placeholder="placeholder" />
    <el-button @click="visibleClick">选择</el-button>
  </el-row>
  <el-dialog v-model="state.visible" title="详细地址" width="800px">
    <div class="map-container">
      <el-input id="tipInput" v-model="state.tipInput" />
      <div id="container" style="width: 100%; height: 400px"></div>
      <div id="panel"></div>
    </div>
    <template #footer>
      <el-button @click="selectClick" type="primary">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { reactive, watch, ref, onMounted, nextTick } from 'vue'
  import { loadScript } from '@/utils'

  const props = withDefaults(
    defineProps<{
      modelValue?: string
      disabled?: boolean
      placeholder?: string
    }>(),
    {}
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  const value = ref(props.modelValue)
  watch(
    () => props.modelValue,
    () => {
      value.value = props.modelValue
    }
  )
  const state = reactive({
    visible: false,
    tipInput: ''
  })
  const selectClick = () => {
    state.visible = false
    value.value = state.tipInput
    emits('update:modelValue', value.value)
  }
  const visibleClick = () => {
    state.visible = true
    // 初始地址
    nextTick(() => {
      const map = initMap()
      mapSearch(map)
    })
  }
  const center = ref([113.264499, 23.130061])
  // 地图选择
  const initMap = () => {
    const map = new AMap.Map('container', {
      resizeEnable: true,
      center: center.value,
      zoom: 11,
      viewMode: '3D' // 使用3D视图
    })
    //实时路况图层
    const marker = new AMap.Marker({
      position: map.getCenter(),
      //icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
      // 设置是否可以拖拽
      draggable: true,
      cursor: 'move'
      // content: 'markerContent',
    })
    const { lat, lng } = map.getCenter()
    getDetailAddress(lng, lat, marker)
    map.add(marker) //添加到地图
    map.on('click', (e: any) => {
      const lnglat = e.lnglat
      const lat = lnglat.lat
      const lng = lnglat.lng
      map.setCenter([lng, lat]) //设置地图中心点
      marker.setPosition([lng, lat]) //更新点标记位置
      getDetailAddress(lng, lat, marker)
    })
    return map
  }
  const mapSearch = (map: any) => {
    AMap.plugin(['AMap.PlaceSearch', 'AMap.AutoComplete'], function () {
      const auto = new AMap.AutoComplete({
        input: 'tipInput'
      })
      const placeSearch = new AMap.PlaceSearch({
        pageSize: 5, // 单页显示结果条数
        pageIndex: 1, // 页码
        city: '', // 兴趣点城市
        citylimit: false, //是否强制限制在设置的城市内搜索
        map: map, // 展现结果的地图实例
        panel: 'panel', // 结果列表将在此容器中进行展示。
        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
      })
      auto.on('select', (evt: any) => {
        placeSearch.setCity(evt.poi.adcode)
        placeSearch.search(evt.poi.name) //关键字查询查询
        /*placeSearch.search(evt.poi.name, function (status, result) {
          //关键字查询查询
          // 查询成功时，result即对应匹配的POI信息
          console.log("搜索结果", result);
        });*/
        state.tipInput = evt.poi.name // 更新输入框的值
      }) //注册监听，当选中某条记录时会触发
      /*
      // 搜索结果地图上的icon层
       placeSearch.on('markerClick',()=>{
        console.log('placeSearch.onmarkerClick')
      })*/
      // 搜索列表点击事件
      placeSearch.on('listElementClick', (evt: any) => {
        state.tipInput = evt.data.name
      })
    })
  }
  const getDetailAddress = (lng: number, lat: number, marker: any) => {
    // 根据经纬度获取详细地址
    AMap.plugin('AMap.Geocoder', () => {
      const geocoder = new AMap.Geocoder()
      geocoder.getAddress([lng, lat], (status: string, result: any) => {
        if (status === 'complete' && result.info === 'OK') {
          const detailAddress = result.regeocode.formattedAddress
          state.tipInput = detailAddress
          marker.setLabel({
            direction: 'center',
            offset: new AMap.Pixel(0, -25), //设置文本标注偏移量
            content: `<div class='info'>${detailAddress}</div>` //设置文本标注内容
          })
        }
      })
    })
  }
  onMounted(() => {
    console.log('onMountedonMounted')
    loadScript(
      'https://webapi.amap.com/maps?v=2.0&key=160cab8ad6c50752175d76e61ef92c50&plugin=AMap.PlaceSearch'
    ).then(() => {})
  })
</script>
<style lang="scss">
  .map-container {
    position: relative;
  }
  .amap-sug-result {
    z-index: 2500;
  }
  #panel {
    z-index: 2500;
    position: absolute;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
    .amap_lib_placeSearch {
      border: 1px solid #ebedf0;
      border-radius: 2px;
      padding: 5px 10px 2px;
      .poibox {
        border-bottom: 1px solid #e8e8e8;
        cursor: pointer;
        padding: 10px 5px;
        position: relative;
        min-height: 35px;
      }
      .amap_lib_placeSearch_pic {
        width: 46px;
        height: 46px;
        float: left;
        margin: 4px 10px 0 0;
        img {
          width: 46px;
          height: 46px;
        }
      }
    }
  }
</style>
