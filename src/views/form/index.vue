<!-- Created by 337547038 表单提交 -->
<template>
  <div style="margin: 30px">
    <h1>表单数据提交/修改/详情</h1>
    <autoForm
      :data="data"
      ref="auform"
      :form-type="formType"
      :remoteFunc="remoteFunc">
    </autoForm>
    <div class="submit-button" v-if="submitShow">
      <ak-button @click="submit" type="primary">提交表单</ak-button>
    </div>
  </div>
</template>

<script>
import autoForm from '../design/components/formDesign'
import {evil} from '@/utils'

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
      formType: 1,
      submitShow: false
    }
  },
  components: {autoForm},
  created() {
    const query = this.$route.query
    let key = 'formDesign'
    if (query.type === 'preview') {
      key = 'preview'
    }
    this.data = evil(window.localStorage.getItem(key)) || []
    if (query.id) {
      // 编辑时，模拟请求数据
      setTimeout(() => {
        const value = JSON.parse(window.localStorage.getItem('formData'))
        this.$refs.auform.setValue(value)
      }, 500)
    }
    this.readOnly = query.detail === 'detail'
    if (query.detail !== 'detail' && query.type !== 'preview') {
      this.submitShow = true
    }
    if (query.detail === 'detail') {
      // 表单详情页展示模式
      this.formType = 2
    }
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
