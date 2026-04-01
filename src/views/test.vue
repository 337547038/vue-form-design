<template>
  <div />
</template>
<script setup lang="ts">
  import {getRequest} from "@/api";

  getRequest('userMenuList', {
    query: { status: 1 },
    extend: { sort: 'sort asc' }
  })
</script>