# Vue 3 + Vite

通过方法事件改变当前控件值，如输入框后面按钮点击后，弹出窗口选择后回填输入框
表格设置导出vue文件
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
   ├─formList
   └─index
```
