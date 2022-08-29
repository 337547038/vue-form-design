<!-- Created by 337547038 -->
<template>
  <div class="main-tools">
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
  import { reactive, computed } from 'vue'
  import { useRoute } from 'vue-router'
  const props = withDefaults(
    defineProps<{
      type?: string
    }>(),
    {
      type: '1' // // 1表单设计，2表格设计，3搜索设计
    }
  )
  const emits = defineEmits<{
    (e: 'click', value: string): void
  }>()
  const route = useRoute()
  // 筛选查找模式下不显示
  const vueDisabled = route.query.type === 'search'
  const state = reactive({
    list: [
      { icon: 'del', label: '清空' },
      { icon: 'eye', label: '预览', disabled: props.type === '2' },
      { icon: 'json', label: '生成脚本预览' },
      { icon: 'vue', label: '导出vue文件', disabled: vueDisabled },
      { icon: 'save', label: '保存' }
    ]
  })

  const btnList = computed(() => {
    return state.list.filter((item: any) => {
      return !item.disabled
    })
  })
  const btnClick = (type: string) => {
    emits('click', type)
  }
</script>
