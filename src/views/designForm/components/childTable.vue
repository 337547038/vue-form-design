<!-- Created by 337547038 on 2021/9/29. -->
<template>
  <div class="form-table form-table-add">
    <el-table
      v-bind="data.control"
      :class="[data.className]"
      :data="tableDataNew"
    >
      <el-table-column
        v-for="(item, index) in data.list"
        :key="index"
        :prop="item.name"
        :label="item.item.label"
        :width="item.item.span"
      >
        <template #default="scope">
          <span v-if="item.type === 'index'">{{ scope.$index + 1 }}</span>
          <div v-if="type === 3">{{ getText(scope.row[item.name]) }}</div>
          <div v-else>
            <form-item
              :tProp="`${data.name}.${scope.$index}.${item.name}`"
              v-model="scope.row[item.name]"
              :data="item"
            />
          </div>
        </template>
        <template #header="scope" v-if="item.help">
          {{ scope.column.label }}
          <Tooltip :content="item.help" />
        </template>
      </el-table-column>
      <el-table-column
        prop="del"
        label="操作"
        v-if="type === 1 && data.config.delete"
      >
        <template #default="scope">
          <el-button link @click="delColumn(scope.$index)"
            >{{ data.config.delete }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-btn" v-if="type === 1 && data.config.add">
      <el-button size="small" @click="addColumn">{{
        data.config.add
      }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FormItem from './formItem.vue'
  import { watch, inject, toRef } from 'vue'
  import Tooltip from './tooltip.vue'
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
  // const tableDataNew: any = ref(props.tableData)
  const addColumn = () => {
    const temp: any = {}
    if (props.data.list) {
      props.data.list.forEach((item: any) => {
        if (item.name) {
          if (item.type === 'checkbox') {
            temp[item.name] = []
          } else {
            temp[item.name] = ''
          }
        }
      })
      tableDataNew.value.push(JSON.parse(JSON.stringify(temp)))
    }
  }
  const getText = (text: any) => {
    if (typeof text === 'string') {
      return text
    } else {
      return text && text.toString()
    }
  }
  const delColumn = (index: number) => {
    tableDataNew.value.splice(index, 1)
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
</script>
