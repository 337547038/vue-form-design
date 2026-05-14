<template>
  <div>
    <div v-for="item in designData" :key="item.id">
      {{ item.name }}
    </div>
  </div>
  <div>
    <el-button @click="addClick">add</el-button>
    <el-button @click="resetClick">覆盖</el-button>
    <el-button @click="delClick">del</el-button>
    <el-button @click="undoClick" :disabled="!canUndo">撤销</el-button>
    <el-button @click="redoClick">重做</el-button>
    <p>当前指针位置：{{ currentHistoryIndex }}</p>
  </div>
</template>
<script setup lang="ts">
  import {computed, ref} from 'vue'
  import {useScreenStore} from "@/store/screen.ts";
  import {storeToRefs} from "pinia";

  const store = useScreenStore();

  const {designData, history, currentHistoryIndex,canUndo,canRedo} = storeToRefs(store)


  const indexType = ref(0)
  const getName = (index) => {
    indexType.value++
    return ['第一', '第2', '第三', '第四', '第五', '第六', '第七', '第八', '第九', '第10', '第11'][index]
  }
  const resetClick = () => {
    const prevData = [...designData.value];
    const newComponent = []
    const command = {
      execute: () => {
        store.setDesignData([])
      },
      undo: () => {
        designData.value = prevData
      }
    }
    store.setHistory(command)
    command.execute()
  }
  const addClick = () => {
    const newComponent = {type: 'bar', id: new Date().getTime(), name: getName(indexType.value)}
    const command = {
      execute: () => {
        store.setDesignData(newComponent, true)
      },
      undo: () => {
        const comp = designData.value.find(item => item.id === newComponent.id)
        if (comp) {
          console.log('删除:', comp.id)
          store.setDeleteDesignData(comp.id)
        }
      }
    }
    store.setHistory(command)
    command.execute()
  }
  const delClick = (id) => {
    // 找出需删除的记录，在指定位置添加一条
    const component = {}
    const index = 0
    const command = {
      execute: () => {
        store.setDeleteDesignData(id)
      },
      undo: () => {
        //this.components.splice(index, 0, component)
      }
    }
    store.setHistory(command)
    command.execute()
  }

  const undoClick = () => {
    /*if (!canUndo.value) {
      return
    }
    history.value[currentHistoryIndex.value].undo()
    currentHistoryIndex.value--*/
    store.undo()
  }
  const redoClick = () => {
    /*if (!canRedo.value) return
    // 指针下移
    currentHistoryIndex.value++
    // 执行重做
    history.value[currentHistoryIndex.value].execute()*/
    store.redo()
  }
</script>