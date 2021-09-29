<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <el-form
    ref="form"
    v-bind="formData.config"
    class="add-form"
    :class="{'design-form':type===2,'detail-form':type===3}">
    <form-group :data="formData" :type="type"/>
  </el-form>
</template>

<script>
import formGroup from "./formGroup.vue"

export default {
  name: "formIndex",
  components: {formGroup},
  props: {
    formData: Object,
    type: {// 1新增；2设计；3查看
      type: Number,
      default: 1
    }
  },
}
</script>
