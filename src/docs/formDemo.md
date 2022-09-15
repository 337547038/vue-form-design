# Form Demo

## 基础用法

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" />
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'

  const formData = ref({
    list: [
      {
        name: 'input1660724087482',
        type: 'input',
        control: { modelValue: '' },
        config: {},
        item: { label: '单行文本', showLabel: false }
      },
      {
        name: 'textarea1660724093238',
        type: 'textarea',
        control: { modelValue: '' },
        config: {},
        item: { label: '多行文本', showLabel: false }
      },
      {
        name: 'radio1660724102250',
        type: 'radio',
        control: { modelValue: '' },
        options: [
          { label: '标签1', value: 'value1' },
          { label: '标签2', value: 'value2' },
          { label: '标签3', value: 'value3' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '单选框组', showLabel: false }
      },
      {
        name: 'checkbox1660724104783',
        type: 'checkbox',
        control: { modelValue: [] },
        options: [
          { label: '标签1', value: 'value1' },
          { label: '标签2', value: 'value2' },
          { label: '标签3', value: 'value3' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '多选框组', showLabel: false }
      },
      {
        name: 'select1660724088685',
        type: 'select',
        control: { modelValue: '' },
        options: [
          { label: '标签1', value: 'value1' },
          { label: '标签2', value: 'value2' },
          { label: '标签3', value: 'value3' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '下拉选择框', showLabel: false }
      },
      {
        name: 'datePicker1660724118488',
        type: 'datePicker',
        control: { modelValue: '', type: 'date' },
        config: {},
        item: { label: '日期选择器', showLabel: false }
      },
      {
        name: 'switch1660724123026',
        type: 'switch',
        control: { modelValue: false },
        config: {},
        item: { label: '开关', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660723952800'
    },
    config: {
      submitBtn: { confirm: '提交', cancel: '取消' }
    }
  })
  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
</script>

```

## 表单校验

强大的校验规则，可使用快速选择表单全局的规则，减少同样的规则对不同的控件重复的加入的rules校验去；

内置了常用的必填、手机号码、固话、固话或手机、邮箱、正整数、数字、身份证、自定义正则、自定义方法，使用非常方便。

可通用`./designForm/components/validate.ts`扩展，添加常用校验规则

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'userName',
        type: 'input',
        control: { modelValue: '', placeholder: '全局校验规则' },
        config: {},
        item: {
          label: '用户名',
          showLabel: false,
          rules: [
            {
              key: 'required',
              required: true,
              message: '必填项',
              trigger: 'blur'
            }
          ]
        },
        customRules: []
      },
      {
        name: 'tel',
        type: 'input',
        control: { modelValue: '', placeholder: '验证手机号码' },
        config: {},
        item: { label: '手机号', showLabel: false },
        customRules: [
          { type: 'mobile', message: '请输入手机号', trigger: 'blur' }
        ]
      },
      {
        name: 'wx',
        type: 'input',
        control: { modelValue: '', placeholder: '自定编辑的必填规则' },
        config: {},
        item: {
          label: '微信号',
          showLabel: false,
          rules: [
            { required: true, message: '请输入微信号', trigger: 'change' }
          ]
        }
      },
      {
        name: 'select',
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true,
          placeholder: '下拉必填'
        },
        options: [
          { label: '标签1', value: 'value1' },
          { label: '标签2', value: 'value2' },
          { label: '标签3', value: 'value3' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: {
          label: '下拉选择框',
          showLabel: false,
          rules: [{ required: true, message: '必填项', trigger: 'change' }]
        }
      },
      {
        name: 'input1660727784191',
        type: 'input',
        control: { modelValue: '' },
        config: {},
        item: { label: '自定义', showLabel: false },
        customRules: [
          {
            type: 'methods',
            message: '',
            trigger: 'blur',
            methods: 'customRules'
          }
        ]
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660725610088'
    },
    config: {
      submitBtn: { confirm: '' }
    }
  })
  // todo 自定义校验方法
  provide('customRules', (rule, value, callback) => {
    if (value !== '我爱你') {
      return callback(new Error('请输入 我爱你 哈哈哈!'))
    } else {
      callback()
    }
  }) // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```

## 表单控件选项数据

使用`provide`设置选项数据获取方法适用于单选、多选、下拉、联级。

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'select1660727982838',
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [],
        config: {
          type: 'async',
          source: 1,
          request: 'get',
          sourceFun: 'getCheckboxFun'
        },
        item: { label: '下拉选择框', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660725610088'
    },
    config: {
      submitBtn: { confirm: '' }
    }
  })
  // todo 下拉选择框获取选项值
  const select1660727982838Option = ref([{ label: '选项1', value: '1' }])
  provide('getCheckboxFun', select1660727982838Option)
  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```

## 动态获取选项数据

使用动态选项数据源方式获取数据时，数据接口URL可带一个动态的参数，并且当name=key的值发生改变时，可根据改变的值重新请求数据。下面例子展示当单选框组发生改变时，下拉选择框会重新请求加载下拉项

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'text',
        type: 'input',
        control: {
          modelValue: ''
        },
        config: {},
        item: { label: '单行文本', showLabel: false }
      },
      {
        name: 'radio',
        type: 'radio',
        control: { modelValue: '' },
        options: [
          { label: '标签1', value: 'value1' },
          { label: '标签2', value: 'value2' },
          { label: '标签3', value: 'value3' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '单选框组', showLabel: false }
      },
      {
        name: 'select',
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [],
        config: {
          type: 'async',
          source: 0,
          request: 'get',
          sourceFun: '/test?a=${radio}'
        },
        item: { label: '下拉选择框', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1',
      formId: ''
    }
  })

  // 表单控件值改变事件
  /* provide('AKControlChange', ({ key, value, data }) => {
    console.log(key)
    console.log(data)
  })*/
  const submitUrl = ref(false) // 表单提交url
</script>


```

## Select远程搜索

启用远程搜索，可通过编辑属性将`filterable`和`remote`设置为`true`，同时将选项配置设置为`动态选项-数据源方式`，当输入关键字时，将会重新根据输入关键字获取数据。`afterResponse`可对请求数据处理再返回，同时可通过配置`queryName`改变参数名称

```vue demo
<template>
  <ak-form
    :formData="formData"
    ref="formName"
    :requestUrl="requestUrl"
    :submitUrl="submitUrl"
  />
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true,
          filterable: true,
          remote: true,
          placeholder: '请输入关键字搜索'
        },
        options: [],
        config: {
          type: 'async',
          source: 0,
          request: 'post',
          sourceFun: '/api/content/list',
          afterResponse: (data) => {
            data.push({label:'1',value:'1'})
            return data
          },
          queryName: 'queryName' // 远程搜索时发送请求的参数名称，默认为name
        },
        name: 'select1662536735690',
        item: { label: '下拉选择框', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1662536407108'
    },
    config: { title: 'form1662536407108', formId: '' }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const requestUrl = ref(false) // 获取表单初始数据
  const formName = ref()
</script>

```

## 联动事件

`$`为表单的`model`，包含了表单所有的值，多个条件可用`||`或`&`连接

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'radio',
        type: 'radio',
        control: { modelValue: '' },
        options: [
          { label: '男', value: '1' },
          { label: '女', value: '2' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '性别', showLabel: false }
      },
      {
        name: 'select',
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [
          { label: '游戏', value: '1' },
          { label: '购物', value: '2' }
        ],
        config: {
          type: 'fixed',
          source: 0,
          request: 'get',
          sourceFun: '',
          linkKey: true,
          linkValue: "$.radio==='1'",
          linkResult: 'disabled'
        },
        item: { label: '兴趣爱好', showLabel: false }
      },
      {
        name: 'input1637189604237',
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '性别为男性或兴趣爱好为游戏时显示'
        },
        slot: {},
        config: { linkKey: true, linkValue: "$.radio==='1'||$.select==='1'" },
        item: { label: '游戏项目', showLabel: false },
        rules: [],
        customRules: []
      },
      {
        name: 'input1637198443468',
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '性别为女性或兴趣爱好为购物时显示'
        },
        slot: {},
        config: { linkKey: true, linkValue: "$.radio==='2'&&$.select==='2'" },
        item: { label: '购物项目', showLabel: false },
        rules: [],
        customRules: []
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660728166875'
    }
  })
  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```

## input输入框设置slot下拉

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'input1661496607029',
        type: 'input',
        control: { modelValue: '' },
        config: { append: 'key:select1661496610083' },
        item: { label: '单行文本', showLabel: false }
      },
      {
        name: 'select1661496610083',
        type: 'inputSlot',
        control: { modelValue: [], appendToBody: true },
        options: [
          { label: '标签1', value: 'value1' },
          { label: '标签2', value: 'value2' },
          { label: '标签3', value: 'value3' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '下拉选择框', showLabel: true }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1661496603520',
      formId: ''
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>


```

