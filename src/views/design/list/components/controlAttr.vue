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
          <div v-show="Object.keys(currentObj).length">
            <div class="h3">
              <h3>{{ currentObj.label }}</h3>
              列设置
            </div>
            <el-form-item label="渲染模式">
              <el-select
                v-model="currentObj.render"
                @change="renderChange"
              >
                <el-option
                  v-for="item in renderList"
                  :key="item"
                  :value="item"
                  :label="item"
                />
              </el-select>
            </el-form-item>
            <template v-if="currentObj.render === 'switch'">
              <el-form-item label="inline-prompt">
                <el-switch v-model="currentObj.config.inlinePrompt" />
              </el-form-item>
              <el-form-item label="打开时描述">
                <el-input
                  v-model="currentObj.config.activeText"
                  placeholder="打开时的文字描述"
                />
              </el-form-item>
              <el-form-item label="关闭时描述">
                <el-input
                  v-model="currentObj.config.inactiveText"
                  placeholder="关闭时的文字描述"
                />
              </el-form-item>
              <el-form-item label="状态为on时的值">
                <el-input
                  v-model="currentObj.config.activeValue"
                  placeholder="状态为on时的值"
                />
              </el-form-item>
              <el-form-item label="状态为off时的值">
                <el-input
                  v-model="currentObj.config.inactiveValue"
                  placeholder="状态为off时的值"
                />
              </el-form-item>
            </template>
            <template v-if="currentObj.render === 'image'">
              <el-form-item label="图片宽度">
                <el-input
                  v-model="currentObj.config.width"
                  placeholder="请输入图片宽度，单位px"
                />
              </el-form-item>
              <el-form-item label="图片高度">
                <el-input
                  v-model="currentObj.config.height"
                  placeholder="请输入图片高度，单位px"
                />
              </el-form-item>
            </template>
            <template v-if="['tag', 'text'].includes(currentObj.render)">
              <el-form-item
                label="值设置类型"
                style="margin-bottom: 0"
              >
                <div
                  v-for="(item, index) in state.tagCustomList"
                  :key="index"
                  style="
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                  "
                >
                  <el-input
                    v-model="item.value"
                    placeholder="对应的值"
                    @change="tagCustomChange"
                  >
                    <template #append>
                      <el-select
                        v-model="item.label"
                        style="width: 90px"
                        @change="tagCustomChange"
                      >
                        <el-option
                          v-for="item in uiType"
                          :key="item"
                          :label="item"
                          :value="item"
                        />
                      </el-select>
                    </template>
                  </el-input>
                  <i
                    style="margin-left: 10px"
                    class="icon-del"
                    @click="delTagCustomList(index as number)"
                  />
                </div>
              </el-form-item>
              <el-form-item class="flex-end">
                <el-button
                  v-show="state.tagCustomList.length < uiType.length"
                  type="primary"
                  @click="tagCustomAdd"
                >
                  新增值设置类型
                </el-button>
              </el-form-item>
              <el-form-item label="值替换数据">
                <el-select
                  v-model="state.replaceValueType"
                  @change="replaceValueTypeChange"
                >
                  <el-option
                    label="使用字典"
                    :value="0"
                  />
                  <el-option
                    label="自定义"
                    :value="1"
                  />
                </el-select>
              </el-form-item>
              <el-form-item
                v-if="state.replaceValueType === 0"
                label="字典类型key"
              >
                <el-input
                  v-model="currentObj.replaceValue"
                  placeholder="请输入字典类型key"
                />
              </el-form-item>
              <template v-else>
                <el-form-item label="值替换数据">
                  <div
                    v-for="(item, index) in state.replaceValueList"
                    :key="item.value"
                    style="
                      margin-bottom: 10px;
                      display: flex;
                      align-items: center;
                    "
                  >
                    <el-input
                      v-model="item.value"
                      placeholder="对应的值"
                      @change="replaceChange"
                    />
                    <el-input
                      v-model="item.label"
                      placeholder="替换的值"
                      @change="replaceChange"
                    />
                    <i
                      style="margin-left: 10px"
                      class="icon-del"
                      @click="delReplaceList(index as number)"
                    />
                  </div>
                </el-form-item>
                <el-form-item class="flex-end">
                  <el-button
                    type="primary"
                    @click="replaceValueAdd"
                  >
                    新增值替换数据
                  </el-button>
                </el-form-item>
              </template>
            </template>
            <template v-if="currentObj.render === 'link'">
              <el-form-item label="显示类型">
                <el-select v-model="currentObj.config.type">
                  <el-option
                    v-for="item in uiType"
                    :key="item"
                    :label="item"
                    :value="item"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="是否带下划线">
                <el-switch v-model="currentObj.config.underline" />
              </el-form-item>
              <el-form-item label="打开方式">
                <el-select v-model="currentObj.config.target">
                  <el-option value="_blank">
                    _blank
                  </el-option>
                  <el-option value="_parent">
                    _parent
                  </el-option>
                  <el-option value="_self">
                    _self
                  </el-option>
                  <el-option value="_top">
                    _top
                  </el-option>
                </el-select>
              </el-form-item>
            </template>
            <template v-if="['datetime', 'date'].includes(currentObj.render)">
              <el-form-item label="显示格式">
                <el-select v-model="currentObj.timeFormat">
                  <el-option
                    v-for="(item, index) in timeFormat"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </template>
            <template v-if="currentObj.render === 'buttons'">
              <el-form-item label="按钮设置">
                <operate-btn
                  v-model="currentObj.buttons"
                  position="right"
                />
              </el-form-item>
              <el-form-item class="flex-end">
                <el-button
                  type="primary"
                  @click="editOpenDrawer('buttons')"
                >
                  添加设置更多按钮
                </el-button>
              </el-form-item>
            </template>
            <el-form-item>
              <el-button
                v-if="currentObj.render"
                type="primary"
                @click="editOpenDrawer('renderFormatter')"
              >
                renderFormatter
              </el-button>
              <el-button
                type="primary"
                @click="editOpenDrawer('columns')"
              >
                设置表格列
              </el-button>
            </el-form-item>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="数据列表配置"
          name="second"
        >
          <el-form-item
            v-for="(item, index) in tableListAttr.filter(item => !item.hide)"
            :key="index"
            :label="item.label"
          >
            <el-select
              v-if="item.type === 'select'"
              v-model="item.value"
              v-bind="item"
              options=""
              @change="tableListAttrChange(item)"
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
              v-model="item.value"
              @input="tableListAttrChange(item, $event)"
            />
            <operate-btn
              v-else-if="item.type === 'operate'"
              v-model="tableData.controlBtn"
            />
            <el-input
              v-else
              v-model="item.value"
              :placeholder="item.placeholder"
              @input="tableListAttrChange(item)"
            />
          </el-form-item>
          <template v-if="tableData.treeData?.show">
            <el-form-item label="树标识名称">
              <el-input
                v-model="tableData.treeData.name"
                placeholder="树标识名称"
              />
            </el-form-item>
            <el-form-item label="树列表接口URL">
              <el-input
                v-model="tableData.treeData.requestUrl"
                placeholder="树列表数据接口URL"
              />
            </el-form-item>
            <el-form-item class="event-btn">
              <el-button
                type="primary"
                @click="editOpenDrawer('treeProp')"
              >
                编辑侧栏树属性
              </el-button>
              <el-button
                type="primary"
                @click="editOpenDrawer('treeBefore')"
              >
                树before事件
              </el-button>
              <el-button
                type="primary"
                @click="editOpenDrawer('treeAfter')"
              >
                树after事件
              </el-button>
            </el-form-item>
          </template>
          <el-form-item class="event-btn">
            <el-button
              type="primary"
              @click="editOpenDrawer('tableConfig')"
            >
              编辑表格属性
            </el-button>
          </el-form-item>
          <div class="h3">
            <h3>接口数据事件</h3>
          </div>
          <el-form-item label="主键">
            <el-input
              v-model="tableData.pk"
              placeholder="列表主键"
            />
          </el-form-item>
          <el-form-item label="列表数据请求URL">
            <el-input
              v-model="tableData.apiKey!.list"
              placeholder="一般不需要填写，使用默认值"
            />
          </el-form-item>
          <el-form-item label="删除列表数据URL">
            <el-input
              v-model="tableData.apiKey.del"
              placeholder="一般不需要填写，使用默认值"
            />
          </el-form-item>
          <el-form-item label="编辑保存状态URL">
            <el-input
              v-model="tableData.apiKey.edit"
              placeholder="一般不需要填写，使用默认值"
            />
          </el-form-item>
          <el-form-item label="导出列表URL">
            <el-input
              v-model="tableData.apiKey.export"
              placeholder="一般不需要填写，使用默认值"
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
  import { reactive, computed, inject, onMounted } from 'vue'
  import { formatNumber } from '@/utils/design'
  import { getFormSourceList } from './request'
  import OperateBtn from './operateBtn.vue'
  const emits = defineEmits<{
    (e: 'changeEvent', params: any): void
  }>()
  const tableData = inject('tableData', {})
  const currentObj = inject('currentObj')
  const tabsName = defineModel('tabsName')
  const state = reactive({
    formSourceList: [],
    tagCustomList: [], // 渲染为tag时
    replaceValueList: [],
    replaceValueType: 0 // 默认为字典
  })
  const renderList = [
    'switch',
    'image',
    'tag',
    'link',
    'datetime',
    'date',
    'buttons',
    'string',
    'text'
  ]
  const timeFormat = [
    { label: '年-月-日', value: '{yyyy}-{mm}-{dd}' },
    { label: '年-月-日 时:分:秒', value: '{yyyy}-{mm}-{dd} {h}:{i}:{s}' },
    { label: 'x年x月x日', value: '{yyyy}年{mm}月{dd}日' },
    { label: 'x年x月x日 时:分:秒', value: '{yyyy}年{mm}月{dd}日 {h}:{i}:{s}' },
    { label: '时:分:秒', value: '{h}:{i}:{s}' },
    {
      label: '年-月-日 时:分:秒 星期',
      value: '{yyyy}:{mm}:{dd} {h}:{i}:{s} 星期{w}'
    }
  ]
  const uiType = ['primary', 'success', 'warning', 'danger', 'info']
  const renderChange = (val: any) => {
    // if (!currentObj.value.config) {
    // 切换时清空这些与当前不匹配的设置
    currentObj.value.config = {}
    delete currentObj.value.replaceValue
    delete currentObj.value.timeFormat
    delete currentObj.value.buttons
    delete currentObj.value.custom
    // }
    // 添加一条默认的
    if (['tag', 'text'].includes(val)) {
      state.tagCustomList = [
        {
          label: 'primary',
          value: ''
        }
      ]
    } else if (val === 'buttons') {
      currentObj.value.buttons = []
    }
  }
  const arrayToObject = (array: any) => {
    if (!array) {
      return {}
    }
    const obj: any = {}
    for (const item of array) {
      obj[item.value] = item.label
    }
    return obj
  }
  const tagCustomAdd = () => {
    state.tagCustomList.push({
      label: 'primary',
      value: ''
    })
  }
  const delTagCustomList = (index: number) => {
    state.tagCustomList.splice(index, 1)
  }
  const tagCustomChange = () => {
    if (!currentObj.value?.custom) {
      currentObj.value.custom = {}
    }
    currentObj.value.custom = arrayToObject(state.tagCustomList)
  }
  const replaceValueAdd = () => {
    state.replaceValueList.push({
      label: '',
      value: ''
    })
  }
  const delReplaceList = (index: number) => {
    state.replaceValueList.splice(index, 1)
  }
  // 切换至自定义时，默认添加一条记录
  const replaceValueTypeChange = (val: number) => {
    if (val === 1) {
      state.replaceValueList = [
        {
          label: '',
          value: ''
        }
      ]
      currentObj.value.replaceValue = {}
    } else {
      currentObj.value.replaceValue = ''
    }
  }
  const replaceChange = () => {
    currentObj.value.replaceValue = arrayToObject(state.replaceValueList)
  }
  const formSourceRemoteMethod = (name: string) => {
    getData(name)
  }
  const tableListAttr = computed(() => {
    return [
      {
        label: '所属表单',
        placeholder: '请选择所属表单',
        value: parseInt(tableData.value.config.formId) || '',
        key: 'formId',
        type: 'select',
        options: state.formSourceList,
        clearable: true,
        filterable: true,
        remote: true,
        remoteMethod: formSourceRemoteMethod
      },
      {
        label: '数据列表名称',
        placeholder: '保存的数据列表名称',
        value: tableData.value.config.name,
        key: 'name'
      },
      {
        label: '数据添加编辑打开方式',
        placeholder: '默认新页面打开',
        value: tableData.value.config.openType,
        type: 'select',
        options: [
          { label: '弹窗', value: 'dialog' },
          { label: '新页面', value: 'page' }
        ],
        key: 'openType',
        clearable: true
        // hide: !state.formId
      },
      {
        label: '窗口宽度',
        placeholder: '弹窗宽度',
        value: tableData.value.config.dialogWidth,
        type: 'input',
        key: 'dialogWidth',
        hide: tableData.value.config.openType !== 'dialog'
      },
      {
        label: '横向滚动固定在底部',
        value: tableData.value.config.fixedBottomScroll,
        key: 'fixedBottomScroll',
        type: 'select',
        placeholder: '默认开启',
        options: [
          {
            label: '启用',
            value: true
          },
          { label: '禁用', value: false }
        ],
        clearable: true
      },
      {
        label: '列显示隐藏设置',
        value: tableData.value.config.columnsSetting,
        key: 'columnsSetting',
        type: 'select',
        placeholder: '默认开启',
        options: [
          {
            label: '启用',
            value: true
          },
          { label: '禁用', value: false }
        ],
        clearable: true
      },
      {
        label: '操作按钮设置',
        type: 'operate'
      },
      {
        label: '可折叠查询表单',
        value: tableData.value.config.expand,
        key: 'expand',
        type: 'switch'
      },
      {
        label: '查询跳转页面',
        value: tableData.value.config.searchJump,
        key: 'searchJump',
        type: 'switch'
      },
      {
        label: '操作列按钮下拉',
        value: tableData.value.config.operateDropdown,
        key: 'operateDropdown',
        type: 'input',
        placeholder: '大于设定个数的以下拉形式显示'
      },
      {
        label: '分页设置',
        value: tableData.value.config.pageSize,
        key: 'pageSize',
        type: 'input',
        placeholder: '每页分多少条'
      },
      {
        label: '查询排序',
        value: tableData.value.config.orderSort,
        key: 'orderSort',
        type: 'input',
        placeholder: '查询排序，id desc'
      },
      {
        label: '开启侧栏树',
        value: tableData.value.treeData?.show,
        key: 'tree',
        type: 'switch'
      }
    ]
  })

  const tableListAttrChange = (obj: any, val?: any) => {
    if (obj.key === 'tree') {
      if (!tableData.value.treeData) {
        tableData.value.treeData = {}
      }
      tableData.value.treeData.show = val
      return
    }
    if (obj.key === 'formId') {
      // 列表数据源选择时，需查当前表单所有字段
      if (!obj.value && tableData.value.config?.openType === 'dialog') {
        // 没有选数据源时，将数据添加编辑打开方式改为默认，直接删除属性
        delete tableData.value.config.openType
      }
      emits('changeEvent', { type: 'formId', value: obj.value })
    }
    tableData.value.config[obj.key] = obj.value
  }
  const editOpenDrawer = (type: string) => {
    emits('changeEvent', { type: 'openDrawer', value: type })
  }

  const getData = (name?: string) => {
    //  获取所有可用的表单数据源
    getFormSourceList(name).then((data) => {
      state.formSourceList = data
    })
  }

  const objectToArray = (obj: any) => {
    if (!obj) {
      return []
    }
    const array: any = []
    for (const key in obj) {
      array.push({
        value: key,
        label: obj[key]
      })
    }
    return array
  }
  // 列表点击设置时，这里使用点击事件主动做一些数据转换，不使用watch深监听currentObj
  const rowChange = () => {
    if (['tag', 'text'].includes(currentObj.value.render)) {
      console.log('currentObj.render')
      if (Object.keys(currentObj.value.custom).length) {
        state.tagCustomList = objectToArray(currentObj.value.custom)
      }
      if (
        currentObj.value.replaceValue
        && typeof currentObj.value.replaceValue === 'object'
      ) {
        state.replaceValueList = objectToArray(currentObj.value.replaceValue)
        state.replaceValueType = 1
      }
    }
  }
  defineExpose({ rowChange })
  onMounted(() => {
    getData()
  })
</script>
