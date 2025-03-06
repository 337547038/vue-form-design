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
          :other-prop="`${data.name}.${index}.${list.name}`"
          :data="list"
        />
      </template>
    </div>
    <el-button
      v-if="data.config?.delBtnText && ['add', 'edit'].includes(type as number)"
      class="flex-delete-btn"
      type="primary"
      link
      size="small"
      @click="deleteRow(index as number)"
    >
      {{ data.config.delBtnText }}
    </el-button>
  </div>
  <el-form-item
    v-if="data.config?.addBtnText && ['add', 'edit', 'design'].includes(type)"
  >
    <el-button
      class="flex-add-btn"
      size="small"
      @click="addRow"
    >
      {{ data.config.addBtnText }}
    </el-button>
  </el-form-item>
</template>

<script lang="ts" setup>
  import { onMounted, inject, computed, nextTick } from 'vue'
  import FormItem from './formItem.vue'
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
  const formProps = inject('akFormProps', {}) as any
  const tableDataNew = computed(() => {
    return formProps.model[props.data.name]
  })
  const type = computed(() => {
    return formProps.operateType
  })
  const getRow = () => {
    const temp: any = {}
    props.data.list.forEach((item: any) => {
      temp[item.name] = item.control.modelValue
    })
    // console.log(temp)
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
