<template>
  <div>
    <ak-form :data="{list:[],config:{}}" />
  </div>
</template>

<script setup lang="ts">
  import {useFormStore,testabc} from "@/components/form/utils.ts";
  const {getRemoteMethod}=useFormStore()

  testabc('aaab')
  //getRemoteMethod('abc123')
</script>
