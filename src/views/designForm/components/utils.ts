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
export const formatNumber = (val: string | number) => {
  // 将字符类数字转为数值类
  if (val && /^\d+(\.\d+)?$/.test(val.toString())) {
    // 为数字
    return Number(val)
  } else {
    return val
  }
}

// provide 方法定义的key
const prefix = 'AK'
export const constFormDict = prefix + 'FormDict' // 表单内容增加修改选项字典
export const constControlChange = prefix + 'ControlChange' // 表单组件改变事件
export const constSetFormValue = prefix + 'SetFormValue' // 使用setValue设置的值
export const constSetFormOptions = prefix + 'SetFormOptions' // 使用setOptions设置下拉值
export const constFormOtherData = prefix + 'FormOtherData' // 表单其他配置
export const constGetControlByName = prefix + 'GetControlByName' // 根据name从formData.list查找数据
