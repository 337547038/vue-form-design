<!-- Created by 337547038 表单提交 -->
<template>
  <div style="margin: 30px">
    <autoForm
      :data="data"
      ref="auform"
      :readOnly="readOnly"
      :remoteFunc="remoteFunc"
      :eventScript="eventScript">
    </autoForm>
    <div class="submit-button" v-if="!readOnly">
      <ak-button @click="submit" type="primary">提交表单</ak-button>
    </div>
  </div>
</template>

<script>
import autoForm from './components/form'

export default {
  name: 'formSubmit',
  data() {
    return {
      data: {},
      remoteFunc: {
        /* callbackFun(resolve) {
          const obj = [
            {label: '111', value: '111'},
            {label: '222', value: '22'}
          ]
          resolve(obj)
        } */
      },
      eventScript: {},
      readOnly: false
    }
  },
  components: {autoForm},
  created() {
    const query = this.$route.query
    let key = 'formDesign'
    if (query.type === 'preview') {
      key = 'preview'
    }
    this.data = JSON.parse(window.localStorage.getItem(key)) || []
    if (query.id) {
      // 编辑时，模拟请求数据
      setTimeout(() => {
        const value = JSON.parse(window.localStorage.getItem('formData'))
        this.$refs.auform.setValue(value)
      }, 500)
    }
    this.readOnly = query.detail === 'detail'
  },
  methods: {
    submit() {
      // this.$refs.auform.validateTable()
      this.$refs.auform.validate()
        .then(res => {
          console.log('通过验证')
          console.log(res)
          // 将数据保存在storage
          window.localStorage.setItem('formData', JSON.stringify(res))
          this.$msg('提交成功')
          this.$router.push({path: 'list', query: {id: '111'}})
        })
        .catch(res => {
          console.log('不通过')
          console.log(res)
        })
    }
  },
  computed: {},
  mounted() {
  }
}
</script>
