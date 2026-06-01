import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import {getStorage, setStorage, isArray,removeResource} from "@/utils";
import type {Component, Command} from "@/types/screen";
import {deepClone} from "@/utils/design";

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

      //==========================撤销重做
      const history = ref([])
      const currentHistoryIndex = ref(-1)
      const setHistory = (command: Command) => {
        // 保留到当前指针位置，删除后面所有
        history.value = history.value.slice(0, currentHistoryIndex.value + 1)
        history.value.push(command)
        currentHistoryIndex.value = history.value.length - 1
        // 限制记录条数
        if (history.value.length > 30) {
          history.value.shift()
          currentHistoryIndex.value--
        }
      }
      //撤销
      const setUndo = () => {
        if (!canUndo.value) {
          return
        }
        history.value[currentHistoryIndex.value].undo()
        currentHistoryIndex.value--
      }
      // 重做
      const setRedo = () => {
        if (!canRedo.value) return
        // 指针下移
        currentHistoryIndex.value++
        // 执行重做
        history.value[currentHistoryIndex.value].execute()
      }
      // 是否能撤销
      const canUndo = computed(() => {
        return currentHistoryIndex.value >= 0
      })
      // 判断能否重做
      const canRedo = computed(() => {
        return currentHistoryIndex.value < history.value.length - 1
      })
      /**
       * 组件更新时添加操作记录,支持同时更新多个
       * @param component 当componentHasUpdate=true为更新后的组件，否则为更新前的
       * @param props 当componentHasUpdate=true时，props为更新前的，否则为更新后的
       * @param componentHasUpdate 由于拖动时已经实时更新了
       */
      const updateComponentHistory = (component: Component[], props: Partial<Component[]>, componentHasUpdate = false) => {
        const validCommands: Command[] = [];
        component.forEach((c: Component, index: number) => {
          const oldProps = componentHasUpdate ? {...props[index]} : {...c}
          const newProps = componentHasUpdate ? {...c} : {...props[index]}
          validCommands.push({
            execute: () => Object.assign(c, newProps),
            undo: () => Object.assign(c, oldProps),
          })
        })
        const compositeCommand: Command = {
          execute: () => validCommands.forEach(cmd => cmd.execute()),
          undo: () => validCommands.reverse().forEach(cmd => cmd.undo()),
        };
        setHistory(compositeCommand)
        // 传oldProps时这里执行更新
        if (!componentHasUpdate) {
          compositeCommand.execute()
        }
      }
      /**
       * 添加操作记录，更新数据，updateComponentHistory的简化版(支持designData和designConfig两个数据的更新)
       * @param data 需要更新的原数据
       * @param props 当hasUpdate=true时，props为更新前的，否则为更新后的
       * @param hasUpdate 是否已更新
       * @param callback 撤销或重做回调
       */
      const updateCompHistory = (data: Record<string, any>, props: Record<string, any>, hasUpdate = false, callback?: (key: string) => void) => {
        const oldProps = hasUpdate ? {...props} : {...data}
        const newProps = hasUpdate ? {...data} : {...props}
        const command: Command = {
          execute: () => {
            Object.assign(data, newProps)
            callback && callback('redo')
          },
          undo: () => {
            Object.assign(data, oldProps)
            callback && callback('undo')
          }
        }
        setHistory(command)
        // 传oldProps时这里执行更新
        if (!hasUpdate) {
          command.execute()
        }
      }
      //==========================撤销重做结束

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
       * 设置/追加设计数据
       * @param data 要设置的数据（单条/多条/对象）
       * @param isPush 是否追加模式（默认 false）
       * @param addHistory 是否增加操作历史
       */
      function setDesignData(data: Component[] | Component | Record<string, any>, isPush = false, addHistory = false) {
        const newComponents = Array.isArray(data) ? data : [data];
        const newIds = newComponents.map((c: Component) => c.id);
        const originalComponents = deepClone(designData.value) // 添加前的原数据，用于撤销
        const command: Command = {
          execute: () => {
            if (isPush) {
              // 追加模式
              designData.value.push(...newComponents);
            } else {
              // 覆盖模式
              designData.value = newComponents;
            }
          },
          undo: () => {
            if (isPush) {
              // 按新增时id删除
              designData.value = designData.value.filter((item: Component) => !newIds.includes(item.id))
            } else {
              designData.value = originalComponents
            }
          }
        }
        addHistory && setHistory(command)
        command.execute()
      }

      function setDeleteDesignData(ids: string | string[], addHistory = false) {
        const idArray = Array.isArray(ids) ? ids : [ids];
        // 找出被删除的项
        const deleteComponents = designData.value.filter((c: Component) => ids.includes(c.id));
        const command: Command = {
          execute: () => {
            designData.value = designData.value.filter((item: { id: string }) => !idArray.includes(item.id));
          },
          undo: () => {
            // 恢复暂不考虑位置，添加在后面
            designData.value.push(...deleteComponents)
          },
        }
        addHistory && setHistory(command)
        command.execute()

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

      //==========================退出设计窗口，清空
      const designConfigRest = JSON.stringify(designConfig.value)

      function clearOnExitDesign() {
        designData.value = []
        designConfig.value = JSON.parse(designConfigRest)
        selectedComp.value = []
        history.value = []
        getScreenGlobal.value = {}
        //可能有插入样式
        removeResource('scopedStyleId')
        removeResource('styleLink')
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
        setScreenGlobal,
        history,
        setHistory,
        canUndo,
        canRedo,
        setUndo,
        setRedo,
        updateComponentHistory,
        updateCompHistory,
        clearOnExitDesign
      }
    }
)
