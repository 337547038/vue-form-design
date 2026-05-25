<template>
  <div>0</div>
</template>
<script setup lang="ts">
  import {getCurrentInstance} from 'vue'
  import {createFormStore} from "@/store/mt.ts";
  const instance = getCurrentInstance()
  const formStore = createFormStore(instance.uid)()
</script>
