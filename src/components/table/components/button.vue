<template>
  <el-tooltip
    effect="dark"
    :content="btn.tooltip"
    placement="top"
    :disabled="!btn.tooltip"
  >
    <el-text
      v-if="type === 'text'"
      :type="btn.type"
      :class="[btn.class]"
      v-bind="btn.attr"
      v-show="getDisplay(btn)"
      :disabled="getDisabled(btn)"
      @click="clickEvent"
    >
      <Icon :name="btn.icon" />
      <span v-if="btn.label">{{ btn.label }}</span>
    </el-text>
    <el-button
      v-else
      :type="btn.type"
      :class="[btn.class]"
      v-bind="btn.attr"
      v-show="getDisplay(btn)"
      :disabled="getDisabled(btn)"
      @click="clickEvent"
    >
      <Icon :name="btn.icon" />
      <span v-if="btn.label">{{ btn.label }}</span>
    </el-button>
  </el-tooltip>
</template>
<script setup lang="ts">
  import Icon from '@/components/icon/index.vue'
  import { Button } from '../types'
  const props = withDefaults(
    defineProps<{
      btn: Button
      row: any
      position?: string
      type?: string
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'click'): void
  }>()
  const clickEvent = () => {
    emits('click')
  }
  const getDisplay = (btn: Button) => {
    if (btn.display && typeof btn.display === 'function') {
      return btn.display(props.row)
    }
    return true
  }
  const getDisabled = (btn: Button) => {
    if (btn.disabled && typeof btn.disabled === 'function') {
      return btn.disabled(props.row)
    }
    //上方需要勾选才可操作，没有勾选行时为禁用状态
    if (
      props.position === 'top' &&
      btn.key &&
      ['edit', 'del'].includes(btn.key)
    ) {
      return props.row?.length <= 0
    }
    return false
  }
</script>
