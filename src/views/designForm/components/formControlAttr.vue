<!-- Created by 337547038 on 2021/6/1 0001. -->
<template>
  <div class="sidebar-tools">
    <el-tabs modelValue="first">
      <el-tab-pane label="字段属性" name="first">
        <el-form size="small" class="form">
          <h3>通用属性</h3>
          <template v-for="(item,index) in attrList" :key="index">
            <el-form-item :label="item.label">
              <el-select
                v-if="item.type==='select'"
                :placeholder="item.placeholder"
                v-model="item.value"
                @change="controlChange(item,$event)">
                <el-option v-for="(opt,key) in item.dict" :key="opt" :value="opt" :label="key"></el-option>
              </el-select>
              <el-switch
                v-else-if="item.type==='switch'"
                v-model="item.value"
                @change="controlChange(item,$event)"></el-switch>
              <el-input
                v-else
                :type="item.inputStyle"
                v-model="item.value"
                :placeholder="item.placeholder"
                @change="controlChange(item,$event)">
              </el-input>
            </el-form-item>
          </template>
          <el-form-item
            label="联动条件"
            v-if="showHide(['input','textarea','radio','checkbox','select','date','switch','number','cascader'],true)">
            <el-col :span="9">
              <el-input placeholder="标识名称" v-model="controlData.config.linkKey"></el-input>
            </el-col>
            <el-col :span="2" :offset="1">=</el-col>
            <el-col :span="9" :offset="1">
              <el-input placeholder="关联值" v-model="controlData.config.linkValue"></el-input>
            </el-col>
          </el-form-item>
          <template v-if="showHide(['tabs'],true)">
            <h3>标签配置项</h3>
            <el-form-item v-for="(item,index) in controlData.columns" :key="item.label">
              <el-col :span="12">
                <el-input placeholder="标签配置项" v-model="item.label"></el-input>
              </el-col>
              <el-col :span="2" :offset="1">
                <i class="icon-del" @click="delSelectOption(index,'tabs')"></i></el-col>
            </el-form-item>
            <el-form-item>
              <el-button @click="addSelectOption('tabs')">增加标签</el-button>
            </el-form-item>
          </template>
          <div v-if="showHide(['radio', 'select', 'checkbox', 'cascader'],true)">
            <h3>选项配置</h3>
            <el-tabs v-model="controlData.config.type">
              <el-tab-pane label="固定选项" name="fixed">
                <div v-if="controlData.type!=='cascader'">
                  <el-form-item
                    v-for="(item,index) in controlData.options"
                    :key="index">
                    <el-col :span="10">
                      <el-input placeholder="选项标签" v-model="item.label"></el-input>
                    </el-col>
                    <el-col :span="10" :offset="1">
                      <el-input placeholder="选项值" v-model="item.value"></el-input>
                    </el-col>
                    <el-col :span="2" :offset="1"><i class="icon-del" @click="delSelectOption(index)"></i></el-col>
                  </el-form-item>
                </div>
                <el-form-item>
                  <el-button @click="addSelectOption">新增</el-button>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane label="动态选项" name="async">
                <el-radio-group v-model="controlData.config.source">
                  <el-radio :label="0">数据源</el-radio>
                  <el-radio :label="1">方法函数</el-radio>
                </el-radio-group>
                <el-form-item>
                  <el-input
                    v-model="controlData.config.sourceFun"
                    :placeholder="controlData.config.source?'方法函数名':'数据源接口URL'">
                    <template #prepend v-if="!controlData.config.source">
                      <el-select v-model="controlData.config.request" style="width:80px">
                        <el-option label="get" value="get"></el-option>
                        <el-option label="post" value="post"></el-option>
                      </el-select>
                    </template>
                  </el-input>
                </el-form-item>
                <!--                <el-form-item v-if="controlData.config.source===0">
                                  <el-input :rows="4" type="textarea" v-model="controlData.config.getResultFun"
                                            placeholder="获取结果方法如：if(res.data.code===200){callback(res.data.data)}"></el-input>
                                </el-form-item>-->
              </el-tab-pane>
            </el-tabs>
          </div>
          <template
            v-if="showHide(['txt','title','table','grid','tabs','card','switch','gridChild','tableColumn','divider'])&&!searchDesign">
            <h3>校验设置</h3>
            <div v-if="showHide(['input','password','component'],true)">
              <el-form-item v-if="formConfig.rulesComm&&formConfig.rulesComm.length>0">
                <el-select
                  placeholder="快速选择"
                  :multiple="true"
                  v-model="controlData.rulesComm">
                  <el-option
                    v-for="item in formConfig.rulesComm"
                    :label="item.message"
                    :value="item.key"
                    :key="item.key">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-for="(item,index) in controlData.customRules" :key="item.type">
                <el-input
                  v-model="item.message"
                  placeholder="校验提示信息">
                  <template #prepend>
                    <el-select v-model="item.type" style="width: 80px">
                      <el-option
                        v-for="list in customRulesList"
                        :key="list.type"
                        :label="list.label"
                        :value="list.type"></el-option>
                    </el-select>
                  </template>
                  <template #append>
                    <el-button icon="icon-del" @click="delAddRules(index)"></el-button>
                  </template>
                </el-input>
                <el-input placeholder="正则表达式" v-model="item.rules" v-if="item.type==='rules'"></el-input>
                <el-input placeholder="方法名称" v-model="item.methods" v-if="item.type==='methods'"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="addRulesFast">快速添加</el-button>
                <el-button @click="addRules">编辑校验规则</el-button>
              </el-form-item>
            </div>
            <el-form-item v-else>
              <el-checkbox
                :modelValue="checkboxRequired"
                @change="requiredChange">必填
              </el-checkbox>
              <el-input
                placeholder="自定义必填错误提示"
                v-model="controlData.rules[0].message"
                v-if="controlData.rules&&controlData.rules[0]"></el-input>
            </el-form-item>
          </template>
          <div v-if="showHide(['grid','card','gridChild','divider'])">
            <h3>其他属性</h3>
            <el-button size="small" @click="openAttrDialog">添加属性</el-button>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="表单属性" name="second">
        <el-form size="small" class="form">
          <el-form-item
            v-for="(item,index) in formAttr"
            :label="item.label"
            :key="index">
            <el-select
              v-if="item.type==='select'"
              v-model="formConfig[item.value]">
              <el-option
                :label="opt.label"
                v-for="opt in item.options"
                :key="opt.label"
                :value="opt.value">
              </el-option>
            </el-select>
            <el-input
              v-else
              v-model="formConfig[item.value]"
              :placeholder="item.placeholder">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="rulesCommClick">编辑全局校验规则</el-button>
            <el-button @click="editFormStyle">编辑表单样式</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {reactive, toRefs, ref, computed, nextTick, onUnmounted, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {getFiled} from "@/api"

export default {
  name: 'formControlAttr',
  components: {},
  props: {
    formConfig: Object,
    linkageValue: Object,
    formStyle: String
  },
  emits: ['openDialog', 'update:formStyle'],
  setup(props, {emit}) {
    const store = useStore()
    const route = useRoute()
    const dataSource = route.query.formName
    const state = reactive({
      formAttr: [
        {label: '表单名称', value: 'name'},
        {label: '表单标签宽度', value: 'labelWidth'},
        {label: '表单样式名称', value: 'class'},
        {
          label: '组件尺寸', value: 'size', type: 'select', options: [
            {label: 'large', value: 'large'},
            {label: 'default', value: 'default'},
            {label: 'small', value: 'small'}
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
      searchDesign: route.query.type === 'search',
      attrList: []
    })

    if (dataSource) {
      // 根据选定数据源获取表单字段
      getFiled(dataSource)
        .then(res => {
          if (res.data.code === 200) {
            res.data.data.forEach(item => {
              state.dataSourceList[item.label || item.value] = item.value
            })
          }
          state.loading = false
        })
        .catch(res => {
          console.log(res)
        })
    }
    const controlData = computed(() => {
      return store.state.form.controlAttr
    })
    watch(() => controlData.value, (val) => {
      // console.log('watch ok')
      if (Object.keys(val).length > 0) {
        setAttrList()
      } else {
        state.attrList = []
      }
    })
    // 设置通用属性
    const setAttrList = () => {
      const {control = {}, className = '', type, name, config = {}, item = {}, attr = {}} = controlData.value
      let columnIndex = false// 是否显示序号列
      let columnOperate = false// 是否显示操作列
      if (type === 'table') {
        // 表格时处理
        const list = controlData.value && controlData.value.list
        if (list && list.length > 0) {
          columnIndex = list[0].typeColumn === 'index'
        }
        if (list && list.length > 0) {
          columnOperate = list[list.length - 1].typeColumn === 'operate'
        }
      }
      state.attrList = [
        {
          label: '自定义Class',
          value: className,
          placeholder: "样式类名",
          path: 'className'
        },
        {
          label: '字段标识',
          value: name,
          type: Object.keys(state.dataSourceList).length > 0 ? 'select' : 'text',
          placeholder: "字段唯一标识，对应数据库",
          dict: state.dataSourceList,
          path: 'name',
          vHide: ['grid', 'tabs', 'card', 'title', 'gridChild', 'tableColumn', 'divider'],
          eventName: 'filedNameKey'
        },
        {
          label: '占位内容',
          value: control.placeholder,
          placeholder: 'placeholder',
          path: 'control.placeholder',
          vShow: ['input', 'textarea', 'select', 'date', 'number', 'datePicker','tinymce','timePicker']
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
          vHide: ['table', 'grid', 'tabs', 'title', 'gridChild', 'divider', 'card']
        },
        {
          label: '帮助信息',
          value: config.help,
          path: 'config.help',
          vHide: ['table', 'grid', 'tabs', 'title', 'gridChild', 'divider']
        },
        {
          label: '表单栅格',
          value: config.span,
          placeholder: '表单区域栅格宽',
          path: 'config.span',
          vHide: ['table', 'grid', 'gridChild', 'divider']
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
          dict: {'文本': 'input', '密码': 'password'},
          path: 'type',
          vShow: ['input', 'password']
        },
        {
          label: '文本域高度',
          value: control.rows,
          placeholder: '输入框行数',
          path: 'control.rows',
          vShow: ['textarea']
        },
        {
          label: '前缀',
          value: config.prepend,
          placeholder: '文本前缀',
          path: 'config.prepend',
          vShow: ['input']
        },
        {
          label: '后缀',
          value: config.append,
          placeholder: '文本后缀',
          path: 'config.append',
          vShow: ['input']
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
          vShow: ['input', 'textarea', 'radio', 'checkbox', 'select', 'date', 'switch', 'number', 'cascader', 'upload', 'rate','tinymce']
        },
        {
          label: '是否禁用编辑',
          value: config.editDisabled,
          path: 'config.editDisabled',
          type: 'switch',
          vShow: ['input', 'textarea', 'radio', 'checkbox', 'select', 'date', 'switch', 'number', 'cascader', 'upload']
        },
        {
          label: '添加页隐藏',
          value: config.disabledAdd,
          path: 'config.disabledAdd',
          type: 'switch'
        },
        {
          label: '编辑页隐藏',
          value: config.disabledEdit,
          path: 'config.disabledEdit',
          type: 'switch'
        },
        {
          label: '详情页隐藏',
          value: config.disabledDetail,
          path: 'config.disabledDetail',
          type: 'switch'
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
          eventName: 'formatNumber'
        },
        {
          label: '左侧的间隔格数offset',
          value: attr.offset,
          path: 'attr.offset',
          vShow: ['gridChild'],
          eventName: 'formatNumber'
        },
        {
          label: '向右移动格数push',
          value: attr.push,
          path: 'attr.push',
          vShow: ['gridChild'],
          eventName: 'formatNumber'
        },
        {
          label: '向左移动格数pull',
          value: attr.pull,
          path: 'attr.pull',
          vShow: ['gridChild'],
          eventName: 'formatNumber'
        },
        {
          label: '序号列',
          value: columnIndex,
          type: 'switch',
          vShow: ['table'],
          eventName: 'tableColumn1'
        },
        {
          label: '操作列',
          value: columnOperate,
          type: 'switch',
          vShow: ['table'],
          eventName: 'tableColumn2'
        },
        {
          label: '组件名',
          value: config.template,
          placeholder: "import进来的组件名称",
          path: 'config.template',
          vShow: ['component']
        },
        {
          label: '上传地址',
          value: control.action,
          placeholder: "图片/文件上传地址",
          path: 'control.action',
          vShow: ['upload']
        },
        {
          label: '文件字段名',
          value: control.name,
          placeholder: "上传的文件字段名",
          path: 'control.name',
          vShow: ['upload']
        },
        {
          label: '列表类型',
          value: control.listType,
          type: 'select',
          dict: {'text': 'text', picture: 'picture', 'picture-card': 'picture-card'},
          path: 'control.listType',
          vShow: ['upload']
        },
        {
          label: '提示文字',
          value: config.tip,
          placeholder: "提示说明文字",
          path: 'config.tip',
          vShow: ['upload']
        },
        {
          label: '按钮文本',
          value: config.btnText,
          placeholder: "上传按钮文本",
          path: 'config.btnText',
          vShow: ['upload']
        },
        {
          label: 'direction',
          type: 'select',
          dict: {horizontal: 'horizontal', vertical: 'vertical'},
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
          dict: {left: 'left', right: 'right', center: 'center'},
          value: control.contentPosition,
          path: 'control.contentPosition',
          vShow: ['divider']
        },
        {
          label: '最小值',
          value: control.min,
          path: 'control.min',
          vShow: ['slider'],
          eventName: 'formatNumber'
        },
        {
          label: '最大值',
          value: control.max,
          path: 'control.max',
          vShow: ['rate', 'slider'],
          eventName: 'formatNumber'
        },
        {
          label: '步长',
          value: control.step,
          path: 'control.step',
          vShow: ['slider'],
          eventName: 'formatNumber'
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
            dates: 'dates',
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
          dict: {hsl: 'hsl', hsv: 'hsv', hex: 'hex', rgb: 'rgb'},
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
          label: '显示模式',
          value: config.style,
          path: 'config.style',
          placeholder: '显示风格(预览查看效果)',
          type:'select',
          dict:{'default':'default',simple:'simple'},
          vShow: ['tinymce']
        }
      ]
      // 过滤显示对应的值
      state.attrList = state.attrList.filter(item => {
        let hasFilter = true
        if (item.vShow) {
          hasFilter = item.vShow.indexOf(type) !== -1
        }
        if (item.vHide) {
          hasFilter = item.vHide.indexOf(type) === -1
        }
        return hasFilter
      })
    }
    const controlChange = (obj, val) => {
      /*console.log(obj)
      console.log(val)*/
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
        case 'tableColumn2':
          tableColumnAdd(val, 1)
          break
        case 'formatNumber':
          val = parseInt(val)// 将值转数值
          break
        case 'filedNameKey':
          // 选择字段标识时，同时修改显示标题
          // 根据value找key
          for (const key in state.dataSourceList) {
            if (state.dataSourceList[key] === val) {
              controlData.value.item.label = key
              return
            }
          }
          break
      }
      obj.path && getPropByPath(controlData.value, obj.path, val)
    }
    // 修改指定路径下的值
    const getPropByPath = (obj, path, val) => {
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
    const delSelectOption = (index, type) => {
      if (type === 'tabs') {
        // console.log(index)
        controlData.value.columns.splice(index, 1)
      } else {
        controlData.value.options.splice(index, 1)
      }
    }
    // 多选固定选项增加
    const addSelectOption = (type) => {
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
      emit('openDialog', editData, result => {
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
    const requiredChange = val => {
      if (val) {
        controlData.value.rules.push({
          required: true,
          message: '必填项',
          trigger: 'change'
        })
      } else {
        controlData.value.rules.splice(0, 1)
      }
    }
    // 添加校验规则
    const addRules = () => {
      emit('openDialog', controlData.value.rules, result => {
        Object.assign(controlData.value.rules, result)
      })
    }
    // 选择字段标识时，同时修改显示标题
    /*const dataSourceChange = val => {
      const current = state.dataSourceList.find(item => {
        return item.COLUMN_NAME === val
      })
      controlData.value.item.label = current.COLUMN_COMMENT || current.COLUMN_NAME
    }*/
    // 根据不同类型判断是否显示当前属性
    const showHide = (type, show) => {
      // show=true 条件成立显示，false符合条件隐藏
      if ((type && type.length === 0) || Object.keys(controlData.value).length === 0) {
        return false
      }
      const index = type.indexOf(controlData.value.type)
      return show ? index !== -1 : index === -1
    }
    // 子表时添加序号和操作列
    const tableColumnAdd = (val, type) => {
      const item = {
        name: '',
        type: 'tableColumn',
        typeColumn: type ? 'operate' : 'index', // 用来判断是序号列还是操作列
        item: {
          label: type ? '操作' : '序号'
        },
        control: {
          type: type ? '' : 'index'
        },
        config: {}
      }
      if (val) {
        if (type) {
          // 操作列
          controlData.value.list.push(item)
        } else {
          // 序号列
          controlData.value.list.unshift(item)
        }
      } else {
        if (type) {
          // 操作列
          controlData.value.list.splice(controlData.value.list.length - 1, 1)
        } else {
          // 序号列
          controlData.value.list.splice(0, 1)
        }
      }
    }
    // 校验规则必填勾选设置，存在校验规则时勾选
    const checkboxRequired = computed(() => {
      const val = controlData.value && controlData.value.rules
      return val && val.length > 0
    })
    // 快速添加一条校验规则
    const addRulesFast = () => {
      controlData.value.customRules && controlData.value.customRules.push({
        type: 'required',
        message: '',
        trigger: 'blur'
      })
    }
    // 删除一条校验规则
    const delAddRules = index => {
      controlData.value.customRules && controlData.value.customRules.splice(index, 1)
    }
    // 添加编辑全局校验规则
    const rulesCommClick = () => {
      emit('openDialog', props.formConfig.rulesComm, result => {
        Object.assign(props.formConfig.rulesComm, result)
      })
    }
    // 编辑表单样式
    const editFormStyle = () => {
      emit('openDialog', props.formStyle || '', result => {
        // console.log(result)
        // Object.assign(props.formConfig.rulesComm, result)
        emit('update:formStyle', result)
      }, 'css')
    }
    return {
      ...toRefs(state),
      controlData,
      delSelectOption,
      addSelectOption,
      openAttrDialog,
      requiredChange,
      addRules,
      // dataSourceChange,
      showHide,
      tableColumnAdd,
      checkboxRequired,
      addRulesFast,
      delAddRules,
      rulesCommClick,
      editFormStyle,
      controlChange
    }
  }
}
</script>
