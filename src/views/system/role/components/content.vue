<!-- Created by 337547038 -->
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
  const props = withDefaults(
    defineProps<{
      modelValue?: string
    }>(),
    {}
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
    const sessionList = window.sessionStorage.getItem('formMenuList')
    if (sessionList) {
      treeData.value = JSON.parse(sessionList)
    }
  }
  watch(
    () => props.modelValue,
    () => {
      if (props.modelValue) {
        treeRef.value!.setCheckedKeys(props.modelValue.split(','), false)
      }
    }
  )
  onMounted(() => {
    init()
  })
</script>
