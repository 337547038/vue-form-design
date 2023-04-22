<!-- Created by 337547038 -->
<template>
  <div
    class="group"
    :class="{
      ['group-' + data.type]: true,
      [data.config?.class]: true
    }"
    :style="style"
    @mousedown.prevent.stop="stopPropagation"
  >
    <div
      class="resize-box"
      @mousedown="resizeMousedown"
      v-if="type === 0 && !data.config?.lock"
      v-show="current === active"
    >
      <span
        v-for="item in 8"
        :key="item"
        :class="`rs${item}`"
        @mousedown.stop="resizeDotMouseDown($event, item)"
      ></span>
    </div>
    <div
      v-if="['text', 'sText', 'border'].includes(data.type)"
      :style="config.style"
      v-html="config.text"
    ></div>
    <img
      class="default-img"
      v-if="data.type === 'image'"
      :src="config.src"
      :style="config.style"
      alt="请选择或上传图片"
    />
    <div
      class="default-bg"
      v-if="data.type === 'background'"
      :style="getBackground"
    >
      <span v-if="!config.src">请选择或上传图片</span>
    </div>
    <div :style="config.style" v-if="data.type === 'clock'">当前时间</div>
    <template v-if="data.type === 'table'">
      <el-table v-bind="data.props" :data="data.tableData" style="width: 100%">
        <el-table-column
          v-bind="col"
          v-for="col in data.columns"
          :key="col.prop"
        />
      </el-table>
    </template>
    <div v-if="['line', 'bar', 'pie', 'echarts'].includes(data.type)"
      >echarts</div
    >
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, reactive } from 'vue'
  import md5 from 'md5'
  const props = withDefaults(
    defineProps<{
      data: any // todo　定义类型
      type?: number
      current?: string // 当前激活的项
    }>(),
    {
      type: 1,
      data: () => {
        return {
          config: {}
        }
      }
    }
  )
  const emits = defineEmits<{
    (e: 'error', val: any): void
    (e: 'success', res: any): void
  }>()
  const active = computed(() => {
    if (props.data.position) {
      return md5(JSON.stringify(props.data.position))
    }
    return ''
  })
  const config = computed(() => {
    return props.data.config || {}
  })
  const getBackground = computed(() => {
    let src = {}
    if (config.value.src) {
      src = { backgroundImage: `url(${config.value.src})` }
    }
    return Object.assign(config.value.style || {}, src)
  })
  const style = computed(() => {
    if (!props.data.position) {
      return {}
    }
    const { left, top, height, width, zIndex, display } = props.data.position
    return {
      left: left + 'px',
      top: top + 'px',
      width: width + 'px',
      height: height + 'px',
      zIndex: zIndex || 1,
      display: display ? 'none' : ''
    }
  })
  const stopPropagation = (evt: MouseEvent) => {
    evt.preventDefault()
    evt.stopPropagation()
  }
  // 缩放
  const resizeDotMouseDown = (evt: MouseEvent, index: number) => {
    let flag = true
    if (flag) {
      const x = evt.pageX
      const y = evt.pageY
      let { width, height, left, top } = props.data.position
      document.onmousemove = (ev: MouseEvent) => {
        const mx = ev.pageX - x // 移动的位置
        const my = ev.pageY - y
        let mWidth = width // 移动后的宽
        let mHeight = height
        let mLeft = left
        let mTop = top
        switch (index) {
          case 1:
            // 左上
            mWidth = width - mx
            mHeight = height - my
            mTop = top + my
            mLeft = left + mx
            break
          case 4:
            // 向左
            mWidth = width - mx
            mLeft = left + mx
            break
          case 6:
            // 左下
            mWidth = width - mx
            mLeft = left + mx
            mHeight = height + my
            break
          case 2: // 上中
            mHeight = height - my
            mTop = top + my
            break
          case 7: //　下中
            mHeight = height + my
            break
          case 3: //　右上
            mWidth = width + mx
            mHeight = height - my
            mTop = top + my
            break
          case 5: //　右中
            mWidth = width + mx
            break
          case 8: //　右下
            mWidth = width + mx
            mHeight = height + my
            break
        }
        // 重新设置值
        // 限制最小选择范围
        if (mWidth < 50 || mHeight < 30) {
          return
        }
        Object.assign(props.data.position, {
          width: mWidth,
          height: mHeight,
          left: mLeft,
          top: mTop
        })
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        flag = false
      }
    }
    evt.stopPropagation()
  }
  //　移动
  const resizeMousedown = (evt: MouseEvent) => {
    let moveFlag = true
    const x = evt.pageX - props.data.position.left
    const y = evt.pageY - props.data.position.top
    document.onmousemove = (evt: MouseEvent) => {
      if (!moveFlag) {
        return
      }
      Object.assign(props.data.position, {
        left: parseInt(`${evt.pageX - x}`),
        top: parseInt(`${evt.pageY - y}`)
      })
    }
    document.onmouseup = function () {
      moveFlag = false
      document.onmousemove = null
    }
  }
</script>
