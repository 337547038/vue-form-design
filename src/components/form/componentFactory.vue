<template>
  <div
    v-show="getVShow"
    class="group"
    :class="{
      ['group-' + element.type]: true,
      [element.className]: element.className,
      active: designStore.getIsActive(element)
    }"
    :style="getFormItemStyle(element.span)"
    @click.stop="selectClick(element)"
  >
    <template v-if="element.type === 'txt'">
      <div
        v-bind="element.control"
        v-html="element.control?.modelValue"
      />
    </template>
    <template v-else-if="element.type === 'title'">
      <div
        class="title"
        v-bind="element.control"
      >
        <span v-html="element.control?.modelValue" />
        <tooltips
          v-if="element?.help"
          :content="element?.help"
        />
      </div>
    </template>
    <template v-else-if="element.type === 'inputSlot' && !isDesignType">
      <!--  除设计外其他无需处理-->
    </template>
    <template v-else-if="element.type === 'table'">
      <design-form
        v-if="isDesignType"
        :data="element.list"
        data-nested="not-nested"
        data-type="table"
      />
      <child-table
        v-else
        :data="element"
      />
    </template>
    <template v-else-if="element.type === 'grid'">
      <el-row
        class="form-grid"
      >
        <el-col
          v-for="(col, i) in element.columns"
          v-bind="col.control"
          :key="i"
          class="form-col"
          :class="{
            'active-col': designStore.getIsActive(col),
            [col.className]: col.className
          }"
          @click.stop="selectClick(col, i)"
        >
          <design-form
            :data="col.list"
            data-nested="not-nested"
            data-type="grid"
          />
          <div
            v-if="isDesignType"
            class="drag-control drag-control-del"
          >
            <div class="item-control">
              <i
                class="icon-del"
                @click.stop="delGridChild(i, element.columns)"
              />
            </div>
          </div>
        </el-col>
      </el-row>
    </template>
    <template v-else-if="element.type === 'tabs'">
      <el-tabs
        v-bind="element.control"
      >
        <el-tab-pane
          v-for="(item, tIndex) in element.columns"
          :key="tIndex"
          :label="item.label"
        >
          <design-form
            :data="item.list"
            data-nested="not-nested"
            data-type="tabs"
          />
        </el-tab-pane>
      </el-tabs>
    </template>
    <template v-else-if="element.type === 'card'">
      <el-collapse
        model-value="1"
        v-bind="element.control"
      >
        <el-collapse-item
          v-for="(item, tIndex) in element.columns"
          :key="tIndex"
          :title="item.label"
          name="1"
        >
          <template
            v-if="item.help"
            #title
          >
            {{ item.label }}
            <tooltips :content="item.help" />
          </template>
          <design-form
            :data="item.list"
            data-nested="not-nested"
            data-type="card"
          />
        </el-collapse-item>
      </el-collapse>
    </template>
    <template v-else-if="element.type === 'flex'">
      <design-form
        v-if="isDesignType"
        :data="element.list"
        data-nested="not-nested"
        data-type="flex"
      />
      <flex-box
        v-else
        :data="element"
      />
      <el-button
        v-if="element?.addBtnText && isDesignType"
        size="small"
      >
        {{ element?.addBtnText }}
      </el-button>
    </template>
    <template v-else-if="element.type === 'div'">
      <div
        class="div-layout"
        v-bind="element.control"
      >
        <design-form
          :data="element.list"
          data-type="div"
        />
      </div>
    </template>
    <template v-else-if="element.type === 'button'">
      <el-button
        v-bind="element.control"
        @click="clickBtn(element.control.key)"
      >
        {{ element.control?.label }}
      </el-button>
    </template>
    <form-item
      v-else
      v-model="formValue[element.name]"
      :data="element"
    />
    <slot />
  </div>
</template>
<script setup lang="ts">
  import {computed, inject} from 'vue'
  import type {Component} from "@/types/form";
  import FormItem from "./formItem.vue";
  import {formatNumber} from "@/utils/design";
  import Tooltips from '@/components/tooltip/index.vue'
  import DesignForm from "./design.vue";
  import ChildTable from "./widgets/childTable.vue";
  import FlexBox from './widgets/flex.vue'
  import {storeToRefs} from "pinia";
  import {useDesignFormStore} from '@/store/form'


  const props = withDefaults(
    defineProps<{
      element: Component
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'btnClick', key: string): void
  }>()
  const designStore = useDesignFormStore()
  const store = inject('formStore')
  const {formValue} = storeToRefs(store)
  const isDesignType = computed(() => {
    return ['designForm', 'designSearch', 'designFlow'].includes(designStore.designType)
  })
  //在不同页面根据设定的隐藏条件是否显示
  const getVShow = computed(() => {
    const {displayAdd, displayEdit, displayDetail, conditionalDisplay} = props.element
    //添加页隐藏
    const add = store.formType === 'add' && displayAdd
    const edit = store.formType === 'edit' && displayEdit
    const detail = store.formType === 'detail' && displayDetail
    if (add || edit || detail) {
      return false
    }
    // 条件禁用表达式执行
    if (conditionalDisplay && !isDesignType.value) {
      try {
        const conditionFn = new Function('$', `return (${conditionalDisplay})`)
        return !conditionFn(formValue.value)
      } catch (e) {
        console.warn('条件禁用表达式执行失败：', conditionalDisplay, e)
        return true
      }
    }
    return true
  })
  /**
   * 返回栅格宽度
   * @param span
   */
  const getFormItemStyle = (span: string | number) => {
    const numberSpan = formatNumber(span)
    if (numberSpan === 0) {
      return {width: 'auto', margin: '0 5px'}
    }
    if (numberSpan) {
      return {width: (numberSpan / 24) * 100 + '%'}
    }
  }
  const clickBtn = (key: string) => {
    emits('btnClick', key)
  }

  //=======grid
  const selectClick = (item: Component) => {
    designStore.setSelectComponent(item)
  }
  const delGridChild = (index: number, columns: any) => {
    columns.splice(index, 1)
  }
</script>