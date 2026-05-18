<template>
  <div
    class="group"
    :class="{
      ['group-' + element.type]: true,
      active: store.getIsActive(element)
    }"
    :style="getFormItemStyle(element.span)"
  >
    <template v-if="element.type === 'tabs'">
      1
    </template>
    <template v-if="element.type === 'button'">
      <div :class="[element?.className]">
        <el-button
          v-bind="element.control"
          @click="clickBtn(element.control.key)"
        >
          {{ element.control?.label }}
        </el-button>
      </div>
    </template>
    <form-item
      v-else
      :data="element"
    />
    <slot />
  </div>
</template>
<script setup lang="ts">
  import {ref} from 'vue'
  import type {Component} from "@/types/designForm";
  import FormItem from "./formItem.vue";
  import {useFormStore} from "@/store/form.ts";
  import {formatNumber} from "@/utils/design";

  const store = useFormStore();
  withDefaults(
    defineProps<{
      element: Component
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'btnClick', key: string): void
  }>()
  /**
   * 返回栅格宽度
   * @param span
   */
  const getFormItemStyle = (span: string | number) => {
    const numberSpan = formatNumber(span)
    if (numberSpan === 0) {
      return {width: 'auto', margin: '0 5px'}
    }
    if (numberSpan) {
      return {width: (numberSpan / 24) * 100 + '%'}
    }
  }
  const clickBtn = (key:string) => {
    emits('btnClick', key)
  }
</script>