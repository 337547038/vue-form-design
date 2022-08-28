<template>
  <div>
    <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a day"
    />
  </div>
</template>
<script setup>
  import {ref} from 'vue'
  const value2 = ref('')
</script>
