# ak-list 配置手册

配置数据由列表设计器通过拖拽添加相应组件及填写对应字段配置自动生成。脱离列表设计器时可按此数据格式要求，直接使用`ak-list`列表，即`ak-list`列表组件可不依懒于列表设计器工作

## columns

`table-column`所有参数。

### label

列头名称

### prop

字段名称对应列内容的字段名。

其中，约定操作栏`prop="__control"`以展示操作相关内置按钮及功能

prop值

### help

问题帮助提示信息

### config

#### formatter

预设的个性化快速设置，可对列进行时间格式化。常见格式如`{y}-{m}-{d} {h}:{i}:{s}`、`{y}-{m}-{d}`
。更多使用方式可查看`@/utils/index`中的`dateFormatting`格式化方法

#### dictKey

string

预设快速设置功能：可匹配字典输出对应值，如列表返回的值为0,1这种格式。即可根据字典输出男或女

```javascript
const dict = {sex: {0: '男', 1: '女'}, ...}

```

#### tagList

预设快速设置功能：可对展示数据使用`tag`的形式展示，如列表数据返回0或1格式，或者是成功失败这类标识，可使用`tag`组件区分

```javascript
const tagList = {1: 'success', 2: 'info', 3: 'warning', 4: 'danger'}
```

### imgWidth

设置此值时列表将以图片的形式展示

## config

### openType

string

点击列表页新增或编辑时的找开方法，可选`dialog`和新页面打开(默认)`page`

注意：此参数作用于通用数据列表页，不是`ak-list`组件本身的属性。当导出vue文件形式使用时，可在当前页面集成编辑功能，然后根据此参数展示编辑弹窗

### dialogWidth

string

打开新增或编辑时弹窗的宽度，`openType='dialog'`时有效

### fixedBottomScroll

boolean

列表横向滚动条是否固定在底部，即当列表列数比较多出现横向滚动条时，滚动条会固定在浏览底部

### columnsSetting

boolean

是否展示列表列字段设置，可根据使用习惯显示所设置的表头列。

选择改变时，根据`url`为标识保存在`local Storage`。可根据实际情况保持于服务端。

注意：使用该功能时，需确保表头数据存在`prop`唯一值

### expand

boolean

列表上方搜索查询条件是否可折叠

### searchJump

boolean

列表条件搜索查询时，是否通过url跳转形式

### operateDropdown

number

表格列表右侧操作栏按钮过多时是否以下拉形式展示，大于设定个数的以下拉形式显示

### deleteUrl

string

列表数据删除接口url

### delKey

string
删除时的标识，默认为`id`。将根据配置的标识从数据列表中提取所需删除的数据提交删除接口

## treeData

列表侧栏树配置相关，树所需的数据通过配置`requestUrl`单独从接口获取

### show

boolean

是否显示侧栏搜索树组件

### treeProps

object

绑定在侧栏`tree`组件的参数，具体参数见ui

### name

string

侧栏树的标识名称

### method

string

接口数据请求方法，`get`和`post`两种

### requestUrl

string

接口数据请求url

## tableProps

object

绑定在`table`组件的`props`参数，具体参数见ui

## controlBtn

列表左上方控制按钮，如新增、批量删除等，支持`button` ui的所有参数。

约定`key="add"`、`key="del"`、`key="import"`为组件内置特殊值，根据配置的信息执行添加或删除等操作。`add、import`不适用于导出vue形式

## operateBtn

类似于`controlBtn`，两个是一样的，只是显示位置不一样

约定`key="edit"`和`key="del"`。其中当为`del`可支持`tip`指定点击删除后的删除警告提示信息。`edit`不适用于导出vue形式

```javascript
const operateBtn = {
  key: 'del',
  tip: '确定删除吗',
  visible: '$.status====1', // 根据条件是否显示当前行按钮，即行数据status=1时可显示查看
  click: (row) => {
    // 点击事件，row为当前行数据
  },
  permission: '权限标识'　//　可通过在菜单中添加btn类型权限
  // 其他button所有props
}
```

### visible

表格列表操作按钮是否显示逻辑判断，适用于根据当前行数据状态判断是否展示该按钮。如当前设置为禁用时不显示编辑操作按钮。支持运算表达式，其中`$`
为当前行数据

```javascript
{
  visible:'$.status===1'
}
```

### permission

string

权限标识，将根据接口菜单中的权限标识判断是否展示，可为菜单和按钮类型权限

## event

## beforeRequest

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

如果将表单生成数据保存于服务端时，当需要处理的数据比较复杂时，可使用字符串。如`afterResponse="afterResponse"`
。此时可在`@/utils/requestRespone.ts`中进行自定义处理。

```javascript
const afterResponse = (result) => {
  //　这里是处理逻辑
  return result // return false时不处理请求结果
}
```

### beforeDelete

数据列表删除记录请求前方法，可对请求参数进行处理

```javascript
const beforeDelete = (params, route) => {
  // 此处可对请求参数params进行修改处理后返回，route为当前路由信息
  return params　//　return false时将阻止发送请求
}
```
