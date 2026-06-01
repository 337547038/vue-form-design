<!-- Created by 337547038  -->
<template>
  <div class="components-list">
    <div v-if="isSearch && formDataList?.length">
      <div class="title">
        快速选择表单字段
      </div>
      <div class="content">
        <el-checkbox-group v-model="hasSelected">
          <el-checkbox
            v-for="item in formDataList"
            :key="item.name"
            :label="item.formItem?.label"
            :value="item.name"
            @change="selectChange(item, $event)"
          />
        </el-checkbox-group>
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
        item-key="key"
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
    />
  </div>
</template>
<script lang="ts" setup>
  import controlListData from './controlList'
  import draggable from 'vuedraggable-es'
  import {computed, ref, onMounted, nextTick} from 'vue'
  import {useRoute} from 'vue-router'
  import type {Component} from '@/types/form'
  import UseTemplate from './template.vue'
  import {getRequest} from '@/api'
  import {stringToObj, jsonParseStringify} from '@/utils/design'
  import {useDesignFormStore} from "@/store/form";

  const designStore = useDesignFormStore()
  const route = useRoute()
  const formDataList = ref([])
  // 默认搜索允许显示的字段
  const hasSelected = ref([])
  const searchField = [
    'input',
    'radio',
    'checkbox',
    'select',
    'datePicker',
    'timePicker',
    'inputNumber',
    'cascader',
    'component'
  ]
  const isSearch = computed(() => {
    return designStore.designType === 'designSearch'
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
            temp.push({title: item.title, children: filter})
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
    getRequest('designById', {id: formId}).then((res: any) => {
      const data = stringToObj(res.data.data)
      if (data && data.list) {
        forEachGetData(data.list)
      }
    })
  }
  // 筛选设计时左则勾选已有表单字段
  const forEachGetData = (data: Component[]) => {
    data.forEach((item: any) => {
      if (['grid', 'tabs', 'card'].includes(item.type)) {
        item.columns.forEach((col: any) => {
          forEachGetData(col.list)
        })
      } else if (item.type === 'div') {
        forEachGetData(item.list)
      } else if (searchField.includes(item.type)) {
        formDataList.value.push(item)
        //判断当前字段是否已在设计列表中
        const has = designStore.designData.some((s: any) => s.name === item.name)
        if (has) {
          hasSelected.value.push(item.name)
        }
      }
    })
  }
  const selectChange = (obj: Component, val: boolean) => {
    if (val) {
      // 勾选时追加
      const newObj = jsonParseStringify(obj)
      delete newObj.customRules
      if (newObj.formItem.reules) {
        delete newObj.formItem.reules
      }
      designStore.setDesignData(newObj, true)
    }
  }
  // 使用模板
  const useTemplateEl = ref()
  const useTemplateClick = () => {
    useTemplateEl.value.open()
  }
  onMounted(() => {
    // 设计搜索表单时加载
    nextTick(() => {
      const {id} = route.query
      if (isSearch.value && id) {
        getFormField(id)
      }
    })
  })
</script>
