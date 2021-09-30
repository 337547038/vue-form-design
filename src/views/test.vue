<!-- Created by 337547038 on 2021/9/30. -->
<template>
  <div>
    <el-form-item>
      <el-input v-model="text"></el-input>
      <el-button>click</el-button>
<!--    <input type="text" v-model="text" @input="inputChange">{{text}}-->
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      text: ''
    }
  },
  props: {
    modelValue: String
  },
  components: {},
  methods: {
    inputChange(){
      this.$emit('update:modelValue',this.text)
    }
  },
  computed: {},
  mounted() {
  }
}
</script>
