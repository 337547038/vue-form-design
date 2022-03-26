# designForm Demo

## 基础用法

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {"list":[{"name":"input1636622418303","type":"input","control":{"modelValue":""},"slot":{},"config":{},"item":{"label":"单行文本","showLabel":false},"rules":[],"customRules":[]},{"name":"textarea1636622419559","type":"textarea","control":{"modelValue":""},"config":{},"item":{"label":"多行文本","showLabel":false},"rules":[],"customRules":[]},{"name":"radio1636622421624","type":"radio","control":{"modelValue":""},"options":[{"label":"label1","value":"value1"},{"label":"label2","value":"value2"},{"label":"label3","value":"value3"}],"config":{"type":"fixed","source":0,"request":"get","sourceFun":""},"item":{"label":"单选框组","showLabel":false},"rules":[]},{"name":"checkbox1636622423482","type":"checkbox","control":{"modelValue":[]},"options":[{"label":"label1","value":"value1"},{"label":"label2","value":"value2"},{"label":"label3","value":"value3"}],"config":{"type":"fixed","source":0,"request":"get","sourceFun":""},"item":{"label":"多选框组","showLabel":false},"rules":[]},{"name":"select1636622425534","type":"select","control":{"modelValue":"","appendToBody":true},"options":[{"label":"label1","value":"value1"},{"label":"label2","value":"value2"},{"label":"label3","value":"value3"}],"config":{"type":"fixed","source":0,"request":"get","sourceFun":""},"item":{"label":"下拉选择框","showLabel":false},"rules":[]},{"name":"datePicker1636622429204","type":"datePicker","control":{"modelValue":"","type":"date"},"config":{},"item":{"label":"日期选择器","showLabel":false},"rules":[]},{"name":"switch1636622430966","type":"switch","control":{"modelValue":false},"config":{},"item":{"label":"开关","showLabel":false},"rules":[]},{"name":"number1636622432914","type":"number","control":{},"config":{},"item":{"label":"计数器","showLabel":false},"rules":[]}],"config":{"labelWidth":"100px","class":"","size":"medium","name":"form1636607042495","rulesComm":[]}}
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
```

## 表单校验

强大的校验规则，可使用快速选择表单全局的规则，减少同样的规则对不同的控件重复的加入的rules校验去；

内置了常用的必填、手机号码、固话、固话或手机、邮箱、正整数、数字、身份证、自定义正则、自定义方法，使用非常方便

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {
        "list": [{
          "name": "userName",
          "type": "input",
          "control": {"modelValue": ""},
          "slot": {},
          "config": {},
          "item": {"label": "用户名", "showLabel": false},
          "rules": [{"min": 3, "max": 5, "message": "长度在 3 到 5 个字符", "trigger": "blur"}],
          "customRules": [{"type": "int", "message": "必须为数字", "trigger": "blur"}],
          "rulesComm": ["required"]
        }, {
          "name": "select1636695777940",
          "type": "select",
          "control": {"modelValue": "", "appendToBody": true},
          "options": [{"label": "label1", "value": "value1"}, {
            "label": "label2",
            "value": "value2"
          }, {"label": "label3", "value": "value3"}],
          "config": {"type": "fixed", "source": 0, "request": "get", "sourceFun": ""},
          "item": {"label": "下拉选择框", "showLabel": false},
          "rules": [{"required": true, "message": "必填项", "trigger": "change"}]
        }, {
          "name": "input1636697703184",
          "type": "input",
          "control": {"modelValue": "", "placeholder": "自定义方法校验"},
          "slot": {},
          "config": {},
          "item": {"label": "自定", "showLabel": false},
          "rules": [],
          "customRules": [{"type": "methods", "message": "", "trigger": "blur", "methods": "customRules"}],
          "rulesComm": []
        }],
        "config": {
          "labelWidth": "100px",
          "class": "",
          "size": "medium",
          "name": "form1636607042495",
          "rulesComm": [{"key": "required", "required": true, "message": "必填项", "trigger": "blur"}]
        }
      }
    })
    // todo 自定校验方法
    provide("customRules", (rule, value, callback) => {
      if (value !== '我爱你') {
        return callback(new Error('请输入 我爱你 哈哈哈!'))
      } else {
        callback()
      }
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName = ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>

```

## 表单控件选项数据

