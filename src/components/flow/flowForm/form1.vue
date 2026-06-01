<template>
  <div>
    <el-form
      ref="formEl"
      label-width="100"
      :disabled="disabled"
      :model="formData"
      :rules="rules"
    >
      <el-form-item label="请假类型">
        <el-select
          v-model="formData.type"
          placeholder="请选择请假类型"
        >
          <el-option
            value="1"
            label="事假"
          />
          <el-option
            value="2"
            label="年假"
          />
          <el-option
            value="3"
            label="病假"
          />
          <el-option
            value="4"
            label="婚假"
          />
          <el-option
            value="5"
            label="产假"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="开始时间"
        prop="startDate"
      >
        <el-date-picker
          v-model="formData.startDate"
          placeholder="请选择开始时间"
        />
      </el-form-item>
      <el-form-item
        label="结束时间"
        prop="endDate"
      >
        <el-date-picker
          v-model="formData.endDate"
          placeholder="请选择结束时间"
        />
      </el-form-item>
      <el-form-item label="请假天数">
        <el-input
          v-model="formData.day"
          placeholder="请输入请假天数"
        />
      </el-form-item>
      <el-form-item label="请假原因">
        <el-input
          v-model="formData.remark"
          type="textarea"
          :rows="5"
          placeholder="请输入请假原因"
        />
      </el-form-item>
      <el-form-item label="上传附件">
        <el-upload v-model="formData.files">
          <el-button type="primary">
            选择附件
          </el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitClick"
        >
          确定
        </el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">

defineOptions({name: '请假表单1'})
import {ref, reactive} from 'vue'

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
  startDate: [{required: true, message: '请选择开始时间', trigger: 'change'}],
  endDate: [{required: true, message: '请选择结束时间', trigger: 'change'}]
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