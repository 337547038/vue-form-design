# API接口

## 已设计的表单及数表列表

| 参数         | 类型     | 可搜索 | 说明                |
|------------|--------|-----|-------------------|
| id         | number | 否   | 当前记录自增id          |
| formId     | string | 否   | 设计表单选择的数据源id      |
| name       | string | 是   | 表单名称              |
| updateDate | string | 否   | 修改时间              |
| creatDate  | string | 否   | 新增时间              |
| status     | number | 是   | 是否启用 1启用 0禁用      |
| type       | number | 是   | 表单和列表两种类型 1表单 2列表 |
