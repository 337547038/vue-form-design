<template>
  <div class="sidebar-tools">
    <el-form
      size="small"
      class="form"
    >
      <el-tabs v-model="tabsName">
        <el-tab-pane
          label="字段属性"
          name="first"
        >
          <div v-show="Object.keys(selectComponent).length">
            <div class="h3">
              <h3>{{ selectComponent.label }}</h3>
              列设置
            </div>
            <el-form-item
              v-for="item in filedProperty"
              :key="item.path"
              :label="item.label"
            >
              <el-select
                v-if="item.type==='select'"
                :model-value="item.value"
                :placeholder="item.placeholder"
                :multiple="item.multiple"
                @change="propertyChange(item.path,$event)"
              >
                <el-option
                  v-for="(opt,index) in item.options"
                  :key="index"
                  :label="opt.label||opt"
                  :value="opt.value||opt"
                />
              </el-select>
              <el-button
                v-else-if="item.type==='button'"
                type="primary"
                @click="propertyBtnClick(item.path)"
              >
                {{ item.name }}
              </el-button>
              <el-switch
                v-else-if="item.type==='switch'"
                :model-value="item.value"
                @change="propertyChange(item.path,$event)"
              />
              <set-type-replace
                v-else-if="item.type==='setType'"
                :type="item.path"
                :model-value="item.value"
                @update:model-value="propertyChange(item.path,$event)"
              />
              <el-input
                v-else
                :model-value="item.value"
                :placeholder="item.placeholder"
                @input="propertyChange(item.path,$event)"
              />
            </el-form-item>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="数据列表配置"
          name="second"
        >
          <el-form-item
            v-for="(item, index) in tableListAttr.filter((f: any) => !f.hide)"
            :key="index"
            :label="item.label"
          >
            <el-select
              v-if="item.type === 'select'"
              :model-value="item.value"
              v-bind="item"
              @change="tableListAttrChange(item.key, $event)"
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
              :model-value="item.value"
              @input="tableListAttrChange(item.key, $event)"
            />
            <el-button
              v-else-if="item.type==='button'"
              type="primary"
              @click="editOpenDrawer(item.key)"
            >
              {{ item.name }}
            </el-button>
            <el-input
              v-else
              :model-value="item.value"
              :placeholder="item.placeholder"
              @input="tableListAttrChange(item.key, $event)"
            />
          </el-form-item>
          <div class="h3">
            <h3>接口数据事件</h3>
          </div>
          <el-form-item label="主键">
            <el-input
              v-model="designConfig.pk"
              placeholder="列表主键"
            />
          </el-form-item>
          <el-form-item label="列表数据请求URL">
            <el-input
              :model-value="apiKey.list"
              placeholder="一般不需要填写，使用默认值"
              @input="tableListAttrChange('apiKey.list',$event)"
            />
          </el-form-item>
          <el-form-item label="删除列表数据URL">
            <el-input
              v-model="apiKey.del"
              placeholder="一般不需要填写，使用默认值"
              @input="tableListAttrChange('apiKey.del',$event)"
            />
          </el-form-item>
          <el-form-item label="编辑保存状态URL">
            <el-input
              v-model="apiKey.edit"
              placeholder="一般不需要填写，使用默认值"
              @input="tableListAttrChange('apiKey.edit',$event)"
            />
          </el-form-item>
          <el-form-item label="导出列表URL">
            <el-input
              v-model="apiKey.exportExcel"
              placeholder="一般不需要填写，使用默认值"
              @input="tableListAttrChange('apiKey.exportExcel',$event)"
            />
          </el-form-item>
          <el-form-item class="event-btn">
            <el-button
              type="primary"
              @click="editOpenDrawer('before')"
            >
              before事件
            </el-button>
            <el-button
              type="primary"
              @click="editOpenDrawer('after')"
            >
              after事件
            </el-button>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>
