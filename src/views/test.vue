<template>
  <div>
    <ak-list
      ref="tableListRef"
      :api-key="{}"
      :search-data="searchData"
      :data="tableData"
      @btn-click="listBtnClick"
    >
      <ak-form
        ref="formRef"
        :data="formData"
        :operate-type="operateType"
        submit-url=""
        :after="afterSubmit"
        @btn-click="formBtnClick"
      />
    </ak-list>
  </div>
</template>

<script setup lang="ts">
  import {nextTick, ref,onMounted} from 'vue'

  const formRef = ref()
  const tableListRef = ref()
  const closeFormFn = ref()
  const operateType = ref('add')

  const tableData = ref({
    columns: [
      {
        label: "多选",
        type: "selection",
        prop: "selection"
      },
      {
        prop: "text",
        label: "文本",
        help: ""
      },
      {
        prop: "checkbox",
        label: "性别",
        help: ""
      },
      {
        label: "操作",
        prop: "operate",
        render: "buttons",
        buttons: [
          {
            key: "edit",
            props:
              {
                size: "small"
              }
          },
          {
            key: "del",
            props:
              {
                size: "small"
              }
          }]
      }],
    config:
      {
        controlBtn: [
          {
            key: "add"
          },
          {
            key: "del"
          }],
        openType: "dialog",
        dialogWidth: "600"
      }
  })

  const searchData = ref({
    list: [
      {
        type: "input",
        control:
          {
            modelValue: ""
          },
        name: "text",
        formItem:
          {
            label: "文本"
          }
      },
      {
        type: "radio",
        control:
          {
            modelValue: ""
          },
        name: "checkbox",
        formItem:
          {
            label: "性别"
          },
        options: [
          {
            label: "男",
            value: "1"
          },
          {
            label: "女",
            value: "2"
          }],
        optionsType: 0
      }],
    config:
      {
        submitCancel: true
      }
  })

  const formData = ref({
    list: [
      {
        type: "input",
        control:
          {
            modelValue: ""
          },
        name: "text",
        formItem:
          {
            label: "文本"
          }
      },
      {
        type: "radio",
        control:
          {
            modelValue: ""
          },
        name: "checkbox",
        formItem:
          {
            label: "性别"
          },
        options: [
          {
            label: "男",
            value: "男"
          },
          {
            label: "女",
            value: "女"
          }],
        optionsType: 0
      }],
    config:
      {
        submitCancel: true
      }
  })

  /**
   * 列表按钮点击事件
   * @param key 按钮标识
   * @param row 列表右则操作按钮事件时为当前行数据；列表右上方按钮时为当前所勾选的行id
   * @param close 用于关闭弹的方法
   */
  const listBtnClick = (key: string, row: any, close: any) => {
    closeFormFn.value = close
    if (key === 'edit') {
      operateType.value = key
      nextTick(() => {
        formRef.value.setValue(row)
      })
    }
  }
  // 关闭弹窗
  const closeForm = () => {
    closeFormFn.value && closeFormFn.value()
  }
  const afterSubmit = (_: any, success: boolean, type: string) => {
    if (type === 'submit') {
      if (success) {
        // 添加成功，刷新列表数据并关闭弹窗
        tableListRef.value.getListData()
        closeForm()
      }
    }
  }

  const formBtnClick = (type: string) => {
    if (type === 'reset' || type === 'cancel') {
      closeForm()
    }
  }

  onMounted(()=>{
    //提供些演示数据
    tableListRef.value.setTableData([
      {text:'张三',checkbox:'男'},
      {text:'李四',checkbox:'女'},
    ])
  })
</script>