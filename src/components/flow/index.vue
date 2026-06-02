<template>
  <div class="flow-container">
    <div
      id="container"
      ref="containerRef"
      class="flow-design-container"
    />
    <ControlMenu
      :undo-able="undoDisable"
      :redo-able="redoDisable"
      :is-silent-mode="isSilentMode"
      @click="controlClick"
    />
    <Drawer
      ref="drawerRef"
      :disabled="isSilentMode"
      :source-apply="sourceApply"
    />
    <Legend v-if="isSilentMode" />
    <ace-drawer ref="aceDrawerRef" />
  </div>
</template>
<script setup lang="ts">
  import {nextTick, onMounted, ref} from 'vue'
  import LogicFlow from "@logicflow/core"
  import "@logicflow/core/dist/index.css"
  import '@logicflow/extension/lib/style/index.css'
  import {DndPanel, DynamicGroup, Menu, MiniMap, SelectionSelect, Snapshot} from "@logicflow/extension"
  import dragMenu from './components/menu.ts'
  import ControlMenu from './components/control.vue'
  import Drawer from './components/drawer.vue'
  import registerNode from './node/index'
  import Legend from './components/legend.vue'
  import type {AnyType} from './types'
  import AceDrawer from '@/components/ace/drawer.vue'

  const props = withDefaults(
    defineProps<{
      isSilentMode?: boolean // 不能编辑
      sourceApply?: boolean // 是否来自于发起申请页
    }>(),
    {
      isSilentMode: false //只读模式
    }
  )

  const emits = defineEmits<{
    (e: 'submitClick', value: string): void
  }>()

  const containerRef = ref()
  const aceDrawerRef = ref()
  const akFlow = ref()
  const drawerRef = ref()
  LogicFlow.use(DndPanel)
  LogicFlow.use(SelectionSelect)
  //LogicFlow.use(Control)
  LogicFlow.use(Snapshot)
  LogicFlow.use(MiniMap)

  const initFlow = () => {
    const lf = new LogicFlow({
      container: containerRef.value,
      plugins: [Menu, DynamicGroup],
      grid: {
        size: 20,
        visible: true,
        type: "dot",
        config: {
          color: "#ababab",
          thickness: 1,
        },
      },
      /*style: { // 设置主题
        polyline: {
          stroke: "#1b7fff",
          strokeWidth: 2,
        }
      }*/
      isSilentMode: props.isSilentMode
    });
    // 为右键菜单追加选项（必须在 lf.render() 之前设置）
    /*   lf.extension.menu.addMenuConfig({
         nodeMenu: [
           {
             text: "分享",
             callback() {
               alert("分享成功！");
             },
           },
           {
             text: "属性",
             callback(node: any) {

             },
           },
         ]
       });*/

    // 注册自定义节点
    registerNode(lf)
    // lf.render()
    lf.render({
      "nodes": [{
        "id": "start",
        "type": "start",
        "x": 264,
        "y": 164,
        "properties": {"width": 40, "height": 40},
        "text": {"x": 264, "y": 164, "value": "开始"}
      }], "edges": []
    })
    // 添加左则拖拽面板菜单

    if (!props.isSilentMode) {
      lf.extension.dndPanel.setPatternItems(dragMenu(() => {
        lf.extension.selectionSelect.openSelectionSelect();
        lf.once('selection:selected', () => {
          lf.extension.selectionSelect.closeSelectionSelect();
        });
      }))
    }
    // 右上控制面板
    akFlow.value = lf
  }

  const controlClick = (type: string) => {
    switch (type) {
      case "zoomIn":
        akFlow.value.zoom(true)
        break
      case "zoomOut":
        akFlow.value.zoom(false)
        break
      case 'resetZoom':
        akFlow.value.resetZoom()
        break
      case 'resetTranslate':
        akFlow.value.resetZoom()
        akFlow.value.resetTranslate()
        break
      case 'undo':
        akFlow.value.undo()
        break
      case 'redo':
        akFlow.value.redo()
        break
      case 'download':
        akFlow.value.getSnapshot()
        break
      case 'map':
        akFlow.value.extension.miniMap.show(akFlow.value.graphModel.width - 205, 60)
        break
      case 'data':
        aceDrawerRef.value.open({
          title:'查看设计数据',
          type:'json',
          content:akFlow.value.getGraphData()
        })
        break
      case 'clear':
        akFlow.value.clearData();
        break
      case 'import':
        aceDrawerRef.value.open({
          title:'可将设计的json导进来',
          type:'json',
          content:{},
          callback:(content:any)=>{
            akFlow.value.render(content)
          }
        })
        break
      case 'save':
        emits('submitClick', JSON.stringify(akFlow.value.getGraphData()))
        break
      default:
        break
    }
  }

  const undoDisable = ref(true)
  const redoDisable = ref(true)
  const flowEvent = () => {
    akFlow.value.on('history:change', ({data}: AnyType) => {
        undoDisable.value = !data.undoAble
        redoDisable.value = !data.redoAble
      }
    )
    akFlow.value.on('node:click', ({data}: AnyType) => {
      // console.log(data)
      // 用户任务和条件判断才弹出
      if (['start', 'userTask', 'sysTask', 'end'].includes(data.type)) {
        setPropertiesText(data)
      }
    })
    akFlow.value.on('edge:click', ({data}: AnyType) => {
      setPropertiesText(data)
    })
  }

  const setPropertiesText = (data: AnyType) => {

    drawerRef.value.open(data, (properties: { [key: string]: number | string | boolean }, text: string) => {
      let updateVal = properties
      // 自定义的task时，显示名称同时更新到properties,
      if (['userTask', 'sysTask'].includes(data.type) && text) {
        updateVal = {...properties, nodeName: text}
      }
      // 编辑模式不修改保存
      if (props.sourceApply || !props.isSilentMode) {
        akFlow.value.setProperties(data.id, updateVal)
        // 更新显示的名称
        akFlow.value.updateText(data.id, text)
      }
    })
  }
  /**
   * 设置节点状态
   * @param data
   * data:{history:[],active:[]}
   */
  const setStatus = (data: AnyType) => {
    //console.log(data.includes)
    for (let key in data) {
      if (data[key]?.length) {
        for (let id in data[key]) {
          akFlow.value.setProperties(data[key][id], {status: key});
        }
      }
    }
  }
  //渲染流程图
  const render = (data: AnyType) => {
    akFlow.value.render(data)
  }

  const getDesignFlowData = () => {
    return akFlow.value.getGraphData()
  }

  defineExpose({render, setStatus, getDesignFlowData})

  onMounted(() => {
    nextTick(() => {
      initFlow()
      flowEvent()
    })
  })

</script>
