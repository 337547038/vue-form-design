<template>
  <div />
</template>

<script setup lang="ts">
 import {ref} from 'vue'
 import {defaultBtn} from "@/views/design/list/components/const.ts";

 const getBtnList = (position = 'top') => {
   const showList = position === 'top' ? ['add', 'edit', 'del', 'export'] : ['edit', 'detail', 'del']
   return defaultBtn
     .filter(item => showList.includes(item.key)) // 只保留 key 在 includes 里的项
     .map(item => ({ label: item.label, value: item.key })); // 转换成目标格式

   /*return defaultBtn.map(item => {
     if (showList.includes(item.key)) {
       return {
         label: item.label,
         value: item.key
       }
     }
   })*/
 }
 console.log(getBtnList())

</script>