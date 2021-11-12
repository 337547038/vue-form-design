#基于 Vue3 的可视化表单设计器

使用基于 Vue 2.0 的桌面端组件库 Elemnet-Plus ，使用广泛，扩展方便

通过可视化的操作，快速完成表单页面的创

提供功能强大的各种组件，可适用在各种复杂的场景中

丰富的API接口，方便快速的生成表单，验证和获取表单数据

利于二次开发

```text
nodejs // 模拟后端提供数据接口支持
public
src
 ├─api // 数据请求接口
 ├─docs // 使用说明文档
 └─views // 页面
   ├─designForm // 设计主程序组件
     ├─designForm.vue // 表单设计主页面
     ├─designTable.vue // 表格列表设计主页面
     ├─form.vue // 表单数据添加编辑查看详情主页面，可通过复制form.vue的方式实现复杂的表单页
     └─list.vue // 表格列表数据展示主页面，可通过复制list.vue的方式实现复杂的列表页
   ├─export
     ├─form.vue // 添加编辑表单文件，在表单设计处导出的vue文件，用作测试
     ├─list.vue // 表单列表文件，在表单设计处导出的vue文件，用作测试
   ├─formList
   └─index
```
