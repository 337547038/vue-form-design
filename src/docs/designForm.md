# designForm 表单

## API

### Props

|参数|类型|说明|
|----------|--------------|--------|
|formData     | object         |设计的表单数据|
|type         | number/1       | 表单展示模式，1新增；2查看（表单模式） ；3查看； 4设计|
|isEdit       | boolean/false  |编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改|
|disabled     | boolean/false  |表单禁用模式，类似于表单模式查看|

### Methods

|方法|说明|
|----------|--------|
|validate  |表单校验方法|
|getValue  |用于获取表单的值|
|setValue  |对表单设置初始值|
|setOptions|对表单选择项快速设置|

### Provide
|方法|说明|
|----------|--------|
|DFControlChange |表单控件值改变事件，返回{key, value}|

### Slot

|参数|说明|
|----------|--------|
|default  |-|

### formData

```javascript
formData = {
  "list": [ // 表单数据
    {
      "name": "input1636607044096", // 表单唯一标识
      "type": "input", // 表单控件类型
      "control": {}, // 当前控件类型的所有`props`参数，详见`element-plus`对应的`props`参数
      "slot": {}, // 仅在`type=input`时，前后缀内容
      "config": { // 其他一些扩展配置信息
        "linkKey": "radio", // 联动标识
        "linkValue": "2", // 联动值，即当表单中`name=linkKey`的控件值为`linkValue`时，当前控件才显示
        "editDisabled": true // 编辑状态下禁用，即表单部分字段只能添加，不允许编辑时可使用此设置
      },
      "item": { // 组件el-form-item的参数配置
        "label": "单行文本",
        "showLabel": false
      },
      "rules": [], // 当前控件的校验规则
      "customRules": [], // 使用快速方法添加的校验规则，会自动合并到`rules`
      "rulesComm": [] // 使用快速选择添加的公共校验规则，会自动合并到`rules`
    },
    {
      "name": "checkbox1636687284762",
      "type": "checkbox",
      "control": {
        "modelValue": []
      },
      "options": [], // 单选多选下拉的`option`选项数据
      "config": {
        "type": "async", // `options`数据来源方式`async`动态选项，`fixed`固定选项
        "source": 0, // 动态选项时 0数据源，1方法函数
        "request": "get", // source=0时的数据请求方式
        "sourceFun": "1" // 方法函数名或请求url
      },
      "item": {
        "label": "多选框组",
        "showLabel": false
      },
      "rules": []
    }
  ],
  "config": { // 表单配置信息
    "labelWidth": "",
    "class": "",
    "size": "medium",
    "name": "form1636607042495",
    "rulesComm": [ // 表单公共校验方法
      {
        "key": "required", // 必须有唯一标识key，其他选项同校验规则
        "message": "必填项",
        "trigger": "blur"
      }
    ],
    "vIf":[] // 用于隐藏list中指定的字段，当字段的name值存在于vIf中时使用vif方式隐藏
  }
}
```
