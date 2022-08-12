import { EDITTYPE } from '@/utils/form'

export const aceEdit = (data: string, id: string, type: string | undefined) => {
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
