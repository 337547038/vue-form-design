<!-- created by weiXin:337547038 -->
<template>
  <div>
    <ak-list
      ref="tableListRef"
      :api-key='{{apiKey}}'
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
      ></ak-form>
    </ak-list>
  </div>
</template>

<script setup lang="ts">
  import {nextTick, ref} from 'vue'

  const formRef = ref()
  const tableListRef = ref()
  const closeFormFn = ref()
  const operateType = ref('add')

  const tableData = ref({{tableData}})

  const searchData = ref({{searchData}})

  const formData = ref({{formData}})

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
        formRef.value.getData({id:row.id})
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
</script>
