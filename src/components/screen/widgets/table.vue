<template>
  <div>
    <el-table
      class="table"
      ref="tableRef"
      :data="data.list"
      :height="`${height}`"
      style="width: 100%"
    >
      <el-table-column
        v-for="col in data?.columns"
        v-bind="col"
        :key="col.prop"
      />
    </el-table>
  </div>
</template>
<script setup lang="ts">
  import {nextTick, onMounted, ref, watch} from 'vue'
  import {onBeforeRouteLeave} from "vue-router";

  const props = withDefaults(
    defineProps<{
      data: { columns: Record<string, any>[], list: Record<string, any>[] },
      height: string | number
      carousel?: boolean,
      speed?: number
    }>(),
    {
      carousel: false,
      speed: 30
    }
  )
  const tableRef = ref(null)
  const setTableCarousel = () => {
    if (
      !props.carousel
      || !tableRef.value
    ) {
      return
    }
    const divData = tableRef.value.$el.querySelector('.el-scrollbar__wrap')
    function marquee() {
      divData.scrollTop += 1
      if (divData.clientHeight + divData.scrollTop === divData.scrollHeight) {
        divData.scrollTop = divData.scrollTop - divData.scrollHeight / 2
      }
    }

    let clear = setInterval(marquee, props.speed)
    tableRef.value.onmouseenter = function () {
      clearInterval(clear)
    }
    tableRef.value.onmouseleave = function () {
      clear = setInterval(marquee, props.speed)
    }
  }
  const unWatch = watch(
    () => props.data?.list,
    () => {
      nextTick(() => {
        setTableCarousel()
      })
    },
    {immediate: true}
  )
  onMounted(() => {
  })
  onBeforeRouteLeave(() => {
    unWatch()
  })
</script>
<style lang="scss" scoped>
  .table{background: none}
  :deep(.el-table tr){background: none}
  :deep(.el-table th.el-table__cell){background: none}
</style>