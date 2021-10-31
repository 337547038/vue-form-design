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
