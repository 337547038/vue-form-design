<template>
  <div></div>
</template>

<script setup>
  import { getRequest } from '../api'

  const dict = { source: { 0: '表单', 1: '流程表单' } }
  window.localStorage.setItem('akFormDict', JSON.stringify(dict))
</script>
