<template>
  <div
    class="group"
    :class="{
      ['group-' + element.type]: true,
      active: store.getIsActive(element)
    }"
    :style="getFormItemStyle(element.span)"
  >
    <template v-if="element.type === 'txt'">
      <div
        v-bind="element.control"
        :class="[element?.className]"
        v-html="element.control?.modelValue"
      />
    </template>
    <template v-else-if="element.type === 'title'">
      <div
        class="title"
        :class="[element.className]"
        v-bind="element.control"
      >
        <span v-html="element.control?.modelValue" />
        <tooltips
          v-if="element?.help"
          :content="element?.help"
        />
      </div>
    </template>
    <template v-else-if="element.type === 'inputSlot' && !isDesignType">
      <!--  除设计外其他无需处理-->
    </template>
    <template v-else-if="element.type === 'tabs'">
      1
    </template>
    <template v-else-if="element.type === 'button'">
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
      @change="formValueChange"
    />
    <slot />
  </div>
</template>
<script setup lang="ts">
  import {computed, ref} from 'vue'
  import type {Component,FormValueChange} from "@/types/designForm";
  import FormItem from "./formItem.vue";
  import {useFormStore} from "@/store/form";
  import {formatNumber} from "@/utils/design";
  import Tooltips from '../tooltip/index.vue'

  const store = useFormStore();
  withDefaults(
    defineProps<{
      element: Component
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'btnClick', key: string): void
    (e: 'change', value: FormValueChange): void
  }>()

  const formValueChange = (obj: FormValueChange) => {
    emits('change', obj)
  }
  const isDesignType = computed(() => {
    return ['designForm','designSearch','designFlow'].includes(store.designType)
  })
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
  const clickBtn = (key: string) => {
    emits('btnClick', key)
  }
</script>