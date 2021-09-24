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
          <template v-if="controlData.type==='grid'"></template>
          <template v-if="controlData.type==='card'"></template>
          <template v-else-if="controlData.type==='title'">
            <el-form-item label="标题">
              <el-input v-model="controlData.control.value"></el-input>
            </el-form-item>
          </template>
          <template v-else-if="controlData.type==='gridChild'">
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
          <template v-else-if="controlData.type==='table'"></template>
          <template v-else-if="controlData.type==='tabs'">
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
          <template v-else-if="controlData.type">
            <el-form-item label="字段标识">
              <el-input v-model="controlData.name" placeholder="字段唯一标识，对应数据库"></el-input>
            </el-form-item>
            <el-form-item label="显示标题">
              <el-input v-model="controlData.item.label" placeholder="显示的label标签名称"></el-input>
            </el-form-item>
            <el-form-item label="表单栅格">
              <el-input v-model="controlData.item.span" placeholder="表单区域栅格宽"></el-input>
            </el-form-item>
            <el-form-item label="占位内容">
              <el-input v-model="controlData.control.placeholder" placeholder="placeholder"></el-input>
            </el-form-item>
            <el-form-item label="默认值" v-if="controlData.type==='txt'">
              <el-input v-model="controlData.control.value" placeholder="支持html" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="设为密码" v-if="controlData.type==='input'||controlData.type==='password'">
              <el-select v-model="controlData.type">
                <el-option value="input" label="文本"></el-option>
                <el-option value="password" label="密码"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="文本域高度" v-if="controlData.type==='textarea'">
              <el-input v-model="controlData.control.rows" placeholder="输入框行数"></el-input>
            </el-form-item>
            <el-form-item label="隐藏标签">
              <el-switch v-model="controlData.item.showLabel"></el-switch>
            </el-form-item>
            <div v-if="controlData.type==='input'">
              <el-form-item label="前缀">
                <el-input v-model="controlData.slot.prepend"></el-input>
              </el-form-item>
              <el-form-item label="后缀">
                <el-input v-model="controlData.slot.append"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="帮助信息">
              <el-input v-model="controlData.help"></el-input>
            </el-form-item>
            <el-form-item label="操作属性">
              <el-checkbox
                v-model="controlData.control.multiple"
                label="多选"
                v-if="controlData.type==='select'"
                @change="selectMultipleChange">
              </el-checkbox>
              <el-checkbox
                v-model="controlData.control.disabled"
                label="禁用">
              </el-checkbox>
            </el-form-item>
            <div v-if="showOptionType(controlData.type)">
              <h3>选项配置</h3>
              <el-tabs v-model="controlData.optionsType">
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
                  <el-radio-group v-model="controlData.optionsSource">
                    <el-radio :label="0">数据源</el-radio>
                    <el-radio :label="1">方法函数</el-radio>
                  </el-radio-group>
                  <el-form-item>
                    <el-input
                      v-model="controlData.optionsSourceFun"
                      :placeholder="controlData.optionsSource?'方法函数名':'数据源接口URL'">
                      <template #prepend v-if="!controlData.optionsSource">
                        <el-select v-model="controlData.optionsRequest" style="width:80px">
                          <el-option label="get" value="get"></el-option>
                          <el-option label="post" value="post"></el-option>
                        </el-select>
                      </template>
                    </el-input>
                  </el-form-item>
                </el-tab-pane>
              </el-tabs>
            </div>
            <template v-if="showVerify(controlData.type)">
              <h3>校验设置</h3>
              <el-form-item>
                <el-checkbox @change="requiredChange">必填</el-checkbox>
                <el-input
                  placeholder="自定义必填错误提示"
                  v-model="controlData.rules[0].message"
                  v-if="controlData.rules&&controlData.rules[0]"></el-input>
              </el-form-item>
              <div v-if="controlData.type==='input'||controlData.type==='password'">
<!--                <el-form-item v-for="item in controlData.rules" :key="item.message">
                  <el-select></el-select>
                </el-form-item>-->
                <el-form-item>
                  <el-button @click="addRules">编辑校验规则</el-button>
                </el-form-item>
              </div>
            </template>
          </template>
          <div v-show="Object.keys(controlData).length!==0">
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
            <el-select v-if="item.type==='select'" v-model="formConfig[item.value]">
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
import jsbeautify from 'js-beautify'

export default {
  name: 'formControlAttr',
  props: {
    formConfig: Object
  },
  emits: ['openDialog'],
  setup(props, {emit}) {
    const state = reactive({
      formAttr: [
        {label: '表单名称', value: 'name'},
        {label: '表单标签宽度', value: 'labelWidth'},
        {label: '表单样式名称', value: 'className'},
        {
          label: '组件尺寸', value: 'size', type: 'select', options: [
            {label: 'medium', value: 'medium'},
            {label: 'small', value: 'small'},
            {label: 'mini', value: 'mini'}
          ]
        }
      ],
      // attrDialog: false
    })
    const store = useStore()
    const showOptionType = type => {
      return ['radio', 'select', 'checkbox', 'cascader'].indexOf(type) !== -1
    }
    const controlData = computed(() => {
      // 添加optionsType选项
      const attr = store.state.form.controlAttr
      // 有下拉选项的添加参数
      if (showOptionType(attr.type)) {
        return Object.assign(attr, {optionsType: 'fixed', optionsSource: 0, optionsRequest: 'get'})
      } else {
        return attr
      }
    })
    // 多选固定选项删除
    const delSelectOption = (index, type) => {
      if (type === 'tabs') {
        // console.log(index)
        controlData.value.columns.splice(index, 1)
      } else {
        controlData.value.control.options.splice(index, 1)
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
          controlData.value.control.options.push({
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
          Object.assign(controlData.value.options, result)
        } else {
          Object.assign(controlData.value.control, result)
        }
      })
    }
    // select多选属性，
    const selectMultipleChange = val => {
      if (val) {
        // 多选，将值改为数组
        controlData.value.control.value = []
      } else {
        // 单选
        controlData.value.control.value = ''
      }
    }
    // 显示校验的控件
    const showVerify = type => {
      const show = ['input', 'password', 'textarea', 'radio', 'checkbox', 'select', 'date', 'number', 'upload', 'cascader']
      return show.indexOf(type) !== -1
    }
    // 必填校验
    const requiredChange = val => {
      if (val) {
        controlData.value.rules.push({
          required: true,
          message: '必填项',
          trigger: 'blur'
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
    return {
      ...toRefs(state),
      controlData,
      delSelectOption,
      addSelectOption,
      openAttrDialog,
      showOptionType,
      selectMultipleChange,
      showVerify,
      requiredChange,
      addRules
    }
  }
}
</script>
