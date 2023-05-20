<!-- Created by 337547038  -->
<template>
  <div class="components-list">
    <div v-if="isSearch && formDataList?.length">
      <div class="title">快速选择表单字段</div>
      <div class="content">
        <el-checkbox
          v-for="item in formDataList"
          :key="item.name"
          @change="selectChange(item, $event)"
        >
          {{ item.item?.label }}
        </el-checkbox>
      </div>
    </div>
    <div v-for="(list, index) in controlList" :key="index">
      <div class="title">
        {{ list.title }}
        <div
          class="template"
          v-if="index === 0 && !isSearch"
          @click="useTemplateClick"
        >
          使用模板
        </div>
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
    <use-template
      ref="useTemplateEl"
      @click="useTemplateSelect"
      v-if="!isSearch"
    />
  </div>
</template>
<script lang="ts" setup>
  import controlListData from './controlList'
  import Draggable from 'vuedraggable-es'
  import { computed, ref, watch, inject } from 'vue'
  import { FormData, FormList } from '../../types'
  import UseTemplate from './template.vue'
  import { getRequest } from '@/api'
  import { stringToObj } from '@/utils/form'
  import { jsonParseStringify } from '@/utils'

  const props = withDefaults(
    defineProps<{
      formId?: number | string
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'clickCheck', value: FormList): void
    (e: 'click', value: FormData): void
  }>()
  const designType = inject('formDesignType') as string
  const formDataList = ref([])
  // 默认搜索允许显示的字段
  const searchField = [
    'input',
    'radio',
    'checkbox',
    'select',
    'datePicker',
    'timePicker',
    'inputNumber',
    'cascader',
    'component',
    'button'
  ]
  const isSearch = computed(() => {
    return designType === 'search'
  })
  const controlList = computed(() => {
    if (designType === 'search') {
      // 只返回基础字段
      const temp: any = []
      controlListData.forEach((item: any) => {
        if (item.children) {
          const filter = item.children.filter((ch: any) => {
            return searchField.includes(ch.type)
          })
          if (filter && filter.length) {
            temp.push({ title: item.title, children: filter })
          }
        }
      })
      return temp
    } else {
      return controlListData
    }
  })
  const clone = (origin: any) => {
    return jsonParseStringify(origin)
  }
  watch(
    () => props.formId,
    (val: number) => {
      if (val && isSearch.value) {
        getFormField(val)
      }
    }
  )
  // 加载当前列表所属的表单，从表单中提取可用于搜索的字段
  const getFormField = (formId: number) => {
    getRequest('designById', { id: formId }).then((res: any) => {
      const data = stringToObj(res.data.data)
      if (data && data.list) {
        forEachGetData(data.list)
      }
    })
  }
  // 筛选设计时左则勾选已有表单字段
  const selectChange = (obj: FormList, val: boolean) => {
    if (val) {
      // 勾选时追加
      const newObj = jsonParseStringify(obj)
      delete newObj.rules
      delete newObj.customRules
      emits('clickCheck', newObj)
    }
  }
  const forEachGetData = (data: FormList[]) => {
    data.forEach((item: any) => {
      if (item.type === 'grid' || item.type === 'tabs') {
        item.columns.forEach((col: any) => {
          forEachGetData(col.list)
        })
      } else if (item.type === 'card') {
        forEachGetData(item.list)
      } else if (searchField.includes(item.type) && item.type !== 'button') {
        formDataList.value.push(item)
      }
    })
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
