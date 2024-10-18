<!-- Created by 337547038  -->
<template>
  <el-input
    v-bind="$props"
    v-model="value"
    placeholder="请选择用户或输入用户名称"
    @click="openDialog"
  >
    <template #append>
      <i
        class="icon-user"
        @click.stop="openDialog"
      />
    </template>
  </el-input>
  <user-dialog
    ref="userDialogEl"
    v-model="value"
  />
</template>

<script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue'
  /*  const props = withDefaults(
    defineProps<{
      modelValue?: string
      disabled?: boolean
    }>(),
    {}
  ) */

  /*  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>() */
  const userDialogEl = ref()
  const value = defineModel()
  /* const value = computed({
    get() {
      return props.modelValue
    },
    set(newVal: string) {
      emits('update:modelValue', newVal)
    }
  }) */
  const openDialog = () => {
    userDialogEl.value.open()
  }

  onMounted(() => {
    nextTick(() => {})
  })
</script>
