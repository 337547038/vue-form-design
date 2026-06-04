<!-- Created by 337547038 on 2021/6/1 0001. -->
<template>
  <div class="sidebar-tools">
    <el-tabs v-model="storeForm.configTabsName">
      <el-tab-pane
        label="字段配置"
        name="filedConfig"
      >
        <el-form
          size="small"
          class="form"
        >
          <div class="h3">
            <h3>通用属性</h3>
          </div>
          <template
            v-for="item in attrList"
            :key="item.path"
          >
            <el-form-item :label="item.label">
              <el-select
                v-if="item.type === 'select'"
                v-model="item.value"
                :placeholder="item.placeholder"
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
                v-model="item.value"
                :type="item.inputStyle as any"
                :placeholder="item.placeholder"
                @input="controlChange(item, $event)"
              />
            </el-form-item>
          </template>
          <template v-if="showHide(['tabs','card'], true)">
            <div class="h3">
              <h3>标签配置项</h3>
            </div>
            <el-form-item
              v-for="(item, index) in selectComponent.columns"
              :key="index"
            >
              <el-col :span="12">
                <el-input
                  v-model="item.label"
                  placeholder="标签配置项"
                />
              </el-col>
              <el-col
                :span="2"
                :offset="1"
              >
                <i
                  class="icon-del"
                  @click="delSelectOption(index, 'tabs')"
                />
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button @click="addSelectOption('tabs')">
                增加标签
              </el-button>
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
            <div class="h3">
              <h3>选项配置</h3>
            </div>
            <el-form-item
              v-if="showHide(['select'], true)"
              label="添加全部项"
            >
              <el-input
                v-model="selectComponent.addAll"
                placeholder="请输入全部项文案"
              />
            </el-form-item>
            <el-form-item label="选项数据源">
              <el-select
                v-model="selectComponent.optionsType"
                @change="dataSourceSelectChange"
              >
                <el-option
                  :value="0"
                  label="固定选项"
                />
                <el-option
                  :value="1"
                  label="数据源"
                />
                <el-option
                  :value="2"
                  label="接口字典"
                  :disabled="['treeSelect','cascader'].includes(selectComponent.type)"
                />
              </el-select>
            </el-form-item>
            <template v-if="selectComponent.optionsType === 0">
              <div v-if="selectComponent.type !== 'cascader'">
                <el-form-item
                  v-for="(item, index) in selectComponent.options"
                  :key="index"
                >
                  <el-col :span="10">
                    <el-input
                      v-model="item.label"
                      placeholder="选项标签"
                    />
                  </el-col>
                  <el-col
                    :span="10"
                    :offset="1"
                  >
                    <el-input
                      v-model="item.value"
                      placeholder="选项值"
                    />
                  </el-col>
                  <el-col
                    :span="2"
                    :offset="1"
                  >
                    <i
                      class="icon-del"
                      @click="delSelectOption(index as number)"
                    />
                  </el-col>
                </el-form-item>
              </div>
              <el-form-item>
                <el-button @click="addSelectOption">
                  {{ selectComponent.type === 'cascader' ? '编辑' : '新增' }}
                </el-button>
              </el-form-item>
            </template>
            <el-form-item
              v-if="[2].includes(selectComponent.optionsType)"
              label="请选择字典"
            >
              <el-select
                v-model="selectComponent.optionsFun"
                placeholder="字典key，默认为字段标识"
              >
                <el-option
                  v-for="item in allDict"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            <template v-if="selectComponent.optionsType === 1">
              <el-form-item>
                <el-input
                  v-model="selectComponent.optionsFun"
                  placeholder="数据源接口URL或api的key"
                >
                  <template
                    v-if="selectComponent.optionsType === 1"
                    #prepend
                  >
                    <el-select
                      v-model="selectComponent.method"
                      style="width: 80px"
                    >
                      <el-option
                        label="get"
                        value="get"
                      />
                      <el-option
                        label="post"
                        value="post"
                      />
                    </el-select>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="指定label属性值">
                <el-input
                  v-model="selectComponent.label"
                  placeholder="指定选项标签为选项对象的某个属性值"
                />
              </el-form-item>
              <el-form-item label="指定value属性值">
                <el-input
                  v-model="selectComponent.value"
                  placeholder="指定选项的值为选项对象的某个属性值"
                />
              </el-form-item>
              <el-form-item label="缓存数据结果">
                <el-switch v-model="selectComponent.cache" />
              </el-form-item>
              <template v-if="showHide(['select'], true)">
                <el-form-item label="开启远程数据Remote">
                  <el-switch v-model="selectComponent.control.remote" />
                </el-form-item>
                <el-form-item label="联动关联设置">
                  <el-select v-model="selectComponent.linkage">
                    <el-option
                      v-for="item in linkageOptions"
                      :key="item.name"
                      :label="item.label"
                      :value="item.name"
                    />
                  </el-select>
                </el-form-item>
              </template>
              <el-form-item>
                <el-button @click="openAttrDialog('beforeOption')">
                  before事件
                </el-button>
                <el-button @click="openAttrDialog('afterOption')">
                  after事件
                </el-button>
                <el-button
                  v-if="selectComponent.optionsFun&&selectComponent.method"
                  type="primary"
                  @click="getOptionTest"
                >
                  测试连接
                </el-button>
              </el-form-item>
            </template>
            <template v-if="showHide(['select'], true)">
              <el-form-item label="是否可筛选">
                <el-switch v-model="selectComponent.control.filterable" />
              </el-form-item>
            </template>
            <el-form-item
              v-if="showHide(['select','radio','checkbox'],true)&&[0,1].includes(selectComponent.optionsType)"
            >
              <el-button
                type="primary"
                @click="saveFormListDictClick"
              >
                保存为列表字典
              </el-button>
            </el-form-item>
            <el-form-item label="尝试转换value值为">
              <el-select
                v-model="selectComponent.transformData"
                placeholder="可尝试将值转换类型"
              >
                <el-option value="none">
                  不转换
                </el-option>
                <el-option value="number">
                  number
                </el-option>
                <el-option value="string">
                  string
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <template
            v-if="
              !isSearch &&
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
            <div class="h3">
              <h3>校验设置</h3>
            </div>
            <div v-if="showHide(['input', 'password', 'component'], true)">
              <el-form-item
                v-for="(item, index) in selectComponent.customRules"
                :key="item.type"
              >
                <el-input
                  v-model="item.message"
                  placeholder="校验提示信息"
                >
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
                    />
                  </template>
                </el-input>
                <el-input
                  v-if="item.type === 'rules'"
                  v-model="item.rules"
                  placeholder="正则表达式"
                />
              </el-form-item>
              <el-form-item>
                <el-button @click="addRulesFast">
                  快速添加
                </el-button>
                <el-button @click="openAttrDialog('editRules')">
                  编写校验规则
                </el-button>
              </el-form-item>
            </div>
            <el-form-item v-else>
              <el-checkbox
                :model-value="checkboxRequired"
                @change="requiredChange"
              >
                必填
              </el-checkbox>
              <el-input
                v-if="selectComponent.item?.rules && selectComponent.item?.rules[0]"
                v-model="selectComponent.item.rules[0].message"
                placeholder="自定义必填错误提示"
              />
            </el-form-item>
          </template>
          <div v-if="showHide(['grid', 'card', 'gridChild', 'divider', 'div','txt'])">
            <div class="h3">
              <h3>其他属性</h3>
            </div>

            <el-button
              size="small"
              @click="openAttrDialog('editProps')"
            >
              编辑属性
            </el-button>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane
        label="表单配置"
        name="formConfig"
      >
        <el-form
          size="small"
          class="form"
        >
          <el-form-item
            v-for="(item, index) in formAttr"
            :key="index"
            :label="item.label"
          >
            <el-select
              v-if="item.type === 'select'"
              v-model="designConfig[item.key]"
              :filterable="item.key === 'class'"
              :allow-create="item.key === 'class'"
              :placeholder="item.placeholder"
              :clearable="item.clearable"
              @change="formAttrChange(item,$event)"
            >
              <el-option
                v-for="opt in item.options"
                :key="opt.label || opt.name"
                :label="opt.label || opt.name"
                :value="formatNumber(opt.value ?? opt.id)"
              />
            </el-select>
            <el-switch
              v-else-if="item.type === 'switch'"
              v-model="designConfig[item.key]"
              @change="formAttrChange(item)"
            />
            <el-button
              v-else-if="item.type==='button'"
              type="primary"
              @click="openAttrDialog(item.key)"
            >
              {{ item.name }}
            </el-button>
            <div
              v-else-if="item.type==='div'"
              class="h3"
            >
              <h3>{{ item.text }}</h3>
            </div>
            <el-input
              v-else
              v-model="designConfig[item.key]"
              :placeholder="item.placeholder"
              @input="formAttrChange(item)"
            />
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
  <get-save-dict ref="getSaveDictRef" />
