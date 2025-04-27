<!-- Created by 337547038  -->
<template>
  <el-popover
    v-model:visible="visible"
    placement="bottom"
    :width="500"
    trigger="click"
  >
    <div class="iconfont-list">
      <ul>
        <li
          v-for="item in iconList"
          :key="item"
          :style="{ color: item === value ? color : '' }"
          @click="iconClick(item,'val')"
        >
          <i :class="item" />
        </li>
      </ul>
    </div>
    <template #reference>
      <div class="iconfont-input">
        <el-input
          v-model="value"
          placeholder="输入或选择iconfont图标"
        />
        <div
          v-if="colorPicker"
          class="color-input"
          @click.stop=""
        >
          <el-color-picker v-model="color" />
        </div>
      </div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  // 直接从public目录导入会报错Assets in public cannot be imported from JavaScript
  // import iconfontJson from '../../public/static/iconfont/iconfont.json'
  import iconfontJson from './iconfont.json'
  const props = withDefaults(
    defineProps<{
      modelValue?: string
      colorPicker?: boolean // 是否可选颜色，可选颜色时value为使用豆号隔开的字符串
    }>(),
    {
      modelValue: ''
    }
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  const visible = ref(false)
  const value = computed({
    get() {
      if (props.colorPicker) {
        if (props.modelValue && props.modelValue.indexOf(',') > 0) {
          const split = props.modelValue.split(',')
          return split && split[0]
        } else {
          // 没使用豆号隔开时为异常情况
          return ''
        }
      } else {
        return props.modelValue
      }
    },
    set(newVal: string) {
      iconClick(newVal, 'val')
    }
  })
  const color = computed({
    get() {
      if (props.colorPicker) {
        const split = props.modelValue.split(',')
        if (split && split.length > 1) {
          return split[1]
        } else {
          return ''
        }
      } else {
        return ''
      }
    },
    set(newVal: string) {
      // emits('update:modelValue', [value.value, newVal])
      iconClick(newVal)
    }
  })
  const iconList = computed(() => {
    const temp: any = []
    iconfontJson.glyphs.forEach((item: any) => {
      temp.push(iconfontJson.css_prefix_text + item.font_class)
    })
    return temp
  })
  const iconClick = (newVal: string, type?: string) => {
    console.log('iconClick', newVal, type)
    let val: string = ''
    if (props.colorPicker) {
      if (type === 'val') {
        val = newVal + ',' + color.value
      } else {
        val = value.value + ',' + newVal
      }
    } else {
      val = newVal
    }
    emits('update:modelValue', val)
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
