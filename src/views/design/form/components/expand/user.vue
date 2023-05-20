<!-- Created by 337547038  -->
<template>
  <el-input
    placeholder="请选择用户或输入用户名称"
    v-bind="$props"
    v-model="value"
    @click="openDialog"
  >
    <template #append>
      <i class="icon-user" @click.stop="openDialog"></i>
    </template>
  </el-input>
  <user-dialog ref="userDialogEl" v-model="value" />
</template>

<script setup lang="ts">
  import { computed, ref, onMounted, nextTick } from 'vue'
  const props = withDefaults(
    defineProps<{
      modelValue?: string
      disabled?: boolean
    }>(),
    {}
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  const userDialogEl = ref()
  const value = computed({
    get() {
      return props.modelValue
    },
    set(newVal: string) {
      emits('update:modelValue', newVal)
    }
  })
  const openDialog = () => {
    userDialogEl.value.open()
  }

  onMounted(() => {
    nextTick(() => {})
  })
</script>
