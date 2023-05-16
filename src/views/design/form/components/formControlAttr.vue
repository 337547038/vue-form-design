<!-- Created by 337547038 on 2021/6/1 0001. -->
<template>
  <div class="sidebar-tools">
    <el-tabs v-model="state.tabsName">
      <el-tab-pane label="字段配置" name="first">
        <el-form size="small" class="form">
          <div class="h3"><h3>通用属性</h3></div>
          <template v-for="(item, index) in attrList" :key="index">
            <el-form-item :label="item.label">
              <el-select
                v-if="item.type === 'select'"
                :placeholder="item.placeholder"
                v-model="item.value"
                :filterable="item.path === 'name'"
                :allow-create="item.path === 'name'"
                :clearable="item.clearable"
                @change="controlChange(item, $event)"
              >
                <el-option
                  v-for="(opt, key) in item.dict"
                  :key="key"
                  :value="item.path === 'name' ? opt.name : key"
                  :label="
                    item.path === 'name' ? `${opt.label}(${opt.name})` : opt
                  "
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
                @input="controlChange(item, $event)"
              />
            </el-form-item>
          </template>
          <template v-if="controlData.config">
            <el-form-item label="联动条件">
              <el-switch v-model="controlData.config.linkKey" />
            </el-form-item>
            <template v-if="controlData.config.linkKey">
              <el-form-item>
                <el-input
                  type="textarea"
                  v-model="controlData.config.linkValue"
                  placeholder="表达式如: $.input>1 $表示为当前表单数据，input为字段标识"
                />
              </el-form-item>
              <el-form-item
                label="联动结果"
                v-if="
                  showHide(
                    [
                      'input',
                      'textarea',
                      'radio',
                      'checkbox',
                      'select',
                      'date',
                      'switch',
                      'number',
                      'cascader',
                      'slider',
                      'datePicker',
                      'timePicker',
                      'colorPicker',
                      'inputNumber',
                      'rate',
                      'treeSelect'
                    ],
                    true
                  )
                "
              >
                <el-radio-group
                  class="option-radio"
                  v-model="controlData.config.linkResult"
                >
                  <el-radio label="hidden">隐藏(默认)</el-radio>
                  <el-radio label="disabled">禁用</el-radio>
                </el-radio-group>
              </el-form-item>
            </template>
          </template>
          <template v-if="showHide(['tabs'], true)">
            <div class="h3"><h3>标签配置项</h3></div>
            <el-form-item
              v-for="(item, index) in controlData.columns"
              :key="index"
            >
              <el-col :span="12">
                <el-input placeholder="标签配置项" v-model="item.label" />
              </el-col>
              <el-col :span="2" :offset="1">
                <i
                  class="icon-del"
                  @click="delSelectOption(index as number, 'tabs')"
                ></i>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button @click="addSelectOption('tabs')">增加标签</el-button>
            </el-form-item>
          </template>
          <div
            v-if="
              showHide(
                [
                  'radio',
                  'select',
                  'checkbox',
                  'cascader',
                  'inputSlot',
                  'treeSelect'
                ],
                true
              )
            "
          >
            <div class="h3"><h3>选项配置</h3></div>
            <el-form-item label="添加全部项" v-if="showHide(['select'], true)">
              <el-input
                placeholder="请输入全部项文案"
                v-model="controlData.config.addAll"
              />
            </el-form-item>
            <el-form-item label="选项数据源">
              <el-select
                v-model="controlData.config.optionsType"
                @change="controlData.config.optionsFun = ''"
              >
                <el-option :value="0" label="固定选项" />
                <el-option :value="1" label="数据源" />
                <el-option :value="2" label="接口字典" />
              </el-select>
            </el-form-item>
            <template v-if="controlData.config.optionsType === 0">
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
                    <i
                      class="icon-del"
                      @click="delSelectOption(index as number)"
                    ></i>
                  </el-col>
                </el-form-item>
              </div>
              <el-form-item>
                <el-button @click="addSelectOption"
                  >{{ controlData.type === 'cascader' ? '编辑' : '新增' }}
                </el-button>
              </el-form-item>
            </template>
            <template v-else>
              <el-form-item>
                <el-input
                  v-model="controlData.config.optionsFun"
                  :placeholder="
                    getOptionPlaceholder(controlData.config.optionsType)
                  "
                >
                  <template
                    #prepend
                    v-if="controlData.config.optionsType === 1"
                  >
                    <el-select
                      v-model="controlData.config.method"
                      style="width: 80px"
                    >
                      <el-option label="get" value="get" />
                      <el-option label="post" value="post" />
                    </el-select>
                  </template>
                </el-input>
              </el-form-item>
              <template v-if="controlData.config.optionsType === 1">
                <el-form-item label="指定label属性值">
                  <el-input
                    v-model="controlData.config.label"
                    placeholder="返回数据中没有label时可设置"
                  />
                </el-form-item>
                <el-form-item label="指定value属性值">
                  <el-input
                    v-model="controlData.config.value"
                    placeholder="返回数据中没有value时可设置"
                  />
                </el-form-item>
              </template>
              <el-form-item v-if="controlData.config.optionsType === 1">
                <el-button
                  @click="
                    optionsEvent(
                      'optionsParams',
                      '请求前处理事件，参数(data,route,form) data请求参数,route页面路由,form表单值'
                    )
                  "
                  >beforeRequest
                </el-button>
                <el-button
                  @click="
                    optionsEvent(
                      'optionsResult',
                      '请求返回结束处理；，也可为字符串，如opt=formatTest'
                    )
                  "
                  >afterResponse
                </el-button>
              </el-form-item>
            </template>
            <el-form-item label="尝试转换value值为">
              <el-select
                v-model="controlData.config.transformData"
                placeholder="默认为number"
              >
                <el-option value="none">不转换</el-option>
                <el-option value="number">number</el-option>
                <el-option value="string">string</el-option>
              </el-select>
            </el-form-item>
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
                'divider',
                'div',
                'button'
              ])
            "
          >
            <div class="h3"><h3>校验设置</h3></div>
            <div v-if="showHide(['input', 'password', 'component'], true)">
              <el-form-item
                v-for="(item, index) in controlData.customRules"
                :key="item.type"
              >
                <el-input v-model="item.message" placeholder="校验提示信息">
                  <template #prepend>
                    <el-select
                      v-model="item.type"
                      style="width: 80px"
                      @change="rulesSelectChange(item, $event)"
                    >
                      <el-option
                        v-for="list in state.customRulesList"
                        :key="list.type"
                        :label="list.label"
                        :value="list.type"
                      />
                    </el-select>
                  </template>
                  <template #append>
                    <i
                      class="icon-del"
                      @click="delAddRules(index as number)"
                    ></i>
                  </template>
                </el-input>
                <el-input
                  placeholder="正则表达式"
                  v-model="item.rules"
                  v-if="item.type === 'rules'"
                />
                <el-input
                  placeholder="方法名称，此方法仅适用于导出vue文件"
                  v-model="item.methods"
                  v-if="item.type === 'methods'"
                />
              </el-form-item>
              <el-form-item>
                <el-button @click="addRulesFast">快速添加</el-button>
                <el-button @click="addRules(state.tooltip.rules)"
                  >编写校验规则
                  <el-tooltip
                    :content="state.tooltip.rules"
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
          <div v-if="showHide(['grid', 'card', 'gridChild', 'divider', 'div'])">
            <div class="h3"><h3>其他属性</h3></div>

            <el-button
              size="small"
              @click="openAttrDialog('', state.tooltip.props)"
              >编辑属性
              <el-tooltip :content="state.tooltip.props" placement="top">
                <el-icon>
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </el-button>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="表单配置" name="second">
        <el-form size="small" class="form">
          <el-form-item
            v-for="(item, index) in formAttr.filter(item => !item.hide)"
            :label="item.label"
            :key="index"
          >
            <el-select
              v-if="item.type === 'select'"
              v-model="item.value"
              :filterable="item.key === 'class'"
              :allow-create="item.key === 'class'"
              :placeholder="item.placeholder"
              :clearable="item.clearable"
              @change="formAttrChange(item)"
            >
              <el-option
                :label="opt.label || opt.name"
                v-for="opt in item.options"
                :key="opt.label || opt.name"
                :value="formatNumber(opt.value ?? opt.id)"
              />
            </el-select>
            <el-switch
              v-else-if="item.type === 'switch'"
              v-model="item.value"
              @input="formAttrChange(item)"
            />
            <el-input
              v-else
              v-model="item.value"
              :placeholder="item.placeholder"
              @input="formAttrChange(item)"
            />
          </el-form-item>
          <el-form-item v-if="!state.isSearch">
            <template #label
              >添加时获取请求
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
              v-model="formConfig.addLoad"
              @change="
                formAttrChange({ key: 'addLoad', path: 'config' }, $event)
              "
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="editFormStyle(state.tooltip.css)"
              >编辑表单样式
              <el-tooltip :content="state.tooltip.css" placement="top">
                <el-icon>
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </el-button>
            <el-button @click="editFormDict(state.tooltip.dict)"
              >设置数据字典
              <el-tooltip :content="state.tooltip.dict" placement="top">
                <el-icon>
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </el-button>
          </el-form-item>
          <template v-if="!state.isSearch">
            <div class="h3"><h3>接口数据事件</h3></div>
            <el-form-item label="新增数据保存url">
              <el-input
                placeholder="表单提交的url，非特殊不需要设置"
                v-model="formConfig.addUrl"
              />
            </el-form-item>
            <el-form-item label="修改数据保存url">
              <el-input
                placeholder="修改提交的url，非特殊不需要设置"
                v-model="formConfig.editUrl"
              />
            </el-form-item>
            <el-form-item label="获取表单数据url">
              <el-input
                placeholder="获取表单数据url，非特殊不需要设置"
                v-model="formConfig.requestUrl"
              />
            </el-form-item>
            <el-form-item class="event-btn">
              <el-button
                @click="
                  eventClick(
                    'beforeRequest',
                    '获取表单初始数据前事件，可修改请求参数'
                  )
                "
                >beforeRequest
              </el-button>
              <el-button
                @click="
                  eventClick(
                    'afterResponse',
                    '获取表单初始数据后事件，可对请求返回数据进行处理；也可为字符串，如opt=formatTest'
                  )
                "
                >afterResponse
              </el-button>
              <el-button
                @click="
                  eventClick(
                    'beforeSubmit',
                    '表单数据提交前事件，可对提交数据进行处理；也可为字符串，如opt=formatTest'
                  )
                "
                >beforeSubmit
              </el-button>
              <el-button
                @click="eventClick('afterSubmit', '表单数据提交成功事件')"
                >afterSubmit
              </el-button>
              <el-button
                @click="
                  eventClick(
                    'change',
                    '表单组件值改变事件。当表单某值改变时，可修改其他组件的值；也可为字符串，如opt=formChange,字符串即为/utils/formChangeValue(name,model,key)中的key值'
                  )
                "
                >表单组件改变事件change
              </el-button>
            </el-form-item>
          </template>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, computed, toRefs, ref, watch, inject } from 'vue'
  //import { useRoute } from 'vue-router'
  import { getRequest } from '@/api'
  import { useDesignFormStore } from '@/store/designForm'
  import validate from './validate'
  import { ElMessage } from 'element-plus'
  import { formatNumber } from '../../utils'

  const props = withDefaults(
    defineProps<{
      formData: any
      formConfig: any
      formOtherData: any
    }>(),
    {
      formConfig: () => {
        return {}
      },
      formOtherData: () => {
        // 其他不需要保存在formData里的数据
        return {}
      }
    }
  )
  const emits = defineEmits<{
    (e: 'openDialog', data: any): void
    (e: 'update:formOtherData', data: any): void
    //(e: 'update:formData', data: any): void
    //(e: 'update:formConfig', data: any): void
  }>()
  const { formConfig, formData } = toRefs(props)
  const store = useDesignFormStore() as any
  //const route = useRoute()
  const controlData = computed(() => {
    return store.controlAttr
  })
  const dataSourceOption = ref([])
  const formAttr = computed(() => {
    const isSearch = state.isSearch
    return [
      {
        label: '表单名称',
        placeholder: '用于保存的表单名称',
        value: props.formOtherData.formName,
        key: 'formName',
        hide: isSearch
      },
      {
        label: '数据源',
        placeholder: '请选择数据源',
        value: formatNumber(props.formOtherData.source),
        type: 'select',
        options: dataSourceOption.value,
        key: 'source',
        hide: isSearch || !dataSourceOption.value?.length,
        clearable: true
      },
      {
        label: '表单标识',
        value: formData.value.name,
        placeholder: '表单唯一标识，可为空',
        key: 'name',
        hide: isSearch
      },
      {
        label: '表单标签宽度',
        value: formData.value.labelWidth,
        placeholder: '表单label宽，如180px',
        key: 'labelWidth'
      },
      {
        label: '表单样式名称',
        value: formData.value.class,
        placeholder: '额外添加的表单class类名',
        key: 'class',
        type: 'select',
        options: [
          { label: '无样式', value: '' },
          { label: '每行两列', value: 'form-row-2' },
          { label: '每行三列', value: 'form-row-3' },
          { label: '每行四列', value: 'form-row-4' }
        ],
        hide: isSearch,
        clearable: true
      },
      {
        label: '字段名后添加冒号',
        value: formData.value.showColon,
        key: 'showColon',
        type: 'switch'
      },
      {
        label: '组件尺寸',
        value: formData.value.size,
        type: 'select',
        key: 'size',
        options: [
          { label: 'large', value: 'large' },
          { label: 'default', value: 'default' },
          { label: 'small', value: 'small' }
        ]
      }
      /*{
        label: '筛选条件展开/收起',
        value: formConfig.value.expand,
        type: 'switch',
        path: 'config',
        key: 'expand',
        hide: !isSearch
      }*/
    ]
  })
  const attrList = computed(() => {
    if (Object.keys(controlData.value).length) {
      const {
        control = {},
        type,
        name,
        config = {},
        item = {},
        attr = {}
      }: { control: any; config: any } = controlData.value
      let columnIndex = false // 是否显示序号列
      if (type === 'table') {
        // 表格时处理
        const list = controlData.value && controlData.value.list
        if (list && list.length > 0) {
          columnIndex = list[0].type === 'index'
        }
      }
      const temp = [
        {
          label: '自定义Class',
          value: config.className,
          placeholder: '样式类名',
          path: 'config.className'
        },
        {
          label: '字段标识',
          value: name,
          type:
            Object.keys(state.dataSourceList).length > 0 ? 'select' : 'text',
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
            'txt',
            'div',
            'button'
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
            'timePicker',
            'treeSelect'
          ]
        },
        {
          label: '按钮类型',
          value: control.type,
          path: 'control.type',
          type: 'select',
          dict: {
            primary: 'primary',
            success: 'success',
            info: 'info',
            warning: 'warning',
            danger: 'danger'
          },
          vShow: ['button'],
          clearable: true
        },
        {
          label: '按钮名称',
          value: control.label,
          path: 'control.label',
          vShow: ['button']
        },
        {
          label: '按钮事件',
          value: control.key,
          path: 'control.key',
          type: 'select',
          dict: {
            submit: '提交表单',
            reset: '重置表单',
            cancel: '取消返回',
            none: '无动作(自定义)'
          },
          vShow: ['button']
        },
        {
          label: '对齐方式',
          value: config.textAlign,
          path: 'config.textAlign',
          type: 'select',
          dict: {
            left: 'left',
            right: 'right',
            center: 'center'
          },
          vShow: ['button', 'div']
        },
        {
          label: 'label值',
          value: item.label,
          path: 'item.label',
          vHide: [
            'table',
            'grid',
            'tabs',
            'title',
            'gridChild',
            'div',
            'inputSlot',
            'flex',
            'button',
            'txt'
          ]
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
            'card',
            'div',
            'inputSlot',
            'flex',
            'button',
            'txt'
          ]
        },
        {
          label: '帮助信息',
          value: config.help,
          path: 'config.help',
          vHide: [
            'table',
            'grid',
            'tabs',
            'gridChild',
            'divider',
            'div',
            'inputSlot',
            'flex',
            'button',
            'txt'
          ]
        },
        {
          label: '表单栅格',
          value: config.span,
          placeholder: '表单区域栅格宽，0为自动宽',
          path: 'config.span',
          vHide: ['gridChild'],
          isNum: true
        },
        /*{
          label: '行类样式',
          value: config.inline,
          type: 'switch',
          path: 'config.inline',
          vShow: ['div']
        },*/
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
          dict: { input: '文本', password: '密码' },
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
          label: '状态打开时的值',
          value: control.activeValue,
          placeholder: '状态打开时的值',
          path: 'control.activeValue',
          vShow: ['switch'],
          isNum: true
        },
        {
          label: '状态关闭时的值',
          value: control.inactiveValue,
          placeholder: '状态关闭时的值',
          path: 'control.inactiveValue',
          vShow: ['switch'],
          isNum: true
        },
        // {
        //   label: '转换格式化值',
        //   value: config.transform,
        //   path: 'config.transform',
        //   type: 'switch',
        //   vShow: [
        //     'checkbox',
        //     'select',
        //     'switch',
        //     'cascader',
        //     'slider',
        //     'table',
        //     'flex',
        //     'treeSelect'
        //   ]
        // },
        {
          label: '增加按钮文案',
          value: config.addBtnText,
          path: 'config.addBtnText',
          type: 'text',
          vShow: ['flex', 'table']
        },
        {
          label: '删除按钮文案',
          value: config.delBtnText,
          path: 'config.delBtnText',
          type: 'text',
          vShow: ['flex', 'table']
        },
        {
          label: '是否多选',
          value: control.multiple,
          path: 'control.multiple',
          type: 'switch',
          vShow: ['select', 'treeSelect'],
          eventName: 'selectMultiple'
        },
        {
          label: '可清空',
          value: control.clearable,
          path: 'control.clearable',
          type: 'switch',
          vShow: ['select']
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
            'tinymce',
            'treeSelect'
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
            'upload',
            'treeSelect',
            'table',
            'flex'
          ],
          vIf: state.isSearch
        },
        {
          label: '添加页隐藏',
          value: config.disabledAdd,
          path: 'config.disabledAdd',
          type: 'switch',
          vIf: state.isSearch,
          vHide: ['inputSlot']
        },
        {
          label: '编辑页隐藏',
          value: config.disabledEdit,
          path: 'config.disabledEdit',
          type: 'switch',
          vIf: state.isSearch,
          vHide: ['inputSlot']
        },
        {
          label: '详情页隐藏',
          value: config.disabledDetail,
          path: 'config.disabledDetail',
          type: 'switch',
          vIf: state.isSearch,
          vHide: ['inputSlot']
        },
        {
          label: '设为Input输入框的前/后缀',
          value: type === 'inputSlot',
          path: '',
          type: 'switch',
          vShow: ['select', 'inputSlot'],
          eventName: 'setInputSlot'
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
          value: config.componentName,
          placeholder: '全局注册的组件名称',
          path: 'config.componentName',
          vShow: ['component']
        },
        {
          label: '上传地址',
          value: control.action,
          placeholder: '图片/文件上传地址,可不填有默认值',
          path: 'control.action',
          vShow: ['upload']
        },
        {
          label: '文件字段名',
          value: control.name,
          placeholder: '上传的文件字段名,默认file',
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
          placeholder: '分割线方向，默认horizontal',
          value: control.direction,
          path: 'control.direction',
          vShow: ['divider']
        },
        {
          label: 'border-style',
          placeholder: '分隔符样式，默认solid',
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
      return temp.filter((item: any) => {
        let hasFilter = true
        if (item.vShow) {
          hasFilter = item.vShow.includes(type)
        }
        if (item.vHide) {
          hasFilter = !item.vHide.includes(type)
        }
        if (item.vIf) {
          // 不显示vif＝true的
          hasFilter = false
        }
        return hasFilter
      })
    } else {
      return []
    }
  })
  const designType = inject('formDesignType')
  const state = reactive({
    dataSourceList: {},
    customRulesList: [
      ...validate,
      {
        type: 'rules',
        label: '自定义正则'
      },
      {
        type: 'methods',
        label: '自定义方法'
      }
    ], // 自定义校验规则
    isSearch: designType === 'search',
    tooltip: {
      css: '当前表单应用页的样式，类似于.vue文件中的style scoped中的样式',
      dict: '数据字典，用于匹配多选组、下拉选择等，提供动态获取Options接口字典数据，一般不设置，从接口dict获取。json格式："sex":{"0":"男","1":"女"}',
      rules:
        "可参考UI组件表单校验，<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>详情点击</a>",
      props: '可添加当前组件所有prop属性及事件方法'
    },
    tabsName: 'second'
  })
  watch(
    () => store.activeKey,
    (val: string) => {
      if (val) {
        // 有值时自动跳到第一项
        state.tabsName = 'first'
      }
    }
  )
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
      case 'formatNumber':
        // val = parseInt(val) // 将值转数值
        break
      case 'filedNameKey':
        // 选择字段标识时，同时修改显示标题
        // 根据value找key
        if (obj.type === 'select') {
          state.dataSourceList.forEach((item: any) => {
            if (item.name === val) {
              if (controlData.value.item) {
                controlData.value.item.label = item.label
              }
              controlData.value.name = item.label
            }
          })
        }
        break
      case 'setInputSlot':
        if (val) {
          // 将类型改为inputSlot
          controlData.value.type = 'inputSlot'
          ElMessage.success(
            `请在对应的Input输入框属性前后缀设置key:${controlData.value.name}`
          )
        } else {
          controlData.value.type = 'select'
        }
        // 这里会报错Cannot set properties of null (setting 'checked')
        // 因value:type===inputSlot，这里使用了v-model，影响不大暂不处理
        break
    }
    if (obj.path) {
      const newVal = obj.isNum ? formatNumber(val) : val // 类型为数字时转整数
      obj.path && getPropByPath(controlData.value, obj.path, newVal)
    }
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
  const delSelectOption = (index: number, type?: string) => {
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
      openAttrDialog('cascader')
    } else if (controlData.value.type === 'treeSelect') {
      openAttrDialog('treeSelect', '编辑组件下拉选项数据')
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
  const openAttrDialog = (type?: string, tooltip?: string) => {
    let editData = controlData.value.control
    if (controlData.value.type === 'button') {
      // 按钮组件编辑属性
      editData = controlData.value.config
      type = 'button'
    }
    switch (type) {
      case 'treeSelect':
        editData = controlData.value.control.data
        break
      case 'cascader':
        editData = controlData.value.options
        break
      case 'optionsParams': // 选项请求附加参数
        editData = controlData.value.config.beforeRequest
        // params.codeType = 'json'
        break
      case 'optionsResult':
        editData = controlData.value.config.afterResponse
        break
    }
    const emitsParams = {
      content: editData,
      title: tooltip,
      type: type,
      direction: 'ltr',
      callback: (result: any) => {
        switch (type) {
          case 'treeSelect':
            controlData.value.control.data = result
            break
          case 'cascader':
            controlData.value.options = result
            break
          case 'optionsParams':
            controlData.value.config.beforeRequest = result
            break
          case 'optionsResult':
            controlData.value.config.afterResponse = result
            break
          case 'button':
            controlData.value.config = result
            break
          default:
            controlData.value.control = {}
            Object.assign(controlData.value.control, result)
        }
      }
    }
    emits('openDialog', emitsParams)
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
  const addRules = (tooltip: string) => {
    if (!controlData.value.item?.rules) {
      controlData.value.item.rules = []
    }
    const params = {
      content: controlData.value.item?.rules,
      title: tooltip,
      direction: 'ltr',
      callback: (result: any) => {
        Object.assign(controlData.value.item.rules, result)
      }
    }
    emits('openDialog', params)
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
      message: '必填项',
      trigger: 'blur'
    })
  }
  // 删除一条校验规则
  const delAddRules = (index: number) => {
    controlData.value.customRules &&
      controlData.value.customRules.splice(index, 1)
  }
  // 编辑表单样式
  const editFormStyle = (tooltip: string) => {
    emits('openDialog', {
      codeType: 'css',
      direction: 'ltr',
      type: 'css',
      title: tooltip
    })
  }
  const editFormDict = (tooltip: string) => {
    emits('openDialog', {
      type: 'dict',
      direction: 'ltr',
      codeType: 'json',
      title: tooltip
    })
  }
  // 根据选定数据源获取表单字段
  const getFormFieldBySource = (id?: string) => {
    if (state.isSearch) {
      // 搜索设计这里不需要数据源
      return
    }
    const source = id
    if (source) {
      getRequest('sourceById', { id: source })
        .then(res => {
          // console.log(res)
          const tableData = res.data.result?.tableData
          if (tableData && tableData.length) {
            state.dataSourceList = tableData.filter(
              (item: any) => item.enterable
            )
          }
        })
        .catch(res => {
          console.log(res)
        })
    }
  }
  const getDataSource = () => {
    // 获取数据源，表单设计才加载，搜索设置不需要
    if (!state.isSearch) {
      getRequest('sourceList').then((res: any) => {
        dataSourceOption.value = res.data.list
        //dataSourceOption.value.unshift({ name: '无', id: '' })
      })
    }
  }
  // 表单属性修改
  const formAttrChange = (obj: any, val?: any) => {
    if (obj.key === 'source') {
      getFormFieldBySource(obj.value) // 改变了数据源了，重新请求数据
      // 清空设计区已选择的组件，再一次选择时字段标识才会变
      store.setActiveKey('')
      store.setControlAttr({})
    }
    if (['formName', 'source'].includes(obj.key)) {
      emits(
        'update:formOtherData',
        Object.assign(props.formOtherData, { [obj.key]: obj.value })
      )
      return
    }
    if (obj.path === 'config') {
      formConfig.value[obj.key] = obj.value || val
    } else {
      formData.value[obj.key] = obj.value
    }
  }
  // 返回选项配置提示
  const getOptionPlaceholder = (type: number) => {
    switch (type) {
      case 1:
        return '数据源接口URL,可带参数'
      case 2:
        return '字典key，默认为字段标识'
    }
    return ''
  }
  // 快速添加校验规则改变时，填写默认的校验提示信息
  const rulesSelectChange = (item: any, val: string) => {
    const filter = validate.filter(item => item.type === val)
    if (filter && filter.length) {
      item.message = filter[0].message
    }
  }
  // options动态选项数据源请求时
  const optionsEvent = (type: string, tooltip?: string) => {
    openAttrDialog(type, tooltip)
  }
  const eventClick = (type: string, tooltip?: string) => {
    emits('openDialog', { type: type, title: tooltip, direction: 'ltr' })
  }
  getDataSource()
  defineExpose({ getFormFieldBySource })
</script>
