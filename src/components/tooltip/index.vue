<!-- Created by 337547038 on 2021/11/30. -->
<template>
  <el-tooltip placement="top">
    <template #content>
      <span v-html="content" />
    </template>
    <i class="icon-help" />
  </el-tooltip>
</template>

<script lang="ts" setup>
  withDefaults(defineProps<{ content: string }>(), {})
</script>
