<!-- Created by 337547038  -->
<template>
  <el-popover
    placement="bottom"
    :width="500"
    trigger="click"
    v-model:visible="visible"
  >
    <div class="iconfont-list">
      <ul>
        <li
          v-for="item in iconList"
          :key="item"
          @click="iconClick(item)"
          :style="{ color: item === value ? color : '' }"
        >
          <i :class="item"></i>
        </li>
      </ul>
    </div>
    <template #reference>
      <div class="iconfont-input">
        <el-input v-model="value" placeholder="输入或选择iconfont图标" />
        <div @click.stop="" class="color-input" v-if="colorPicker"
        ><el-color-picker v-model="color" /></div
        ></div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  // 直接从public目录导入会报错Assets in public cannot be imported from JavaScript
  //import iconfontJson from '../../public/static/iconfont/iconfont.json'
  import iconfontJson from './iconfont.json'
  const props = withDefaults(
    defineProps<{
      modelValue?: string | string[]
      colorPicker?: boolean // 是否可选颜色，可选颜色时value为数组
    }>(),
    {}
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string | string[]): void
  }>()
  const visible = ref(false)
  const value = computed({
    get() {
      if (props.colorPicker) {
        return props.modelValue && props.modelValue[0]
      } else {
        return props.modelValue
      }
    },
    set(newVal: string) {
      iconClick(newVal)
    }
  })
  const color = computed({
    get() {
      return props.modelValue && props.modelValue[1]
    },
    set(newVal: string) {
      emits('update:modelValue', [value.value, newVal])
    }
  })
  const iconList = computed(() => {
    const temp: any = []
    iconfontJson.glyphs.forEach((item: any) => {
      temp.push(iconfontJson.css_prefix_text + item.font_class)
    })
    return temp
  })
  const iconClick = (newVal: string) => {
    if (props.colorPicker) {
      emits('update:modelValue', [newVal, color.value])
    } else {
      emits('update:modelValue', newVal)
    }
    visible.value = false
  }
</script>
<style lang="scss">
  .iconfont-list {
    max-width: 500px;
    overflow-y: auto;
    ul {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      margin: 5px 10px;
      cursor: pointer;
      i {
        font-size: 24px;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
  .iconfont-input {
    position: relative;
    width: 100%;
    .color-input {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>
