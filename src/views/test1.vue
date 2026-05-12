<template>
  <div>
    <table-test height="300" :data="data"></table-test>
  </div>
</template>
<script setup lang="ts">
  import tableTest from '@/components/screen/widgets/table.vue'
  import {ref} from 'vue'
  const data={
    list:[
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
      {name:1},
    ],
    columns:[
      {prop:'name',label:'标题'},
    ]
  }
</script>