<template>
  <el-select
    v-model="selectChecked"
    multiple
    @change="change"
  >
    <el-option
      v-for="item in btnList"
      :key="item.key"
      :label="item.label"
      :value="item.key"
    />
  </el-select>
</template>
<script setup lang="ts">
  import { ref, watch, computed } from 'vue'
  const props = withDefaults(
    defineProps<{
      position?: string
    }>(),
    {
      position: 'top'
    }
  )
  const model = defineModel<string>()
  const selectChecked = ref([])
  const lastSelectChecked = ref([])
  const btnList = computed(() => {
    return [
      {
        label: '新增',
        key: 'add',
        show: props.position === 'top'
      },
      {
        label: '编辑',
        key: 'edit',
        show: true
      },
      {
        label: '查看',
        key: 'detail',
        show: props.position === 'left'
      },
      {
        label: '删除',
        key: 'del',
        show: true
      },
      {
        label: '导出',
        key: 'export',
        show: props.position === 'top'
      }
    ].filter((item) => item.show)
  })
  const allKey = btnList.value.map((item) => item.key)
  watch(
    () => model.value,
    (val: any) => {
      if (val?.length) {
        selectChecked.value = []
        lastSelectChecked.value = []
        val.forEach((item: any) => {
          if (item.key && allKey.includes(item.key)) {
            selectChecked.value.push(item.key)
            lastSelectChecked.value.push(item.key)
          }
        })
      }
    },
    { deep: true, immediate: true }
  )
  const change = (val) => {
    // 找出新增的选项
    const addedItems = val.filter(
      (item) => !lastSelectChecked.value.includes(item)
    )
    if (addedItems.length) {
      // 表示当前为新增
      model.value.push({ key: addedItems[0] })
    } else {
      // 找出删除的选项
      const removedItems = lastSelectChecked.value.filter(
        (item) => !val.includes(item)
      )
      model.value = model.value.filter((item) => item.key !== removedItems[0])
    }
    lastSelectChecked.value = val
  }
</script>
