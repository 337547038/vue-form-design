<!-- Created by 337547038 on 2021/9/26. -->
<template>
  <div v-loading="loading">
    <design-form :formData="formData">
    </design-form>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import designForm from '@/components/form/index.vue'
import {reactive, toRefs, provide, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {getDesignFormRow} from '@/api'
import {evil} from "@/utils"
import testCom from "@/views/test.vue"

export default {
  name: "add",
  props: {},
  components: {designForm},
  setup() {
    const route = useRoute()
    const dataSource = route.query.dataSource
    const id = route.query.id
    const state = reactive({
      loading: false,
      formData: {}
    })
    // 注入选项方法获取值
    const optionsValue = ref([{label: "选项1", value: '1'}])
    provide("getCheckbox", optionsValue)
    // 注入自定义组件
    provide('componentName', testCom)
    // 获取表单设计数据
    if (id) {
      state.loading = true
      getDesignFormRow(id)
        .then(res => {
          if (res.data.code === 200) {
            state.formData = evil(res.data.data[0].content)
          }
          state.loading = false
        })
    }
    const submit = () => {

    }
    return {
      ...toRefs(state),
      submit
    }
  }
}
</script>
