<template>
  <el-select
    v-model="value"
    filterable
    remote
    reserve-keyword
    placeholder="Please enter a keyword"
    remote-show-suffix
    :remote-method="remoteMethod"
    :loading="loading"
    style="width: 240px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  {{ value }}
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const list = ref([])
  const options = ref([])
  const value = ref('A')
  const loading = ref(false)
  const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado'
  ]

  const remoteMethod = (query: string) => {
    if (query) {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        options.value = list.value.filter((item) => {
          return item.label.toLowerCase().includes(query.toLowerCase())
        })
      }, 200)
    } else {
      options.value = []
    }
  }

  onMounted(() => {
    list.value = states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}-1` }
    })

    setTimeout(() => {
      value.value = 'Alabama'
    })
  })
</script>
<style scoped lang="scss"></style>
