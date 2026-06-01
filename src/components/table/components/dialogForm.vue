<template>
  <el-dialog
    v-model="visible"
    destroy-on-close
    :title="title"
    :width="width || '600px'"
    :before-close="beforeClose"
  >
    <slot />
  </el-dialog>
</template>
<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      width: string | undefined
      title: string | undefined
    }>(),
    {}
  )
  const visible = defineModel<boolean>()
  const beforeClose = () => {
    //props.beforeClose && props.beforeClose(done)
    visible.value = false
  }
</script>

<style scoped lang="scss">

</style>