# AKList 内容列表

```html
<ak-list :data="tableData"></ak-list>
```

## API

### Props

| 参数                | 类型                          | 说明                                |
|-------------------|-----------------------------|-----------------------------------|
| data              | object                      | 通过设计器拖拽生成的表格配置数据                  |
| data.columns      | array                       | 用于渲染el-columns-table列，所有参数绑定于当前组件 |
| data.tableProps   | object                      | el-table所有props                   |
| data.apiKey       | object                      | 同props.apiKey，此处优先级更高             |
| data.events       | object                      | 事件                                |
| data.controlBtn   | array                       | 表格上方按钮组设置，见如何设置一个btn              |
| searchData        | object                      | 列表页条件筛选表单数据，同表单的`formData`        |
| apiKey            | object                      | 数据请求交互api                         |
| before            | function(params,obj)/string | 请求列表前参数处理方法，可对请求参数处理              |
| after             | function(res,obj)/string    | 请求完成后列表数据处理方法                     |
| dict              | object                      | 用于匹配的字典数据，一般不设置，从接口获取             |
| fixedBottomScroll | boolean                     | 横向滚动条固定在浏览器底部 ，默认为true            |
| autoLoad          | boolean                     | 初始时是否自动请求加载数据，默认为true             |
| treeData          | object                      | 列表左侧栏树数据                          |
| pk                | string                      | 主键                                |
| query             | object                      | 一些附加的请求参数。也可在`before`处处理          |

### props.data.columns

| 参数           | 类型             | 说明                                                                        |
|--------------|----------------|---------------------------------------------------------------------------|
| help         | string         | 表头tooltip提示信息                                                             |
| render       | string         | 渲染类型，可选`switch、image、tag、link、datetime、date、buttons、string、text`，默认string |
| config       | object         | 当前render类型的附加属性，详见当前组件的props。                                             |
| replaceValue | object         | 仅当`render=tag/text`时,{ '1': '启用', '0': '禁用' }                             |
| custom       | object         | 仅当`render=tag/text`时,{ '1': 'success', '0': 'danger' }                    |
| timeFormat   | string         | 仅当`render=datetime、date`时，对日期格式化，如YYYY年MM月dd日                             |
| buttons      | array          | 仅当`render=buttons`时，表格行右侧边按钮，详情见`自定义表格行右侧边按钮 `                            |
| －            | －              | 所有`el-table-column`属性                                                     |


### props.apiKey


| 方法     | 说明                 |
|--------|--------------------|
| list   | 列表数据接口             |
| edit   | 列表使用了switch时用于修改状态 |
| del    | 删除接口               |
| export | 导出接口               |

### Methods

| 方法                 | 说明                                      |
|--------------------|-----------------------------------------|
| getListData        | 列表请求方法，可手动调用                            |
| delClick           | 数据删除，delClick(id)                       |
| table              | 表格方法，使用$refs方式获取                        |
| setSearchFormValue | 设置查询条件表单初始值。可根据url参数先设置查询表单初始值再加载列表请求方法 |
| getSearchFormValue | 获取查询条件表单的值                              |

### Slot

| 参数         | 说明                               |
|------------|----------------------------------|
| default    | 位于筛选表单和表格列表间，可用于存放添加删除数据的按钮或其他操作 |
| controlBtn | 位于筛列表可配置新增删除按钮后面                 |
| searchForm | 位于条件筛选表单内部                       |
| -          | columns对应的props                  |


### tree

| 参数         | 类型                     | 说明                      |
|------------|------------------------|-------------------------|
| show       | boolean                | 是否显示                    |
| name       | string                 | 唯一标识，查询条件参数值            |
| method     | string                 | 数据接口请求方式，get/post默认post |
| requestUrl | string                 | 数据接口请求地址，必填             |
| before     | Function(params,route) | 接口请求前数据参数处理方式           |
| after      | Function(res)/string   | 接口请求后数据参数处理方式           |
| treeProps  | object                 | 组件tree对应props           |

### 自定义表格行右侧边及列表上方按钮

