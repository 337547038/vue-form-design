<!-- Created by weiXin:337547038 -->
<template>
  <div />
</template>
<script setup lang="ts">
  const val=['a','b']
  const newVal = val.map((item: any) => ({label: item,value:item}))
  console.log(newVal)
</script>
