<template>
  <div class="circle-progress" :style="style">
    <span
      v-for="item in 4"
      :key="item"
      :class="{ [`progress-${item}`]: true, active: modelValue * 4 >= item }"
      @click="spanClick(item)"
    ></span>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  const props = withDefaults(
    defineProps<{
      radius?: number
      modelValue?: number
      color?: string[]
    }>(),
    {
      radius: 30,
      modelValue: 0,
      color: () => {
        return ['#b8b8b8', '#b81733', '#b88e17', '#1786b8', '#17b894']
      }
    }
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', val: number): void
  }>()

  const currentColor = computed(() => {
    return props.color[props.modelValue * 4]
  })
  const style = computed(() => {
    return {
      width: `${props.radius}px`,
      height: `${props.radius}px`,
      borderColor: currentColor.value
    }
  })
  const spanClick = (num: number) => {
    let val = num / 4
    if (props.modelValue === 0.25 && num === 1) {
      val = 0
    }
    emits('update:modelValue', val)
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
      border-top: 1px solid v-bind(currentColor);
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
        background: v-bind(currentColor);
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
