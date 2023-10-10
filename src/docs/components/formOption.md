# ak-form 配置手册

配置数据由表单设计器通过拖拽添加相应组件及填写对应字段配置自动生成。脱离表单设计器时可按此数据格式要求，直接使用`ak-form`表单，即`ak-form`表单组件可不依懒于表单设计器工作。

## list

设计生成的组件列表数据

### type

string

支持的组件类型`input、textarea、radio、checkbox、select、inputSlot、datePicker、timePicker、colorPicker、switch、inputNumber、cascader、rate、slider、treeSelect、txt、title、tabs、flex、card、divider、button、table、component、upload、tinymce、grid、div……`

### control

当前组件所有支持的`props`，详见对应ui的`props`

#### modelValue

#### placeholder

#### disabled

#### rows

number

`textarea`输入框行数

### options

组件`radio、select、checkbox、cascader、treeSelect`的固定选项值

### config

#### addAll

string

`select`控件时，添加添加全部项文案，此时`value`值为空

#### className

string

当前控件添加的样式类名

#### help

string

帮助提示信息，标签后面显示问号icon，鼠标滑过时显示的提示语

#### span

number

表单区域栅格宽，0为自动宽。值区间0-24

#### prepend

string

`input`输入框前缀，见ui

#### append

string

`input`输入框后缀，见ui

#### disabledEdit

boolean

是否禁用编辑

#### displayAdd

boolean

新增添加页是否可见

#### displayEdit

boolean

编辑页是否可见

#### displayDetail

boolean

详情页是否可见

#### hidden

#### disabled

string

联动显示的条件表达式，支持运算符。其中$表示当前表单的值，如：

`$.sex===1&&age>18`

表示当前表单中`name`值为`sex`的值为1和`age`的值大于18时，显示/禁用该字段

#### queryName

string

仅作用于`select`选项从服务器远程加载时，发送接口的关键词标识，默认`name`

#### optionsType

number

`radio、select、checkbox、cascader、treeSelect`组件option选项数据源来源方式。

可选值：0:固定选项；1:数据源；2:接口字典

当使用数据源时还可使用`query`配置一些固定的请求参数

当复杂表单中存在大量需要配置选项的组件时，每个组件都从指定URL数据源获取，这是不太现实的。对此可以设计表单时预设一些固定的选项值或者在接口里返回

#### optionsFun

string

当`optionsType=1`时，此时值为请求的数据url；同时可带一个动态参数，如`/api?id=${key}`，`key`可以是当前表单任意`name=key`
的组件，并且当该组件值发生改变时会重新请求；可实现联动功能。

当`optionsType=2`时，此时值为字典的key；

```javascript
//optionsType=2
const dict = {sex: {0: '男', 1: '女'}, ...}
// 设置optionsFun=sex，即可从字典中获取sex
```

#### query

object

在`optionsType=1`使用数据源时，可对当前请求附加一些固定的请求参数

#### method

string

数据请求方法，get/post两种

#### label

string

#### value

string

当`optionsType=1`时，如果接口返回的数据列表中并不是`label`和`value`字段，此时需要指定`label`和`value`取列表数据的哪个字段

```javascript
const list = [{name: '', val: ''}]
// 可设置为label:'name',value:'val'
```

#### transformData

string

尝试转换`value`值。因为option遍历时可能会将数字类型的的数字转为字符类型，导致选不中

none:不转换；number：转换为数字；string：转换为字符串

### name

string

当前组件的`name`值，用于提交数据

### formItem

详见`formItem`组件，支持的组件所有`props`

#### label

标签名

#### showLabel

boolean

是否显示标签名

#### rules

校验规则，见ui的`formItem.rules`

```javascript
[
  {required: true, message: 'age is required'},
  {type: 'number', message: 'age must be a number'}
]
```

### customRules

object

自定义检验规则,这个规则经处理后合并进`formItem.rules`

```javascript
[{
  type: 'required', // 支持类型见下方type
  message: '必填项',
  trigger: 'blur'
}]
```

#### type

string

支持的自定义检验规则类型`required、mobile、tel、phone、email、int(整数)、number(数字)、money(金额)、card(身份证号)、cn(中文)、numberLetter(数字英文)、url、longitude、latitude、rules(正则)、methods(方法)`。

除系统内置的校验规则，还可通过可`@/components/form/validate.ts`扩展，添加常用校验规则

其中类型`methods`仅支持导出`vue`文件方式，需要根据定义好的方法名，在当前页面使用`provide`的形式将方法传递给表单组件，如：

```javascript
provide("myMethods", (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== 'abc') {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
})
```

#### message

string

自定义校验提示语

#### trigger

string

校验触发类型,`change`和`blur`，见`formItem`的校验触发类型

### list.type

#### inputSlot

`select`的一种扩展类型，可作为`input`的前后插槽使用。通过在`input`的前后缀填入`key:inputSlotName`
的形式引用，其中`inputSlotName`为当前组件的`name`值。如：

```javascript
[
  {
    type: "inputSlot",
    control:
      {
        modelValue: "",
        appendToBody: true
      },
    options: [
      {
        label: "标签1",
        value: "1"
      }],
    config:
      {
        // 一些配置信息
      },
    name: "slotName",　//　重点：设置好inputSlot的name值
    formItem:
      {
        label: "下拉选择框"
      }
  },
  {
    type: "input",
    control:
      {
        modelValue: ""
      },
    config:
      {
        append: "key:slotName"　// 重点：使用key:加前面设置好的name值，即key:slotName
      },
    name: "input",
    formItem:
      {
        label: "单行文本"
      }
  }]
```