选项数据获取方法适用于单选、多选、下拉、联级。

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {"list":[{"name":"select1636698720764","type":"select","control":{"modelValue":"","appendToBody":true},"options":[{"label":"label1","value":"value1"},{"label":"label2","value":"value2"},{"label":"label3","value":"value3"}],"config":{"type":"async","source":1,"request":"get","sourceFun":"getCheckboxFun"},"item":{"label":"下拉选择框","showLabel":false},"rules":[]}],"config":{"labelWidth":"","class":"","size":"medium","name":"form1636607042495","rulesComm":[{"key":"required","required":true,"message":"必填项","trigger":"blur"}]}}
    })
    // todo 下拉选择框获取选项值
    const select1636698720764Option = ref([{label: "选项1", value: '1'}])
    provide("getCheckboxFun", select1636698720764Option)
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
```

## 联动事件

文本输入框的联动条件`radio=1`，则在控件单选框组`radio`的值为`1`时显示。

多个条件时使用`,`或`&`分隔开，当分隔符中存在`&`时，条件为`and`关系，同时符合时才显示；否则条件为`or`关系，符合其中之一时显示。

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {"list":[{"name":"radio","type":"radio","control":{"modelValue":""},"options":[{"label":"label1","value":"1"},{"label":"label2","value":"2"}],"config":{"type":"fixed","source":0,"request":"get","sourceFun":""},"item":{"label":"单选框组","showLabel":false},"rules":[]},{"name":"select","type":"select","control":{"modelValue":"","appendToBody":true},"options":[{"label":"label1","value":"1"},{"label":"label2","value":"2"}],"config":{"type":"fixed","source":0,"request":"get","sourceFun":""},"item":{"label":"下拉选择框","showLabel":false},"rules":[]},{"name":"input1637189604237","type":"input","control":{"modelValue":"","placeholder":"单选或下拉为label1时显示"},"slot":{},"config":{"linkKey":"radio,select","linkValue":"1,1"},"item":{"label":"单行文本1","showLabel":false},"rules":[],"customRules":[]},{"name":"input1637198443468","type":"input","control":{"modelValue":"","placeholder":"单选和下拉为label1时显示"},"slot":{},"config":{"linkKey":"radio&select","linkValue":"1,1"},"item":{"label":"单行文本2","showLabel":false},"rules":[],"customRules":[]}],"config":{"labelWidth":"","class":"","size":"medium","name":"form1637189568724","rulesComm":[]}}
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
```

## 外部条件控制字段隐藏与显示

当同一个表单应用于不同场景时，不同场景中需对个别字段进行隐藏处理，可将对应字段的值填写在表单的`vIf`中

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {
        "list": [{
          "name": "input1",
          "type": "input",
          "control": {"modelValue": ""},
          "slot": {},
          "config": {},
          "item": {"label": "单行文本1", "showLabel": false},
          "rules": [],
          "customRules": []
        }, {
          "name": "input2",
          "type": "input",
          "control": {"modelValue": ""},
          "slot": {},
          "config": {},
          "item": {"label": "单行文本2", "showLabel": false},
          "rules": [],
          "customRules": []
        }], "config": {"labelWidth": "", "class": "", "size": "medium", "name": "form1637303910371", "rulesComm": [],"vIf":["input1"]}
      }
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName = ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>

```

## 表单取值/设值

使用`getValue()`方法获取表单的值，`getValue(true)`带参数为`true`时只提取非空值

使用`setValue(obj)`对表单设置初始值

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">取值</el-button>
    <el-button type="primary" @click="setValue">设值</el-button>
  </div>
</template>
<script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {
        "list": [{
          "name": "input1636702723415",
          "type": "input",
          "control": {"modelValue": ""},
          "slot": {},
          "config": {},
          "item": {"label": "单行文本", "showLabel": false},
          "rules": [],
          "customRules": []
        }, {
          "name": "select1636702726285",
          "type": "select",
          "control": {"modelValue": "", "appendToBody": true},
          "options": [{"label": "label1", "value": "value1"}, {
            "label": "label2",
            "value": "value2"
          }, {"label": "label3", "value": "value3"}],
          "config": {"type": "fixed", "source": 0, "request": "get", "sourceFun": ""},
          "item": {"label": "下拉选择框", "showLabel": false},
          "rules": []
        }], "config": {"labelWidth": "", "class": "", "size": "medium", "name": "form1636607042495", "rulesComm": []}
      }
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName = ref()
    const submit = () => {
      alert(JSON.stringify(formName.value.getValue()))
    }
    const setValue = () => {
      formName.value.setValue({
        input1636702723415: "设置的初始值",
        select1636702726285: "value2"
      })
    }
    return {
      ...toRefs(state),
      submit,
      setValue,
      formName
    }
  }
}
</script>

```

