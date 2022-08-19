# AKForm 表单

适用于导出vue文件

## API

### Props

| 参数            | 类型             | 说明                                                                              |
|---------------|----------------|---------------------------------------------------------------------------------|
| formData      | object         | 设计的生成表单数据                                                                       |
| type          | number/1       | 表单展示模式，1新增；2查看（表单模式） ；3查看； 4设计                                                  |
| isEdit        | boolean/false  | 编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改                            |
| disabled      | boolean/false  | 表单禁用模式，类似于表单模式查看                                                                |
| requestUrl    | string/boolean | 表单编辑初始数据加载，默认`getFormContent`，还需根据url参数id来请求。适用于导出vue文件                         |
| beforeRequest | function       | 请求编辑数据前参数处理方法，可对请求参数处理，`requestUrl`为`true`时。适用于导出vue文件                          |
| afterResponse | function       | 请求编辑数据完成后数据处理方法，`requestUrl`为`true`时。适用于导出vue文件                                 |
| submitUrl     | string/boolean | 表单提交保存接口，类似于`requestUrl`，在配置有表单提交按钮时有效，同时需url参数tid(通用表单提交需要知道提交到哪个表)。适用于导出vue文件 |
| beforeSubmit  | function       | 表单提交前数据处理，仅在`submitUrl`为`true`时。适用于导出vue文件                                      |
| afterSubmit   | function       | 表单提交成功处理方法。适用于导出vue文件                                                           |
| value         | object         | 表单初始值，同setValue                                                                 |
| options       | object         | 表单选项数据，同setOptions                                                              |

### Methods

| 方法          | 说明         |
|-------------|------------|
| validate    | 表单校验方法     |
| getValue    | 用于获取表单的值   |
| setValue    | 对表单设置初始值   |
| setOptions  | 对表单选择项快速设置 |
| resetFields | 重置表单方法     |

### Provide

| 方法              | 说明                       |
|-----------------|--------------------------|
| AKControlChange | 表单控件值改变事件，返回{key, value} |

### Slot

| 参数      | 说明  |
|---------|-----|
| default | -   |

### formData

代码编辑输入框可支持`json`或`javascript`，初始使用时可通过修改`/src/utils/form.ts`里的`EDITTYPE`的值

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
          linkKey: "radio", // 联动标识
          linkValue: "2", // 联动值，即当表单中`name=linkKey`的控件值为`linkValue`时，当前控件才显示
          editDisabled: true // 编辑状态下禁用，即表单部分字段只能添加，不允许编辑时可使用此设置
        },
      customRules: [], // 使用快速方法添加的校验规则，会自动合并到`item.rules`
      rulesComm: [], // 使用快速选择添加的公共校验规则，会自动合并到`item.rules`
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
          source: 0, // 动态选项时 0数据源，1方法函数
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
    rulesComm: [], // 为多个控件添加相关的检验规则
    style: '', // 表单css样式，相当于scope
    hideField: [], // 使用v-if隐藏的字段，用于交互
    submitBtn: {} // 表单按钮
  }
}
```
