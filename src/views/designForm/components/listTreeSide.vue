<template>
  <div class="tree-sidebar">
    <el-input v-model="filterText" placeholder="输入关键字进行过滤" />
    <el-tree
      ref="treeRef"
      class="filter-tree"
      :data="state.treeData"
      default-expand-all
      :filter-node-method="filterNode"
      @node-click="nodeClick"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, reactive, onMounted } from 'vue'
  import axios from '@/utils/request'
  import { useRoute } from 'vue-router'
  interface Tree {
    id: number
    label: string
    children?: Tree[]
  }
  const props = withDefaults(
    defineProps<{
      data: any
      formId?: string
    }>(),
    {
      data: () => {
        return []
      },
      formId: ''
    }
  )
  const emits = defineEmits<{
    (e: 'nodeClick', row: string | number): void
  }>()
  const route = useRoute()
  const treeRef = ref()
  const filterText = ref('')
  const state = reactive({
    treeData: []
  })
  /*const defaultProps = {
    children: 'children',
    label: 'label'
  }*/
  watch(filterText, (val: string) => {
    treeRef.value!.filter(val)
  })

  const filterNode = (value: string, data: Tree) => {
    if (!value) return true
    return data.label.includes(value)
  }
  const nodeClick = (data: Tree) => {
    emits('nodeClick', data.id || data.label)
  }
  const init = () => {
    const { request, sourceFun, beforeRequest, afterResponse } = props.data
    if (request && sourceFun) {
      // 处理请求前的数据
      let newData: any = { formId: props.formId }
      if (typeof beforeRequest === 'function') {
        newData = beforeRequest(newData, route)
      }
      if (request === 'get') {
        newData = { params: newData }
      }
      ;(axios as any)
        [request](sourceFun, newData)
        .then((res: any) => {
          if (res.data.code === 200) {
            // 请求成功
            let result = res.data.data
            // 这里做数据转换，很多时候后端并不能提供完全符合且一样的数据
            if (typeof afterResponse === 'function') {
              result = afterResponse(result)
            }
            state.treeData = result
          }
        })
        .catch(() => {
          state.treeData = []
        })
    }
  }
  onMounted(() => {
    init()
  })
</script>