## 对单选多选下拉快速设置Options选项值

选项为动态数据时，除了选择数据源和方法函数外，还可使用`setOptions(obj)`对表单选项数据设置选项值

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="setValue">设Options值</el-button>
  </div>
</template>
<script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {
        "list": [
          {
            "name": "radio1",
            "type": "radio",
            "control": {
              "modelValue": ""
            },
            "options": [
              {
                "label": "label1",
                "value": "value1"
              },
              {
                "label": "label2",
                "value": "value2"
              },
              {
                "label": "label3",
                "value": "value3"
              }
            ],
            "config": {
              "type": "async",
              "source": 1,
              "request": "get",
              "sourceFun": "abc"
            },
            "item": {
              "label": "单选框组",
              "showLabel": false
            },
            "rules": []
          }, {
            "name": "select1",
            "type": "select",
            "control": {"modelValue": "", "appendToBody": true},
            "options": [],
            "config": {"type": "fixed", "source": 0, "request": "get", "sourceFun": ""},
            "item": {"label": "下拉选择框", "showLabel": false},
            "rules": []
          }, {
            "name": "select2",
            "type": "select",
            "control": {"modelValue": "", "appendToBody": true},
            "options": [],
            "config": {"type": "fixed", "source": 0, "request": "get", "sourceFun": ""},
            "item": {"label": "下拉选择框", "showLabel": false},
            "rules": []
          }], "config": {"labelWidth": "", "class": "", "size": "medium", "name": "form1636607042495", "rulesComm": []}
      }
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName = ref()
    const setValue = () => {
      formName.value.setOptions({
        radio1: [{"label": "单选测试", "value": "value3"}],
        select1: [{"label": "下拉测试", "value": "value3"}],
        select2: [{"label": "下拉测试2", "value": "value3"},{"label": "下拉测试21", "value": "value31"}],
      })
    }
    return {
      ...toRefs(state),
      setValue,
      formName
    }
  }
}
</script>


```

## 控件绑定事件，可同时获取当前表单其他项的值

通过`生成脚本预览`或`添加属性`代码编辑窗口对表单组件绑定事件，同时可使用全局`get[formName]ControlByName`方法获取当前表单其他控件的配置项数据（`formName`为当前表单`config.name`的值，本示例为`form1647008531927`，因此在控件中添加的方法名为`getform1647008531927ControlByName`）

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {list:[{name:"password",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"密码",showLabel:false},rules:[],customRules:[{type:"required",message:"请输入密码",trigger:"blur"}]},{name:"password2",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"确认密码",showLabel:false},rules:[{validator:(rule, value, callback) =>
            {
              // 获取密码的值
              const control = getform1647008531927ControlByName('password')
              console.log(control)
              if (value === '')
              {
                callback(new Error('请输入密码'))
              }
              else if (value !== control.control.modelValue)
              {
                callback(new Error("两次密码不一样"))
              }
              else
              {
                callback()
              }

            },trigger:"change"}],customRules:[]}],config:{labelWidth:"",class:"",size:"medium",name:"form1647008531927",rulesComm:[]}}
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>

```

## 高级字段-子表

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {"list":[{"name":"table1636703297719","type":"table","list":[{"name":"","type":"tableColumn","typeColumn":"index","item":{"label":"序号"},"control":{"type":"index"},"config":{}},{"name":"user","type":"input","control":{"modelValue":""},"slot":{},"config":{},"item":{"label":"用户名","showLabel":false},"rules":[],"customRules":[]},{"name":"tel","type":"input","control":{"modelValue":""},"slot":{},"config":{},"item":{"label":"手机号","showLabel":false},"rules":[],"customRules":[]},{"name":"","type":"tableColumn","typeColumn":"operate","item":{"label":"操作"},"control":{"type":""},"config":{}}],"tableData":[],"control":{"border":true},"config":{}}],"config":{"labelWidth":"","class":"","size":"medium","name":"form1636607042495","rulesComm":[]}}
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
```

## 高级字段-自定义组件

演示弹窗选择后将所选值回填到输入框，自定义的组件需要`update:modelValue`事件，否则获取不到表单的值

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>

  </div>
</template>
<script>
import {reactive, toRefs, provide, ref} from 'vue'
// todo 自定义组件
import customComponent from "@/docs/components/customTest.vue"

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {
        "list": [{
          "name": "component",
          "type": "component",
          "control": {"modelValue": ""},
          "config": {
          "template": "customComponent",
          },
          "item": {"label": "自定义组件", "showLabel": false},
          "rules": [],
          "customRules": [{"type": "required", "message": "必填项", "trigger": "blur"}]
        }], "config": {"labelWidth": "", "class": "", "size": "medium", "name": "form1636607042495", "rulesComm": []}
      }
    })
    // todo 自定义组件自定义组件
    provide("customComponent", customComponent)
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName = ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>


```

