<template>
  <div>
    <el-form-item
      v-for="item in list"
      :key="item.id"
      :label="item.label"
    >
      <el-input
        v-model="item.value"
        @change="change"
      />
    </el-form-item>
  </div>
</template>
<script setup lang="ts">
  import {ref} from 'vue'

  const a=['a','b','c','d','e','f','g','h','i','j']
  const [propsBefore, configBefore] = a
  console.log(propsBefore)

</script>