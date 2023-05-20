# AKList 内容列表

```html
<ak-list :tableData="tableData"></ak-list>
```

## API

### Props

| 参数                | 类型                     | 说明                         |
|-------------------|------------------------|----------------------------|
| tableData         | object                 | 设计表格配置数据                   |
| searchData        | object                 | 列表页条件筛选表单数据，同表单的`formData` |
| beforeRequest     | function(params,route) | 请求列表前参数处理方法，可对请求参数处理       |
| afterResponse     | function/string        | 请求完成后列表数据处理方法              |
| beforeDelete      | function(params,route) | 删除请求前事件                    |
| showPage          | boolean/true           | 是否显示分页信息                   |
| requestUrl        | string                 | 请求的api接口方法                 |
| deleteUrl         | string                 | 删除的api接口方法                 |
| dict              | object                 | 用于匹配的字典数据，一般不设置，从接口获取      |
| fixedBottomScroll | boolean/true           | 横向滚动条固定在浏览器底部              |
| autoLoad          | boolean/true           | 初始时是否自动请求加载数据              |
| treeData          | object                 | 列表左侧栏树数据                   |

### Methods

| 方法                 | 说明                                      |
|--------------------|-----------------------------------------|
| getListData        | 列表请求方法，可手动调用                            |
| delClick           | 数据删除                                    |
| table              | 表格方法                                    |
| setSearchFormValue | 设置查询条件表单初始值。可根据url参数先设置查询表单初始值再加载列表请求方法 |

### Slot

| 参数         | 说明                               |
|------------|----------------------------------|
| default    | 位于筛选表单和表格列表间，可用于存放添加删除数据的按钮或其他操作 |
| controlBtn | 位于筛列表可配置新增删除按钮后面                 |
| searchForm | 位于条件筛选表单内部                       |
| -          | columns对应的props                  |

### tableData

| 参数                   | 类型              | 说明                           |
|----------------------|-----------------|------------------------------|
| tableProps           | Object          | 表格配置                         |
| columns              | Array           | 表格列配置                        |
| controlBtn           | Array           | 列表上方按钮，如新增/删除                |
| operateBtn           | Array           | 操作拦按钮设置，仅对props='__control'列 |
| events.beforeRequest | Function        | 同`props.beforeRequest`       |
| events.afterResponse | Function/string | 同`props.afterResponse`       |
| events.beforeDelete  | Function 　      | 同`props.beforeDelete`        |

### tree

| 参数            | 类型                   | 说明                      |
|---------------|----------------------|-------------------------|
| show          | boolean              | 是否显示                    |
| name          | string               | 唯一标识，查询条件参数值            |
| method        | string               | 数据接口请求方式，get/post默认post |
| requestUrl    | string               | 数据接口请求地址，必填             |
| beforeRequest | Function(data,route) | 接口请求前数据参数处理方式           |
| afterResponse | Function/string      | 接口请求后数据参数处理方式           |
| treeProps     | object               | 组件tree对应props           |
