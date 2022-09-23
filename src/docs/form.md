# AKForm 表单

适用于导出vue文件

## 使用方式

可查看示例展示，组件已全局注册

```html

<ak-form :formData="formData"></ak-form>
```

## API

### Props

| 参数            | 类型                      | 说明                                                     |
|---------------|-------------------------|--------------------------------------------------------|
| formData      | object                  | 设计的生成表单数据                                              |
| type          | number/1                | 表单展示模式，1新增；2查看（表单模式） ；3查看； 4设计                         |
| isEdit        | boolean/false           | 编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改   |
| disabled      | boolean/false           | 表单禁用模式，类似于表单模式查看                                       |
| requestUrl    | string/boolean          | 表单编辑初始数据加载，默认`getFormContent`。适用于导出vue文件               |
| beforeRequest | function (params,route) | 请求编辑数据前参数处理方法，可对请求参数处理，`requestUrl`为`true`时。适用于导出vue文件 |
| afterResponse | function                | 请求编辑数据完成后数据处理方法，`requestUrl`为`true`时。适用于导出vue文件        |
| submitUrl     | string/boolean          | 表单提交保存接口，类似于`requestUrl`，在配置有表单提交按钮时有效。适用于导出vue文件      |
| beforeSubmit  | function (params,route) | 表单提交前数据处理，仅在`submitUrl`为`true`时。适用于导出vue文件             |
| afterSubmit   | function                | 表单提交成功处理方法。适用于导出vue文件                                  |
| value         | object                  | 表单初始值，同setValue                                        |
| options       | object                  | 表单选项数据，同setOptions，不管选项配置如何配置，这里设置都会生效                 |
| dict          | object                  | 用于匹配的字典数据，一般不设置，从接口获取                                  |

### Methods

| 方法          | 说明         |
|-------------|------------|
| validate    | 表单校验方法     |
| getValue    | 用于获取表单的值   |
| setValue    | 对表单设置初始值   |
| setOptions  | 对表单选择项快速设置 |
| resetFields | 重置表单方法     |

### Provide

| 方法              | 说明                             |
|-----------------|--------------------------------|
| AKControlChange | 表单控件值改变事件，返回{key, value, data} |

### Slot

| 参数      | 说明  |
|---------|-----|
| default | -   |

### formData

代码编辑输入框可支持`json`或`javascript`，初始使用时可通过修改`/src/utils/form.ts`里的`EDITTYPE`的值

### formData 方法

get[formName]ControlByName(name) 用于根据name值获取formData中的数据项，使用方法可见表单示例；

get[formName]ValueByName(name) 用于根据name值获取formData中的数据项的值；

```javascript
formData = {
  list: [
    {
      name: "input1660637151831", // 表单元素唯一标识
      type: "input", // 表单元素类型
      control: // 当前控件类型的所有`props`参数，详见`element-plus`对应的`props`参数
        {
          modelValue: ""
        },
      config: // 其他一些扩展配置信息
        {
          linkKey: true, // 开启联动
          linkValue: "$.name===1", // 联动表达式，即当表单中字段标识为`name`的控件值为`1`时，当前控件才显示
          editDisabled: true // 编辑状态下禁用，即表单部分字段只能添加，不允许编辑时可使用此设置
        },
      customRules: [], // 使用快速方法添加的校验规则，会自动合并到`item.rules`
      item:// 组件el-form-item的参数配置
        {
          label: "单行文本",
          showLabel: false,
          rules: [] // 校验规则
        }
    },
    {
      name: "select1660637154631",
      type: "select",
      control:
        {
          modelValue: "",
          appendToBody: true
        },
      options: [// 单选多选下拉的`option`选项数据
        {
          label: "标签1",
          value: "value1"
        },
        {
          label: "标签2",
          value: "value2"
        },
        {
          label: "标签3",
          value: "value3"
        }],
      config:
        {
          type: "async", // `options`数据来源方式`async`动态选项，`fixed`固定选项
          source: 0, // 动态选项时 0数据源，1方法函数，2接口数据dict字典
          request: "get", // source=0时的数据请求方式
          sourceFun: "1" // 方法函数名或请求url
        },
      item:
        {
          label: "下拉选择框",
          showLabel: false
        }
    }],
  form:// 表单配置信息
    {
      labelWidth: "",
      class: "",
      size: "default",
      name: "form1660637148435"
    },
  config: {
    style: '', // 表单css样式，相当于scope
    hideField: [], // 使用v-if隐藏的字段，用于交互。仅在导出vue时可通过自定义方法修改
    confirm: '', // 表单按钮
    cancel: '', // 表单按钮
    addLoad: false // 新增表单时是否从接口加载默认数据
  },
  events: { // 同props事件
    beforeRequest: (data, route) => {
      return data // 必须要return
    },
    afterResponse: (data) => {
      return data // 必须要return
    },
    beforeSubmit: (data, route) => {
      return data // 必须要return
    },
    afterSubmit: (data) => {
      console.log(data)
    }
  }
}
```
