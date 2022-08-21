# 目录结构

```text
public
 ├─mock // 模拟数据
src
 ├─api // 数据请求接口
 ├─docs // 使用说明文档
 └─views // 页面
   ├─designForm // 表单设计主程序组件
     ├─components // 核心组件
     ├─form.vue // 通用表单新增/编辑页
     ├─formList.vue // 已设计表单列表页
     ├─index.vue // 表单设计主页面
     ├─list.vue // 通用表单内容列表页
     └─table.vue // 列表页设计主页面
   └─export
     ├─form.vue // 添加编辑表单文件，在表单设计处导出的vue文件，用作测试
     └─list.vue // 表单列表文件，在表单设计处导出的vue文件，用作测试
```

# 快速上手

进入项目安装依赖包

```text
git clone https://github.com/337547038/vue-form-design.git
yarn install
yarn run dev
```


浏览器进入 http://localhost:3000 开始创建表单

![](./img/img1.png)

# 代码编辑支持json或javascript

代码编辑输入框可支持`json`或`javascript`，初始使用时可通过修改`/src/utils/form.ts`里的`EDITTYPE`的值


