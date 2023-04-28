# 可视化数据大屏

## 组件
  
   所支持的设计组件 
 
## 图层
　
　大屏设计的所有组件图层，可对当前组件进行隐藏、锁定、删除和拖动排序操作

## 大屏配置

设计大屏宽高背景色及大屏全局样式

## 位置属性

可编辑当前组件的相关属性

## 数据

### beforeRequest

当前组件数据请求前事件，可对添加请求参数

### afterResponse

数据请求结果完成事件，需要此事件对数据进行处理。使用此方法对组件设置，可满足各种图表数据展示，而无需对echarts进行层层封装，可直接从echarts官网将图表配置好，复制过来替换好接口数据即可。减少学习成本

```javascript
opt = (data, option) =>
{
  // data接口返回的数据
  //　options当前组件所需数据，图表时直接修改option中的数据即可，如
  option.xAsis.data = data.xAsis
  option.series.data = data.series
  console.log("afterResponse", data, option);
  return option;
}
```
