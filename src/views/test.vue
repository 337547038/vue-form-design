<template>
  <div>
    <el-form ref="formel" :model="model">
      <el-form-item label="性别选择" :rules="{}">
        <el-select v-model="model.value">
          <el-option label="a" value="a"></el-option>
          <el-option label="b" value="b"></el-option>
          <el-option label="c" value="c"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="checkbox" :rules="{}" prop="checkList">
        <el-checkbox-group v-model="model.checkList">
          <el-checkbox label="Option A"/>
          <el-checkbox label="Option B"/>
          <el-checkbox label="Option C"/>
          <el-checkbox label="disabled" disabled/>
          <el-checkbox label="selected and disabled" disabled/>
        </el-checkbox-group>
      </el-form-item>
      <el-button @click="submit">submit</el-button>
    </el-form>
  </div>
</template>

<script>
import {reactive, toRefs, ref} from 'vue'
// import Clipboard from 'clipboard'

export default {
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const state = reactive({
      value: [],
      model: {
        value: [],
        checkList: []
      }
    })
    const change = val => {
      emit('update:modelValue', val)
    }
    const formel = ref()
    const submit = () => {
      formel.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!00!')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      change,
      submit,
      formel
    }
  }

}

</script>
