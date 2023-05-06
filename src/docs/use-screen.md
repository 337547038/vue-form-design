# 可视化数据大屏

## 组件
  
   所支持的设计组件 
 
## 图层
　
　大屏可视化设计的所有组件图层，可对当前组件进行隐藏、锁定、删除、选中操作

## 大屏配置

设计大屏宽高背景色及大屏全局样式

### 全局数据

当可视化大屏引用组件比较多时，若每个组件都单独从接口获取数据，这种做法明显不合理，后端同学可能也不会这么提供。因此引入全局数据请求接口，将数据接口处理好提供给每个组件调用。如可在`afterResponse`中对接口返回数据处理。这里return的res可在每个组件的全局或动态数据方法中获取

```javascript
opt = (res) =>
{
  // res接口返回的数据
  return res;
}
```

## 位置属性

可编辑当前组件的位置图层等信息，可使用`left、right、top、bottom`定位。

提示：当使用top或者bottom定位时，对应的left或者top将被修正为auto，并且当前组件不能进行拖动和缩放操作

## 数据

### beforeRequest

当前组件数据请求前事件，可对添加请求参数

### afterResponse

数据请求结果完成事件，需要此事件对数据进行处理。使用此方法对组件设置，可满足各种图表数据展示，而无需对echarts进行层层封装，可直接从echarts官网将图表配置好，复制过来替换好接口数据即可。减少学习成本

```javascript
opt = (data, option, global) =>
{
  // data接口返回的数据
  // options当前组件所需数据，图表时直接修改option中的数据即可，如
  // global大屏全局数据返回的内容
  option.xAsis.data = data.xAsis
  option.series.data = data.series
  console.log("afterResponse", data, option, global);
  return option;
}
```
