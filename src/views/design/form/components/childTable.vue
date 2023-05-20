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
          <div v-if="type === 4 || editDisabled">
            {{ getText(scope.row[item.name]) }}
          </div>
          <div v-else>
            <form-item
              v-model="scope.row[item.name]"
              :tProp="`${data.name}.${scope.$index}.${item.name}`"
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
        v-if="[1, 2].includes(type as number) && data.config.delBtnText && !editDisabled"
      >
        <template #default="scope">
          <el-button link type="primary" @click="delColumn(scope.$index)"
            >{{ data.config.delBtnText }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div
      class="table-btn"
      v-if="[1, 2].includes(type as number) && data.config.addBtnText && !editDisabled"
    >
      <el-button size="small" @click="addColumn">{{
        data.config.addBtnText
      }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FormItem from './formItem.vue'
  import { inject, computed } from 'vue'
  import Tooltip from '../../components/tooltip.vue'
  import { constFormProps } from '../../utils'
  import { jsonParseStringify } from '@/utils'
  const props = withDefaults(
    defineProps<{
      data: any
    }>(),
    {
      data: () => {
        return {}
      }
    }
  )
  const formProps = inject(constFormProps, {}) as any

  //const tableDataNew: any = toRef(props.data, 'tableData')
  //const tableDataNew: any = toRef(formProps.value.model, props.data.name)
  const tableDataNew = computed(() => {
    return formProps.value.model[props.data.name]
  })
  const type = computed(() => {
    return formProps.value.type
  })
  // 如果编辑页禁用时，则返回true
  const editDisabled = computed(() => {
    return formProps.value.type === 2 && props.data.config?.editDisabled
  })
  const addColumn = () => {
    const temp: any = {}
    if (props.data.list) {
      props.data.list.forEach((item: any) => {
        if (item.name) {
          temp[item.name] = item.control.modelValue
        }
      })
      tableDataNew.value.push(jsonParseStringify(temp))
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
</script>
