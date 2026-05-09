<template>
  <div>
  </div>

</template>

<script setup lang="ts">
  import {computed, ref} from 'vue'


  const menuList = computed(() => {
    return [
      {key: 'copy', label: '复制', icon: 'DocumentCopy'},
      {key: 'del', label: '删除', icon: 'Delete'},
      {key: 'divider', label: ''},
      {key: 'link', label: '组合', icon: 'Link'},
      {key: 'split', label: '拆分', icon: 'icon-split'},
      {key: 'divider', label: ''},
      {key: 'unlock', label: '解锁', icon: 'Unlock'},
      {key: 'lock', label: '锁定', icon: 'Lock'},
      {key: 'divider', label: ''},
      {key: 'left', label: '左对齐', icon: 'icon-left-align'},
      {key: 'right', label: '右对齐', icon: 'icon-right-align'},
      {key: 'top', label: '顶部对齐', icon: 'icon-top-align'},
      {key: 'bottom', label: '底部对齐', icon: 'icon-bottom-align'},
      {key: 'horizontally', label: '水平居中', icon: 'icon-horizontal'},
      {key: 'verticalCenter', label: '垂直居中', icon: 'icon-vertical'}
    ]
  })
  function toNumber(val) {
    // 第一步：从字符串开头提取连续数字（支持正负、小数）
    const match = String(val).trim().match(/^-?\d+(\.\d+)?/);

    // 提取不到数字 → 返回0
    if (!match) return 0;

    // 转数字并四舍五入
    const num = parseFloat(match[0]);
    return Math.round(num);
  }

  console.log(toNumber(100))

  const a={a:'1',b:'2'}

  console.log(Object.assign(a,{a:''}))
</script>

<style lang="scss" scoped>
  .item {position: absolute}
</style>