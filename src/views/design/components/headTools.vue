<!-- Created by 337547038 -->
<template>
  <div class="main-tools">
    <slot></slot>
    <el-button
      link
      type="primary"
      @click="btnClick(item.icon)"
      v-for="item in btnList"
      :key="item.icon"
    >
      <i :class="['icon-' + item.icon]"></i>{{ item.label }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  const props = withDefaults(
    defineProps<{
      showKey?: string[] // showKey,hideKey设置其中一个即可，showKey优先
      hideKey?: string[] // 设置了showKey时，hideKey无效
    }>(),
    {
      showKey: () => {
        return []
      },
      hideKey: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'click', value: string): void
  }>()

  const btnList = computed(() => {
    const list = [
      { icon: 'del', label: '清空', key: 1 },
      { icon: 'eye', label: '预览', key: 2 },
      { icon: 'json', label: '生成脚本预览', key: 3 },
      { icon: 'vue', label: '导出vue文件', key: 4 },
      { icon: 'save', label: '保存', key: 5 }
    ]
    if (props.showKey?.length) {
      // 按照指定的key显示
      return list.filter((item: any) => {
        return props.showKey.includes(item.key)
      })
    } else if (props.hideKey?.length) {
      // 按照指定的key隐藏
      return list.filter((item: any) => {
        return !props.hideKey.includes(item.key)
      })
    } else {
      return list // 否则显示全部
    }
  })
  const btnClick = (type: string) => {
    emits('click', type)
  }
</script>
