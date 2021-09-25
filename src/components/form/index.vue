<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <el-form
      ref="form"
      v-bind="formData.config"
      class="design-form">
    <form-group :data="formData"/>
  </el-form>
</template>

<script>
import formGroup from "./formGroup.vue";

export default {
  name: "formIndex",
  components: {formGroup},
  props: {
    formData: Object
  },
}
</script>
