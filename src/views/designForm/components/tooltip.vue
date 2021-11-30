<!-- Created by 337547038 on 2021/11/30. -->
<template>
  <el-tooltip placement="top">
    <template #content>
      <span v-html="content"></span>
    </template>
    <i class="icon-help"></i>
  </el-tooltip>
</template>

<script>
export default {
  name: "tooltip",
  data() {
    return {}
  },
  props: {
    content: String
  },
  components: {},
  methods: {},
  computed: {},
  mounted() {
  }
}
</script>
