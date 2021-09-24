<!-- Created by 337547038 -->
<template>
  <div class="main-tools">
    <el-button
      size="mini"
      type="text"
      @click="btnClick(item.icon)"
      v-for="item in btnList"
      :key="item.icon">
      <i :class="['icon-'+item.icon]"></i>{{ item.label }}
    </el-button>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  name: 'headTools',
  props: {},
  components: {},
  emits: ['click'],
  setup(props, {emit}) {
    const state = reactive({
      btnList: [
        {icon: 'del', label: '清空'},
        {icon: 'eye', label: '预览'},
        {icon: 'json', label: '生成脚本预览'},
        {icon: 'save', label: '保存'}
      ]
    })
    const btnClick = type => {
      emit('click', type)
    }
    return {
      ...toRefs(state),
      btnClick
    }
  }
}
</script>
