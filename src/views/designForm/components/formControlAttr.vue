<!-- Created by 337547038 on 2021/6/1 0001. -->
<template>
  <div class="sidebar-tools">
    <el-tabs modelValue="first">
      <el-tab-pane label="字段属性" name="first">
        <el-form size="mini" class="form">
          <h3>通用属性</h3>
          <el-form-item label="自定义Class">
            <el-input v-model="controlData.className" placeholder="样式类名"></el-input>
          </el-form-item>
          <el-form-item label="字段标识" v-if="showHide(['grid', 'tabs', 'card','title','gridChild','tableColumn'])">
            <el-select
              v-if="dataSourceList&&dataSourceList.length>0"
              v-model="controlData.name"
              @change="dataSourceChange">
              <el-option
                v-for="item in dataSourceList"
                :key="item.COLUMN_NAME"
                :label="`${item.COLUMN_COMMENT||item.COLUMN_NAME}(${item.COLUMN_NAME})`"
                :value="item.COLUMN_NAME">
              </el-option>
            </el-select>
            <el-input v-model="controlData.name" placeholder="字段唯一标识，对应数据库" v-else></el-input>
          </el-form-item>
          <template v-if="showHide(['table','grid','tabs','title','gridChild'])">
            <el-form-item label="显示标题">
              <el-input v-model="controlData.item.label" placeholder="显示的label标签名称"></el-input>
            </el-form-item>
            <el-form-item label="隐藏标签" v-if="showHide(['card'])">
              <el-switch v-model="controlData.item.showLabel"></el-switch>
            </el-form-item>
            <el-form-item label="帮助信息">
              <el-input v-model="controlData.config.help"></el-input>
            </el-form-item>
          </template>
          <el-form-item label="表单栅格" v-if="showHide(['table','grid','gridChild'])">
            <el-input v-model="controlData.config.span" placeholder="表单区域栅格宽"></el-input>
          </el-form-item>
          <el-form-item label="占位内容" v-if="showHide(['input','textarea','select','date','number'],true)">
            <el-input v-model="controlData.control.placeholder" placeholder="placeholder"></el-input>
          </el-form-item>
          <el-form-item label="默认值" v-if="showHide(['txt'],true)">
            <el-input v-model="controlData.control.modelValue" placeholder="支持html" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="设为密码" v-if="showHide(['input','password'],true)">
            <el-select v-model="controlData.type">
              <el-option value="input" label="文本"></el-option>
              <el-option value="password" label="密码"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文本域高度" v-if="showHide(['textarea'],true)">
            <el-input v-model="controlData.control.rows" placeholder="输入框行数"></el-input>
          </el-form-item>
          <div v-if="showHide(['input'],true)">
            <el-form-item label="前缀">
              <el-input v-model="controlData.slot.prepend"></el-input>
            </el-form-item>
            <el-form-item label="后缀">
              <el-input v-model="controlData.slot.append"></el-input>
            </el-form-item>
          </div>
          <el-form-item
            label="操作属性"
            v-if="showHide(['input','textarea','radio','checkbox','select','date','switch','number','cascader','upload'],true)">
            <el-checkbox
              v-model="controlData.control.multiple"
              label="多选"
              v-if="showHide(['select'],true)"
              @change="selectMultipleChange">
            </el-checkbox>
            <el-checkbox
              v-if="showHide(['input','textarea','radio','checkbox','select','date','switch','number','cascader','upload'],true)"
              v-model="controlData.control.disabled"
              label="禁用">
            </el-checkbox>
            <el-checkbox
              v-model="controlData.config.editDisabled"
              label="禁用编辑">
            </el-checkbox>
          </el-form-item>
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
          <template v-if="showHide(['grid'],true)"></template>
          <template v-if="showHide(['card'],true)"></template>
          <template v-if="showHide(['title'],true)">
            <el-form-item label="标题">
              <el-input v-model="controlData.control.modelValue"></el-input>
            </el-form-item>
          </template>
          <template v-if="showHide(['gridChild'],true)">
            <el-form-item label="栅格占据的列数">
              <el-input v-model.number="controlData.attr.span"></el-input>
            </el-form-item>
            <el-form-item label="栅格左侧的间隔格数">
              <el-input v-model.number="controlData.attr.offset"></el-input>
            </el-form-item>
            <el-form-item label="栅格向右移动格数">
              <el-input v-model.number="controlData.attr.push"></el-input>
            </el-form-item>
            <el-form-item label="栅格向左移动格数">
              <el-input v-model.number="controlData.attr.pull"></el-input>
            </el-form-item>
          </template>
          <template v-if="showHide(['table'],true)">
            <el-form-item label="添加列">
              <el-checkbox @change="tableColumnAdd($event)" v-model="columnIndex">序号列</el-checkbox>
              <el-checkbox @change="tableColumnAdd($event,1)" v-model="columnOperate">操作列</el-checkbox>
            </el-form-item>
          </template>
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
          <template v-if="showHide(['component'],true)">
            <el-form-item label="组件名">
              <el-input v-model="controlData.template" placeholder="import进来的组件名称"></el-input>
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
            v-if="showHide(['txt','title','table','grid','tabs','card','switch','gridChild','tableColumn'])&&!searchDesign">
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
          <div v-if="showHide(['grid','card','gridChild'])">
            <h3>其他属性</h3>
            <el-button size="mini" @click="openAttrDialog">添加属性</el-button>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="表单属性" name="second">
        <el-form size="mini" class="form">
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
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {reactive, toRefs, ref, computed, nextTick, onUnmounted} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {getFiled} from "@/api"

