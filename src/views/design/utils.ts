import { EDITTYPE } from '@/utils/form'

export const aceEdit = (data: any, id?: string, type?: string | undefined) => {
  id = id || 'editJson'
  type = type || EDITTYPE
  // @ts-ignore
  const editor = ace.edit(id)
  editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  })
  editor.setFontSize(14)
  editor.setShowPrintMargin(false)
  editor.session.setMode('ace/mode/' + type)
  editor.setTheme('ace/theme/tomorrow_night')
  editor.setValue(data)
  return editor
}
// 将字符类数字转为数值类
export const formatNumber = (val: any) => {
  // 将字符类数字转为数值类
  if (typeof val === 'string' && /^\d+(\.\d+)?$/.test(val.toString())) {
    // 为数字
    return Number(val)
  } else {
    return val
  }
}
// 转所有值转为字符串类型
export const formatToString = (val: any) => {
  if (val !== undefined) {
    return val.toString()
  } else {
    return val
  }
}
// 将{key:value}转[{label:'key',value:'value'}]
export const objectToArray = (obj: any) => {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    const temp: any = []
    for (const key in obj) {
      temp.push({
        label: obj[key],
        value: key
      })
    }
    return temp
  }
  return obj
}
/****
 * 动态插入移除css
 * @param id 标签id
 * @param cssContent 要插入的css内容
 * @param append true插入false移除
 */
export const appendOrRemoveStyle = (
  id: string,
  cssContent: string,
  append?: boolean
) => {
  const styleId: any = document.getElementById(id)
  if (styleId && append) {
    // 存在时直接修改，不用多次插入
    styleId.innerText = cssContent
    return
  }
  if (cssContent && append) {
    const styleEl = document.createElement('style')
    styleEl.id = id
    styleEl.type = 'text/css'
    styleEl.appendChild(document.createTextNode(cssContent))
    document.head.appendChild(styleEl)
  }
  if (!append || !cssContent) {
    // 移除
    styleId && styleId.parentNode.removeChild(styleId)
  }
}
// 定义两个空方法，用于在编辑事件时作为默认值
export const beforeRequest =
  'opt=(data, route) => {\n' +
  '  // data经过处理后返回\n' +
  "  console.log('beforeRequest',data)\n" +
  '  return data\n' +
  '}'
export const afterResponse =
  'opt=(res) => {\n' +
  '  // res返回数据\n' +
  "  console.log('afterResponse',res)\n" +
  '  return res\n' +
  '}'

export const onChange =
  'opt=(key,model) => {\n' +
  '  // name当前改变组件的值,model表单的值\n' +
  "  console.log('onChange',key)\n" +
  '  return model\n' +
  '}'

// provide 方法定义的key
const prefix = 'AK'
export const constControlChange = prefix + 'ControlChange' // 表单组件改变事件
export const constSetFormOptions = prefix + 'SetFormOptions' // 使用setOptions设置下拉值
export const constGetControlByName = prefix + 'GetControlByName' // 根据name从formData.list查找数据
export const constFormBtnEvent = prefix + 'FormBtnEvent' // 按钮组件事件
export const constFormProps = prefix + 'FormProps' // 按钮组件事件
