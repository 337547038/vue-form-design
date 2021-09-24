<template>
  <el-form ref="form" class="design-form" :model="model">
    <draggable
      itemKey="key-form"
      v-model="data.list"
      tag="transition-group"
      v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
      @add="draggableAdd">
      <template #item="{element}">
        <form-group :data="element"></form-group>
      </template>
    </draggable>
  </el-form>
</template>

<script>
import {ref, reactive, toRefs} from 'vue'
import Draggable from 'vuedraggable'
import FormGroup from './formGroup.vue'

export default {
  name: "formDesign",
  components: {Draggable, FormGroup},
  props: {
    data: {
      type: Object,
      default: () => {
        return []
      }
    },
    remoteFunc: Object,
    formType: {
      type: Number,
      default: 1 // 0设计模式，1表单提交模式，2详情预浏模式
    }
  },
  setup(props) {
    const state = reactive({
      data: {},
      model: {}
    })
    const draggableAdd = () => {

    }
    return {
      draggableAdd,
      ...toRefs(state)
    }
  }
}
</script>
