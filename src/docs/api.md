# API接口

## 新增/编辑表单

新增/编辑表单以及新增/编辑的无表单数据列表

接口名称：xxxx

请求类型：POST

请求参数：

```json
{
  "id": 1,
  "formId": "1",
  "name": "设计表单的名称",
  "formData": "{list:[],form:{labelWidth:\"\",class:\"\",size:\"default\",name:\"form1661506141137\",formId:\"\",title:\"表单名称\"}}",
  "searchData": "",
  "tableData": "",
  "type": 1,
  "status": 1
}
```

请求结果：

```json
{
  "code": 200,
  "data": "新增/修改成功"
}
```

请求参数说明：

| 参数         | 类型     | 必填  | 说明                |
|------------|--------|-----|-------------------|
| id         | number | -   | 记录自增id，新增时没有      |
| formId     | string | -   | 设计表单选择的数据源id      |
| name       | string | 是   | 设计的表单名称           |
| type       | number | -   | 表单和列表两种类型 1表单 2列表 |
| formData   | string | -   | 设计生成的表单数据         |
| searchData | string | -   | 设计生成的表单列表搜索数据     |
| tableData  | string | -   | 设计生成的表单数据列表数据     |
| status     | number | -   | 是否启用 1启用 0禁用      |

## 已设计的表单及数据列表

接口名称：xxxx

请求类型:POST

请求参数：（请求的参数用于条件搜索，非必填）

```json
{
  "name": "设计表单的名称",
  "type": 1,
  "status": 1,
  "pageInfo": {
    "pageSize": 20,
    "pageIndex": 1
  }
}
```

请求结果：

```json
{
  "code": 200,
  "data": {
    "list": [
      {
        "id": 1,
        "formId": "1",
        "name": "设计的表单名称",
        "updateDate": "2022-08-80 08:08:008",
        "creatDate": "2022-08-80 08:08:008",
        "status": 1,
        "type": 1
      }
    ],
    "pageInfo": {
      "total": 10
    }
  }
}
```

请求结果说明：

| 参数             | 类型     | 说明                |
|----------------|--------|-------------------|
| id             | number | 当前记录自增id          |
| formId         | string | 设计表单选择的数据源id      |
| name           | string | 设计的表单名称           |
| updateDate     | string | 修改时间              |
| creatDate      | string | 新增时间              |
| status         | number | 是否启用 1启用 0禁用      |
| type           | number | 表单和列表两种类型 1表单 2列表 |
| pageInfo.total | number | 分页信息              |

## 修改已设计的表单及数据列表的数据状态

接口名称：xxxx

请求类型:POST

请求参数：

```json
{
  "id": 1,
  "status": 1
}
```

返回结果：

```json
{
  "code": 200,
  "data": "修改成功"
}
```

## 根据id获取已设计的表单数据

接口名称：xxxx

请求类型:POST

请求参数：

```json
{
  "id": 1
}
```

请求结果：

按提交时的格式和数据类型，返回所有数据

## 可创建表单数据源

接口名称：xxxx

请求类型:POST

请求参数：无

返回结果：

```json
 {
  "code": 200,
  "data": [
    {
      "name": "示例表单",
      "id": "1"
    }
  ]
}
```
