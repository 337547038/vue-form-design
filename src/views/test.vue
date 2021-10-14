<template>
  <el-form
    ref="ruleForm"
    :model="model"
    class="demo-ruleForm">
    <el-form-item label="Activity name" prop="name" :rules="nameRules">
      <el-input v-model="model.name"></el-input>
    </el-form-item>
    <el-form-item label="Activity name2" prop="value2" :rules="nameRules2">
      <el-input v-model="model.value2"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
      >Create
      </el-button
      >
      <!--      <el-button @click="resetForm('ruleForm')">Reset</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import {reactive, toRefs, ref} from 'vue'

export default {
  setup() {
    const ruleForm = ref()
    const state = reactive({
      model: {
        name:'',
        value2:'2'
      },
      list: [
        {
          prop: 'nameTest',
          label: 'Activity name',
          value: '123'
        }
      ],
      nameRules2:{},
      nameRules: [
        {
          required: true,
          message: 'Please input address',
          trigger: 'blur',
        }
      ]
    })
    const change = (val, prop) => {
      state.ruleForm2[prop] = val
    }
    const submitForm = () => {
      console.log('ff')
      ruleForm.value.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      change,
      submitForm,
      ruleForm
    }
  }
  /*data() {
    return {
      list: [
        {
          prop: 'nameTest',
          label: 'Activity name',
          value: '123'
        }
      ],
      ruleForm2: {},
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        nameTest: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
          },
        ],
        region: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
          },
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [
          {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
          },
        ],
        desc: [
          {
            required: true,
            message: 'Please input activity form',
            trigger: 'blur',
          },
        ],
      },
      nameRules: [
        {
          required: true,
          message: 'Please input address',
          trigger: 'blur',
        }
      ],
      nameTest: ''
    }
  },
  methods: {
    change(val, prop) {
      this.ruleForm2[prop] = val
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },*/
}
</script>
