<template>
  <div
    v-for="(item, index) in tableDataNew"
    :key="index"
    class="flex-group"
  >
    <div class="flex-item">
      <template
        v-for="list in dataList"
        :key="`${index}-${list.name}`"
      >
        <form-item
          v-model="item[list.name]"
          :parent-prop="`${data.name}.${index}.${list.name}`"
          :data="list"
        />
      </template>
    </div>
    <el-button
      v-if="data?.delBtnText && ['add','edit'].includes(formType)"
      class="flex-delete-btn"
      type="primary"
      link
      size="small"
      @click="deleteRow(index)"
    >
      {{ data.delBtnText }}
    </el-button>
  </div>
  <el-form-item
    v-if="data.addBtnText && ['add','edit'].includes(formType)"
  >
    <el-button
      class="flex-add-btn"
      size="small"
      @click="addRow"
    >
      {{ data.addBtnText }}
    </el-button>
  </el-form-item>
</template>

<script lang="ts" setup>
  import {onMounted, computed, nextTick, inject} from 'vue'
  import FormItem from '../formItem.vue'
  import {storeToRefs} from "pinia";

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
  const store = inject('formStore')
  if (!store) {
    throw new Error('flex组件必须在formStore注入的上下文下使用')
  }
  const {formValue, formType} = storeToRefs(store)
  const dataList = computed(() => props.data?.list || [])
  const tableDataNew = computed(() => {
    const tableData= formValue.value[props.data.name]
    //确保返回的是数组
    if(!Array.isArray(tableData)){
      //formValue.value[props.data.name] = []
      return []
    }
    return tableData
  })

  /**
   * 生成空行数据
   */
  const createEmptyRow = (): Record<string, any> => {
    const emptyRow: Record<string, any> = {}
    dataList.value.forEach((item: any) => {
      emptyRow[item.name] = item.control.modelValue
    })
    return emptyRow
  }

  const addRow = () => {
    tableDataNew.value.push(createEmptyRow())
  }
  const deleteRow = (index: number) => {
    tableDataNew.value.splice(index, 1)
  }
  const init = () => {
    if (tableDataNew.value?.length === 0) {
      tableDataNew.value.push(createEmptyRow())
    }
  }
  onMounted(() => {
    nextTick(() => {
      init()
    })
  })
</script>
