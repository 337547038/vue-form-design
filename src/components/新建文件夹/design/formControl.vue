<!-- Created by 337547038  -->
<template>
  <div class="components-list">
    <div v-for="(list,index) in controlList" :key="index">
      <div class="title">{{ list.title }}</div>
      <draggable
        itemKey="key123"
        tag="ul" v-model="list.children"
        :group="{ name:'form', pull:'clone',put:false}"
        ghost-class="ghost"
        :sort="false">
        <template #item="{element}">
          <li :class="[element.type]">
            <i :class="`icon-${element.icon}`"></i>
            <span>{{ element.label }}</span>
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script>
import controlList from './controlList'
import Draggable from 'vuedraggable'

export default {
  name: 'formControl',
  data() {
    return {
      controlList
    }
  },
  props: {},
  components: {Draggable},
  methods: {},
  computed: {},
  mounted() {
  }
}
</script>