我们内置了常见的增加、编辑、查看、删除、导出按钮，只需按约定的key值设置即可快速设置
```js
const btn={
   render: "buttons",
   buttons: [
       {
           key:"edit"
           //其他值属性可继续设置
       },
       {
           key:"detail"
       },
       {
           key:"del"
       },
       {
           key:"export"
      }
   ]
};
//自定义一个新的按钮
const newBtn={
    render:"buttons",
    buttos:[
        {
            key:"edit"
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
};
```

### 深度使用表格(完整配置设置)
```javascript
const opt = {
  tableProps: {}, // 支持el-table所有prop设置
  columns: [ //表头设置
    {
      label: "多选",
      type: "selection"
    },
    {
      label: "序号",
      type: "index",
      width: "70px"
    },
    {
    prop: "name",
    label: "状态",
    render: "switch", // 渲染类型
    config: // 对应render类型的配置
    {
      inlinePrompt: true,
      activeText: "1",
      inactiveText: "2",
      activeValue: "on",
      inactiveValue: "off"
    }
  },
  {
    prop: "sex",
    label: "性别",
    render: "tag",
    config: {},
    custom: // render=tag/text时，显示的type。表示当前值为1时tag的type=primary
    {
      1: "primary",
      2: "success"
    },
    replaceValue: // render=tag/text时，即将接口返回值为1替换成女显示
    {
      1: "女"
    }
  },
  {
    prop: "img",
    label: "图片",
    render: "image",
    config:
    { // 图片的宽高及其他el-image所有prop
      width: "100",
      height: "100"
    }
  },
  {
    prop: "link",
    label: "链接",
    render: "link",
    config:
    {
      type: "primary",
      underline: true,
      target: "_blank"
    }
  },
    {
      prop: "datetime",
      label: "时间",
      render: "datetime",
      config: {},
      timeFormat: "{yyyy}-{mm}-{dd}" // 时间显示类型
    },
  {
    prop: "other",
    label: "操作",
    render: "buttons",
    config: {},
    buttons: [ // 操作按钮设置，见如何自定一个按钮
    {
      key: "edit"
    },
    {
      key: "del",
      popConfirm:
      {
        title: "确认删除该记录吗？",
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        confirmButtonType: "danger"
      }
    }]
  }],
  config:
  {
    formId: 1, // 当前列表对应的表单id
    name: "", // 当前设计列表保存的名称
    openType: "dialog", // 点击编辑和新增时显示方式。dialog/page两个方式
    dialogWidth: "500", // openType=dialog时窗口宽度
    fixedBottomScroll: true, // 出现横向滚动条时，是否固定在浏览器底部
    columnsSetting: true, // 是否表格表头列显示与隐藏设置
    expand: true,// 可折叠查询表单，即可显示隐藏条件筛选表单
    searchJump: true,//跳转条件查询时是否跳转页面，即将查询参数写在url上
    operateDropdown: "5", // 一般为表格右侧操作按钮，当按钮个数大于当前设定时，其余的则以下拉菜单的形式展示
    pageSize: "20", // 每页显示多少条
    orderSort: "id desc" // 作为扩展参数传接口
  },
  apiKey:
  {
    list: "list", // 列表数据请求接口
    del: "del", // 删除数据请求接口
    edit: "edit", // 编辑接口
    export: "export" // 导出接口
  },
  controlBtn: [ // 一般显示在表格左上方的操作按钮
  {
    key: "add"
  },
  {
    key: "edit"
  },
  {
    key: "del",
    popConfirm:
    {
      title: "确认删除该记录吗？",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      confirmButtonType: "danger"
    }
  },
  {
    key: "export"
  }
  ],
  treeData://侧栏树相关配置
  {
    show: true,
    before: (params, { type, route, model }) =>
    {
      // params请求的参数，可根据type作判断，对params作修改后return回去
      // 需要将params参数return
      return params
    },
    name: "name",
    requestUrl: "gettree",
    after: (res, { type, success }) =>
    {
      // res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回
      console.log(type, res)
      return res
    }
  },
  events:// 事件
  { //type 事件类型； route 当前路由信息； model 当前表单信息，根据不同类型。表单相关的事件才会有值
    before: (params, { type, route, model }) =>
    {
      // params请求的参数，可根据type作判断，对params作修改后return回去
      // 需要将params参数return
      return params
    },
    after: (res, { type, success }) =>
    {
      // res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回
      console.log(type, res)
      return res
    }
  },
  pk: "id" //主键，用于删除或编辑
}
```
