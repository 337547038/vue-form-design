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
        :label="item.formItem?.label"
        :width="item.formItem?.span"
      >
        <template #default="scope">
          <span v-if="item.type === 'index'">{{ scope.$index + 1 }}</span>
          <div v-if="type === 'detail' || disabledEdit">
            {{ getText(scope.row[item.name]) }}
          </div>
          <form-item
            v-else
            v-model="scope.row[item.name]"
            :parent-prop="`${data.name}.${scope.$index}.${item.name}`"
            :data="item"
          />
        </template>
        <template
          v-if="item.help"
          #header="scope"
        >
          {{ scope.column.label }}
          <tooltip :content="item.help" />
        </template>
      </el-table-column>
      <el-table-column
        v-if="
          ['add', 'edit'].includes(type) &&
            data.delBtnText &&
            !disabledEdit
        "
        prop="del"
        label="操作"
      >
        <template #default="scope">
          <el-button
            text
            type="primary"
            @click="delColumn(scope.$index)"
          >
            {{ data.delBtnText }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div
      v-if="
        ['add', 'edit'].includes(type) &&
          data.addBtnText &&
          !disabledEdit
      "
      class="table-btn"
    >
      <el-button
        size="small"
        @click="addColumn"
      >
        {{
          data.addBtnText
        }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import Tooltip from '@/components/tooltip/index.vue'
  import { jsonParseStringify } from '@/utils/design'
  import {useFormStore} from "@/store/form.ts";
  import {storeToRefs} from "pinia";
  import FormItem from '../formItem.vue'

  const props = withDefaults(
    defineProps<{
      data?: any
    }>(),
    {
      data: () => {
        return {}
      }
    }
  )
  const store= useFormStore()
  const {formValue}=storeToRefs(store)

  const tableDataNew = computed(() => {
    return formValue.value[props.data.name]
  })
  const type = computed(() => {
    return store.designType
  })
  // 如果编辑页禁用时，则返回true
  const disabledEdit = computed(() => {
    return store.designType === 'edit' && props.data?.disabledEdit
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
