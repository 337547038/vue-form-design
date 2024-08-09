<template>
  <div
    class="group"
    :class="{
      ['group-' + element.type]: true,
      active: active === getGroupName(element)
    }"
    :style="getFormItemStyle(element)"
    @click.stop="groupClick(element)"
    v-show="linksShow(element)"
    v-if="linksIf(element)"
  >
    <template v-if="element.type === 'tabs'">
      <div class="form-tabs">
        <el-tabs v-bind="element.control" :class="[element.config?.className]">
          <el-tab-pane
            v-for="(item, tIndex) in element.columns"
            :label="item.label"
            :key="tIndex"
          >
            <form-group :data="item.list" data-type="not-nested" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </template>
    <template v-else-if="element.type === 'title'">
      <div
        class="title"
        :class="[element.config?.className]"
        v-bind="element.control"
      >
        <span v-html="element.control?.modelValue"></span>
        <tooltips :content="element.config?.help" v-if="element.config?.help" />
      </div>
    </template>
    <template v-else-if="element.type === 'txt'">
      <div
        v-bind="element.control"
        :class="[element.config?.className]"
        v-html="element.control?.modelValue"
      ></div>
    </template>
    <template v-else-if="element.type === 'table'">
      <div class="form-table" v-if="formProps.type === 5">
        <form-group :data="element.list" data-type="not-nested" />
      </div>
      <child-table v-else :data="element" />
    </template>
    <template v-else-if="element.type === 'grid'">
      <el-row class="form-row" :class="[element.config?.className]">
        <el-col
          v-for="(col, i) in element.columns"
          class="form-col"
          :class="{
            'active-col': active === getGroupName(col, i),
            [col.className]: col.className
          }"
          v-bind="col.attr"
          :key="i"
          @click.stop="groupClick(col, i)"
        >
          <form-group :data="col.list" data-type="not-nested" />
          <div class="drag-control" v-if="formProps.type === 5">
            <div class="item-control">
              <i
                class="icon-del"
                @click.stop="delGridChild(i as number, element.columns)"
              ></i>
            </div>
          </div>
        </el-col>
      </el-row>
    </template>
    <template v-else-if="element.type === 'card'">
      <el-collapse model-value="1">
        <el-collapse-item :title="element.formItem?.label" name="1">
          <template #title v-if="element.config?.help">
            {{ element.formItem.label }}
            <tooltips :content="element.config?.help" />
          </template>
          <form-group :data="element.list" data-type="not-nested" />
        </el-collapse-item>
      </el-collapse>
    </template>
    <template v-else-if="element.type === 'divider'">
      <el-divider v-bind="element.control"
        >{{ element.control?.modelValue || element.formItem?.label }}
      </el-divider>
    </template>
    <template v-else-if="element.type === 'div'">
      <div
        class="div-layout"
        v-bind="element.control"
        :class="{
          [element.config?.className]: element.config?.className
        }"
      >
        <form-group :data="element.list" data-type="not-nested" />
      </div>
    </template>
    <template v-else-if="element.type === 'flex'">
      <form-group
        :data="element.list"
        data-type="not-nested"
        v-if="formProps.type === 5"
      />
      <flex-box :data="element" v-else />
      <el-button
        style="position: relative; top: -28px; left: 10px"
        v-if="element.config?.addBtnText && formProps.type === 5"
        size="small"
        >{{ element.config?.addBtnText }}</el-button
      >
    </template>
    <template v-else-if="element.type === 'button'">
      <div :class="[element.config?.className]">
        <el-button
          v-bind="element.control"
          @click="clickBtn(element.control)"
          >{{ element.control?.label }}</el-button
        >
      </div>
    </template>
    <template v-else-if="element.type === 'inputSlot' && formProps.type !== 5">
      <!--  除设计外其他无需处理-->
    </template>
    <form-item v-else :data="element" />
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
  import FormGroup from './formGroup.vue'
  import FlexBox from './flexBox.vue'
  import Tooltips from '../tooltip/index.vue'
  import FormItem from './formItem.vue'
  import ChildTable from './childTable.vue'
  import { FormList } from '@/types/form'
  import { inject } from 'vue'
  import {
    constFormBtnEvent,
    constFormProps,
    getGroupName
  } from '@/utils/design'
  const formProps = inject(constFormProps, {}) as any
  //按钮点击事件
  const injectBtnEvent = inject(constFormBtnEvent)
  withDefaults(
    defineProps<{
      element: FormList
      active?: string // 设计时是当前选中的name
    }>(),
    {
      /*data: () => {
        return []
      }*/
    }
  )
  const emits = defineEmits<{
    (e: 'groupClick', obj: FormList, type?: string): void
    (e: 'changeStatus', status: boolean): void
  }>()
  /**
   * 返回栅格宽度
   * @param ele
   */
  const getFormItemStyle = (ele: FormList) => {
    if (ele.config?.span === 0) {
      return { width: 'auto', margin: '0 5px' }
    }
    if (ele.config && ele.config.span) {
      return { width: (ele.config.span / 24) * 100 + '%' }
    }
  }
  /**
   * 当前组点击事件
   * @param item
   * @param ele
   */
  const groupClick = (item: any, ele?: string) => {
    emits('groupClick', item, ele)
  }

  /**
   * 控件按钮点击事件
   * @param control
   */
  const clickBtn = (control: any) => {
    // 0: '提交表单',
    // 1: '重置表单',
    // 2: '取消返回',
    // 3: '无动作(自定义)'
    if (formProps.value.type !== 5) {
      // 非设计模式才触发事件
      injectBtnEvent && injectBtnEvent(control)
    }
  }
  /**
   * 删除grid指定列
   */
  const delGridChild = (index: number, columns: any) => {
    columns.splice(index, 1)
  }
  /**
   * 根据关联条件显示或隐藏当前组
   * @param list
   */
  const linksShow = (list: FormList) => {
    // 隐藏/禁用显示处理逻辑
    if (!list.config) {
      return true
    }
    const { type } = formProps.value
    const hidden = list.config.hidden
    if (hidden && type !== 5) {
      const Fn = new Function('$', `return (${hidden})`)
      return !Fn(formProps.value.model) // pass=true满足条件隐藏
    }
    return true
  }
  /**
   * 根据表单设置不显示指定字段
   * @param obj
   */
  const linksIf = (obj: FormList) => {
    const { type } = formProps.value
    const { config: { displayAdd, displayEdit, displayDetail } = {} } = obj
    switch (type) {
      case 1: // 编辑页 || 新增页
        return !displayAdd
      case 2: // 编辑
        return !displayEdit
      case 3: // 查看
      case 4:
        return !displayDetail
    }
    // 如果当前字段的name值存在于表单数据的vIf中，则不显示
    const vIf: string | string[] = formProps.value.hideField
    if (vIf?.length > 0 && obj.name) {
      return vIf.indexOf(obj.name) === -1 // 存在时返回false隐藏
    }
    return true
  }
</script>
