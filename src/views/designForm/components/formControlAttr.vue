<!-- Created by 337547038 on 2021/6/1 0001. -->
<template>
  <div class="sidebar-tools">
    <el-tabs modelValue="first">
      <el-tab-pane label="字段属性" name="first">
        <el-form size="small" class="form">
          <h3>通用属性</h3>
          <template v-for="(item, index) in state.attrList" :key="index">
            <el-form-item :label="item.label">
              <el-select
                v-if="item.type === 'select'"
                :placeholder="item.placeholder"
                v-model="item.value"
                :filterable="item.path === 'name'"
                :allow-create="item.path === 'name'"
                @change="controlChange(item, $event)"
              >
                <el-option
                  v-for="(opt, key) in item.dict"
                  :key="opt"
                  :value="opt"
                  :label="item.path === 'name' ? `${key}(${opt})` : key"
                />
              </el-select>
              <el-switch
                v-else-if="item.type === 'switch'"
                v-model="item.value"
                @change="controlChange(item, $event)"
              />
              <el-input
                v-else
                :type="item.inputStyle"
                v-model="item.value"
                :placeholder="item.placeholder"
                @change="controlChange(item, $event)"
              />
            </el-form-item>
          </template>
          <el-form-item
            label="联动条件"
            v-if="
              showHide(
                [
                  'input',
                  'password',
                  'textarea',
                  'radio',
                  'checkbox',
                  'select',
                  'date',
                  'switch',
                  'number',
                  'cascader'
                ],
                true
              )
            "
          >
            <el-col :span="9">
              <el-input
                placeholder="标识名称"
                v-model="controlData.config.linkKey"
              />
            </el-col>
            <el-col :span="2" :offset="1">=</el-col>
            <el-col :span="9" :offset="1">
              <el-input
                placeholder="关联值"
                v-model="controlData.config.linkValue"
              />
            </el-col>
          </el-form-item>
          <template v-if="showHide(['tabs'], true)">
            <h3>标签配置项</h3>
            <el-form-item
              v-for="(item, index) in controlData.columns"
              :key="index"
            >
              <el-col :span="12">
                <el-input placeholder="标签配置项" v-model="item.label" />
              </el-col>
              <el-col :span="2" :offset="1">
                <i class="icon-del" @click="delSelectOption(index, 'tabs')"></i>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button @click="addSelectOption('tabs')">增加标签</el-button>
            </el-form-item>
          </template>
          <div
            v-if="showHide(['radio', 'select', 'checkbox', 'cascader'], true)"
          >
            <h3>选项配置</h3>
            <el-tabs v-model="controlData.config.type">
              <el-tab-pane label="固定选项" name="fixed">
                <div v-if="controlData.type !== 'cascader'">
                  <el-form-item
                    v-for="(item, index) in controlData.options"
                    :key="index"
                  >
                    <el-col :span="10">
                      <el-input placeholder="选项标签" v-model="item.label" />
                    </el-col>
                    <el-col :span="10" :offset="1">
                      <el-input placeholder="选项值" v-model="item.value" />
                    </el-col>
                    <el-col :span="2" :offset="1">
                      <i class="icon-del" @click="delSelectOption(index)"></i>
                    </el-col>
                  </el-form-item>
                </div>
                <el-form-item>
                  <el-button @click="addSelectOption">新增</el-button>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane name="async">
                <template #label>
                  <el-tooltip
                    content="选用动态选项时请删除固定选项数据"
                    placement="top"
                  >
                    <span
                      >动态选项<el-icon> <QuestionFilled /> </el-icon
                    ></span>
                  </el-tooltip>
                </template>
                <el-radio-group
                  class="option-radio"
                  v-model="controlData.config.source"
                  @change="controlData.config.sourceFun = ''"
                >
                  <el-radio :label="0">数据源</el-radio>
                  <el-radio :label="1"
                    >方法函数
                    <el-tooltip
                      content="适用于导出为单独的vue文件，在当前文件使用provide形式将方法传递"
                      placement="top"
                    >
                      <el-icon>
                        <QuestionFilled />
                      </el-icon>
                    </el-tooltip>
                  </el-radio>
                  <el-radio :label="2"
                    >接口字典
                    <el-tooltip
                      content="从当前数据接口dict里匹配，可减少请求数，实际项目也不是每个选项都有单独的接口。此设置需要开启表单属性-添加时从获取请求"
                      placement="top"
                    >
                      <el-icon>
                        <QuestionFilled />
                      </el-icon>
                    </el-tooltip>
                  </el-radio>
                </el-radio-group>
                <el-form-item>
                  <el-input
                    v-model="controlData.config.sourceFun"
                    :placeholder="
                      getOptionPlaceholder(controlData.config.source)
                    "
                  >
                    <template #prepend v-if="!controlData.config.source">
                      <el-select
                        v-model="controlData.config.request"
                        style="width: 80px"
                      >
                        <el-option label="get" value="get" />
                        <el-option label="post" value="post" />
                      </el-select>
                    </template>
                  </el-input>
                </el-form-item>
              </el-tab-pane>
            </el-tabs>
          </div>
          <template
            v-if="
              !state.isSearch &&
              showHide([
                'txt',
                'title',
                'table',
                'grid',
                'tabs',
                'card',
                'switch',
                'gridChild',
                'tableColumn',
                'divider'
              ])
            "
          >
            <h3>校验设置</h3>
            <div v-if="showHide(['input', 'password', 'component'], true)">
              <el-form-item v-if="formData.config?.rulesComm?.length > 0">
                <el-select
                  placeholder="快速选择"
                  :multiple="true"
                  v-model="controlData.rulesComm"
                >
                  <el-option
                    v-for="item in formData.config?.rulesComm"
                    :label="`${item.key}(${item.message})`"
                    :value="item.key"
                    :key="item.key"
                  />
                </el-select>
              </el-form-item>
              <el-form-item
                v-for="(item, index) in controlData.customRules"
                :key="item.type"
              >
                <el-input v-model="item.message" placeholder="校验提示信息">
                  <template #prepend>
                    <el-select v-model="item.type" style="width: 80px">
                      <el-option
                        v-for="list in state.customRulesList"
                        :key="list.type"
                        :label="list.label"
                        :value="list.type"
                      />
                    </el-select>
                  </template>
                  <template #append>
                    <i class="icon-del" @click="delAddRules(index)"></i>
                  </template>
                </el-input>
                <el-input
                  placeholder="正则表达式"
                  v-model="item.rules"
                  v-if="item.type === 'rules'"
                />
                <el-input
                  placeholder="方法名称"
                  v-model="item.methods"
                  v-if="item.type === 'methods'"
                />
              </el-form-item>
              <el-form-item>
                <el-button @click="addRulesFast">快速添加</el-button>
                <el-button @click="addRules"
                  >编辑校验规则
                  <el-tooltip
                    content="可参考UI组件表单校验，<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>详情点击</a>"
                    placement="top"
                    raw-content
                  >
                    <el-icon>
                      <QuestionFilled />
                    </el-icon>
                  </el-tooltip>
                </el-button>
              </el-form-item>
            </div>
            <el-form-item v-else>
              <el-checkbox
                :modelValue="checkboxRequired"
                @change="requiredChange"
                >必填
              </el-checkbox>
              <el-input
                placeholder="自定义必填错误提示"
                v-model="controlData.item.rules[0].message"
                v-if="controlData.item?.rules && controlData.item?.rules[0]"
              />
            </el-form-item>
          </template>
          <div v-if="showHide(['grid', 'card', 'gridChild', 'divider'])">
            <h3>其他属性</h3>

            <el-button size="small" @click="openAttrDialog"
              >添加属性
              <el-tooltip content="可添加当前组件所有prop属性" placement="top">
                <el-icon>
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </el-button>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="表单属性" name="second">
        <el-form size="small" class="form">
          <el-form-item
            v-for="(item, index) in state.formAttr"
            :label="item.label"
            :key="index"
          >
            <el-select
              v-if="item.type === 'select'"
              v-model="formInfo[item.value]"
            >
              <el-option
                :label="opt.label"
                v-for="opt in item.options"
                :key="opt.label"
                :value="opt.value"
              />
            </el-select>
            <el-input
              v-else
              v-model="formInfo[item.value]"
              :placeholder="item.placeholder"
            />
          </el-form-item>
          <el-form-item v-if="!state.isSearch" label="提交按钮">
            <el-input
              placeholder="提交按钮文案，空不显示"
              v-model="formBtn.confirm"
              @change="formAttChange('confirm', $event)"
            />
          </el-form-item>
          <el-form-item v-if="!state.isSearch" label="取消返回按钮">
            <el-input
              placeholder="取消返回按钮文案，空不显示"
              v-model="formBtn.cancel"
              @change="formAttChange('cancel', $event)"
            />
          </el-form-item>
          <el-form-item>
            <template #label
              >添加时从获取请求
              <el-tooltip
                content="新增表单数据时，从接口获取新增初始数据"
                placement="top"
              >
                <el-icon>
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </template>
            <el-switch
              v-model="addLoad"
              @change="formAttChange('addLoad', $event)"
            />
          </el-form-item>
          <el-form-item>
            <el-button v-if="!state.isSearch" @click="rulesCommClick"
              >编辑全局校验规则
              <el-tooltip
                content="当前表单通用校验规则，即同一规则可应用于不同的控件。可参考UI组件表单校验(每组必须添加不同的key)，<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>详情点击</a>"
                placement="top"
                raw-content
              >
                <el-icon>
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </el-button>
            <el-button @click="editFormStyle"
              >编辑表单样式
              <el-tooltip
                content="当前表单应用页的样式，类似于.vue文件中的<style scoped>中的样式"
                placement="top"
              >
                <el-icon>
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, computed, watch, toRef, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { getRequest } from '@/api'
  import { useDesignFormStore } from '@/store/designForm'
  import { FormData } from '../types'

  const props = withDefaults(
    defineProps<{
      formData: FormData
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'openDialog', data: any, type?: any): void
    (e: 'update:formData', data: FormData): void
  }>()
  const formInfo = toRef(props.formData, 'form')
  const addLoad = ref(props.formData.config?.addLoad)

  const formBtn: any = ref(props.formData.config?.submitBtn || {})
  const store = useDesignFormStore()
  const route = useRoute()
  const state = reactive<any>({
    formAttr: [
      { label: '表单名称', value: 'name' },
      {
        label: '表单标签宽度',
        value: 'labelWidth',
        placeholder: '表单label宽，如180px'
      },
      {
        label: '表单样式名称',
        value: 'class',
        placeholder: '额外添加的表单class类名'
      },
      {
        label: '组件尺寸',
        value: 'size',
        type: 'select',
        options: [
          { label: 'large', value: 'large' },
          { label: 'default', value: 'default' },
          { label: 'small', value: 'small' }
        ]
      }
    ],
    dataSourceList: {},
    customRulesList: [
      {
        type: 'required',
        label: '必填'
      },
      {
        type: 'mobile',
        label: '手机号码'
      },
      {
        type: 'tel',
        label: '固话'
      },
      {
        type: 'phone',
        label: '固话或手机'
      },
      {
        type: 'email',
        label: '邮箱'
      },
      {
        type: 'int',
        label: '正整数'
      },
      {
        type: 'number',
        label: '数字'
      },
      {
        type: 'card',
        label: '身份证'
      },
      {
        type: 'rules',
        label: '自定义正则'
      },
      {
        type: 'methods',
        label: '自定义方法'
      }
    ], // 自定义校验规则
    isSearch: route.query.type === 'search',
    attrList: []
  })
  const controlData = computed<any>(() => {
    return store.controlAttr
  })
  watch(
    () => controlData.value,
    (val) => {
      if (val && Object.keys(val)?.length > 0) {
        setAttrList()
      } else {
        state.attrList = []
      }
    }
  )
  // 设置通用属性
  const setAttrList = () => {
    const {
      control = {},
      className = '',
      type,
      name,
      config = {},
      item = {},
      attr = {}
    } = controlData.value
    let columnIndex = false // 是否显示序号列
    //let columnOperate = false // 是否显示操作列
    if (type === 'table') {
      // 表格时处理
      const list = controlData.value && controlData.value.list
      if (list && list.length > 0) {
        columnIndex = list[0].type === 'index'
      }
      /*if (list && list.length > 0) {
        columnOperate = list[list.length - 1].typeColumn === 'operate'
      }*/
    }
    state.attrList = [
      {
        label: '自定义Class',
        value: className,
        placeholder: '样式类名',
        path: 'config.className'
      },
      {
        label: '字段标识',
        value: name,
        type: Object.keys(state.dataSourceList).length > 0 ? 'select' : 'text',
        placeholder: '字段唯一标识，对应数据库',
        dict: state.dataSourceList,
        path: 'name',
        vHide: [
          'grid',
          'tabs',
          'card',
          'title',
          'gridChild',
          'tableColumn',
          'divider',
          'txt'
        ],
        eventName: 'filedNameKey'
      },
      {
        label: '占位内容',
        value: control.placeholder,
        placeholder: 'placeholder',
        path: 'control.placeholder',
        vShow: [
          'password',
          'input',
          'textarea',
          'select',
          'date',
          'number',
          'datePicker',
          'tinymce',
          'timePicker'
        ]
      },
      {
        label: 'label值',
        value: item.label,
        path: 'item.label',
        vHide: ['table', 'grid', 'tabs', 'title', 'gridChild']
      },
      {
        label: '隐藏label',
        value: item.showLabel,
        path: 'item.showLabel',
        type: 'switch',
        vHide: [
          'table',
          'grid',
          'tabs',
          'title',
          'gridChild',
          'divider',
          'card'
        ]
      },
      {
        label: '帮助信息',
        value: config.help,
        path: 'config.help',
        vHide: ['table', 'grid', 'tabs', 'gridChild', 'divider']
      },
      {
        label: '表单栅格',
        value: config.span,
        placeholder: '表单区域栅格宽',
        path: 'config.span',
        vHide: ['table', 'grid', 'gridChild', 'divider'],
        isNum: true
      },
      {
        label: '文本值',
        value: control.modelValue,
        placeholder: '支持html',
        path: 'control.modelValue',
        vShow: ['txt'],
        inputStyle: 'textarea'
      },
      {
        label: '设为密码',
        value: type,
        type: 'select',
        dict: { 文本: 'input', 密码: 'password' },
        path: 'type',
        vShow: ['input', 'password'],
        vIf: state.isSearch // 搜索模式下隐藏 为true
      },
      {
        label: '文本域高度',
        value: control.rows,
        placeholder: '输入框行数',
        path: 'control.rows',
        vShow: ['textarea'],
        isNum: true
      },
      {
        label: '前缀',
        value: config.prepend,
        placeholder: '文本前缀',
        path: 'config.prepend',
        vShow: ['input', 'password']
      },
      {
        label: '后缀',
        value: config.append,
        placeholder: '文本后缀',
        path: 'config.append',
        vShow: ['input', 'password']
      },
      {
        label: '是否多选',
        value: control.multiple,
        path: 'control.multiple',
        type: 'switch',
        vShow: ['select'],
        eventName: 'selectMultiple'
      },
      {
        label: '是否禁用',
        value: control.disabled,
        path: 'control.disabled',
        type: 'switch',
        vShow: [
          'input',
          'password',
          'textarea',
          'radio',
          'checkbox',
          'select',
          'date',
          'switch',
          'number',
          'cascader',
          'upload',
          'rate',
          'tinymce'
        ],
        vIf: state.isSearch
      },
      {
        label: '是否禁用编辑',
        value: config.editDisabled,
        path: 'config.editDisabled',
        type: 'switch',
        vShow: [
          'input',
          'password',
          'textarea',
          'radio',
          'checkbox',
          'select',
          'date',
          'switch',
          'number',
          'cascader',
          'upload'
        ],
        vIf: state.isSearch
      },
      {
        label: '添加页隐藏',
        value: config.disabledAdd,
        path: 'config.disabledAdd',
        type: 'switch',
        vIf: state.isSearch
      },
      {
        label: '编辑页隐藏',
        value: config.disabledEdit,
        path: 'config.disabledEdit',
        type: 'switch',
        vIf: state.isSearch
      },
      {
        label: '详情页隐藏',
        value: config.disabledDetail,
        path: 'config.disabledDetail',
        type: 'switch',
        vIf: state.isSearch
      },
      {
        label: '标题',
        value: control.modelValue,
        path: 'control.modelValue',
        vShow: ['title']
      },
      {
        label: '占据的列数span',
        value: attr.span,
        path: 'attr.span',
        vShow: ['gridChild'],
        eventName: 'formatNumber',
        isNum: true
      },
      {
        label: '左侧的间隔格数offset',
        value: attr.offset,
        path: 'attr.offset',
        vShow: ['gridChild'],
        eventName: 'formatNumber',
        isNum: true
      },
      {
        label: '向右移动格数push',
        value: attr.push,
        path: 'attr.push',
        vShow: ['gridChild'],
        eventName: 'formatNumber',
        isNum: true
      },
      {
        label: '向左移动格数pull',
        value: attr.pull,
        path: 'attr.pull',
        vShow: ['gridChild'],
        eventName: 'formatNumber',
        isNum: true
      },
      {
        label: '序号列',
        value: columnIndex,
        type: 'switch',
        vShow: ['table'],
        eventName: 'tableColumn1'
      },
      /*{
        label: '操作列',
        value: columnOperate,
        type: 'switch',
        vShow: ['table'],
        eventName: 'tableColumn2'
      },*/
      {
        label: '组件名',
        value: config.template,
        placeholder: '全局注册的组件名称',
        path: 'config.componentName',
        vShow: ['component']
      },
      {
        label: '上传地址',
        value: control.action,
        placeholder: '图片/文件上传地址',
        path: 'control.action',
        vShow: ['upload']
      },
      {
        label: '文件字段名',
        value: control.name,
        placeholder: '上传的文件字段名',
        path: 'control.name',
        vShow: ['upload']
      },
      {
        label: '列表类型',
        value: control.listType,
        type: 'select',
        dict: {
          text: 'text',
          picture: 'picture',
          'picture-card': 'picture-card'
        },
        path: 'control.listType',
        vShow: ['upload']
      },
      {
        label: '提示文字',
        value: config.tip,
        placeholder: '提示说明文字',
        path: 'config.tip',
        vShow: ['upload']
      },
      {
        label: '按钮文本',
        value: config.btnText,
        placeholder: '上传按钮文本',
        path: 'config.btnText',
        vShow: ['upload']
      },
      {
        label: 'direction',
        type: 'select',
        dict: { horizontal: 'horizontal', vertical: 'vertical' },
        value: control.direction,
        path: 'control.direction',
        vShow: ['divider']
      },
      {
        label: 'border-style',
        value: control.borderStyle,
        path: 'control.borderStyle',
        vShow: ['divider']
      },
      {
        label: 'content-position',
        type: 'select',
        dict: { left: 'left', right: 'right', center: 'center' },
        value: control.contentPosition,
        path: 'control.contentPosition',
        vShow: ['divider']
      },
      {
        label: '最小值',
        value: control.min,
        path: 'control.min',
        vShow: ['slider'],
        eventName: 'formatNumber',
        isNum: true
      },
      {
        label: '最大值',
        value: control.max,
        path: 'control.max',
        vShow: ['rate', 'slider'],
        eventName: 'formatNumber',
        isNum: true
      },
      {
        label: '步长',
        value: control.step,
        path: 'control.step',
        vShow: ['slider'],
        eventName: 'formatNumber',
        isNum: true
      },
      {
        label: 'type',
        value: control.type,
        path: 'control.type',
        vShow: ['datePicker'],
        type: 'select',
        placeholder: '显示类型',
        dict: {
          year: 'year',
          month: 'month',
          date: 'date',
          datetime: 'datetime',
          week: 'week',
          datetimerange: 'datetimerange',
          daterange: 'daterange',
          monthrange: 'monthrange'
        }
      },
      {
        label: 'format',
        value: control.format,
        path: 'control.format',
        vShow: ['datePicker', 'timePicker'],
        placeholder: '显示在输入框中的格式'
      },
      {
        label: 'color-format',
        value: control.colorFormat,
        path: 'control.colorFormat',
        type: 'select',
        placeholder: '写入 v-model 的颜色的格式',
        dict: { hsl: 'hsl', hsv: 'hsv', hex: 'hex', rgb: 'rgb' },
        vShow: ['colorPicker']
      },
      {
        label: '文本高度',
        value: control.height,
        path: 'control.height',
        placeholder: '文本高度(预览查看效果)',
        vShow: ['tinymce']
      },
      {
        label: '文本宽度',
        value: control.width,
        path: 'control.width',
        placeholder: '文本宽度(预览查看效果)',
        vShow: ['tinymce']
      },
      {
        label: '图片上传地址',
        value: control.imgUrl,
        path: 'control.imgUrl',
        placeholder: '图片上传地址',
        vShow: ['tinymce']
      },
      {
        label: '附件上传地址',
        value: control.blobUrl,
        path: 'control.blobUrl',
        placeholder: '附件上传地址',
        vShow: ['tinymce']
      },
      {
        label: '显示模式',
        value: config.style,
        path: 'config.style',
        placeholder: '显示风格(预览查看效果)',
        type: 'select',
        dict: { default: 'default', simple: 'simple' },
        vShow: ['tinymce']
      }
    ]
    // 过滤显示对应的值
    state.attrList = state.attrList.filter((item: any) => {
      let hasFilter = true
      if (item.vShow) {
        hasFilter = item.vShow.indexOf(type) !== -1
      }
      if (item.vHide) {
        hasFilter = item.vHide.indexOf(type) === -1
      }
      if (item.vIf) {
        // 不显示vif＝true的
        hasFilter = false
      }
      return hasFilter
    })
  }
  const controlChange = (obj: any, val: any) => {
    // select多选属性，
    switch (obj.eventName) {
      case 'selectMultiple':
        if (val) {
          // 多选，将值改为数组
          controlData.value.control.modelValue = []
        } else {
          // 单选
          controlData.value.control.modelValue = ''
        }
        break
      case 'tableColumn1':
        tableColumnAdd(val)
        break
      /*case 'tableColumn2':
        tableColumnAdd(val, 1)
        break*/
      case 'formatNumber':
        // val = parseInt(val) // 将值转数值
        break
      case 'filedNameKey':
        // 选择字段标识时，同时修改显示标题
        // 根据value找key
        for (const key in state.dataSourceList) {
          if (state.dataSourceList[key] === val) {
            controlData.value.item.label = key
            controlData.value.name = val
            return
          }
        }
        break
    }
    const newVal = obj.isNum ? parseInt(val) : val // 类型为数字时转整数
    obj.path && getPropByPath(controlData.value, obj.path, newVal)
  }
  // 修改指定路径下的值
  const getPropByPath = (obj: any, path: string, val: any) => {
    let tempObj = obj
    const keyArr = path.split('.')
    let i = 0
    for (i; i < keyArr.length - 1; i++) {
      const key = keyArr[i]
      if (key in tempObj) {
        tempObj = tempObj[key]
      } else {
        throw new Error(`${key} is undefined`)
        // break
      }
    }
    const key = keyArr[i]
    const value = tempObj[keyArr[i]]
    // 检查最后一级是否存在
    /*if (!(key in tempObj)) {
    throw new Error(`${key} is undefined`)
  }*/
    if (val !== undefined) {
      tempObj[key] = val
    }
    return {
      obj: tempObj,
      key: key,
      value: value
    }
  }
  // 属性设置相关结束
  // 多选固定选项删除
  const delSelectOption = (index: number, type: string) => {
    if (type === 'tabs') {
      controlData.value.columns.splice(index, 1)
    } else {
      controlData.value.options.splice(index, 1)
    }
  }
  // 多选固定选项增加
  const addSelectOption = (type: string) => {
    if (controlData.value.type === 'cascader') {
      // 级联时打开弹窗口
      openAttrDialog()
    } else {
      if (type === 'tabs') {
        controlData.value.columns.push({
          label: '标签名称',
          list: []
        })
      } else {
        controlData.value.options.push({
          label: '',
          value: ''
        })
      }
    }
  }
  // 更多属性弹窗
  const openAttrDialog = () => {
    let editData = controlData.value.control
    if (controlData.value.type === 'cascader') {
      editData = controlData.value.options
    }
    emits('openDialog', editData, (result: any) => {
      if (controlData.value.type === 'cascader') {
        // Object.assign(controlData.value.options, result)
        controlData.value.options = result
      } else {
        controlData.value.control = {}
        Object.assign(controlData.value.control, result)
      }
    })
  }
  // 必填校验
  const requiredChange = (val: boolean) => {
    if (!controlData.value.item?.rules) {
      controlData.value.item.rules = []
    }
    if (val) {
      controlData.value.item.rules.push({
        required: true,
        message: '必填项',
        trigger: 'change'
      })
    } else {
      controlData.value.item.rules.splice(0, 1)
    }
  }
  // 添加校验规则
  const addRules = () => {
    if (!controlData.value.item?.rules) {
      controlData.value.item.rules = []
    }
    emits('openDialog', controlData.value.item?.rules, (result: any) => {
      Object.assign(controlData.value.item.rules, result)
    })
  }
  // 根据不同类型判断是否显示当前属性
  const showHide = (type: string[], show?: boolean) => {
    // show=true 条件成立显示，false符合条件隐藏
    if (
      (type && type.length === 0) ||
      Object.keys(controlData.value).length === 0
    ) {
      return false
    }
    const index = type.indexOf(controlData.value.type)
    return show ? index !== -1 : index === -1
  }
  // 子表时添加序号和操作列
  const tableColumnAdd = (val: string) => {
    const item = {
      name: 'index',
      type: 'index',
      item: {
        label: '序号'
      },
      control: {},
      config: {}
    }
    if (val) {
      controlData.value.list.unshift(item)
    } else {
      controlData.value.list.splice(0, 1)
    }
  }
  // 校验规则必填勾选设置，存在校验规则时勾选
  const checkboxRequired = computed(() => {
    const val = controlData.value && controlData.value.item?.rules
    return val && val.length > 0
  })
  // 快速添加一条校验规则
  const addRulesFast = () => {
    if (!controlData.value.customRules) {
      controlData.value.customRules = []
    }
    controlData.value.customRules.push({
      type: 'required',
      message: '',
      trigger: 'blur'
    })
  }
  // 删除一条校验规则
  const delAddRules = (index: number) => {
    controlData.value.customRules &&
      controlData.value.customRules.splice(index, 1)
  }
  // 添加编辑全局校验规则
  const rulesCommClick = () => {
    emits('openDialog', props.formData.config?.rulesComm || [], 'rules')
  }
  // 编辑表单样式
  const editFormStyle = () => {
    emits('openDialog', props.formData.config?.style || '', 'css')
  }
  const init = () => {
    const formId = route.query.formId
    if (formId) {
      // 根据选定数据源获取表单字段
      getRequest('formFiled', { id: formId })
        .then((res) => {
          if (res.data.code === 200) {
            res.data.data.forEach((item: any) => {
              state.dataSourceList[item.label] = item.name
            })
          }
          // state.loading = false
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
  // 表单按钮处理
  const formAttChange = (type: string, val: boolean | string) => {
    console.log(val)
    let newData = {}
    if (type === 'addLoad') {
      newData = {
        addLoad: val
      }
    } else {
      formBtn[type] = val
      newData = {
        submitBtn: formBtn.value
      }
    }
    emits('update:formData', Object.assign(props.formData, { config: newData }))
  }
  // 返回选项配置提示
  const getOptionPlaceholder = (type: number) => {
    switch (type) {
      case 0:
        return '数据源接口URL'
      case 1:
        return '方法名称'
      case 2:
        return '字典key，默认为字段标识'
    }
    return ''
  }
  init()
</script>
