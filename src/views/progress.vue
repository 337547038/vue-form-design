<template>
  <div class="circle-progress" :style="style">
    <span
      v-for="item in 4"
      :key="item"
      :class="{
        [`progress-${item}`]: true,
        active: currentValue.includes(item)
      }"
      @click="spanClick(item)"
    ></span>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  const props = withDefaults(
    defineProps<{
      radius?: number
      color?: string
      modelValue?: number[]
    }>(),
    {
      radius: 50,
      color: '#ddd',
      modelValue: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: number[]): void
  }>()
  const currentValue = ref(props.modelValue)
  watch(
    () => props.modelValue,
    (val: number[]) => {
      currentValue.value = val
    }
  )
  const style = computed(() => {
    return {
      width: `${props.radius}px`,
      height: `${props.radius}px`,
      borderColor: props.color,
      background: props.modelValue?.length === 4 ? props.color : ''
    }
  })
  const spanClick = (num: number) => {
    const index = props.modelValue.indexOf(num)
    console.log(num, index)
    if (index !== -1) {
      //删除
      currentValue.value.splice(index, 1)
    } else {
      currentValue.value.push(num)
    }
    emits('update:modelValue', currentValue.value)
  }
</script>
<style scoped lang="scss">
  .circle-progress {
    border-radius: 50%;
    border: 1px solid;
    overflow: hidden;
    position: relative;
    &:before,
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      border-top: 1px solid v-bind(color);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:after {
      transform: translateY(-50%) rotate(90deg);
    }
    span {
      width: 50%;
      height: 50%;
      display: block;
      left: 50%;
      top: 50%;
      position: absolute;
      transition: all 0.3s;
      cursor: pointer;
      &.active {
        background: v-bind(color);
      }
      &.progress-2 {
        left: 0;
      }
      &.progress-3 {
        left: 0;
        top: 0;
      }
      &.progress-4 {
        left: 50%;
        top: 0;
      }
    }
  }
</style>
