<!-- Created by 337547038 -->
<template>
  <div class="main-tools">
    <el-button
      size="small"
      type="text"
      @click="btnClick(item.icon)"
      v-for="item in btnList"
      :key="item.icon">
      <i :class="['icon-'+item.icon]"></i>{{ item.label }}
    </el-button>
  </div>
</template>

<script>
import {reactive, toRefs, computed} from 'vue'
import {useRoute} from 'vue-router'

export default {
  name: 'headTools',
  props: {
    type: { // 1表单设计，2表格设计，3搜索设计
      type: String,
      default: '1'
    }
  },
  components: {},
  emits: ['click'],
  setup(props, {emit}) {
    const route = useRoute()
    // 表格设计 没有id时不能保存
    // const saveDisabled = props.type === '2' && !route.query.id
    // 筛选查找模式下不显示
    const vueDisabled = route.query.type === 'search'
    const state = reactive({
      list: [
        {icon: 'del', label: '清空'},
        {icon: 'eye', label: '预览', disabled: props.type === '2'}, // 表格设计时隐藏
        {icon: 'json', label: '生成脚本预览'},
        {icon: 'vue', label: '导出vue文件', disabled: vueDisabled},
        {icon: 'import', label: '导入Json'},
        {icon: 'save', label: '保存'}
      ]
    })
    const btnList = computed(() => {
      return state.list.filter(item => {
        return !item.disabled
      })
    })
    const btnClick = type => {
      emit('click', type)
    }
    return {
      ...toRefs(state),
      btnClick,
      btnList
    }
  }
}
</script>
