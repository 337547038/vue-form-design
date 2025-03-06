<template>
  <div
    v-if="state.visible"
    class="use-template"
    :class="{ active: state.visible }"
  >
    <span
      class="close icon-close"
      @click="state.visible = false"
    />
    <div
      v-if="state.list.length === 0"
      class="no-date"
    >
      暂无可用模板
    </div>
    <div
      v-else
      class="list"
    >
      <div
        v-for="(item, index) in state.list"
        :key="index"
        class="item"
        @click="selectClick(item)"
      >
        <img
          :src="item.imgPath"
          alt=""
        >{{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import type { FormData } from '@/types/form'
  const emits = defineEmits<{
    (e: 'click', value: FormData): void
  }>()
  const state = reactive({
    visible: false,
    list: []
  })
  const open = () => {
    state.visible = true
    init()
  }
  const init = () => {
    const template = import.meta.globEager('./template/*.ts')
    // console.log(template)
    state.list = []
    Object.keys(template).forEach((key: string) => {
      const file: any = template[key]
      state.list.push({
        imgPath: file.imgPath,
        title: file.title,
        formData: file.formData
      })
    })
  }
  const selectClick = (item: any) => {
    emits('click', item.formData)
    state.visible = false
  }
  defineExpose({
    open
  })
</script>
