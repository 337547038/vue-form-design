export const aceEdit = (data, id = 'editJson', type = 'json') => {
  const editor = ace.edit(id)
  editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  })
  editor.setFontSize(14)
  editor.setShowPrintMargin(false)
  editor.session.setMode('ace/mode/' + type)
  editor.setTheme("ace/theme/tomorrow_night")
  editor.setValue(data)
  return editor
}
export const localStorage = (dataType, value) => {
  const key = 'df_form_design_table_data'
  let storage = window.localStorage.getItem(key)
  if (storage) {
    storage = JSON.parse(storage)
  }
  if (value) {
    // 存值
    if (!storage) {
      storage = {}
    }
    storage[dataType] = value
    window.localStorage.setItem(key, JSON.stringify(storage))
  } else {
    // 取值，不需要传参
    return storage
  }
}
