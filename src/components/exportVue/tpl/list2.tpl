<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <ak-list
      ref="tableListRef"
      :api-key='{{apiKey}}'
      :search-data="searchData"
      :data="tableData"
      @btn-click="listBtnClick"
    >
    </ak-list>
  </div>
</template>

<script setup lang="ts">
  import {nextTick, ref} from 'vue'

  const tableListRef = ref()
  const operateType = ref('add')

  const tableData = ref({{tableData}})
  const searchData = ref({{searchData}})

  /**
   * 列表按钮点击事件
   * @param key 按钮标识
   * @param row 列表右则操作按钮事件时为当前行数据；列表右上方按钮时为当前所勾选的行id
   */
  const listBtnClick = (key: string, row: any) => {
    if (key === 'add') {
      operateType.value=key
      // 添加方法
    }else if(key==='edit'){
      operateType.value=key
    }else {
     // 其他按钮事件
    }
  }
</script>
