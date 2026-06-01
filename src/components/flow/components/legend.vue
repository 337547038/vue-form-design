<template>
  <div class="legend">
    <ul>
      <li v-for="(item,key) in list" :key="key" :style="{color:getNodeStroke(key)}">
        <i :style="{background:getNodeStroke(key)}"></i>{{ item }}
      </li>
      <li style="color: #999">
        <i style="background: #999"></i>不满足条件
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {getNodeStroke} from '../tools'

const list = {
  history: '已通过',
  active: '进行中',
  danger: '已拒绝',
  includes: '审批路线',
}
</script>

<style scoped>
ul, li {
  margin: 0;
  padding: 0;
  list-style: none
}

.legend {
  position: absolute;
  left: 0;
  top: 50px;
}

.legend li {
  padding: 1px 0;
  display: flex;
  align-items: center
}

.legend li i {
  width: 8px;
  height: 8px;
  display: block;
  border-radius: 50%;
  margin-right: 8px;
}
</style>