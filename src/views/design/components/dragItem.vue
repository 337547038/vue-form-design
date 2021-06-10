<!-- Created by 337547038 on 2021. -->
<template>
  <draggable
    v-model="data.list"
    :no-transition-on-drag="true"
    v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
    @add="_draggableColAdd">
    <transition-group name="fade" tag="div" class="drag-list">
      <template v-for="(item, index) in data.list">
        <form-item
          :readOnly="formType===2"
          :showControl="formType===0"
          :class="item.className"
          :activeKey="activeKey"
          :item="item"
          v-model="item.control.value"
          :key="index"
          @click="_formItemControlClick(item, index, data.list, $event)"
          @checkClick="_formItemCheck(item)">
        </form-item>
      </template>
    </transition-group>
  </draggable>
</template>

<script>
import Draggable from 'vuedraggable'
import FormItem from './formItem'

export default {
  name: 'dragItem',
  data() {
    return {}
  },
  props: {
    data: Object,
    formType: Number,
    activeKey: String
  },
  watch: {
    dataList() {

    }
  },
  components: {FormItem, Draggable},
  methods: {
    _draggableColAdd(evt) {
      this.$emit('add', evt)
    },
    _formItemControlClick(item, listIndex, dataList, $event) {
      this.$emit('click', {item: item, index: listIndex, data: dataList, evt: $event})
    },
    _formItemCheck(item) {
      this.$emit('checkClick', item)
    }
  },
  computed: {},
  mounted() {
  }
}
</script>
