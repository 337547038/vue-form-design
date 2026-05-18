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
      >
        <img
          :src="item.image"
          alt=""
        >
        <div class="name">
          <span>{{ item.config?.name }}</span>
          <el-button
            text
            type="primary"
            @click="selectClick(item)"
          >
            使用
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import {useFormStore} from "@/store/form.ts";

  const store = useFormStore();
  const state = reactive({
    visible: false,
    list: []
  })
  const open = () => {
    state.visible = true
    init()
  }
  const init = () => {
    const template = import.meta.glob(`./template/*.ts`, {eager: true})
    state.list = []
    Object.keys(template).forEach((key: string) => {
      const file: any = template[key]
      state.list.push(file.formData)
    })
  }
  const selectClick = (item: any) => {
    state.visible = false
    store.setDesignData(item.list)
    store.setDesignConfig(item.config)
  }
  defineExpose({
    open
  })
</script>
