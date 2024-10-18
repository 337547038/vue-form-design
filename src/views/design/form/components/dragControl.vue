<!-- Created by 337547038  -->
<template>
  <div class="components-list">
    <div v-if="isSearch && formDataList?.length">
      <div class="title">
        快速选择表单字段
      </div>
      <div class="content">
        <el-checkbox
          v-for="item in formDataList"
          :key="item.name"
          @change="selectChange(item, $event)"
        >
          {{ item.formItem?.label }}
        </el-checkbox>
      </div>
    </div>
    <div
      v-for="(list, index) in controlList"
      :key="index"
    >
      <div class="title">
        {{ list.title }}
        <div
          v-if="index === 0 && !isSearch"
          class="template"
          @click="useTemplateClick"
        >
          使用模板
        </div>
      </div>
      <draggable
        v-model="list.children"
        item-key="key123"
        tag="ul"
        :group="{ name: 'form', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <li :class="[element.type]">
            <i :class="`icon-${element.icon}`" />
            <span :title="element.label">{{ element.label }}</span>
          </li>
        </template>
      </draggable>
    </div>
    <use-template
      v-if="!isSearch"
      ref="useTemplateEl"
      @click="useTemplateSelect"
    />
  </div>
</template>
<script lang="ts" setup>
  import controlListData from './controlList'
  import Draggable from 'vuedraggable-es'
  import { computed, ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { FormData, FormList } from '@/types/form'
  import UseTemplate from './template.vue'
  import { getRequest } from '@/api'
  import { stringToObj, jsonParseStringify } from '@/utils/design'

  const route = useRoute()
  const emits = defineEmits<{
    (e: 'clickCheck', value: FormList): void
    (e: 'click', value: FormData): void
  }>()
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
    return route.query.type === 'search'
  })
  const controlList = computed(() => {
    if (isSearch.value) {
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
  const selectChange = (obj: FormList, val: boolean) => {
    if (val) {
      // 勾选时追加
      const newObj = jsonParseStringify(obj)
      delete newObj.rules
      delete newObj.customRules
      emits('clickCheck', newObj)
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
  onMounted(() => {
    // 设计搜索表单时加载
    const { type, id } = route.query
    if (type === 'search' && id) {
      getFormField(id)
    }
  })
</script>
