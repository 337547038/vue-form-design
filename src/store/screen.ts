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

  //===========================是否显示网格
  const isShowGrid = ref(screenStorage.value.isShowGrid ?? true)

  function setIsShowGrid(data: boolean) {
    isShowGrid.value = data
    setScreenStorage({isShowGrid: data})
  }

  // =========================是否显示标尺
  const isShowRuler = ref(screenStorage.value.isShowRuler ?? true)

  function setIsShowRuler(data: boolean) {
    isShowRuler.value = data
    setScreenStorage({isShowRuler: data})
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
  }

  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝设计的主数据
  const designData = ref([])
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
  }

  const activeComp = computed(() => {
    return selectedComp.value[0] || {}
  })

  // =================================移除选区
  function deleteRect() {
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
    isShowGrid,
    setIsShowGrid,
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
