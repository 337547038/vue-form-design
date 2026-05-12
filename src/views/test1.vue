<script setup lang="ts">
</script>
<style>
  /* 外层容器：动态背景 */
  .grid-box {
    width: 400px;
    height: 300px;
    margin: 20px;
    position: relative; /* 定位父级 */

    /* 测试：纯黑背景！现在完全正常了 */
    background-color: #000;
  }

  /* 内层网格：绝对定位 + 自动反色 */
  .grid {
    position: absolute;
    inset: 0; /* 铺满父容器 */

    /* 网格线样式（默认白色）*/
    background-image:
      linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px);
    background-size: 20px 20px;

    /* ✅ 核心修复：自动反色，永远和背景相反 */
    mix-blend-mode: difference;

    /* 不阻挡鼠标事件 */
    pointer-events: none;
  }
</style>

<template>
  <div class="grid-box">
    <div class="grid"></div>
  </div>

  <!-- 测试各种背景都正常 -->
  <div class="grid-box" style="background:#fff"><div class="grid"></div></div>
  <div class="grid-box" style="background:#000"><div class="grid"></div></div>
  <div class="grid-box" style="background:#090ff6"><div class="grid"></div></div>
</template>
