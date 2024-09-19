<template>
  <div>
    <ak-form :data="formData" ref="akFormEl" operateType="add" />
  </div>
  <div>
    <el-button @click="setOptions">setOption</el-button>
  </div>
  <!--  <el-form>
    <el-form-item label="input">
      <el-input />
    </el-form-item>
  </el-form>-->
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'input1',
        formItem: {
          label: '单行文本'
        }
      },
      {
        type: 'table',
        list: [
          {
            type: 'input',
            control: {
              modelValue: ''
            },
            config: {},
            name: 'input1724721645324',
            formItem: {
              label: '单行文本'
            }
          },
          {
            type: 'select',
            control: {
              modelValue: '',
              teleported: true
            },
            options: [],
            config: {
              optionsType: 0
            },
            name: 'select1724721656104',
            formItem: {
              label: '下拉选择框'
            }
          }
        ],
        tableData: [],
        control: {
          border: true
        },
        config: {
          delBtnText: '删除',
          addBtnText: '添加一行'
        },
        name: 'table1724721641645'
      },
      {
        type: 'input',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'input1',
        formItem: {
          label: '单行文本'
        }
      },
      {
        type: 'flex',
        list: [
          {
            type: 'input',
            control: {
              modelValue: ''
            },
            config: {},
            name: 'input1724909802492',
            formItem: {
              label: '单行文本'
            }
          }
        ],
        tableData: [],
        control: {},
        config: {
          addBtnText: '添加一行'
        },
        name: 'flex1724909800153'
      }
    ],
    form: {
      size: 'default'
    },
    config: {
      submitCancel: true
    },
    apiKey: {},
    events: {
      change: obj => {
        console.log(obj)
      }
    }
  })

  const akFormEl = ref()
  const setOptions = () => {
    akFormEl.value.setOptions({
      select1: [{ label: '1', value: '1' }]
    })
  }
</script>