## 外部条件控制字段隐藏与显示

当同一个表单应用于不同场景时，不同场景中需对个别字段进行隐藏处理，可将对应字段的值填写在表单的`hideField`中

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="visibleChange('tel')"
      >隐藏显示手机号</el-button
    >
    <el-button type="primary" @click="visibleChange('wx')"
      >隐藏显示微信号</el-button
    >
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'tel',
        type: 'input',
        control: { modelValue: '' },
        config: {},
        item: { label: '手机号码', showLabel: false }
      },
      {
        name: 'wx',
        type: 'input',
        control: { modelValue: '' },
        config: {},
        item: { label: '微信号', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660789836231'
    },
    config: {
      hideField: []
    }
  })
  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const visibleChange = (type) => {
    const hasIndex = formData.value.config.hideField.indexOf(type)
    if (hasIndex !== -1) {
      formData.value.config.hideField.splice(hasIndex, 1)
    } else {
      formData.value.config.hideField.push(type)
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
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="getValue">取值</el-button>
    <el-button type="primary" @click="setValue">设值</el-button>
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'tel',
        type: 'input',
        control: { modelValue: '' },
        config: {},
        item: { label: '手机号码', showLabel: false }
      },
      {
        name: 'wx',
        type: 'input',
        control: { modelValue: '' },
        config: {},
        item: { label: '微信号', showLabel: false }
      },
      {
        name: 'select',
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [
          { label: 'label1', value: '1' },
          { label: 'label2', value: '2' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '下拉选择框', showLabel: false },
        rules: []
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660789836230'
    }
  })
  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const getValue = () => {
    alert(JSON.stringify(formName.value.getValue()))
  }
  const setValue = () => {
    formName.value.setValue({
      tel: '1380013800',
      wx: '337547038',
      select: '1'
    })
  }
