<template>
  <div v-for="(item, index) in tableDataNew" :key="index" class="flex-group">
    <div class="flex-item">
      <template v-for="(list, i) in data.list" :key="i">
        <form-item
          :tProp="`${data.name}.${index}.${list.name}`"
          v-model="item[list.name]"
          :data="list"
        />
      </template>
    </div>
    <el-button
      class="flex-delete-btn"
      @click="deleteRow(index)"
      type="primary"
      link
      size="small"
      v-if="data.config?.delBtnText && [1, 2].includes(type)"
      >{{ data.config.delBtnText }}</el-button
    >
  </div>
  <el-form-item v-if="data.config?.addBtnText && [1, 2].includes(type)">
    <el-button class="flex-add-btn" size="small" @click="addRow"
      >{{ data.config.addBtnText }}
    </el-button>
  </el-form-item>
</template>

<script lang="ts" setup>
  import { toRef, onMounted, inject, watch } from 'vue'
  import FormItem from './formItem.vue'
  import { constSetFormValue } from '../../utils'

  const props = withDefaults(
    defineProps<{
      data: any
      type: number
    }>(),
    {
      data: () => {
        return {}
      }
    }
  )
  const tableDataNew: any = toRef(props.data, 'tableData')
  const getRow = () => {
    let temp: any = {}
    props.data.list.forEach((item: any) => {
      temp[item.name] = item.control.modelValue
    })
    return temp
  }
  const addRow = () => {
    tableDataNew.value.push(getRow())
  }
  const deleteRow = (index: number) => {
    tableDataNew.value.splice(index, 1)
  }
  const init = () => {
    if (tableDataNew.value.length === 0) {
      tableDataNew.value.push(getRow())
    }
  }
  // 使用setValue设值
  const setFormValue = inject(constSetFormValue, {}) as any
  watch(
    () => setFormValue.value,
    (val: any) => {
      if (val[props.data.name] !== undefined) {
        tableDataNew.value = val[props.data.name]
      }
    }
  )
  onMounted(() => {
    init()
  })
</script>
