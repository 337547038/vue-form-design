<template>
  <Code />
</template>
<route>
{meta:{
permissions:false}}
</route>
<script setup lang="ts">
  import Code from '@/components/code.vue'
  const setValue=()=>{}
  defineExpose({setValue})
</script>