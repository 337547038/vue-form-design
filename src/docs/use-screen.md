# 可视化数据大屏

数据可视化大屏使用`position`和`let`和`top`定位布局。

注意：当使用了`right、top`或其他非`px`单位布局时，当前组件将不能进拖动缩放及合并等操作

## 组件
  
   所支持的设计组件 

### 通用图表

通过使用生成脚本预览方式，将图表相关数据复制到`option`即可

### 自定义组件

目前需为全局注册的组件
 
## 图层
　
　大屏可视化设计的所有组件图层，可对当前组件进行隐藏、锁定、删除、组合、拆分、上下左右对齐、水平垂直居中、选中操作

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

提示：当使用`top`或者`bottom`定位时，对应的`left`或者`top`将被修正为`auto`，并且当前组件不能进行拖动和缩放操作

## 数据

### beforeRequest

当前组件数据请求前事件，可对添加请求参数

### afterResponse

数据请求结果完成事件，需要此事件对数据进行处理。使用此方法对组件设置，可满足各种图表数据展示，而无需对`echarts`进行层层封装，可直接从echarts官网将图表配置好，复制过来替换好接口数据即可。减少学习成本

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

注意：`afterResponse`事件在大屏配置接口数据处理事件只有`data`参数，此处可将请求到的数据处理后返回给单组件该事件中使用，即上面的`global`
