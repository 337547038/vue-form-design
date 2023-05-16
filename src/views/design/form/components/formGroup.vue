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
      disabled: type !== 5
    }"
    @add="draggableAdd"
  >
    <template #item="{ element, index }">
      <div
        class="group"
        :class="{
          ['group-' + element.type]: true,
          active: activeKey === getGroupName(element)
        }"
        :style="getFormItemStyle(element)"
        @click.stop="groupClick(element)"
        v-show="linksShow(element, index)"
        v-if="linksIf(element)"
      >
        <template v-if="element.type === 'tabs'">
          <div class="form-tabs">
            <el-tabs
              v-bind="element.control"
              :class="[element.config?.className]"
            >
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
            :class="[element.config.className]"
            v-bind="element.control"
          >
            <span v-html="element.control.modelValue"></span>
            <Tooltips
              :content="element.config.help"
              v-if="element.config.help"
            />
          </div>
        </template>
        <template v-else-if="element.type === 'txt'">
          <div
            v-bind="element.control"
            :class="[element.config.className]"
            v-html="element.control.modelValue"
          ></div>
        </template>
        <template v-else-if="element.type === 'table'">
          <div class="form-table" v-if="type === 5">
            <form-group :data="element.list" data-type="not-nested" />
          </div>
          <child-table v-else :data="element" />
        </template>
        <template v-else-if="element.type === 'grid'">
          <el-row class="form-row" :class="[element.className]">
            <el-col
              class="form-col"
              :class="{
                'active-col': activeKey === getGroupName(col),
                [col.className]: col.className
              }"
              v-bind="col.attr"
              v-for="(col, i) in element.columns"
              :key="i"
              @click.stop="groupClick(col, 'gridChild')"
            >
              <form-group :data="col.list" data-type="not-nested" />
              <div class="drag-control" v-if="type === 5">
                <div class="item-control">
                  <i
                    class="icon-del"
                    @click.stop="
                      click('delGridChild', i as number, element.columns)
                    "
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
            :class="{
              [element.className]: element.className,
              inline: element.config?.inline,
              [element.config?.textAlign]: element.config?.textAlign
            }"
          >
            <form-group :data="element.list" data-type="not-nested" />
          </div>
        </template>
        <template v-else-if="element.type === 'flex'">
          <form-group
            :data="element.list"
            data-type="not-nested"
            v-if="type === 5"
          />
          <flex-box :data="element" v-else />
          <el-button
            style="position: relative; top: -28px; left: 10px"
            v-if="element.config.addBtnText && type === 5"
            size="small"
            >{{ element.config.addBtnText }}</el-button
          >
        </template>
        <template v-else-if="element.type === 'button'">
          <div
            :class="[element.config?.className]"
            :style="{ 'text-align': element.config?.textAlign }"
          >
            <el-button
              v-bind="element.control"
              @click="clickBtn(element.control)"
              >{{ element.control?.label }}</el-button
            >
          </div>
        </template>
        <template v-else-if="element.type === 'inputSlot' && type !== 5">
          <!--  除设计外其他无需处理-->
        </template>
        <form-item v-else :data="element" />
        <template v-if="type === 5">
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
  import Tooltips from '../../components/tooltip.vue'
  import FlexBox from './flexBox.vue'
  import { useDesignFormStore } from '@/store/designForm'
  import type { FormList } from '../../types'
  import { constFormBtnEvent, constFormProps } from '../../utils'
  import md5 from 'md5'
  import { jsonParseStringify } from '@/utils'
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
  const store = useDesignFormStore() as any
  const formProps = inject(constFormProps, {}) as any

  const type = computed(() => {
    return formProps.value.type
  })
  const state = reactive({
    clone: true, // 允许clone
    gridAdd: false
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

  // 不能嵌套
  const notNested = (type: string) => {
    const controlType = ['grid', 'table', 'tabs', 'div', 'flex', 'card']
    return controlType.includes(type)
  }
  // 删除或复制
  const click = (action: string, index: number, item?: any) => {
    if (type.value !== 5) {
      return // 非设计模式
    }
    if (action === 'clone') {
      const key = item.type + new Date().getTime().toString()
      const newItem = jsonParseStringify(item)
      dataList.value.splice(index, 0, Object.assign(newItem, { name: key }))
    } else if (action === 'del') {
      dataList.value.splice(index, 1)
      // 清空右侧栏信息
      store.setActiveKey('')
      store.setControlAttr({})
    } else if (action === 'gridAdd') {
      item.columns.push({
        list: [],
        attr: { span: 12 }
      })
    } else if (action === 'delGridChild') {
      item.splice(index, 1)
    }
  }
  const draggableAdd = (evt: any) => {
    if (type.value !== 5) {
      return // 非设计模式
    }
    const newIndex = evt.newIndex
    const key = new Date().getTime().toString()
    const obj: any = dataList.value[newIndex]
    const isNested = evt.target && evt.target.getAttribute('data-type') // 不能嵌套
    if (isNested === 'not-nested' && notNested(obj.type)) {
      dataList.value.splice(newIndex, 1)
      return
    }
    if (!obj) {
      return
    }
    const label = obj.label || obj.item.label
    delete obj.label
    delete obj.icon
    let objectItem = {}
    // 不需要添加item的项
    const notNeedItem = [
      'txt',
      'title',
      'button',
      'table',
      'grid',
      'tabs',
      'flex',
      'div'
    ]
    if (!notNeedItem.includes(obj.type)) {
      objectItem = {
        item: {
          label: label
        }
      }
    }
    // 不需要name的组件
    let nameObj = {}
    const notNeedName = [
      'txt',
      'title',
      'button',
      'grid',
      'tabs',
      'divider',
      'div',
      'card'
    ]
    if (!notNeedName.includes(obj.type) && !obj.name) {
      nameObj = {
        name: obj.type + key
      }
    }
    Object.assign(obj, nameObj, objectItem)
    groupClick(obj)
  }
  const getGroupName = (item: any) => {
    if (item.name) {
      return item.name
    } else {
      return md5(JSON.stringify(item))
    }
  }
  // 点击激活当前
  const groupClick = (item: any, ele?: string) => {
    // 设计模式下才执行
    if (type.value !== 5) {
      return
    }
    if (ele) {
      item.type = ele
    }
    store.setActiveKey(getGroupName(item))
    store.setControlAttr(item)
    // grid时显示添加列按钮
    state.gridAdd = item.type === 'grid'
    state.clone = !notNested(item.type)
  }
  // 返回栅格宽度
  const getFormItemStyle = (ele: FormList) => {
    if (ele.config?.span === 0) {
      return { width: 'auto', margin: '0 5px' }
    }
    if (ele.config && ele.config.span) {
      return { width: (ele.config.span / 24) * 100 + '%' }
    }
  }
  // 根据关联条件显示隐藏当前项
  const linksShow = (el: FormList, index: number) => {
    // 当前项设置了关联条件，当关联主体的值等于当前组件设定的值时
    if (!el.config) {
      return true
    }
    const key = el.config.linkKey
    const value = el.config.linkValue
    const linkResult = el.config.linkResult
    if (key && value && type.value !== 5) {
      const Fn = new Function('$', `return (${value})`)
      const pass = Fn(formProps.value.model)
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
    const { type } = formProps.value
    const { config: { disabledAdd, disabledEdit, disabledDetail } = {} } = obj
    if (type === 1) {
      if (disabledAdd) {
        // 编辑页 || 新增页
        return false // 不显示
      }
    } else if (type === 2) {
      // 编辑
      if (disabledEdit) {
        return false
      }
    } else if (type === 4 || type === 3) {
      // 查看
      if (disabledDetail) {
        return false
      }
    }
    // 如果当前字段的name值存在于表单数据的vIf中，则不显示
    const vIf: string | string[] = formProps.value.hideField
    if (vIf?.length > 0 && obj.name) {
      return vIf.indexOf(obj.name) === -1 // 存在时返回false隐藏
    }
    return true
  }
  //按钮点击事件
  const injectBtnEvent = inject(constFormBtnEvent)
  const clickBtn = (control: any) => {
    // 0: '提交表单',
    // 1: '重置表单',
    // 2: '取消返回',
    // 3: '无动作(自定义)'
    if (type.value !== 5) {
      // 非设计模式才触发事件
      injectBtnEvent && injectBtnEvent(control)
    }
  }
  onUnmounted(() => {
    // console.log('formGroup onUnmounted')
    dataList.value = {}
    store.setActiveKey('')
    store.setControlAttr({})
  })
</script>
