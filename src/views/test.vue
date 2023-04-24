<template>
  <div>
    <Marquee width="100px" height="30px" :speed="1000" :step="30">
      <div style="line-height: 30px">
        <p>1.属性指定目</p>
      </div>
    </Marquee>
    <!--    <div style="height: 450px;"
    <div
      style="height: 400px; width: 200px; background: #d9d9d9"
      id="test"
    ></div>
    <div style="height: 800px"></div>-->
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Marquee from './design/dataScreen/components/marquee.vue'
  // var observer = new IntersectionObserver((callback) => {
  //   console.log('callback', callback)
  // })
  // onMounted(() => {
  //   const id = document.getElementById('test')
  //   observer.observe(id)
  // })
</script>
