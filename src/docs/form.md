# AKForm 表单

适用于导出vue文件

## 使用方式

```html

<ak-form :formData="formData"></ak-form>
```

## API

### Props

| 参数            | 类型                             | 说明                                                                                          |
|---------------|--------------------------------|---------------------------------------------------------------------------------------------|
| formData      | object                         | 设计的生成表单数据                                                                                   |
| type          | number/1                       | 表单展示模式，1新增；2修改；3查看（表单模式） ；4查看； 5设计                                                          |
| disabled      | boolean/false                  | 表单禁用模式，类似于表单模式查看                                                                            |
| requestUrl    | string/boolean                 | 表单编辑初始数据加载。适用于导出vue文件                                                                       |
| beforeRequest | function (params,route)        | 请求编辑数据前参数处理方法，可对请求参数处理。适用于导出vue文件，`return false`时不请求                                        |
| afterResponse | function/string                | 请求编辑数据完成后数据处理方法。适用于导出vue文件，`return false`阻止事件运行                                             |
| addUrl        | string                         | 表单数据新增提交保存url                                                                               |
| editUrl       | string                         | 表单数据修改保存提交url                                                                               |
| beforeSubmit  | function (params,route)/string | 表单提交前数据处理。适用于导出vue文件，`return false`时不发送请求                                                   |
| afterSubmit   | function(type,res)             | 表单提交后，默认提示提交结果，可return false阻止提示。res接口返回参数,type提交结果类型success/fail/validate。validate表单没通过校验时 |
| value         | object                         | 表单初始值，同setValue                                                                             |
| options       | object                         | 表单选项数据，同setOptions，不管选项配置如何配置，这里设置都会生效                                                      |
| dict          | object                         | 用于匹配的字典数据，一般不设置，从接口获取                                                                       |
### Events
| 事件名      | 说明                                                                                                               |
|----------|------------------------------------------------------------------------------------------------------------------|
| btnClick | 按钮组件点击事件                                                                                                         |
| change   | 表单组件值发生变化事件(key,value,model,data,tProp)。key：组件的name值，value：组件当前的值，model:当前表单的值，tProp:表格内组件才会有值,data当前组件所在的list数据 |
### Methods

| 方法          | 说明                                                               |
|-------------|------------------------------------------------------------------|
| validate    | 表单校验方法                                                           |
| getValue    | 用于获取表单的值                                                         |
| setValue    | 对表单设置初始值(model,filter:boolean) filter=true时将会过滤掉model中不属于当前表单的字段 |
| setOptions  | 对表单选择项快速设置                                                       |
| resetFields | 重置表单方法                                                           |
| getData     | 加载表单初始数据(params:any)                                             |
| submit      | 表单提交                                                             |

  两个全局特殊方法

| 方法                         | 说明                                      |
|----------------------------|-----------------------------------------|
| get[formName]ControlByName | 用于根据name值获取formData中的数据项(name:string)   |
| get[formName]ValueByName   | 用于根据name值获取formData中的数据项的值(name:string) |


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
          linkKey: true, // 开启联动
          linkValue: "$.name===1", // 联动表达式，即当表单中字段标识为`name`的控件值为`1`时，当前控件才显示
          editDisabled: true // 编辑状态下禁用，即表单部分字段只能添加，不允许编辑时可使用此设置
        },
      customRules: [], // 使用快速方法添加的校验规则，会自动合并到`item.rules`
      item:// 组件el-form-item的参数配置
        {
          label: "单行文本",
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
        }],
      config:
        {
          optionsType:0, // 0固定选项　1数据源　2字典
          optioinsFun:'', //　接口url、方法名、字典key
          method: "get", // optionsType=1时的数据请求方式，默认post
          value:'', // 指定value的属性,仅optionsType＝1有效
          label:'', // 指定label的属性,仅optionsType＝1有效
          debug:true // optionsType＝1时会将请求结束保存在sessionStorage,减少不必要的请求，debug=true时不保存方便调试
        },
      item:
        {
          label: "下拉选择框"
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
    addUrl: "", // 表单提交保存接口url
    editUrl: "", // 表单修改保存接口url
    requestUrl: "", // 获取表单初始数据url
    style: '', // 表单css样式，相当于scope
    hideField: [], // 使用v-if隐藏的字段，用于交互。仅在导出vue时可通过自定义方法修改，组件需设置name值
    addLoad: false // 新增表单时是否从接口加载默认数据
  },
  events: { // 同props事件
    beforeRequest: (data, route) => {
      return data
    },
    afterResponse: (res) => {
      return res
    },
    // afterResponse:'formatTest', // 也可以是字符串，将执行/utils/formatResutl里的方法，值为方法里的key
    beforeSubmit: (data, route) => {
      return data
    },
    afterSubmit: (type,res) => {
      // type=success/fail
      console.log(res)
    },
    change: (name, model) => {
      // name当前组件的name,model当前表单的值
      return model
    }
  }
}
```
