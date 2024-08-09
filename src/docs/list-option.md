# ak-list 配置手册

## 主键
### -pk
`data.pk`
类型：string|number

当前列表数据主键，用于删除和编辑等相关操作

## 数据列表配置

### -当前对应表单id
`data.config.formId`

当前列表对应的表单id，设计列表时可从该表单获取可供选择的表头字段名称。获取列表数据时也是从对应的表单数据中获取。

### -设计列表保存的名称
`data.config.name`

显示于列表页数据管理页面，数据的名称

### -新增编辑显示方式
`data.config.openType`
可选dialog/page。设计列表页里点击新增或编辑按钮时，对应表单的显示方式，可以为弹窗和新标签页打开两种方式。

### -表单窗口宽度
`data.config.dialogWidth`
打开弹窗的宽度，仅当`data.config.openType=dialog`时有效

### -固定列表横向滚动条
`data.config.fixedBottomScroll`
类型：boolean，默认true。当列表出现横向滚动条时，设置为true可固定在浏览器底部。方便在翻页查看列表最右边信息时，无需先滚动纵向滚动条到底部，再滚动横向滚动条到右边才能查看

### -固定列表横向滚动条
`data.config.columnsSetting`
类型：boolean，默认true。用于设置表头列的显示与隐藏，即可个性化设置当前列表需要显示或隐藏哪些表头，以方便查看

### -显示与隐藏查询表单
`data.config.expand`
类型：boolean，默认true。有条件查询表单时，可设置展开可收起查询表单。

### -条件查询是否跳转页面
`data.config.searchJump`
类型：boolean，默认false。即列表查询时，点击查询按钮是否带参数跳转页面。此方式有利于分享当前url

### -列表操作按钮下拉设置
`data.config.operateDropdown`
类型：number。一般为列表右侧的编辑删除等操作按钮，当按钮个大于当前设定时，其余的侧以下拉菜单的形式展示。如设置`operateDropdown=2`，当操作按钮个数大于2个时，其余的侧以下拉菜单展示。

### -列表分页设置
`data.config.pageSize`
当前列表每页显示多少条

### -排序设置
`data.config.orderSort`
作为扩展参数传接口，用于对列表数据进行排序

## 表格prop

### -el-table的prop设置
`data.tableProps`
支持el-table所有prop参数设置，如：

```javascript
const data={
  tableProps:{
    height:500,
    border:true,
    rowKey:"id",
    emptyText:""
  }
}
```

## 表格columns
同时支持el-table-columns所有属性

### -help
`data.columns.help`
显示在表头的帮助信息，鼠标滑过时提示

### -render
`data.columns.render`
当前列表渲染模式，支持`switch | image | tag | url | datetime | date | buttons`

### -attr
`data.columns.attr`
附加属性，设置将绑定到对应组件，当`render=switch、image、tag、button`组件的属性。

### -replaceValue
`data.columns.replaceValue`
类型:{ [key: string | number]: string }

仅当`render=tag/text`时,用于根据值替换成其他内容，常见于接口返回如status=0/1之类的，需要将0/1显示为对应的文案，则可使用设置`{ '1': '启用', '0': '禁用' }`

### -custom
`data.columns.custom`

类型：custom?: { [key: string | number]: string }

仅当`render=tag/text`时,tag的显示类型属性，如{ '1': 'success', '0': 'danger' }

### -timeFormat
`data.columns.timeFormat`

类型：timeFormat?: string

仅当`render=datetime、date`时，对日期格式化，如YYYY年MM月dd日

### -buttons
`data.columns.buttons`

类型：buttons?: Button[]

见下方操作按钮配置

### -prop
`data.cloumns.prop`

类型：prop?: string

el-table-column的其他所有属性，如prop、label等

## ApiKey
### -列表数据请求接口
`data.apiKey.list`
### -删除数据请求接口
`data.apiKey.del`
### -编辑接口数据请求接口
`data.apiKey.edit`
### -导出数据请求接口
`data.apiKey.export`

## Event事件
### -before
`data.events.before`
类型：before?: string | ((type: EventType, params: any, rout: any) => boolean)

请求列表数据，编辑和删除等接口事件发送请求前，这里可对发送的数据进行拦截处理。
* type支持的类型`switchChange | getData | del | search | export`，用于表示的同的接口事件类型
* params请求的参数，可对此参数进行修改，然后return回去
* route当前页面路由信息

同时支持string字符串类型，这个需要自定义开发，适用于处理一些比较复杂的逻辑处理时，根据设置的字符将处理逻辑写入本地文件

### -after
`data.events.after`
类型：after?: string | ((type: EventType, res: any, isSuccess?: boolean) => any)

类似于前面的`before`。最后需要将处理后的结果 return res

## 按钮
### -操作按钮配置
适用于表格左上方及表格列表内右侧按钮

`data.controlBtn` 为表格左上方，`data.columns`下`render=buttons`为列表右侧按钮，如：
```javascript
const data={
  controlBtn:[], //为表格左上方按钮配置
  columns:[{
    render:'buttons', //为列表右侧按钮
    buttons:[]
  }]
}
```
详细配置如：
```javascript
const buttons=[
  {
    //我们内置了常见的add、edit、detail、del、export按钮，只需按约定的key值设置即可快速设置
    key:'add'
  },
  {
    // 渲染方式:tooltip=带tip的按钮,confirm=带确认框的按钮，空为正常的按钮
    render: "tooltip",
    name: "", // 按钮名称
    title: "", // 鼠标放置时的 title 提示
    label: "", // 直接在按钮内显示的文字，title 有值时可为空
    class: "",
    type: "primary", // 按钮类型，请参考 element plus 的按钮类型
    icon: "", // 按钮 icon
    popConfirm: {}, //自定popConfirm属性，当render=confirm
    // 自定义点击事件
    click: (row: { [key: string]: any }) => {

    },
    // 按钮是否显示，true显示
    display: (row: { [key: string]: any }) =>{
      return true;
    },
    // 按钮是否禁用，true禁用
    disabled: (row: { [key: string]: any }) => {
      return false;
    },
    // 自定义el-button属性
    attr: {},
    permission: 'string' //权限校验标识，也可通过display操作
  }
]
```



## 侧边栏树

### -show
`data.treeData.show`
类型: boolean。是否开启树

### -before
`data.treeData.before`
类型：before?: Function | string

同`event.before`

### -after
类型：after?: Function | string
同`event.after`

### -method
`data.treeData.method`
类型: string

树列表数据的请求方式

### -requestUrl
`data.treeData.requestUrl`
类型: string

树列表数据的请求接口地址

### -name
`data.treeData.name`
类型: string

