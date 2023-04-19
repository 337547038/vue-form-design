// 用于在线模式表单值改变事件，此方法可实际如A组件改变时，自动对B组件设值或修改
// 必须要return
/*
 @params name 当前改变的组件name值
 @params model当前表单的值
 @params key 当前设置的方法标识
 */
const formChangeValue = (
  name: string,
  model: { [key: string]: any },
  key: string
) => {
  console.log(key, model, name)
  return model
}
export default formChangeValue
