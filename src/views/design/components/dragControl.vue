<!-- Created by 337547038 -->
<template>
  <div class="drag-control">
    <div class="item-control">
      <i class="icon-clone" @click.stop="_click('clone')" v-if="clone"></i>
      <i class="icon-del" @click.stop="_click('del')"></i>
    </div>
    <div class="drag-move icon-move"></div>
  </div>
</template>

<script>
export default {
  name: 'dragControl',
  data() {
    return {}
  },
  props: {
    clone: Boolean
  },
  components: {},
  methods: {
    _click(type) {
      this.$emit('click', type)
    }
  },
  computed: {},
  mounted() {
  }
}
</script>
