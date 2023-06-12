# 开发指南

欢迎有兴趣的同学参与完善文档

## 目录结构

```text
nodejs // 模拟后端接口
public
 ├─mock // 模拟数据
 ├─static  // 静态资源
   ├─ iconfont icon图标
   └─ plugins 表单设计编辑器及富文本编辑器相关js
src
 ├─api // 数据请求接口
 ├─assets // scss及图片
 ├─components // 框架布局组件
 ├─docs // 使用说明文档
 └─views // 页面
   ├─design // 表单设计主程序组件
     ├─components // 表单表格设计公共组件
     ├─dataList // 列表设计
     ├─dataScreen // 数据可视化大屏设计
     ├─dataSource // 数据源设计
     ├─form // 表单设计
     └─index.vue 设计首页
   ├─ system 系统管理相关页面
```

## 快速上手

进入项目安装依赖包

```text
git clone https://github.com/337547038/vue-form-design.git
pnpm install
pnpm run dev
```

## nodejs模拟接口

体验完整的流程可启动nodejs模拟接口数据，使用mock/json数据只能查看；

先将`/nodejs/akform.sql`导入到mysql数据库里，在db.js里修改数据库连接配置

进入nodejs目录安装依赖

```text
pnpm install
pnpm dev
```

浏览器进入 http://localhost:3000 开始体验

## 代码模式

代码编辑输入框可支持`json`或`javascript`两种模式，初始使用时可通过修改`/src/utils/form.ts`里的`EDITTYPE`的值

