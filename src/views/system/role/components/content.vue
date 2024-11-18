<!-- Created by weiXin:337547038 -->
<template>
  <el-tree
    ref="treeRef"
    :data="treeData"
    show-checkbox
    node-key="id"
    highlight-current
    :props="defaultProps"
    @check-change="checkChange"
  />
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import { onBeforeRouteLeave } from 'vue-router'
  import { getRequest } from '@/api'
  import { flatToTree } from '@/utils/flatTree'

  const props = withDefaults(
    defineProps<{
      modelValue?: string
    }>(),
    {
      modelValue: ''
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  const treeRef = ref()
  const treeData = ref([])
  const defaultProps = {
    children: 'children',
    label: 'name'
  }
  const checkChange = () => {
    const val = treeRef.value!.getCheckedKeys(false)
    emits('update:modelValue', val.join(','))
  }
  const init = () => {
    getRequest('menuList', { status: 1 }).then((res: any) => {
      treeData.value = flatToTree(res.data.list)
    })
  }
  const unWatch = watch(
    () => props.modelValue,
    () => {
      if (props.modelValue) {
        treeRef.value!.setCheckedKeys(props.modelValue.split(','), false)
      }
    }
  )
  onBeforeRouteLeave(() => {
    unWatch() // 销毁监听器
  })
  onMounted(() => {
    init()
  })
</script>
