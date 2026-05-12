<template>
  <div style="max-width: 500px; margin: 30px auto; display: flex; flex-direction: column; gap: 20px">
    <!-- 左滚动：速度越快数字越大 -->
    <div style="width: 100%;height:30px;overflow: hidden;line-height: 30px;">
    <ScrollText :data="{speed:30,step:1,direction:'top',height:'30px'}">
      🔥 JS 完美滚动 · speed 生效 · 横向无缝
    </ScrollText>
    </div>

<!--    &lt;!&ndash; 右滚动 &ndash;&gt;
    <ScrollText direction="right" :speed="2" width="100%" height="40px">
      🚀 向右滚动 · 流畅丝滑 · 无卡顿
    </ScrollText>

    &lt;!&ndash; 上滚动：速度 + 停顿 &ndash;&gt;
    <ScrollText direction="up" :speed="3" :delay="2000" width="100%" height="40px">
      这是向上滚动的一段文字，每次滚一行
    </ScrollText>

    &lt;!&ndash; 下滚动 &ndash;&gt;
    <ScrollText direction="down" :speed="3" :delay="2500" width="100%" height="40px">
      这是向下滚动的一段文字，停顿后再滚动
    </ScrollText>-->

  </div>
</template>


<script setup>
  import ScrollText from '@/components/screen/widgets/scrollText.vue'
</script>