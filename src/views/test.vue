<template>
  <div></div>
</template>

<script lang="ts" setup>
  function unit(val: string | number) {
    try {
      console.log('try')
      const isNumber = /^\d+(\.\d+)?$/.test(val.toString())
      if (isNumber) {
        return val + 'px'
      }
      return val
    } catch (e) {
      return val
    }
  }
  console.log(unit(100))
</script>
