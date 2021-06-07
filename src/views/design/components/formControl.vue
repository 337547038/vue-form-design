<!-- Created by 337547038  -->
<template>
  <div class="components-list">
    <div v-for="(list,index) in controlList" :key="index">
      <div class="title">{{list.title}}</div>
      <draggable
        tag="ul" :list="list.children"
        v-bind="{group:{ name:'form', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}">
        <template v-for="(item, index) in list.children">
          <li :key="index" :class="[item.type]">
            <i :class="`icon-${item.icon}`"></i>
            <span>{{item.label}}</span>
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
