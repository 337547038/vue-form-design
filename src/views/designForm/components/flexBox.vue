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
      v-if="data.config?.delete && type === 1"
      >{{ data.config.delete }}</el-button
    >
  </div>
  <el-form-item v-if="data.config?.add && type === 1">
    <el-button class="flex-add-btn" size="small" @click="addRow"
      >{{ data.config.add }}
    </el-button>
  </el-form-item>
</template>

<script lang="ts" setup>
  import { toRef, onMounted, inject, watch } from 'vue'
  import FormItem from './formItem.vue'
  import { constSetFormValue } from './utils'

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
      tableDataNew.value = transformValue(val[props.data.name])
    }
  )
  const transformValue = (val: any) => {
    const isTransform = props.data.config?.transform // 是否设置了转换
    let newVal = val
    if (isTransform && val) {
      newVal = JSON.parse(val)
    }
    if (!newVal || typeof newVal !== 'object') {
      return []
    } else {
      return newVal
    }
  }
  onMounted(() => {
    init()
  })
</script>
