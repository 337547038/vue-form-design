# ak-form 配置手册

配置数据由表单设计器通过拖拽添加相应组件及填写对应字段配置自动生成。脱离表单设计器时可按此数据格式要求，直接使用`ak-form`表单，即`ak-form`表单组件可不依懒于表单设计器工作。

## 表单配置
### - 表单名称
`config.name`

用于保存的表单设计显示的名称

### - 数据源
`config.soucrceId`

指定当前表单数据的对应的数据库表，即当前表单数据保存对应的数据库id。若没有配置数据源，则需在下面的接口数据事件中配置增删查改相关的url

### - 表单标识
`form.name`

当前表单的名称，可根据此标识使用`get[formName]ControlByName`获得当前其他选项数据

### - 表单标签宽度
`form.labelWidth`

`el-form`的表单属性，设置表单label的宽度

### - 表单样式名称
`form.class`

自定义的表单样式名称，可快速选择内置好的表单布局类名，或自定义类名

### - 字段名后添加冒号
`form.showColon`

统一设置表单label是否添加冒号

### - 组件尺寸
`form.size`

`el-form`的表单属性

### - 快速添加确定取消按钮
`config.submitCancel`

- 类型：boolean/string[]

快速添加表单提交和取消按钮。为数组时可指定显示的名称，如['保存','取消']

### - 编辑表单样式
`config.style`

编写有样式时会在当前页面head中插入style脚本，作用范围为当前页面。相当于.vue文件中的style scoped中的样式。

### - 新增数据保存url
`apiKey.add`

点击表单提交按钮后数据保存的url接口地址，如当前表单设定了数据源，提交时则保存到对应的数据库表中，此时可不设置
### - 修改数据保存url
`apiKey.edit`

同add

### - 获取表单数据url
`apiKey.get`

编辑时获取表单初始值接口url，用法同add

### -before事件
`events.before`
- 类型：before?: string | ((type: EventType, params: any, rout: any) => boolean)

请求列表数据，编辑和删除等接口事件发送请求前，这里可对发送的数据进行拦截处理。
* type支持的类型`get | add | edit`，用于表示接口事件类型
* params请求的参数，可对此参数进行修改，然后return回去
* route当前页面路由信息

同时支持string字符串类型，这个需要自定义开发，适用于处理一些比较复杂的逻辑处理时，根据设置的字符将处理逻辑写入本地文件

### -after事件
`events.after`
- 类型：after?: string | ((type: EventType, res: any, isSuccess?: boolean) => any)

类似于前面的`before`。最后需要将处理后的结果 return res

### - change事件
`events.change`
- 类型：change?: string | ((key: string, model: any) => any)

表单组件改变事件，可修改model后返回。即可实现当组件a改变时，修改b组件的值

* key 当前组件的name值
* model 当前表单的值

## 表单方法
### - get[formName]ControlByName

- 类型：function(name)

表单页全局方法，用于根据组件`form.name`值获取当前的数据项。

注意：`formName`值为表单唯一标识，即`form.name`

```javascript
const control = getformNameControlByName('name')
```

### - get[formName]ValueByName

- 类型：function(name)

同get[formName]ControlByName。返回值不一样


## 字段配置



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



