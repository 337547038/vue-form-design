// 用于在线模式表单值改变事件，此方法可实际如A组件改变时，自动对B组件设值或修改
// 必须要return
/*
 @params key 当前指定的事件字符串标识
 @params result api接口返回结果
 @params options 静态或图片options数据，需按此格式返回
 @params global 全局的数据
 */
const formatScreen = (
  key: string,
  result: any,
  options?: any,
  global?: any
) => {
  console.log(key, result, options, global)
  return options
}
export default formatScreen
