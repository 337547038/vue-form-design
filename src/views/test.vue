<template>
  <div
    ref="container"
    style="
      border: 1px solid #ddd;
      margin: 50px;
      width: 800px;
      height: 600px;
      overflow: auto;
    "
  >
    <div
      ref="divEl"
      @mousedown="mousedown"
      @mouseleave="mouseleave"
      style="
        margin: 0;
        width: 1920px;
        height: 800px;
        background: #1c6ca1;
        transform-origin: left top;
        position: relative;
      "
    >
      <p v-for="item in 20" :key="item" style="padding-left: 100px">{{
        item
      }}</p>
      <div style="position: absolute" :style="{ left: left + 'px' }"
      >键盘事件</div
      >
    </div>
  </div>
  <el-input v-model="value" type="number" />
  <el-button @click="buttonClick">button</el-button>
  <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { obj2string } from '../utils/form'
  const value = ref(0)
  const divEl = ref()
  const container = ref()
  const mouseFlag = ref(false)
  const mousedown = (evt) => {
    mouseFlag.value = true
    const scrollTop = container.value.scrollTop
    const scrollLeft = container.value.scrollLeft
    const x = evt.pageX + scrollLeft
    const y = evt.pageY + scrollTop
    document.onmousemove = (evt) => {
      if (!mouseFlag.value) {
        return
      }
      const xx = x - evt.pageX
      const yy = y - evt.pageY
      container.value.scrollTo(xx, yy)
    }
    document.onmouseup = function () {
      console.log('document.onmouseup')
      mouseFlag.value = false
      document.onmousemove = null
    }
    evt.stopPropagation()
    evt.preventDefault()
  }
  const mouseleave = () => {
    console.log('document.mouseleave')
    mouseFlag.value = false
    document.onmousemove = null
  }
  const buttonClick = () => {
    container.value.scrollTo(100, 100)
  }
  const left = ref(100)
  const onkeyup = (evt) => {
    console.log('onkeyup')
    console.log(evt.keyCode)
    evt.preventDefault()
  }
  onMounted(() => {
    const wi = divEl.value.offsetWidth
    console.log(wi)
    window.addEventListener('keyup', onkeyup, { passive: false })
    const obj = { a: null, b: undefined }
    const a = obj2string(obj)
    console.log(a)
  })

  const num = ref(1)
  const handleChange = (value) => {
    console.log(value)
  }
</script>
