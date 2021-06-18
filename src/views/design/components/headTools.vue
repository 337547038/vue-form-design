<!-- Created by 337547038 -->
<template>
  <div class="main-tools">
    <ak-button type="text" @click="_btnClick('del',$event)"><i class="icon-del"></i>清空</ak-button>
    <ak-button type="text" @click="_btnClick('preview',$event)"><i class="icon-eye"></i>预览</ak-button>
    <ak-button type="text" @click="_btnClick('json',$event)"><i class="icon-json"></i>生成脚本预览</ak-button>
    <ak-button type="text" @click="_btnClick('save',$event)"><i class="icon-save"></i>保存</ak-button>
  </div>
</template>

<script>
export default {
  name: 'headTools',
  data() {
    return {}
  },
  props: {},
  components: {},
  methods: {
    _btnClick(type, evt) {
      this.$emit('click', type, evt)
    }
  },
  computed: {},
  mounted() {
  }
}
</script>
