<template>
  <div>
    <tinymce-editor ref="editor" v-model="value"></tinymce-editor>
  </div>
</template>

<script>
import tinymceEditor from "./designForm/components/tinymce/index.vue";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {
    tinymceEditor
  }
};
</script>
