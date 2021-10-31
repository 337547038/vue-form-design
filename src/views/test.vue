<template>
  <div>
    <el-form ref="formel" :model="model">
      <el-form-item :rules="rules" prop="value" label="校验">
        <el-input v-model="model.value"></el-input>
      </el-form-item>
      <el-table :data="tableData">
        <el-table-column v-for="item in tableList" :key="item" :label="item.label">
          <template #default="scope">
            <el-form-item :rules="rules" :prop="`checkList.${scope.$index}.${item.prop}`">
              <el-input v-model="scope.row[item.prop]"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
      <el-button @click="submit">submit</el-button>
      <el-button @click="submitTable">table add</el-button>
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
      },
      tableList: [
        {label: '序号', prop: 'index'},
        {label: '标题', prop: 'title'}
      ],
      tableData: [],
      rules: [
        {
          required: true,
          message: '不能为空',
          trigger: 'change'
        }
      ]
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
    const submitTable = () => {
      state.tableData.push({index: '', title: ''})
    }
    return {
      ...toRefs(state),
      change,
      submit,
      formel,
      submitTable
    }
  }

}

</script>
