<template>
  <el-row style="flex-wrap: nowrap">
    <el-input v-model="value"></el-input>
    <el-button @click="visible=true">选择</el-button>
  </el-row>
  <el-dialog v-model="visible" title="弹窗示例">
    <template #footer>
      <el-button @click="selectClick" type="primary">确定</el-button>
    </template>
  </el-dialog>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  name: "customTest",
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(props, {emit}) {
    const state = reactive({
      value: '',
      visible: false
    })
    const selectClick = () => {
      state.visible = false
      state.value = '测试回填值'
      emit("update:modelValue", state.value)
    }
    return {
      ...toRefs(state),
      selectClick
    }
  }
}
</script>