#### button

`control.key`预设约定key事件

#### component

自定义组件需全局注册，导出vue文件使用可使用当前页面导入的。组件需要`v-model`才级实现更新

引入当前页面组件时建议使用`markRaw`，如：

```javascript
import component from 'xxx.vue'

config: {
  componentName: markRaw(component)
}
```

submit: 提交表单

reset: 重置表单

cancel: 取消返回 即router.go(-1) 这个刷新后可能会失败

none: 无动作(自定义)

点击会触发`btnClick`事件，仅在导出vue文件时

## form

### size

string

表单组件尺寸大小，见ui的size类型

### name

string

表单标识名称

### labelWidth

string

标签的长度，见ui的`label-width`

### class

string

表单样式名称，可选择预设的样式或自定义样式

### showColon

boolean

表单字段名后是否添加冒号

## config

### addLoad

boolean

很多时候在新增数据时，需要先从接口获取一些初始值。设置为`true`可在进行新增数据时请求对应的url

### style

string

编写有样式时会在当前页面head中插入style脚本，作用范围为当前页面。类似于.vue文件中的style scoped中的样式。

### submitUrl

string

表单数据提交url

### editUrl

string

修改表单数据时提交的url

### requestUrl

string

修改或新增时获取表单数据url

### submitCancel

boolean|string[]

为表单快速添加确定取消按钮。也可通过拖拽按钮组件来添加。支持使用数组形式传入按钮文本，如`['提交','取消']`将覆盖默认值

## events

### beforeRequest

function(params, route)

获取数据发送接口请求前方法，可用于对请求的数据进行处理转换等操作，以提交符合接口的数据要求

```javascript
const beforeRequest = (params, route) => {
  // 此处可对请求参数params进行修改处理后返回，route为当前路由信息
  // 如当路由参数name为true时，添加id参数
  if (route.query.name) {
    params.id = route.query.name
  }
  return params　//　return false时将发不请求
}
```

### afterResponse

function(result)|string

获取数据接口请求数据返回后方法，可用于对请求回来的数据进行处理转换等操作，以满足使用。

如果将表单生成数据保存于服务端时，当需要处理的数据比较复杂时，可使用字符串。同`beforeSubmit`的`formatResult`方法

```javascript
const afterResponse = (result) => {
  //　这里是处理逻辑
  return result // return false时不处理请求结果
}
```

### beforeSubmit

function(params, route)|string

表单提交前数据处理，可对提交数据处理。`params`所提交的参数,`route`当前页面路由信息

```javascript
const beforeSubmit = (params, route) => {
  // 此处可对请求参数params进行修改处理后返回，route为当前路由信息
  // 如当路由参数name为true时，添加id参数
  if (route.query.name) {
    params.id = route.query.name
  }
  return params　//　return false时将发不请求
}
```

如果将表单生成数据保存于服务端时，当需要处理的数据比较复杂时，可使用字符串形式，如`beforeSubmit="beforeSubmit"`
。此时可在`@/utils/formatResult.ts`中的`formatResult`方法进行处理。

```javascript
/**
 * @param res 请求参数或返回结果
 * @param key // 即设置的字符串
 * @param route // 路由信息
 * @returns {*}
 */
const formatResult = (res, key, route) => {
    switch (key) {
      case 'beforeSubmit':
        // 这里是一些处理逻辑，最后将数据返回
        return res
    }
    return res
  }
```

如果为导出`vue`文件的方式使用表单，还可通过`props`参数传参

```html

<template>
  <ak-form :before-submit="beforeSubmit"/>
</template>
<script setup>
  const beforeSubmit = () => {
  }
</script>
```

### afterSubmit

function(type, result)

表单结果处理方法，`type`结果类型包括1.`success`提交成功；`fail`提交失败；`validate`没通过校验。当`success`或`fail`
时默认提示返回信息，可通过`return false`阻止提示。`result`返回的结果信息。

```javascript
const afterSubmit = (type, result) => {
  //　这里是处理逻辑
  return result // return false时不处理请求结果
}
```

如果为导出`vue`文件的方式使用表单，还可通过`props`参数传参

```html

<template>
  <ak-form :after-submit="afterSubmit"/>
</template>
<script setup>
  const afterSubmit = () => {
  }
</script>
```

### change

function(name, model)|string

表单控件值改变事件方法，当表单内组件值改变时触发该事件方法。

```javascript
/**
 * @param name 组件的name值
 * @param model 当前表单的值
 * @returns {*} 需将修改后的值返回
 */
const change = (name, model) => {
    //一些处理逻辑。这里可根据指定的name值改变时去修改model其他控件的值
    return model
  }
```

如果将表单生成数据保存于服务端时，当需要处理的数据比较复杂时，可使用字符串形式，如`change="change"`
。此时可在`@/utils/formChangeValue.ts`中的`formChangeValue`方法进行处理。

```javascript
/**
 @params name 当前改变的组件name值
 @params model当前表单的值
 @params key 当前设置的方法标识
 */
const formChangeValue = (name, model, key) => {
    switch (name) {
      case 'change':
        // 这里是一些处理逻辑，最后将数据返回
        return model
    }
    return model
  }
```

## get[formName]ControlByName

function(name)

表单页全局方法，用于根据组件`name`值获取当前的数据项。

注意：`formName`值为表单唯一标识

```javascript
const control = getformNameControlByName('name')
```

## get[formName]ValueByName

function(name)

同get[formName]ControlByName。返回值不一样