</script>

```

## 对单选多选下拉快速设置Options选项值

选项为动态数据时，除了选择数据源和方法函数外，还可使用`setOptions(obj)`对表单选项数据设置选项值

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" />
    <el-button type="primary" @click="setOptions">设置options值</el-button>
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'

  const formData = ref({
    list: [
      {
        name: 'radio',
        type: 'radio',
        control: { modelValue: '' },
        options: [],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '单选框组', showLabel: false }
      },
      {
        name: 'checkbox',
        type: 'checkbox',
        control: { modelValue: [] },
        options: [],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '多选框组', showLabel: false }
      },
      {
        name: 'select',
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '下拉选择框', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660790919277'
    }
  })
  const formName = ref()
  const setOptions = () => {
    formName.value.setOptions({
      radio: [{ label: '单选测试', value: 'value3' }],
      checkbox: [{ label: '多选测试', value: 'value3' }],
      select: [
        { label: '下拉测试2', value: 'value3' },
        { label: '下拉测试21', value: 'value31' }
      ]
    })
  }
</script>

```

## 控件绑定事件，可同时获取当前表单其他项的值

通过`生成脚本预览`或`添加属性`代码编辑窗口对表单组件绑定事件，同时可使用全局`get[formName]ControlByName`方法获取当前表单其他控件的配置项数据（`formName`为当前表单`config.name`
的值，本示例为`form1660790919277`，因此在控件中添加的方法名为`getform1660790919277ControlByName`）；当仅需要获取指定控件值时可使用`get[formName]ValueByName`直接获取控件的值

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'password',
        type: 'password',
        control: { modelValue: '' },
        config: {},
        item: {
          label: '密码',
          showLabel: false
        },
        customRules: [
          { type: 'required', message: '请输入密码', trigger: 'blur' }
        ]
      },
      {
        name: 'password2',
        type: 'password',
        control: { modelValue: '' },
        config: {},
        item: {
          label: '确认密码',
          showLabel: false,
          rules: [
            {
              validator: (rule, value, callback) => {
                // 获取密码的值
                const control = getform1660790919277ControlByName('password')
                console.log(control)
                if (value === '') {
                  callback(new Error('请输入密码'))
                } else if (value !== control.control.modelValue) {
                  callback(new Error('两次密码不一样'))
                } else {
                  callback()
                }
              },
              trigger: 'change'
            }
          ]
        }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660790919277'
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>


```

## 高级字段-子表

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'table1660792942732',
        type: 'table',
        list: [
          {
            name: 'index',
            type: 'index',
            item: { label: '序号' },
            control: { modelValue: undefined },
            config: {}
          },
          {
            name: 'input1660792954637',
            type: 'input',
            control: { modelValue: undefined, appendToBody: true },
            config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
            item: { label: '单行文本', showLabel: false }
          },
          {
            name: 'select1660792958068',
            type: 'select',
            control: { modelValue: undefined, appendToBody: true },
            options: [
              { label: '标签1', value: 'value1' },
              { label: '标签2', value: 'value2' },
              { label: '标签3', value: 'value3' }
            ],
            config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
            item: { label: '下拉选择框', showLabel: false }
          }
        ],
        tableData: [],
        control: { border: true },
        config: { add: '增加', delete: '删除' }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660790919277'
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```

## 高级字段-自定义组件

自定义组件需全局注册

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'component1660793530856',
        type: 'component',
        control: { modelValue: '' },
        config: { componentName: 'ComponentTest' },
        item: { label: '自定义组件', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660793512027'
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```

## 高级字段-上传

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const uploadError = (err, file, fileList) => {
    console.log('错误异常处理')
    console.log(err, file, fileList)
  }
  const formData = ref({
    list: [
      {
        name: 'upload',
        type: 'upload',
        control: {
          modelValue: [],
          action: 'http://localhost:3001/upload/single',
          listType: 'picture-card',
          limit: 2,
          onError: uploadError
        },
        config: {
          tip: '一些上传提示文案',
          btnText: ''
        },
        item: { label: '图片/文件', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660793512027'
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }

  setTimeout(() => {
    formName.value.setValue({
      upload: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    })
  }, 1000)
</script>

```

## 布局字段-格栅布局

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'grid1660800280703',
        type: 'grid',
        columns: [
          {
            attr: { span: 12 },
            list: [
              {
                name: 'input1660800459694',
                type: 'input',
                control: { modelValue: '' },
                config: {},
                item: { label: '单行文本', showLabel: false }
              }
            ],
            name: 'gridChild1660800443904',
            type: 'gridChild'
          },
          {
            attr: { span: 11, offset: 1 },
            list: [
              {
                name: 'input1660800461629',
                type: 'input',
                control: { modelValue: '' },
                config: {},
                item: { label: '单行文本', showLabel: false }
              }
            ],
            name: 'gridChild1660800281864',
            type: 'gridChild'
          }
        ],
        control: {},
        config: {}
      },
      {
        name: 'input1660800338143',
        type: 'input',
        control: { modelValue: '' },
        config: { span: NaN },
        item: { label: '单行文本', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660800277903'
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```

## 布局字段-标签页

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'tabs1660801144546',
        type: 'tabs',
        columns: [
          {
            label: '标签名称1',
            list: [
              {
                name: 'input1660801157128',
                type: 'input',
                control: { modelValue: '' },
                config: {},
                item: { label: '标签1内容', showLabel: false }
              }
            ]
          },
          {
            label: '标签名称2',
            list: [
              {
                name: 'input1660801163175',
                type: 'input',
                control: { modelValue: '' },
                config: {},
                item: { label: '标签2内容', showLabel: false }
              }
            ]
          }
        ],
        control: {},
        config: {}
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660801142187'
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```

## 布局字段-卡片布局

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'card1660801241278',
        type: 'card',
        list: [
          {
            name: 'input1660801243525',
            type: 'input',
            control: { modelValue: '', appendToBody: true },
            config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
            item: { label: '单行文本', showLabel: false }
          },
          {
            name: 'select1660801250564',
            type: 'select',
            control: { modelValue: '', appendToBody: true },
            options: [
              { label: '标签1', value: 'value1' },
              { label: '标签2', value: 'value2' },
              { label: '标签3', value: 'value3' }
            ],
            config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
            item: { label: '下拉选择框', showLabel: false }
          }
        ],
        control: {},
        config: {},
        item: { label: '卡片布局', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660801232287'
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```

## 布局字段－弹性布局

```vue demo
<template>
  <div>
    <ak-form
      :formData="formData"
      ref="formName"
      :requestUrl="requestUrl"
      :submitUrl="submitUrl"
    />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        type: 'flex',
        list: [
          {
            type: 'input',
            control: { modelValue: '' },
            config: {},
            name: 'userName',
            item: { label: '用户名', showLabel: false },
            customRules: [
              { type: 'required', message: '请输入用户名', trigger: 'blur' }
            ]
          },
          {
            type: 'input',
            control: { modelValue: '' },
            config: {},
            name: 'tel',
            item: { label: '电话号码', showLabel: false },
            customRules: [
              { type: 'required', message: '请输入手机号码', trigger: 'blur' },
              { type: 'mobile', message: '请输入手机号码', trigger: 'blur' }
            ]
          },
          {
            type: 'radio',
            control: { modelValue: '' },
            options: [
              { label: '男', value: '1' },
              { label: '女', value: '2' }
            ],
            config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
            name: 'radio1663146936352',
            item: { label: '单选框组', showLabel: false }
          }
        ],
        tableData: [],
        control: {},
        config: { add: '增加', delete: '删除' },
        name: 'flex1663146822121'
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1663146820436'
    },
    config: { title: 'form1663146820436', formId: '' }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const requestUrl = ref(false) // 获取表单初始数据
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```

## 富文本

```vue demo
<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'tinymce1660801329213',
        type: 'tinymce',
        control: { modelValue: '' },
        config: {},
        item: { label: 'tinymce富文本', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660801232287'
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>

```
