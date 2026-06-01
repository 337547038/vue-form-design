<template>
  <div>
    <el-form label-width="100" :disabled="disabled" :model="formData" :rules="rules" ref="formEl">

      <el-form-item label="申请理由">
        <el-input type="textarea" :rows="5" v-model="formData.remark" placeholder="请输入请假原因"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitClick">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">


defineOptions({name: '通用流程'})
import {ref, reactive} from 'vue'
import {ElMessage} from "element-plus";

const props = withDefaults(
    defineProps<{
      disabled?: boolean
    }>(),
    {
      modelValue: () => {
        return {}
      },
      disabled: false
    }
)

const emits = defineEmits<{
  (e: 'submit', value: { [key: string]: any }): void
}>()

const rules = reactive({
})
const formEl = ref()
const formData = ref({})
const setValue = (data) => {
  formData.value = data
}
const submitClick = async () => {
  await formEl.value.validate((valid, fields) => {
    if (valid) {
      emits('submit', formData.value)
    }
  })

}
defineExpose({setValue})
</script>

<style scoped>

</style>