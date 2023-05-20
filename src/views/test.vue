<template>
  <div class="container" ref="container">
    <div id="box" style="position: absolute; top: 0; left: 0">Move me with arrow keys!</div>
  </div>
</template>

<script setup>
  import { reactive, onMounted } from 'vue'

  onMounted(() => {
    const box = document.getElementById('box')
    let left = 0,
      top = 0

    document.addEventListener('keydown', function (event) {
      console.log(event)
      if (event.keyCode === 37) {
        // left arrow key
        left--
      } else if (event.keyCode === 38) {
        // up arrow key
        top--
      } else if (event.keyCode === 39) {
        // right arrow key
        left++
      } else if (event.keyCode === 40) {
        // down arrow key
        top++
      }
      box.style.left = left + 'px'
      box.style.top = top + 'px'
    })
  })
</script>
