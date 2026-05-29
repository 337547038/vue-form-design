<template>
  <div class="control-expand">
    <el-button-group>
      <el-button
        v-if="searchFormToggle"
        circle
        icon="Search"
        title="展开/收起筛选"
        @click="toggleClick"
      />
      <el-popover
        v-if="columnsSetting"
        :width="80"
        placement="bottom-end"
        trigger="click"
        @hide="popoverHideClick"
        @show="popoverShowClick"
      >
        <template #default>
          <el-checkbox-group v-model="columnsCheck">
            <el-checkbox
              v-for="item in columns"
              :key="item.prop"
              :value="item.prop"
              :label="item.label"
              :disabled="!item.prop"
            />
          </el-checkbox-group>
        </template>
        <template #reference>
          <el-button
            circle
            icon="SetUp"
            title="设置列显示隐藏"
          />
        </template>
      </el-popover>
    </el-button-group>
  </div>
</template>
<script setup lang="ts">
  import {computed, onMounted, ref} from 'vue'
  import type {Columns} from "@/types/table";
  import {getStorage, setStorage} from "@/utils";

  const props = withDefaults(
    defineProps<{
      searchFormToggle: boolean | undefined
      columnsSetting: boolean | undefined
      columns: Columns[] | undefined
      id: string
      modelValue: string[] | undefined
    }>(),
    {
    }
  )
  const emits = defineEmits<{
    (e: 'toggleClick'): void
    (e: 'update:modelValue'): void
  }>()
  const columnsCheck = ref([])
  const toggleClick = () => {
    emits('toggleClick')
  }
  const storageTableColumns = computed(() => {
    return getStorage('tableColumns', true) || {}
  })
  const popoverHideClick = () => {
    if (columnsCheck.value.length !== props.columns.length) {
      // 非全选状态时,
      emits('update:modelValue', columnsCheck.value)
    } else {
      //全选时
      emits('update:modelValue', [])
    }
    const newCheck = {[props.id]: columnsCheck.value}
    setStorage('tableColumns', {...storageTableColumns.value, ...newCheck}, 0)

  }
  const popoverShowClick = () => {
    if (!columnsCheck?.value.length) {
      // 为空时，则全部勾选上
      columnsCheck.value = props.columns.map((item: any) => item.prop)
    }
  }
  onMounted(() => {
    //从storage恢复
    const currentVal = storageTableColumns.value[props.id]
    if (currentVal) {
      columnsCheck.value = currentVal
      emits('update:modelValue', currentVal)
    }
  })
</script>


<style scoped lang="scss">

</style>