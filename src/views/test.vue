<template>
  <div>
    <p>{{ data }}</p>
    <p>a:{{ a }}</p>
    <p>b:{{ b }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref, toRef, toRefs } from 'vue'

  const props = withDefaults(
    defineProps<{
      data: any // 子表时值
    }>(),
    {}
  )
  const {a} = toRefs(props.data)
  const b = toRef(props.data,'a')
  setTimeout(() => {
    a.value = 'setTimeout'
  }, 5000)
  console.log(a)
  console.log(a.value)
</script>