export default {
  name: 'formControlAttr',
  components: {},
  props: {
    formConfig: Object,
    linkageValue: Object
  },
  emits: ['openDialog'],
  setup(props, {emit}) {
    const store = useStore()
    const route = useRoute()
    const dataSource = route.query.dataSource
    const state = reactive({
      formAttr: [
        {label: '表单名称', value: 'name'},
        {label: '表单标签宽度', value: 'labelWidth'},
        {label: '表单样式名称', value: 'class'},
        {
          label: '组件尺寸', value: 'size', type: 'select', options: [
            {label: 'default', value: ''},
            {label: 'medium', value: 'medium'},
            {label: 'small', value: 'small'},
            {label: 'mini', value: 'mini'}
          ]
        }
      ],
      dataSourceList: [],
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
      searchDesign: route.query.type === 'search'
    })

    if (dataSource) {
      // 根据选定数据源获取表单字段
      getFiled(dataSource)
        .then(res => {
          if (res.data.code === 200) {
            state.dataSourceList = res.data.data
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
    // select多选属性，
    const selectMultipleChange = val => {
      if (val) {
        // 多选，将值改为数组
        controlData.value.control.modelValue = []
      } else {
        // 单选
        controlData.value.control.modelValue = ''
      }
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
    const dataSourceChange = val => {
      const current = state.dataSourceList.find(item => {
        return item.COLUMN_NAME === val
      })
      controlData.value.item.label = current.COLUMN_COMMENT || current.COLUMN_NAME
    }
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
    // 是否显示序号列
    const columnIndex = computed(() => {
      const list = controlData.value && controlData.value.list
      if (list && list.length > 0) {
        return list[0].typeColumn === 'index'
      }
      return false
    })
    // 是否显示操作列
    const columnOperate = computed(() => {
      const list = controlData.value && controlData.value.list
      if (list && list.length > 0) {
        return list[list.length - 1].typeColumn === 'operate'
      } else {
        return false
      }
    })
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
    return {
      ...toRefs(state),
      controlData,
      delSelectOption,
      addSelectOption,
      openAttrDialog,
      selectMultipleChange,
      requiredChange,
      addRules,
      dataSourceChange,
      showHide,
      tableColumnAdd,
      columnIndex,
      columnOperate,
      checkboxRequired,
      addRulesFast,
      delAddRules
    }
  }
}
</script>
