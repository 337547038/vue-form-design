<!-- Created by 337547038 on 2021/9/8. -->
<template>
  <draggable
    itemKey="id"
    :list="dataList"
    name="fade"
    class="drag"
    v-bind="{
      group: 'form',
      ghostClass: 'ghost',
      animation: 200,
      handle: '.drag-move',
      disabled: state.type !== 4
    }"
    @add="draggableAdd"
  >
    <template #item="{ element, index }">
      <div
        class="group"
        :class="{
          ['group-' + element.type]: true,
          active: activeKey === element.name
        }"
        :style="getFormItemStyle(element)"
        @click.stop="groupClick(element)"
        v-show="linksShow(element, index)"
        v-if="linksIf(element)"
      >
        <template v-if="element.type === 'tabs'">
          <div class="form-tabs">
            <el-tabs v-bind="element.control" :class="[element.className]">
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
            :class="[element.className]"
            v-bind="element.control"
          >
            <span v-html="element.control.modelValue"></span>
            <Tooltips
              :content="element.config.help"
              v-if="element.config.help"
            />
          </div>
        </template>
        <template v-else-if="element.type === 'table'">
          <div class="form-table" v-if="state.type === 4">
            <form-group :data="element.list" data-type="not-nested" />
          </div>
          <child-table v-else :data="element" :type="state.type" />
        </template>
        <template v-else-if="element.type === 'grid'">
          <el-row class="form-row" :class="[element.className]">
            <el-col
              class="form-col"
              :class="{
                'active-col': activeKey === col.name,
                [col.className]: col.className
              }"
              v-bind="col.attr"
              v-for="(col, i) in element.columns"
              :key="i"
              @click.stop="groupClick(col, 'gridChild')"
            >
              <form-group :data="col.list" data-type="not-nested" />
              <div class="drag-control" v-if="state.type === 4">
                <div class="item-control">
                  <i
                    class="icon-del"
                    @click.stop="click('delGridChild', i, element.columns)"
                  ></i>
                </div>
              </div>
            </el-col>
          </el-row>
        </template>
        <template v-else-if="element.type === 'card'">
          <el-collapse model-value="1">
            <el-collapse-item :title="element.item.label" name="1">
              <template #title v-if="element.help">
                {{ element.item.label }}
                <Tooltips :content="element.help" />
              </template>
              <form-group :data="element.list" data-type="not-nested" />
            </el-collapse-item>
          </el-collapse>
        </template>
        <template v-else-if="element.type === 'divider'">
          <el-divider v-bind="element.control"
            >{{ element.item && element.item.label }}
          </el-divider>
        </template>
        <template v-else-if="element.type === 'div'">
          <div
            class="div-layout"
            v-bind="element.control"
            :class="[element.className]"
          >
            <form-group :data="element.list" data-type="not-nested" />
          </div>
        </template>
        <template v-else-if="element.type === 'flex'">
          <form-group
            :data="element.list"
            data-type="not-nested"
            v-if="state.type === 4"
          />
          <flex-box :data="element" :type="state.type" v-else />
          <el-button
            style="position: relative; top: -28px; left: 10px"
            v-if="element.config.add && state.type === 4"
            size="small"
            >{{ element.config.add }}</el-button
          >
        </template>
        <form-item
          v-else
          :data="element"
          v-model="element.control.modelValue"
        />
        <template v-if="state.type === 4">
          <div class="drag-control">
            <div class="item-control">
              <i
                class="icon-plus"
                @click.stop="click('gridAdd', index, element)"
                v-if="state.gridAdd"
                title="添加列"
              ></i>
              <i
                class="icon-clone"
                @click.stop="click('clone', index, element)"
                v-if="state.clone"
                title="克隆"
              ></i>
              <i class="icon-del" @click.stop="click('del', index)"></i>
            </div>
            <div class="drag-move icon-move"></div>
          </div>
          <div class="tooltip">{{ element.name }}</div>
        </template>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
  import { reactive, computed, ref, watch, inject, onUnmounted } from 'vue'
  import Draggable from 'vuedraggable-es'
  import FormItem from './formItem.vue'
  import ChildTable from './childTable.vue'
  import Tooltips from './tooltip.vue'
  import FlexBox from './flexBox.vue'
  import { useDesignFormStore } from '@/store/designForm'
  import type { FormList } from '../types'
  import { constFormOtherData } from './utils'

  const props = withDefaults(
    defineProps<{
      data: FormList[]
    }>(),
    {
      data: () => {
        return []
      }
    }
  )
  /*  const emits = defineEmits<{
    (e: 'update:data', value: FormList[]): void
  }>()*/
  const store = useDesignFormStore()
  const formOtherData = inject(constFormOtherData, {}) as any

  const state = reactive({
    clone: true, // 允许clone
    gridAdd: false,
    type: formOtherData.type
  })
  const dataList = ref(props.data)
  watch(
    () => props.data,
    (v: FormList[]) => {
      dataList.value = v
    }
  )
  const activeKey = computed(() => {
    return store.activeKey
  })

  const indexType = (type: string) => {
    const controlType = ['grid', 'table', 'tabs', 'div', 'flex']
    return controlType.includes(type)
  }
  // 删除或复制
  const click = (type: string, index: number, item: any) => {
    if (state.type !== 4) {
      return // 非设计模式
    }
    if (type === 'clone') {
      const key = item.type + new Date().getTime().toString()
      const newItem = JSON.parse(JSON.stringify(item))
      dataList.value.splice(index, 0, Object.assign(newItem, { name: key }))
    } else if (type === 'del') {
      dataList.value.splice(index, 1)
      // 清空右侧栏信息
      store.setActiveKey('')
      store.setControlAttr({})
    } else if (type === 'gridAdd') {
      item.columns.push({
        list: [],
        attr: { span: 12 }
      })
    } else if (type === 'delGridChild') {
      item.splice(index, 1)
    }
  }
  const draggableAdd = (evt: any) => {
    if (state.type !== 4) {
      return // 非设计模式
    }
    const newIndex = evt.newIndex
    const key = new Date().getTime().toString()
    const obj: any = dataList.value[newIndex]
    const isNested = evt.target && evt.target.getAttribute('data-type') // 不能嵌套
    if (
      isNested === 'not-nested' &&
      (indexType(obj.type) || obj.type == 'card')
    ) {
      // 卡片也不能嵌套，但需要item项
      dataList.value.splice(newIndex, 1)
      return
    }
    if (!obj) {
      return
    }
    const label = obj.label
    delete obj.label
    delete obj.icon
    let objectOther = {}
    if (!indexType(obj.type)) {
      objectOther = {
        item: {
          label: label,
          showLabel: false
        }
      }
    }
    Object.assign(obj, { name: obj.type + key }, objectOther)
    groupClick(obj)
  }
  // 点击激活当前
  const groupClick = (item: any, type?: string) => {
    // 设计模式下才执行
    if (state.type !== 4) {
      return
    }
    if (type === 'gridChild') {
      if (!item.name) {
        item.name = 'gridChild' + new Date().getTime().toString()
      }
      item.type = type
    }
    store.setActiveKey(item.name)
    store.setControlAttr(item)
    // grid时显示添加列按钮
    state.gridAdd = item.type === 'grid'
    state.clone = !indexType(item.type)
  }
  // 返回栅格宽度
  const getFormItemStyle = (ele: FormList) => {
    if (ele.config && ele.config.span) {
      return { width: (ele.config.span / 24) * 100 + '%' }
    }
  }
  // 根据关联条件显示隐藏当前项
  const linksShow = (el: FormList, index: number) => {
    // 当前项设置了关联条件，当关联主体的值等于当前组件设定的值时
    if (!el.config || !formOtherData.model.value) {
      return true
    }
    const key = el.config.linkKey
    const value = el.config.linkValue
    const linkResult = el.config.linkResult
    if (key && value && state.type !== 4) {
      const Fn = new Function('$', `return (${value})`)
      const pass = Fn(formOtherData.model.value)
      if (linkResult === 'disabled') {
        // 设置为disabled后返回显示状态
        dataList.value[index].control.disabled = pass
        return true
      } else {
        return pass
      }
    }
    return true
  }
  // 根据表单设置不显示指定字段
  const linksIf = (obj: FormList) => {
    const { type, isEdit } = formOtherData
    const { config: { disabledAdd, disabledEdit, disabledDetail } = {} } = obj
    if (type === 1) {
      if ((isEdit && disabledEdit) || (!isEdit && disabledAdd)) {
        // 编辑页 || 新增页
        return false // 不显示
      }
    } else if (type === 2 || type === 3) {
      // 查看
      if (disabledDetail) {
        return false
      }
    }
    // 如果当前字段的name值存在于表单数据的vIf中，则不显示
    const vIf: string | string[] = formOtherData.hideField
    if (vIf?.length > 0) {
      return vIf.indexOf(obj.name) === -1 // 存在时返回false隐藏
    }
    return true
  }
  onUnmounted(() => {
    console.log('formGroup onUnmounted')
    dataList.value = {}
    formOtherData.value = {}
  })
</script>
