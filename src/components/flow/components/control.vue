<template>
  <div class="flow-control-btn">
    <el-button-group>
      <el-button
        v-for="item in menuList"
        v-show="item.visible!==false"
        :key="item.key"
        :disabled="item.disabled"
        @click="controlClick(item.key)"
      >
        {{ item.label }}
      </el-button>
    </el-button-group>
  </div>
</template>

<script setup lang="ts">

  import {computed} from "vue";

  const props = withDefaults(
    defineProps<{
      undoAble: boolean
      redoAble: boolean
      isSilentMode?: boolean
    }>(),
    {
      isSilentMode: false
    }
  )

  const emits = defineEmits<{
    (e: 'click', type: string): void
  }>()

  const menuList = computed(() => {
    return [
      {label: '放大', key: 'zoomIn'},
      {label: '缩小', key: 'zoomOut'},
      {label: '自适应', key: 'resetZoom'},
      {label: '还原', key: 'resetTranslate'},
      {label: '上一步', key: 'undo', disabled: props.undoAble},
      {label: '下一步', key: 'redo', disabled: props.redoAble},
      {label: '下载图片', key: 'download'},
      {label: '清空', key: 'clear', visible: !props.isSilentMode},
      {label: '查看数据', key: 'data'},
      {label: '查看缩略图', key: 'map'},
      {label: '导入', key: 'import', visible: !props.isSilentMode},
      {label: '保存', key: 'save', visible: !props.isSilentMode},
    ]
  })

  const controlClick = (type: string) => {
    emits('click', type)
  }
</script>

<style scoped>

</style>