<!-- Created by 337547038  -->
<template>
  <div class="components-list">
    <div v-if="searchDesign && formDataList?.length">
      <div class="title">已有表单字段</div>
      <div class="content">
        <el-checkbox
          v-for="item in formDataList"
          :key="item.name"
          :checked="getCheckbox(item.name)"
          @change="selectChange(item, $event)"
        >
          {{ item.item.label }}
        </el-checkbox>
      </div>
    </div>
    <div v-for="(list, index) in controlList" :key="index">
      <div class="title"
        >{{ list.title }}
        <div
          class="template"
          v-if="index === 0 && !searchDesign"
          @click="useTemplateClick"
          >使用模板</div
        >
      </div>
      <draggable
        itemKey="key123"
        tag="ul"
        v-model="list.children"
        :group="{ name: 'form', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <li :class="[element.type]">
            <i :class="`icon-${element.icon}`"></i>
            <span :title="element.label">{{ element.label }}</span>
          </li>
        </template>
      </draggable>
    </div>
    <use-template ref="useTemplateEl" @click="useTemplateSelect" />
  </div>
</template>
<script lang="ts" setup>
  import controlListData from './controlList'
  import Draggable from 'vuedraggable-es'
  import { computed, ref, watch } from 'vue'
  import { FormData, FormList } from '../types'
  import UseTemplate from './template.vue'

  const props = withDefaults(
    defineProps<{
      formData: FormData
      searchData: FormList[]
      searchDesign: boolean
    }>(),
    {
      formData: () => {
        return {
          list: [],
          form: {}
        }
      },
      searchData: () => {
        return []
      },
      searchDesign: false
    }
  )
  const emits = defineEmits<{
    (e: 'update:searchData', value: FormList[]): void
    (e: 'click', value: FormData): void
  }>()
  const newData: any = ref(props.searchData)
  watch(
    () => props.searchData,
    (v: FormList[]) => {
      newData.value = v
    }
  )
  const controlList = computed(() => {
    if (props.searchDesign) {
      // 只返回基础字段
      return controlListData.slice(0, 1)
    } else {
      return controlListData
    }
  })
  const clone = (origin: any) => {
    return JSON.parse(JSON.stringify(origin))
  }
  // 筛选设计时左则勾选已有表单字段
  const selectChange = (obj: FormList, val: boolean) => {
    if (val) {
      // 勾选时追加
      const newObj = JSON.parse(JSON.stringify(obj))
      delete newObj.rules
      delete newObj.customRules
      /*newObj.rules = [] // 清空校验规则
      newObj.customRules = []*/
      newData.value.push(newObj)
    } else {
      props.searchData.forEach((item, index) => {
        if (item.name === obj.name) {
          newData.value.splice(index, 1)
        }
      })
    }
    emits('update:searchData', newData.value)
  }
  // 筛选设计时初始时返已有表单字段勾选状态
  // todo 勾选添加到设计区域，再从设计区域删除时，这里还会保持勾选状态
  const getCheckbox = (name: string) => {
    let bool = false
    props.searchData.forEach((item) => {
      if (item.name === name) {
        bool = true
      }
    })
    return bool
  }
  // 从表单数据提取筛选可选字段
  const formDataList = computed(() => {
    const obj: FormList[] = []
    forEachGetData(props.formData.list, obj)
    return obj
  })
  const exclude = ['txt', 'title', 'table', 'component', 'upload']
  const forEachGetData = (data: FormList[], obj: FormList[]) => {
    if (data) {
      data.forEach((item: any) => {
        if (item.type === 'grid' || item.type === 'tabs') {
          item.columns.forEach((col: any) => {
            forEachGetData(col.list, obj)
          })
        } else if (item.type === 'card') {
          forEachGetData(item.list, obj)
        } else if (exclude.indexOf(item.type) === -1) {
          obj.push(item)
        }
      })
    }
  }
  // 使用模板
  const useTemplateEl = ref()
  const useTemplateClick = () => {
    useTemplateEl.value.open()
  }
  const useTemplateSelect = (data: FormData) => {
    emits('click', data)
  }
</script>