<script setup lang="ts">
  import {computed, onMounted, ref} from 'vue'
  import {formatNumber, setValueByPath} from '@/utils/design'
  import {getFormSourceList} from './request'
  import {useDesignListStore} from "@/store/list";
  import {storeToRefs} from "pinia";
  import type {AceDrawerT, DrawerConfig} from "@/components/ace/type";
  import {getAceTitle} from "@/components/ace/tooltip";
  import SetTypeReplace from "./setTypeReplace.vue";
  import {uiType} from './const'
  import type {Button} from "@/types/table.ts";
  import {getBtnOptions} from '@/components/table/components/defaultBtn'

  const emits = defineEmits<{
    (e: 'changeEvent', params: AceDrawerT, type?: string | number): void
  }>()
  const props = withDefaults(
    defineProps<{
      allDict: string[]
    }>(),
    {}
  )
  const store = useDesignListStore()
  const {selectComponent, designConfig} = storeToRefs(store)
  const apiKey = computed({
    get: () => {
      return designConfig.value.apiKey || {}
    }
  })

  const tabsName = defineModel<string>('tabsName')
  const formSourceList = ref([])

  const timeFormat = [
    {label: '年-月-日', value: '{yyyy}-{mm}-{dd}'},
    {label: '年-月-日 时:分:秒', value: '{yyyy}-{mm}-{dd} {h}:{i}:{s}'},
    {label: 'x年x月x日', value: '{yyyy}年{mm}月{dd}日'},
    {label: 'x年x月x日 时:分:秒', value: '{yyyy}年{mm}月{dd}日 {h}:{i}:{s}'},
    {label: '时:分:秒', value: '{h}:{i}:{s}'},
    {
      label: '年-月-日 时:分:秒 星期',
      value: '{yyyy}:{mm}:{dd} {h}:{i}:{s} 星期{w}'
    }
  ]

  const formSourceRemoteMethod = (name: string) => {
    getData(name)
  }
  //将按钮数据从object转为select值的数组
  const getControlBtn = (btn: Button[]) => {
    if (!btn || typeof btn !== 'object') {
      return btn
    }
    return btn.map((item: any) => item.key)
  }

  const filedProperty = computed(() => {
    const sc = selectComponent.value
    if (!Object.keys(sc).length) {
      return []
    }
    return [
      {
        label: '渲染模式',
        type: 'select',
        value: sc.render,
        options: [
          'switch',
          'image',
          'tag',
          'link',
          'datetime',
          'date',
          'buttons',
          'string',
          'text',
          'url'
        ],
        path: 'render'
      },
      {
        label: 'inline-prompt',
        type: 'switch',
        value: sc.config?.inlinePrompt,
        path: 'config.inlinePrompt',
        vIf: sc.render === 'switch'
      },
      {
        label: '打开时描述',
        placeholder: "打开时的文字描述",
        value: sc.config?.activeText,
        path: 'config.activeText',
        vIf: sc.render === 'switch'
      },
      {
        label: '关闭时描述',
        placeholder: "关闭时的文字描述",
        value: sc.config?.inactiveText,
        path: 'config.inactiveText',
        vIf: sc.render === 'switch'
      },
      {
        label: '状态为on时的值',
        placeholder: "状态为on时的值",
        value: sc.config?.activeValue,
        path: 'config.activeValue',
        vIf: sc.render === 'switch'
      },
      {
        label: '状态为off时的值',
        placeholder: "状态为off时的值",
        value: sc.config?.inactiveValue,
        path: 'config.inactiveValue',
        vIf: sc.render === 'switch'
      },
      {
        label: '图片宽度',
        placeholder: "请输入图片宽度，单位px",
        value: sc.config?.width,
        path: 'config.width',
        vIf: sc.render === 'image'
      },
      {
        label: '图片高度',
        placeholder: "请输入图片高度，单位px",
        value: sc.config?.height,
        path: 'config.height',
        vIf: sc.render === 'image'
      },
      {
        label: '设置显示类型',
        type: 'setType',
        value: sc.custom,
        path: 'custom',
        vIf: ['tag', 'text'].includes(sc.render)
      },
      {
        label: '设置数据替换类型',
        type: 'select',
        vIf: ['tag', 'text'].includes(sc.render),
        path: 'replaceType',
        value: sc.replaceType,
        options: [{label: '使用字典', value: '0'}, {label: '自定义', value: '1'}]
      },
      {
        label: '字典类型key',
        type: 'select',
        options: props.allDict,
        value: sc.replaceValue,
        path: 'replaceValue',
        placeholder: '请输入字典类型key',
        vIf: sc.replaceType === '0'
      },
      {
        label: '设置数据替换',
        type: 'setType',
        value: sc.replaceValue,
        path: 'replaceValue',
        vIf: sc.replaceType === '1'
      },
      {
        label: '显示类型',
        type: 'select',
        path: 'config.type',
        value: sc.config?.type,
        options: uiType,
        vIf: sc.render === 'link'
      },
      {
        label: '是否带下划线',
        type: 'switch',
        path: 'config.underline',
        value: sc.config?.underline,
        vIf: sc.render === 'link'
      },
      {
        label: '打开方式',
        type: 'select',
        path: 'config.target',
        value: sc.config?.target,
        vIf: sc.render === 'link',
        options: ['_blank', '_parent', '_self', '_top']
      },
      {
        label: '显示格式',
        type: 'select',
        path: 'config.timeFormat',
        value: sc.config?.timeFormat,
        vIf: ['datetime', 'date'].includes(sc.render),
        options: timeFormat
      },
      {
        label: '按钮设置',
        type: 'select',
        path: 'buttons',
        value: getControlBtn(sc.buttons),
        vIf: sc.render === 'buttons',
        options: getBtnOptions('right'),
        multiple: true
      },
      {
        name: '添加更多按钮设置',
        type: 'button',
        path: 'buttons',
        vIf: sc.render === 'buttons'
      },
      {
        label: '功能开发中...',
        vIf: sc.render === 'url',
        placeholder: '请耐心等待..'
      },
      {
        name: 'renderFormatter',
        type: 'button',
        path: 'renderFormatter',
        vIf: !!sc.render
      },
      {
        name: '设置表格列',
        type: 'button',
        path: 'columns'
      },
    ].filter(item => item.vIf !== false)
  })

  const propertyChange = (path: string, val: any) => {
    if (path === 'buttons') {
      //将数组转为object
      val = val.map((item: any) => ({key: item}))
    }
    if (path === 'replaceType') {
      selectComponent.value.replaceValue = val === '0' ? '' : {}
    }
    if (path.indexOf('.') !== -1) {
      setValueByPath(selectComponent.value, path, val)
    } else {
      Object.assign(selectComponent.value, {[path]: val})
    }
    // 切换时清空这些与当前不匹配的设置
    if (path === 'render') {
      selectComponent.value.config = {}
      delete selectComponent.value.replaceValue
      delete selectComponent.value.timeFormat
      delete selectComponent.value.buttons
      delete selectComponent.value.custom
      delete selectComponent.value.replaceType
    }
  }
  const propertyBtnClick = (path: string) => {
    if (['columns', 'renderFormatter', 'buttons'].includes(path)) {
      editOpenDrawer(path)
    }
  }

  const tableListAttr = computed(() => {
    const dc = designConfig.value
    return [
      {
        label: '所属表单',
        placeholder: '请选择所属表单',
        value: parseInt(dc.formId) || '',
        key: 'formId',
        type: 'select',
        options: formSourceList.value,
        clearable: true,
        filterable: true,
        remote: true,
        remoteMethod: formSourceRemoteMethod
      },
      {
        label: '数据列表名称',
        placeholder: '保存的数据列表名称',
        key: 'name',
        value: dc.name,
      },
      {
        label: '数据添加编辑打开方式',
        placeholder: '默认新页面打开',
        value: dc.openType ?? 'page',
        type: 'select',
        options: [
          {label: '弹窗', value: 'dialog'},
          {label: '新页面', value: 'page'}
        ],
        key: 'openType',
        clearable: true,
        hide: !dc.formId,
      },
      {
        label: '窗口宽度',
        placeholder: '弹窗宽度',
        value: dc.dialogWidth,
        key: 'dialogWidth',
        hide: dc.openType !== 'dialog'
      },
      {
        label: '横向滚动固定在底部',
        key: 'fixedBottomScroll',
        type: 'select',
        value: dc.fixedBottomScroll ?? true,
        placeholder: '默认开启',
        options: [
          {
            label: '启用',
            value: true
          },
          {label: '禁用', value: false}
        ],
        clearable: true
      },
      {
        label: '列显示隐藏设置',
        key: 'columnsSetting',
        value: dc.columnsSetting ?? true,
        type: 'select',
        placeholder: '默认开启',
        options: [
          {
            label: '启用',
            value: true
          },
          {label: '禁用', value: false}
        ],
        clearable: true
      },
      {
        label: '操作按钮设置',
        type: 'select',
        value: getControlBtn(dc.controlBtn),
        multiple: true,
        key: 'controlBtn',
        options: getBtnOptions()
      },
      {
        label: '可折叠查询表单',
        key: 'expand',
        type: 'switch',
        value: dc.expand
      },
      {
        label: '查询跳转页面',
        key: 'searchJump',
        type: 'switch',
        value: dc.searchJump
      },
      {
        label: '操作列按钮下拉',
        key: 'operateDropdown',
        placeholder: '大于设定个数的以下拉形式显示',
        value: dc.operateDropdown
      },
      {
        label: '分页设置',
        key: 'pageSize',
        placeholder: '每页分多少条',
        value: dc.pageSize
      },
      {
        label: '查询排序',
        key: 'orderSort',
        placeholder: '查询排序，id desc',
        value: dc.orderSort
      },
      {
        label: '开启侧栏树',
        key: 'treeData.show',
        type: 'switch',
        value: dc.treeData?.show
      },
      {
        label: '树标识名称',
        placeholder: '树标识名称',
        key: 'treeData.name',
        value: dc.treeData?.name,
        hide: !dc.treeData?.show
      },
      {
        label: '树列表接口URL',
        key: 'treeData.requestUrl',
        placeholder: '获取树列表数据接口URL',
        value: dc.treeData?.requestUrl,
        hide: !dc.treeData?.show
      },
      {
        label: '列表数据请求方式',
        key: 'treeData.method',
        placeholder: '列表数据请求方式',
        type: 'select',
        options: [{label: 'get', value: 'get'}, {label: 'post', value: 'post'}],
        value: dc.treeData?.method,
        hide: !dc.treeData?.show
      },
      {
        name: '编辑侧栏树属性',
        type: 'button',
        key: 'treeProp',
        hide: !dc.treeData?.show
      },
      {
        name: '树before事件',
        type: 'button',
        key: 'treeBefore',
        hide: !dc.treeData?.show
      },
      {
        name: '树after事件',
        type: 'button',
        key: 'treeAfter',
        hide: !dc.treeData?.show
      },
      {
        name: '编辑表格属性',
        type: 'button',
        key: 'tableConfig'
      }
    ]
  })

  const tableListAttrChange = (key: string, val?: any) => {
    if (key === 'formId') {
      // 列表数据源选择时，需查当前表单所有字段
      emits('changeEvent', {key: key}, val)
    }
    //按钮设置,合并默认设置
    if (key === 'controlBtn') {
      val = val.map((item: any) => ({key: item}))
    }
    if (key.indexOf('.') !== -1) {
      setValueByPath(designConfig.value, key, val)
    } else {
      Object.assign(designConfig.value, {[key]: val ?? ''})
    }
  }

  const editOpenDrawer = (type: string) => {
    const drawerConfigMap: DrawerConfig = {
      //数据列表配置->before
      before: () => ({
        key: 'beforeType',
        title: getAceTitle.before,
        content: designConfig.value.before,
        callback: (content: any) => {
          designConfig.value.before = content
        },
        tip: 'list'
      }),
      //数据列表配置->after
      after: () => ({
        key: 'afterType',
        title: getAceTitle.after,
        content: designConfig.value.after,
        callback: (content: any) => {
          designConfig.value.after = content
        },
        tip: 'list'
      }),
      //数据列表配置->编辑表格属性
      tableConfig: () => ({
        title: 'el-table的相关属性',
        content: designConfig.value.tableProps || {},
        callback: (content: any) => {
          designConfig.value.tableProps = content
        }
      }),
      //数据列表配置->编辑侧栏树属性
      treeProp: () => ({
        title: '更多参数详见ak-list组件',
        content: designConfig.value.treeData || {},
        callback: (content: any) => {
          designConfig.value.treeData = content
        }
      }),
      //数据列表配置->编辑侧栏树属性
      treeBefore: () => ({
        key: 'before',
        content: designConfig.value.treeData?.before,
        callback: (content: any) => {
          designConfig.value.treeData.before = content
        }
      }),
      //数据列表配置->编辑侧栏树属性
      treeAfter: () => ({
        key: 'after',
        content: designConfig.value.after,
        callback: (content: any) => {
          designConfig.value.treeData.after = content
        }
      }),
      //字段属性->设置表格列
      columns: () => ({
        title: '支持el-table-column所有属性',
        content: selectComponent.value || {},
        callback: (content: any) => {
          Object.assign(selectComponent.value, content)
        }
      }),
      renderFormatter: () => ({
        title: '渲染前对字段值的预处理方法，需返回新值',
        key: 'renderFormatter',
        content: selectComponent.value.renderFormatter,
        callback: (content: any) => {
          selectComponent.value.renderFormatter = content
        }
      }),
      //字段属性－添加更多按钮设置
      buttons: () => ({
        title: '可设置多个操作按钮，可使用内置key=edit/del快速设置按钮',
        content: selectComponent.value.buttons,
        callback: (content: any) => {
          selectComponent.value.buttons = content
        }
      })
    }
    const getParams = drawerConfigMap[type]
    if (!getParams) return
    emits('changeEvent', getParams())
  }

  const getData = (name?: string) => {
    //  获取所有可用的表单数据源
    getFormSourceList(name).then((data) => {
      formSourceList.value = data
    })
  }
  onMounted(() => {
    getData()
  })
</script>
