<template>
  <div>
    <router-link to="/design">创建表单</router-link>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      }
    }
  },
  props: {},
  components: {},
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  },
  computed: {},
  mounted() {
  }
}
</script>
