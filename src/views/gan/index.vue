<template>
  <div class="gantt-chart">
    <date-time-line />
  </div>
</template>
<route>
{meta:{
permissions:false,
layout:'hidden'}}
</route>
<script setup lang="ts">
  import DateTimeLine from './components/dateTimeLine.vue'
</script>
<style scoped lang="scss"></style>
