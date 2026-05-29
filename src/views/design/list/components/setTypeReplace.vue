<template>
  <div
    v-for="(item,index) in list"
    :key="item"
    class="container"
  >
    <el-input
      v-model="item.value"
      placeholder="对应的值"
      @change="change"
    >
      <template
        v-if="type==='custom'"
        #append
      >
        <el-select
          v-model="item.label"
          style="width: 90px"
          @change="change"
        >
          <el-option
            v-for="op in uiType"
            :key="op"
            :label="op"
            :value="op"
          />
        </el-select>
      </template>
    </el-input>
    <el-input
      v-if="type==='replaceValue'"
      v-model="item.label"
      placeholder="替换的值"
      @change="change"
    />
    <i
      style="margin-left: 10px"
      class="icon-del"
      @click="delClick(index)"
    />
  </div>
  <el-button
    v-show="showBtn"
    type="primary"
    @click="addClick"
  >
    新增
  </el-button>
</template>
<script setup lang="ts">
  import {computed, onUnmounted, ref, watch} from 'vue'
  import {uiType} from './const'
  import {arrayToObject, objectToArray} from "@/utils/design";

  const props = withDefaults(
    defineProps<{
      modelValue: Record<string, any>
      type?: 'replaceValue' | 'custom' | undefined
    }>(),
    {
      type: 'custom'
    }
  )
  const unWatch = watch(() => props.modelValue, (val: Record<string, any>) => {
    list.value = objectToArray(val)
  })
  const list = ref([])
  const emits = defineEmits<{
    (e: 'update:modelValue', val: any): void
  }>()
  const showBtn = computed(() => {
    if (props.type === 'custom') {
      return list.value.length < uiType.length
    }
    return true
  })
  const change = () => {
    emits('update:modelValue', arrayToObject(list.value))
  }
  const delClick = (index: number) => {
    list.value.splice(index, 1)
  }
  const addClick = () => {
    list.value.push(
      {
        label: props.type === 'custom' ? 'primary' : '',
        value: ''
      }
    )
  }
  onUnmounted(() => {
    unWatch()
  })
</script>
<style scoped lang="scss">
  .container {display: flex;align-items: center;margin-bottom: 10px;}
</style>