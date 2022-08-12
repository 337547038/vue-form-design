<template>
  <div
    ><input v-model="value2.a" />
    <Test :data="value2" />
  </div>
</template>

<script lang="ts" setup>
  import Test from './test.vue'
  import { ref } from 'vue'
  const value = ref('')
  const value2 = ref({
    a: 'a',
    b: 'b'
  })
  /*import { useAppStore } from '../store/app'
  const counter = useAppStore()
  counter.$patch({ count: counter.count + 1, msg: 'ok' })
  counter.increment()*/
</script>
