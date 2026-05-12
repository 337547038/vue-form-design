import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import {getStorage, setStorage, isArray} from "@/utils";
import type {ScreenData} from "@/types/screen.ts";

export const useScreenStore = defineStore('screen', () => {
  const screenStorage = ref(getStorage('screenConfig', true) || {})

  // ======================将一些配置保存在storage
  function setScreenStorage(data: Record<string, any>) {
    const obj = Object.assign({}, screenStorage.value, data)
    setStorage('screenConfig', obj, 0)
    screenStorage.value = obj
  }

  // =========================是否显示标尺
  const isShowRuler = ref(true)

  function setIsShowRuler(data: boolean) {
    isShowRuler.value = data
  }

  // ========================手动设置的缩放比例
  const scale = ref(screenStorage.value.scale)

  function setScale(data: number) {
    scale.value = data
    setScreenStorage({scale: data}) // 保存在storage
  }

  // ===================根据当前屏幕计算出来的自适应缩放比例
  const autoScale = ref(0)

  function setAutoScale(data: number) {
    autoScale.value = data
  }

  // ======================展开或收起左则组件栏
  const showComponentPanel = ref(screenStorage.value.showComponentPanel ?? true)

  function setShowComponentPanel() {
    const val = !showComponentPanel.value
    showComponentPanel.value = val
    setScreenStorage({showComponentPanel: val}) // 保存在storage
  }

  //========================展开或收起右侧属性设置
  const showPropertyPanel = ref(screenStorage.value.showPropertyPanel ?? true)

  function setShowPropertyPanel() {
    const val = !showPropertyPanel.value
    showPropertyPanel.value = val
    setScreenStorage({showPropertyPanel: val}) // 保存在storage
  }

  //=========================全局配置
  const designConfig = ref({
    width: '1920px',
    height: '1080px',
    background: '#000',
    style: '', //页面样式
    styleLink: '', //外链css样式
    primary: '#409eff',
    method: 'get'
  })

  function setDesignConfig(data: Record<string, any>) {
    designConfig.value = data
    console.log('setDesignConfig')
  }

  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝设计的主数据
  const designData = ref([
    {
      type: "line",
      label: "折线图",
      width: 400,
      height: 300,
      x: 99,
      y: 6,
      option:
          {
            xAxis:
                {
                  type: "category",
                  data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
            yAxis:
                {
                  type: "value"
                },
            grid:
                {
                  left: 0,
                  bottom: 30
                },
            series: [
              {
                data: "{{getScreenComp.line.data}}",
                type: "line"
              }]
          },
      id: "line1778042994925",
      optionsType: 1,
      method: "get",
      requestUrl: "/mock/demo/echarts",
      after:(res,data)=>{
          // res响应数据, 当前组件数据data，也即图表的option
          console.log(res, data)
        console.log('after.....')
          // 如对当前组件进行赋值
          // data.xAxis.data = res.line.xAxis
          // data.series[0].data = res.line.data
          // data.series[1].data = res.line.data1
          // 还可以在静态编辑数据里使用字符串占位符，如 data:"{{getScreenComp.xAxis}}"
          // getScreenComp即为res的值"
        data.xAxis.data = res.line.xAxis
          return data //返回新的图表数据
      }
    },
    {
      type: "line",
      label: "折线图",
      width: 400,
      height: 300,
      option:
          {
            xAxis:
                {
                  type: "category",
                  data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
            yAxis:
                {
                  type: "value"
                },
            grid:
                {
                  left: 0,
                  bottom: 30
                },
            series: [
              {
                data: "{{getScreenComp.line.data}}",
                type: "line"
              }]
          },
      id: "line1778211776589",
      x: 353,
      y: 468
    },
    {
      type: "bar",
      label: "柱状图",
      width: 400,
      height: 300,
      x: 516,
      y: 146,
      option:
          {
            xAxis:
                {
                  type: "category",
                  data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
            yAxis:
                {
                  type: "value"
                },
            grid:
                {
                  left: 0,
                  bottom: 30
                },
            series: [
              {
                data: "{{getScreenComp.line.data}}",
                type: "bar"
              }]
          },
      id: "bar1778042997719"
    }
  ])
  const designFilterData = computed(() => {
    return designData.value.filter((item: any) => item.type !== 'rect')
  })

  /**
   * 添加设计数据，支持一次添加多个
   * @param data 支持添加多个 data=[{},{}]形式
   */
  function setAddDesignData(...data: any) {
    designData.value.push(...data)
  }

  function setDesignData(data: ScreenData[] | string[]) {
    designData.value = data
  }

  function setDeleteDesignData(ids: string | string[]) {
    const idArray = Array.isArray(ids) ? ids : [ids];
    designData.value = designData.value.filter((item: { id: string }) => !idArray.includes(item.id));
  }

  // ================================拖选选区/单选选中的组件集合
  const selectedComp = ref([])

  /**
   * 设置选中组件
   * @param data 需要处理的数组，可以为对象也可以是数组
   * @param isPush 是否以push形式添加，false直接赋值
   */
  function setSelectedComp(data: string[] | Record<string, any>, isPush?: boolean) {
    if (isPush && !Array.isArray(data)) {
      // 防止重复意外添加
      const isExist = selectedComp.value.some((item: any) => item.id === data.id);
      if (!isExist) {
        selectedComp.value.push(data)
      }
    } else {
      selectedComp.value = isArray(data) ? data : [data]
    }
    console.log('setSelectedComp', data, isPush)
  }

  const activeComp = computed(() => {
    return selectedComp.value[0] || {}
  })

  // =================================移除选区
  function deleteRect() {
    console.log('清空选区')
    designData.value = designData.value.filter((item: { type: string }) => item.type !== 'rect');
  }

  // =============================键盘事件,当前是否按住ctrl键
  const ctrlPress = ref(false)

  function setCtrlPress(data: boolean) {
    ctrlPress.value = data
  }

  // =============================底部工作栏提示语
  const controlTip = ref()

  function setControlTip(data: string) {
    controlTip.value = data
  }

  // ==========================全局接口数据
  const getScreenGlobal = ref({})

  function setScreenGlobal(data: Record<string, any>) {
    getScreenGlobal.value = data
  }

  return {
    isShowRuler,
    setIsShowRuler,
    scale,
    setScale,
    autoScale,
    setAutoScale,
    showComponentPanel,
    setShowComponentPanel,
    showPropertyPanel,
    setShowPropertyPanel,
    designData,
    designFilterData,
    setAddDesignData,
    setDesignData,
    setDeleteDesignData,
    designConfig,
    setDesignConfig,
    selectedComp,
    setSelectedComp,
    activeComp,
    deleteRect,
    ctrlPress,
    setCtrlPress,
    controlTip,
    setControlTip,
    getScreenGlobal,
    setScreenGlobal
  }
})
