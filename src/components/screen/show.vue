<template>
  <div class="show-detail">
    <div
      class="component-wrapper"
      v-for="element in data" :key="element.key"
      :class="{
      ['group-' + element.type]: true,
      [element.class]: element.class
    }"
      :style="getPositionStyle(element)">
      <template v-if="element.children?.length&&['container','div'].includes(element.type)">
        <show :data="element.children"></show>
      </template>
      <component-factory :data="element" v-else/>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {getPositionStyle} from "@/components/screen/utils"
  import ComponentFactory from "@/components/screen/componentFactory.vue"
  import type {Component} from "@/types/screen.ts";

  const props = withDefaults(
    defineProps<{
      data: Component
    }>(),
    {}
  )

</script>
<style scoped lang="scss">

</style>