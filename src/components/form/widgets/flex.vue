<template>
  <div
    v-for="(item, index) in tableDataNew"
    :key="index"
    class="flex-group"
  >
    <div class="flex-item">
      <template
        v-for="(list, i) in data.list"
        :key="i"
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
  const {formValue, formType} = storeToRefs(store)
  const tableDataNew = computed(() => {
    return formValue.value[props.data.name]||[]
  })

  const getRow = () => {
    const temp: any = {}
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
    if (tableDataNew.value?.length === 0) {
      tableDataNew.value.push(getRow())
    }
  }
  onMounted(() => {
    nextTick(() => {
      init()
    })
  })
</script>
