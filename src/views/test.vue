<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :formData="formData"
      requestUrl=""
      addUrl=""
      editUrl=""
      :beforeSubmit="beforeSubmit"
    />
  </div>
  <el-button @click="setValue">button</el-button>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref({ list: [], form: {}, config: {} })
  setTimeout(() => {
    formData.value = {
      list: [
        {
          type: 'table',
          list: [
            {
              type: 'input',
              control: {
                modelValue: ''
              },
              config: {},
              name: 'ab',
              item: {
                label: '单行文本'
              }
            }
          ],
          tableData: [],
          control: {
            border: true
          },
          config: {
            add: '添加一行',
            addBtnText: 'add'
          },
          name: 'table'
        },
        {
          type: 'input',
          control: { modelValue: '1' },
          config: {},
          name: 'input1681128646765',
          item: { label: '单行文本' }
        },
        {
          type: 'select',
          control: { modelValue: '', appendToBody: true },
          options: [
            {
              label: 'a',
              value: '1'
            }
          ],
          config: { optionsType: 0 },
          name: 'select1681128648591',
          item: { label: '下拉选择框' }
        },
        {
          type: 'title',
          control: {
            modelValue: '标题'
          },
          config: {}
        },
        {
          type: 'txt',
          control: {
            modelValue: '555555'
          },
          config: {}
        },
        { type: 'button', control: { label: '保存' }, config: {} }
      ],
      form: { size: 'default' },
      config: {}
    }
  }, 100)

  // todo 存在编辑时，可根据路由等参数设置当前表单模式　1新增　2编辑
  const formType = computed(() => {
    return 1
  })

  const setValue = () => {
    formNameEl.value.setValue({
      input1681128646765: '545',
      select1681128648591: '1',
      table: [{ ab: 1 }]
    })
  }

  // 表单提交时参数处理
  const beforeSubmit = (params) => {
    //　如编辑时添加参数
    //  params.id='xxx'
    return params
  }
  // 表单组件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
     console.log(key)
     console.log(value)
  })*/
</script>