## 高级字段-上传

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const uploadError = (err, file, fileList) => {
      console.log('错误异常处理')
      console.log(err, file, fileList)
    }
    const state = reactive({
      formData: {
        "list": [{
          "name": "upload",
          "type": "upload",
          "control": {
            "modelValue": [],
            "action": "http://localhost:3001/upload/single",
            "listType": "picture-card",
            "limit": 2,
            onError: uploadError
          },
          "config": {"tip": "一些上传提示文案", "btnText": ""},
          "item": {"label": "图片", "showLabel": false},
          "rules": []
        }], "config": {"labelWidth": "", "class": "", "size": "medium", "name": "form1637303910371", "rulesComm": []}
      }
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName = ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert(JSON.stringify(formName.value.getValue()))
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    //　模拟设置初始值
    setTimeout(() => {
      formName.value.setValue({
        upload: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      })
    }, 1000)

    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>

```

## 布局字段-格栅布局

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {"list":[{"name":"input1636709200587","type":"input","control":{"modelValue":""},"slot":{},"config":{},"item":{"label":"单行文本","showLabel":false},"rules":[],"customRules":[]},{"name":"grid1636709032830","type":"grid","columns":[{"attr":{"span":11,"offset":"","push":"","pull":""},"list":[{"name":"input1636709035365","type":"input","control":{"modelValue":""},"slot":{},"config":{},"item":{"label":"单行文本","showLabel":false},"rules":[],"customRules":[]}],"name":"gridChild1636709053920","type":"gridChild"},{"attr":{"span":11,"offset":1},"list":[{"name":"input1636709037596","type":"input","control":{"modelValue":""},"slot":{},"config":{"span":""},"item":{"label":"单行文本","showLabel":false},"rules":[],"customRules":[]}],"name":"gridChild1636709129937","type":"gridChild"}],"control":{},"config":{}}],"config":{"labelWidth":"","class":"","size":"medium","name":"form1636607042495","rulesComm":[]}}
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
```

## 布局字段-标签页

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {"list":[{"name":"tabs1636709230727","type":"tabs","columns":[{"label":"标签名称1","list":[{"name":"input1636709254980","type":"input","control":{"modelValue":""},"slot":{},"config":{},"item":{"label":"单行文本","showLabel":false},"rules":[],"customRules":[]}]},{"label":"标签名称2","list":[{"name":"checkbox1636709258581","type":"checkbox","control":{"modelValue":[]},"options":[{"label":"label1","value":"value1"},{"label":"label2","value":"value2"},{"label":"label3","value":"value3"}],"config":{"type":"fixed","source":0,"request":"get","sourceFun":""},"item":{"label":"多选框组","showLabel":false},"rules":[]}]}],"control":{},"config":{}}],"config":{"labelWidth":"","class":"","size":"medium","name":"form1636607042495","rulesComm":[]}}
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
```

## 布局字段-卡片布局

```vue demo
<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {"list":[{"name":"card1636709292247","type":"card","list":[{"name":"input1636709299212","type":"input","control":{"modelValue":""},"slot":{},"config":{},"item":{"label":"单行文本","showLabel":false},"rules":[],"customRules":[]},{"name":"input1636709297278","type":"input","control":{"modelValue":""},"slot":{},"config":{},"item":{"label":"单行文本","showLabel":false},"rules":[],"customRules":[]}],"control":{},"config":{},"item":{"label":"卡片布局","showLabel":false},"rules":[]},{"name":"input1636709305117","type":"input","control":{"modelValue":""},"slot":{},"config":{},"item":{"label":"单行文本","showLabel":false},"rules":[],"customRules":[]}],"config":{"labelWidth":"","class":"","size":"medium","name":"form1636607042495","rulesComm":[]}}
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
```