</template>

<script lang="ts" setup>
  import {computed, nextTick, onMounted, onUnmounted, reactive, ref} from 'vue'
  import {getRequest} from '@/api'
  import validate from '@/components/form/validate'
  import {ElMessage} from 'element-plus'
  import {formatNumber, setValueByPath} from '@/utils/design'
  import {useDesignFormStore} from "@/store/form";
  import {storeToRefs} from "pinia";
  import type {DrawerConfig} from "@/components/ace/type";
  import {getStorage, loadResource, removeResource} from "@/utils";
  import {getAceTitle} from "@/components/ace/tooltip";
  import type {Component} from "@/types/form";
  import {getRemoteMethod} from "@/components/form/utils.ts";
  import GetSaveDict from "./getSaveDict.vue";

  const emits = defineEmits<{
    (e: 'openDialog', data: any): void
  }>()

  const storeForm = useDesignFormStore()
  const {designConfig, selectComponent} = storeToRefs(storeForm)

  const isSearch = computed(() => {
    return storeForm.designType === 'designSearch'
  })
  const allDict = computed(() => {
    return Object.keys(getStorage('akAllDict'))
  })
  const dataSourceOption = ref([])
  const formAttr = computed(() => {
    //搜索时不显示
    const isSearchHide = ['name', 'sourceId', 'key', 'submitCancel', 'transformData', 'div', 'submitUrl', 'requestUrl', 'before', 'after', 'change']
    return [
      {
        label: '表单名称',
        placeholder: '用于保存的表单名称',
        key: 'name'
      },
      {
        label: '数据源',
        placeholder: '请选择数据源',
        type: 'select',
        options: dataSourceOption.value,
        key: 'sourceId',
        hide: !dataSourceOption.value?.length,
        clearable: true
      },
      {
        label: '表单标识',
        placeholder: '表单唯一标识，可为空',
        key: 'key'
      },
      {
        label: '表单标签宽度',
        placeholder: '表单label宽，如180px',
        key: 'labelWidth'
      },
      {
        label: '表单样式名称',
        placeholder: '额外添加的表单class类名',
        key: 'class',
        type: 'select',
        options: [
          {label: '无样式', value: 'none'},
          {label: '每行两列', value: 'form-row-2'},
          {label: '每行三列', value: 'form-row-3'},
          {label: '每行四列', value: 'form-row-4'}
        ],
        clearable: true
      },
      {
        label: '字段名后添加冒号',
        key: 'showColon',
        type: 'switch'
      },
      {
        label: '组件尺寸',
        type: 'select',
        key: 'size',
        options: [
          {label: 'large', value: 'large'},
          {label: 'default', value: 'default'},
          {label: 'small', value: 'small'}
        ]
      },
      {
        label: '快速添加确定取消按钮',
        type: 'switch',
        key: 'submitCancel'
      },
      {
        label: '将object转string提交',
        type: 'switch',
        key: 'transformData'
      },
      {
        name: '编辑表单样式',
        key: 'editCss',
        type: 'button'
      },
      {
        text: '接口数据事件',
        type: 'div',
        key: 'div',
        hide: storeForm.designType === 'designFlow'
      },
      {
        label: '提交保存url',
        key: 'submitUrl',
        placeholder: '表单提交的url，通用提交时可不设置',
        hide: storeForm.designType === 'designFlow'
      },
      {
        label: '获取表单数据url',
        key: 'requestUrl',
        placeholder: '获取表单数据url，通用提交时可不设置',
        hide: storeForm.designType === 'designFlow'
      },
      {
        type: 'button',
        key: 'before',
        name: 'before事件'
      },
      {
        type: 'button',
        key: 'after',
        name: 'after事件'
      },
      {
        type: 'button',
        key: 'change',
        name: 'change改变事件'
      },
      {
        type: 'button',
        key: 'focus',
        name: 'focus事件'
      },
      {
        type: 'button',
        key: 'blur',
        name: 'blur事件'
      },
      {
        type: 'button',
        key: 'dict',
        name: '表单字典'
      }
    ].filter(item => {
      if (isSearch.value) {
        return !isSearchHide.includes(item.key)
      }
      return !item.hide
    })
  })
  const attrList = computed(() => {
    if (!Object.keys(selectComponent.value).length) {
      return []
    }
    const sc = selectComponent.value
    let columnIndex = false // 是否显示序号列
    if (sc.type === 'table') {
      // 表格时处理
      if (sc.list && sc.list.length > 0) {
        columnIndex = sc.list[0].type === 'index'
      }
    }
    const temp = [
      {
        label: '自定义Class',
        value: sc.className,
        placeholder: '样式类名',
        path: 'className'
      },
      {
        label: '字段标识',
        value: sc.name,
        type: state.dataSourceFiledList?.length ? 'select' : 'text',
        placeholder: '字段唯一标识，对应数据库',
        dict: state.dataSourceFiledList,
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
        value: sc.control?.placeholder,
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
        value: sc.control?.type,
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
        value: sc.control?.label,
        path: 'control.label',
        vShow: ['button']
      },
      {
        label: '按钮事件',
        value: sc.control?.key,
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
        label: 'label值',
        value: sc.formItem?.label,
        path: 'formItem.label',
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
          'txt',
          'card'
        ]
      },
      {
        label: '隐藏label',
        value: sc.hideLabel,
        path: 'hideLabel',
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
        label: '显示类型',
        value: sc.showType,
        path: 'showType',
        type: 'select',
        dict: {
          input: '文本选择框',
          img: '图片',
          btn: '上传按钮'
        },
        vShow: ['chunkUpload']
      },
      {
        label: '按钮文本',
        value: sc.btnText,
        placeholder: '按钮文本，默认为选择文件',
        path: 'btnText',
        vShow: ['chunkUpload'],
        vIf: sc.showType === 'img'
      },
      {
        label: '可选数量',
        value: sc.limit,
        placeholder: '可选择的个数，默认1个',
        path: 'limit',
        vShow: ['chunkUpload']
      },
      {
        label: '接受的文件类型',
        value: sc.accept,
        placeholder: '接受的文件类型，input原生属性',
        path: 'accept',
        vShow: ['chunkUpload']
      },
      {
        label: '是否自动上传',
        value: sc.auto,
        path: 'auto',
        type: 'switch',
        vShow: ['chunkUpload']
      },
      {
        label: '帮助信息',
        value: sc.help,
        path: 'help',
        placeholder: '问号鼠标滑过提示信息',
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
          'txt',
          'card'
        ]
      },
      {
        label: '表单栅格',
        value: sc.span,
        placeholder: '表单区域栅格宽，0为自动宽',
        path: 'span',
        vHide: ['gridChild'],
        isNum: true
      },
      {
        label: '文本值',
        value: sc.control?.modelValue,
        placeholder: '支持html',
        path: 'control.modelValue',
        vShow: ['txt'],
        inputStyle: 'textarea'
      },
      {
        label: '设为密码',
        value: sc.type,
        type: 'select',
        dict: {input: '文本', password: '密码'},
        path: 'type',
        vShow: ['input', 'password'],
        vIf: isSearch.value // 搜索模式下隐藏 为true
      },
      {
        label: '文本域高度',
        value: sc.control.rows,
        placeholder: '输入框行数',
        path: 'control.rows',
        vShow: ['textarea'],
        isNum: true
      },
      {
        label: '前缀',
        value: sc.prepend,
        placeholder: '文本前缀',
        path: 'prepend',
        vShow: ['input', 'password']
      },
      {
        label: '后缀',
        value: sc.append,
        placeholder: '文本后缀',
        path: 'append',
        vShow: ['input', 'password']
      },
      {
        label: '状态打开时的值',
        value: sc.control.activeValue,
        placeholder: '状态打开时的值',
        path: 'control.activeValue',
        vShow: ['switch'],
        isNum: true
      },
      {
        label: '状态关闭时的值',
        value: sc.control.inactiveValue,
        placeholder: '状态关闭时的值',
        path: 'control.inactiveValue',
        vShow: ['switch'],
        isNum: true
      },
      {
        label: '增加按钮文案',
        value: sc.addBtnText,
        path: 'addBtnText',
        placeholder: '添加表格数据入口按钮文案',
        type: 'text',
        vShow: ['flex', 'table']
      },
      {
        label: '删除按钮文案',
        value: sc.delBtnText,
        placeholder: '删除表格数据入口按钮文案',
        path: 'delBtnText',
        type: 'text',
        vShow: ['flex', 'table']
      },
      {
        label: '是否多选',
        value: sc.control.multiple,
        path: 'control.multiple',
        type: 'switch',
        vShow: ['select', 'treeSelect'],
        eventName: 'selectMultiple'
      },
      {
        label: '可清空',
        value: sc.control.clearable,
        path: 'control.clearable',
        type: 'switch',
        vShow: ['select']
      },
      {
        label: '是否禁用',
        value: sc.control.disabled,
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
          'treeSelect',
          'datePicker',
          'timePicker'
        ],
        vIf: isSearch.value
      },
      {
        label: '是否禁用编辑',
        value: sc.disabledEdit,
        path: 'disabledEdit',
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
          'flex',
          'datePicker',
          'timePicker'
        ],
        vIf: isSearch.value
      },
      {
        label: '添加页隐藏',
        value: sc.displayAdd,
        path: 'displayAdd',
        type: 'switch',
        vIf: isSearch.value,
        vHide: ['inputSlot']
      },
      {
        label: '编辑页隐藏',
        value: sc.displayEdit,
        path: 'displayEdit',
        type: 'switch',
        vIf: isSearch.value,
        vHide: ['inputSlot']
      },
      {
        label: '详情页隐藏',
        value: sc.displayDetail,
        path: 'displayDetail',
        type: 'switch',
        vIf: isSearch.value,
        vHide: ['inputSlot']
      },
      {
        label: '设为Input输入框的前/后缀',
        value: sc.type === 'inputSlot',
        path: '',
        type: 'switch',
        vShow: ['select', 'inputSlot'],
        eventName: 'setInputSlot'
      },
      {
        label: '标题',
        value: sc.control.modelValue,
        path: 'control.modelValue',
        vShow: ['title']
      },
      {
        label: '占据的列数span',
        value: sc.control.span,
        path: 'control.span',
        vShow: ['gridChild'],
        isNum: true
      },
      {
        label: '左侧的间隔格数offset',
        value: sc.control.offset,
        path: 'control.offset',
        vShow: ['gridChild'],
        isNum: true
      },
      {
        label: '向右移动格数push',
        value: sc.control.push,
        path: 'control.push',
        vShow: ['gridChild'],
        isNum: true
      },
      {
        label: '向左移动格数pull',
        value: sc.control.pull,
        path: 'control.pull',
        vShow: ['gridChild'],
        isNum: true
      },
      {
        label: '序号列',
        value: columnIndex,
        type: 'switch',
        vShow: ['table'],
        eventName: 'tableColumn1'
      },
      {
        label: '组件名',
        value: sc.componentName,
        placeholder: '全局注册的组件名称',
        path: 'componentName',
        vShow: ['component']
      },
      {
        label: '上传地址',
        value: sc.control.action,
        placeholder: '图片/文件上传地址,可不填有默认值',
        path: 'control.action',
        vShow: ['upload']
      },
      {
        label: '文件字段名',
        value: sc.control.name,
        placeholder: '上传的文件字段名,默认file',
        path: 'control.name',
        vShow: ['upload']
      },
      {
        label: '提示文字',
        value: sc.tip,
        placeholder: '提示说明文字',
        path: 'tip',
        vShow: ['upload']
      },
      {
        label: '按钮文本',
        value: sc.btnText,
        placeholder: '上传按钮文本',
        path: 'btnText',
        vShow: ['upload']
      },
      {
        label: 'direction',
        type: 'select',
        dict: {horizontal: 'horizontal', vertical: 'vertical'},
        placeholder: '分割线方向，默认horizontal',
        value: sc.control.direction,
        path: 'control.direction',
        vShow: ['divider']
      },
      {
        label: 'border-style',
        placeholder: '分隔符样式，默认solid',
        value: sc.control.borderStyle,
        path: 'control.borderStyle',
        vShow: ['divider']
      },
      {
        label: 'content-position',
        type: 'select',
        dict: {left: 'left', right: 'right', center: 'center'},
        value: sc.control.contentPosition,
        path: 'control.contentPosition',
        vShow: ['divider']
      },
      {
        label: '最小值',
        value: sc.control.min,
        path: 'control.min',
        vShow: ['slider'],
        placeholder: '组件min属性',
        isNum: true
      },
      {
        label: '最大值',
        value: sc.control.max,
        path: 'control.max',
        vShow: ['rate', 'slider'],
        placeholder: '组件max属性',
        isNum: true
      },
      {
        label: '步长',
        value: sc.control.step,
        path: 'control.step',
        vShow: ['slider'],
        placeholder: '组件step属性',
        isNum: true
      },
      {
        label: 'type',
        value: sc.control.type,
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
        value: sc.control.format,
        path: 'control.format',
        vShow: ['datePicker', 'timePicker'],
        placeholder: '显示在输入框中的格式'
      },
      {
        label: 'value-format',
        value: sc.control.valueFormat,
        path: 'control.valueFormat',
        vShow: ['datePicker', 'timePicker'],
        placeholder: '绑定的值'
      },
      {
        label: 'color-format',
        value: sc.control.colorFormat,
        path: 'control.colorFormat',
        type: 'select',
        placeholder: '写入 v-model 的颜色的格式',
        dict: {hsl: 'hsl', hsv: 'hsv', hex: 'hex', rgb: 'rgb'},
        vShow: ['colorPicker']
      },
      {
        label: '文本高度',
        value: sc.control.height,
        path: 'control.height',
        placeholder: '文本高度(预览查看效果)',
        vShow: ['tinymce']
      },
      {
        label: '文本宽度',
        value: sc.control.width,
        path: 'control.width',
        placeholder: '文本宽度(预览查看效果)',
        vShow: ['tinymce']
      },
      {
        label: '图片上传地址',
        value: sc.control.imgUrl,
        path: 'control.imgUrl',
        placeholder: '图片上传地址',
        vShow: ['tinymce']
      },
      {
        label: '附件上传地址',
        value: sc.control.blobUrl,
        path: 'control.blobUrl',
        placeholder: '附件上传地址',
        vShow: ['tinymce']
      },
      {
        label: '显示模式',
        value: sc.control.style,
        path: 'control.style',
        placeholder: '显示风格(预览查看效果)',
        type: 'select',
        dict: {default: 'default', simple: 'simple'},
        vShow: ['tinymce']
      },
      {
        label: '条件隐藏显示',
        value: sc.conditionalDisplay,
        path: 'conditionalDisplay',
        placeholder: '条件表达式，如$.name===1'
      },
      {
        label: '条件禁用显示',
        value: sc.conditionalDisabled,
        path: 'conditionalDisabled',
        placeholder: '条件表达式，如$.name===1',
        vHide: [
          'txt',
          'title',
          'table',
          'grid',
          'tabs',
          'card',
          'flex',
          'divider',
          'div'
        ]
      }
    ]
    // 过滤显示对应的值
    return temp.filter((item: any) => {
      let hasFilter = true
      if (item.vShow) {
        hasFilter = item.vShow.includes(sc.type)
      }
      if (item.vHide) {
        hasFilter = !item.vHide.includes(sc.type)
      }
      if (item.vIf) {
        // 不显示vif＝true的
        hasFilter = false
      }
      return hasFilter
    })
  })
  const state = reactive({
    dataSourceFiledList: [],
    customRulesList: [
      ...validate,
      {
        type: 'rules',
        label: '自定义正则'
      }
    ], // 自定义校验规则
  })
  const controlChange = (obj: any, val: any) => {
    if (obj.isNum) {
      val = formatNumber(val)
    }
    // select多选属性，
    switch (obj.eventName) {
      case 'selectMultiple':
        selectComponent.value.control.modelValue = val ? [] : ''
        break
      case 'tableColumn1':
        tableColumnAdd(val)
        break
      case 'filedNameKey':
        // 选择字段标识时，同时修改显示标题
        // 根据value找key
        if (obj.type === 'select') {
          state.dataSourceFiledList.forEach((item: any) => {
            if (item.name === val) {
              if (selectComponent.value.formItem) {
                selectComponent.value.formItem.label = item.label
              }
              selectComponent.value.name = item.label
            }
          })
        }
        break
      case 'setInputSlot':
        if (val) {
          // 将类型改为inputSlot
          selectComponent.value.type = 'inputSlot'
          ElMessage.success(
            `请在对应的Input输入框属性前后缀设置key:${selectComponent.value.name}`
          )
        } else {
          selectComponent.value.type = 'select'
        }
        break
    }
    obj.path && setValueByPath(selectComponent.value, obj.path, val)
  }

  const dataSourceSelectChange = () => {
    //切换类型时，删除多余字段重写
    selectComponent.value.optionsFun = ''
    selectComponent.value.options = []
    delete selectComponent.value.optionsFun
    delete selectComponent.value.method
    delete selectComponent.value.cache
    delete selectComponent.value.before
    delete selectComponent.value.after
    delete selectComponent.value.label
    delete selectComponent.value.value
    delete selectComponent.value.queryName
    delete selectComponent.value.linkage
  }
  // 多选固定选项删除
  const delSelectOption = (index: number, type?: string) => {
    if (type === 'tabs') {
      selectComponent.value.columns.splice(index, 1)
    } else {
      selectComponent.value.options.splice(index, 1)
    }
  }
  // 多选固定选项增加
  const addSelectOption = (type: string) => {
    const cType = selectComponent.value.type
    if (cType === 'cascader') {
      // 级联时打开弹窗口
      openAttrDialog('cascader')
    } else if (cType === 'treeSelect') {
      openAttrDialog('treeSelect')
    } else {
      if (type === 'tabs') {
        selectComponent.value.columns.push({
          label: '标签名称',
          list: []
        })
      } else {
        selectComponent.value.options.push({
          label: '',
          value: ''
        })
      }
    }
  }
  /**
   * 打开编辑器事件
   * @param eventType
   */
  const openAttrDialog = (eventType: string) => {
    const drawerConfigMap: DrawerConfig = {
      //表单配置－编辑表单样式
      editCss: () => ({
        content: designConfig.value.style,
        type: 'css',
        key: eventType,
        callback: (content: string | Record<string, any>) => {
          if (typeof content === 'string' && content) {
            removeResource('form-style')
            loadResource(content, 'form-style')
            designConfig.value.style = content
          }
        }
      }),
      //表单配置－before事件
      before: () => ({
        title: getAceTitle.before,
        content: designConfig.value.before,
        key: 'beforeType',
        callback: (content: any) => {
          designConfig.value.before = content
        },
        tip: 'form'
      }),
      //表单配置－after事件
      after: () => ({
        title: getAceTitle.after,
        content: designConfig.value.after,
        key: 'afterType',
        callback: (content: any) => {
          designConfig.value.after = content
        },
        tip: 'form'
      }),
      //表单配置－change改变事件
      change: () => ({
        title: getAceTitle.change,
        content: designConfig.value.change,
        key: 'change',
        callback: (content: any) => {
          designConfig.value.change = content
        }
      }),
      focus: () => ({
        title: '表单组件focus事件。这里可修改其他组件的值',
        key: 'change',
        content: designConfig.value.focus,
        callback: (content: any) => {
          designConfig.value.focus = content
        }
      }),
      blur: () => ({
        title: '表单组件blur事件。这里可修改其他组件的值',
        key: 'change',
        content: designConfig.value.blur,
        callback: (content: any) => {
          designConfig.value.blur = content
        }
      }),
      //字段属性->编写校验规则
      editRules: () => ({
        key: eventType,
        content: selectComponent.value.formItem?.rules,
        callback: (content: any) => {
          selectComponent.value.formItem.rules = content
        }
      }),
      //字段属性->编辑属性
      editProps: () => ({
        key: eventType,
        content: selectComponent.value.control,
        callback: (content: any) => {
          selectComponent.value.control = content
        }
      }),
      //字段属性->before
      beforeOption: () => ({
        key: 'beforeType',
        title: getAceTitle.before,
        content: selectComponent.value.before,
        callback: (content: any) => {
          selectComponent.value.before = content
        }
      }),
      afterOption: () => ({
        key: 'after',
        title: getAceTitle.after,
        content: selectComponent.value.after,
        callback: (content: any) => {
          selectComponent.value.after = content
        }
      }),
      //字段属性类型=cascader 选项配置编辑
      cascader: () => ({
        title: '级联数据',//todo 标题文案优化下
        content: selectComponent.value.options,
        callback: (content: any) => {
          selectComponent.value.options = content
        }
      }),
      //字段属性类型=treeSelect 选项配置编辑
      treeSelect: () => ({
        title: '树形控件数据',//todo 标题文案优化下
        content: selectComponent.value.control.data,
        callback: (content: any) => {
          selectComponent.value.control.data = content
        }
      }),
      dict: () => ({
        title: '提供给列表使用的表单字典，如{sex:{1:“男”,2:“女”}}',
        content: storeForm.formOptionDict,
        callback: (content: any) => {
          storeForm.setFormOptionDict(content)
        }
      })
    }

    const getParams = drawerConfigMap[eventType]
    if (!getParams) return

    emits('openDialog', getParams())
  }
  // 必填校验
  const requiredChange = (val: boolean) => {
    if (!selectComponent.value.formItem?.rules) {
      selectComponent.value.formItem.rules = []
    }
    if (val) {
      selectComponent.value.formItem.rules.push({
        required: true,
        message: '必填项',
        trigger: 'change'
      })
    } else {
      selectComponent.value.formItem.rules.splice(0, 1)
    }
  }
  // 根据不同类型判断是否显示当前属性
  const showHide = (type: string[], show?: boolean) => {
    // show=true 条件成立显示，false符合条件隐藏
    if (
      (type && type.length === 0)
      || Object.keys(selectComponent.value).length === 0
    ) {
      return false
    }
    const index = type.indexOf(selectComponent.value.type)
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
      control: {}
    }
    if (val) {
      selectComponent.value.list.unshift(item)
    } else {
      selectComponent.value.list.splice(0, 1)
    }
  }
  // 校验规则必填勾选设置，存在校验规则时勾选
  const checkboxRequired = computed(() => {
    const val = selectComponent.value?.formItem?.rules
    return !!(val && val.length > 0)
  })
  // 快速添加一条校验规则
  const addRulesFast = () => {
    if (!selectComponent.value.customRules) {
      selectComponent.value.customRules = []
    }
    selectComponent.value.customRules.push({
      type: 'required',
      message: '请输入' + selectComponent.value.formItem?.label || '',
      trigger: 'blur'
    })
  }
  // 删除一条校验规则
  const delAddRules = (index: number) => {
    selectComponent.value.customRules?.splice(index, 1)
  }

  // 表单配置属性修改
  const formAttrChange = (obj: any, val: any) => {
    if (obj.key === 'sourceId') {
      // 改变了数据源了，重新请求数据
      getFormFieldBySource(val)
    }
  }

  // 快速添加校验规则改变时，填写默认的校验提示信息
  const rulesSelectChange = (item: any, val: string) => {
    const filter = validate.filter((item) => item.type === val)
    if (filter && filter.length) {
      item.message = filter[0].message
    }
  }

  //设置级联设置
  const linkageOptions = computed(() => {
    if (selectComponent.value.type !== 'select') {
      return []
    }
    const formList = storeForm.designData || []
    const validTypes = ['select', 'checkbox', 'radio', 'input', 'switch'];
    return formList.reduce((acc: any, item: Component) => {
      // 条件判断：类型合法 + name 不等于目标值
      const isValidType = validTypes.includes(item.type);
      const isNotTarget = item.name !== selectComponent.value.name;

      if (isValidType && isNotTarget) {
        // 只保留 name 和 label
        acc.push({
          name: item.name,
          label: item.formItem?.label || item.name
        });
      }
      return acc;
    }, [] as { name: string; label: string }[]);
  })
  // 接口数据处理
  //测试连接
  const getOptionTest = () => {
    getRemoteMethod(storeForm.selectComponent, {}, () => {
      ElMessage.success('连接成功')
    })
  }
  // 获取数据源
  const getDataSource = () => {
    // 获取数据源，表单设计才加载，搜索设置不需要
    if (!isSearch.value) {
      let params = {}
      if (storeForm.designType === 'designFlow') {
        params = {query: {category: 2}}
      }
      getRequest('sourceList', params).then((res: any) => {
        dataSourceOption.value = res.data?.list || []
      })
    }
  }
  const getFormFieldBySource = (sourceId: string, callback?: (val: any, name: string) => void) => {
    if (!sourceId) {
      return // 仅在设计
    }
    getRequest('sourceById', {id: sourceId})
      .then((res: { data: any }) => {
        const tableData = res.data?.tableData
        try {
          state.dataSourceFiledList = JSON.parse(tableData)
          callback && callback(state.dataSourceFiledList, res.data?.name)
        } catch (e) {
          state.dataSourceFiledList = []
        }
      })
      .catch((_: any) => {
      })
  }
  // 接口数据处理结束
  //将表单的option保存到列表作为字典
  const getSaveDictRef = ref()
  const saveFormListDictClick = () => {
    getSaveDictRef.value.open()
  }
  onMounted(() => {
    nextTick(() => {
      if (designConfig.value.submitCancel === undefined) {
        designConfig.value.submitCancel = true //默认设置为开
      }
      // 搜索无需加载
      getDataSource()
    })
  })
  onUnmounted(() => {
    removeResource('form-style')
    storeForm.setFormOptionDict('')
  })
  defineExpose({getFormFieldBySource})
</script>
