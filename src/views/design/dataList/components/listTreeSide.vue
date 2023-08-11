<template>
  <div class="tree-sidebar">
    <el-input
      v-model="filterText"
      placeholder="输入关键字进行查找"
      @change="inputChange"
    />
    <div v-loading="loading">
      <el-tree
        ref="treeRef"
        class="filter-tree"
        v-bind="data.treeProps"
        :data="state.treeData"
        default-expand-all
        :highlight-current="true"
        :current-node-key="currentNodeKey"
        @node-click="nodeClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue'
  import { getRequest } from '@/api'
  import { useRoute } from 'vue-router'
  import formatResult from '@/utils/formatResult'

  interface Tree {
    id: number
    label: string
    children?: Tree[]
  }

  const props = withDefaults(
    defineProps<{
      data: any
      currentNodeKey: string | number
    }>(),
    {
      data: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'nodeClick', row: string | number): void
  }>()
  const route = useRoute()
  // const treeRef = ref()
  const filterText = ref('')
  const loading = ref(false)
  const state = reactive({
    treeData: []
  })
  const inputChange = () => {
    const name = props.data.name
    if (!name) {
      console.error(new Error('请设置侧栏树name值'))
      return
    }
    loading.value = true
    init(name)
  }
  const nodeClick = (data: Tree) => {
    emits('nodeClick', data.id || data.label)
  }
  const init = (name?: string) => {
    const {
      requestUrl,
      method = 'post',
      beforeRequest,
      afterResponse
    } = props.data
    if (requestUrl && method) {
      // 处理请求前的数据
      const params = name ? { [name]: filterText.value } : {}
      //console.log('params', params)
      let formatData: any = params
      if (typeof beforeRequest === 'function') {
        formatData = beforeRequest(params, route)
      }
      if (formatData === false) {
        return
      }
      if (method === 'get') {
        formatData = { params: formatData }
      }
      const options = { method: method }
      getRequest(requestUrl, formatData, options)
        .then((res: any) => {
          let result = res.data
          // 这里做数据转换，很多时候后端并不能提供完全符合当前组件的数据
          if (afterResponse && typeof afterResponse === 'string') {
            result = formatResult(result, afterResponse)
          } else if (typeof afterResponse === 'function') {
            result = afterResponse(result)
          }
          state.treeData = result
          loading.value = false
        })
        .catch(() => {
          state.treeData = []
          loading.value = false
        })
    }
  }
  onMounted(() => {
    init()
  })
</script>
