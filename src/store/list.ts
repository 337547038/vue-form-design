import {defineStore} from "pinia";
import {ref} from 'vue'
import type {Columns, Config} from "@/types/table";

export const useDesignListStore = defineStore('designList', () => {
  const selectComponent = ref({})
  const setSelectComponent = (data: Columns) => {
    selectComponent.value = data
  }
  const designColumns = ref([])
  const setDesignColumns = (data: Columns[], push = false) => {
    if (push) {
      designColumns.value.push(data)
    } else {
      designColumns.value = data
    }
  }
  const designConfig = ref({})
  const setDesignConfig = (data: Config) => {
    designConfig.value = data
  }

  return {
    designColumns,
    setDesignColumns,
    selectComponent,
    setSelectComponent,
    designConfig,
    setDesignConfig
  }
})
export const useListDialogForm = (id: number | string) => defineStore(`dialogForm-${id}`, () => {
  const title = ref('')
  const setTitle = (text: string) => {
    title.value = text
  }
  const width = ref('')
  const setWidth = (value: string) => {
    width.value = value
  }
  const visible = ref(false)
  const setVisible = (value: boolean) => {
    visible.value = value
  }
  return {
    title,
    setTitle,
    visible,
    setVisible,
    width,
    setWidth
  }
})