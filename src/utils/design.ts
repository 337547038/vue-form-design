import jsBeautify from 'js-beautify'
import SparkMD5 from 'spark-md5'

export const EDITTYPE: string = 'javascript' // 弹出编辑器可输入类型 json/javascript
/**
 * 一个变量指向Function，防止有些前端编译工具报错
 * @param fn
 */
function evil(fn: any) {
  return new Function('return ' + fn)()
}

/**
 * 将拖拽生成的表单数据转为字符串类型
 * @param o
 */
function obj2string(o: any) {
  let r: any = []
  if (o === null) {
    // 这里有个问题 因typeOf null=object,下面判断会报错
    return null
  }
  if (typeof o === 'string') {
    return (
      '"'
      + o
        .replace(/([\\'\\"\\])/g, '\\$1')
        .replace(/(\n)/g, '\\n')
        .replace(/(\r)/g, '\\r')
        .replace(/(\t)/g, '\\t')
        + '"'
    )
  }
  if (typeof o === 'object') {
    if (!o.sort) {
      for (const i in o) {
        let iii: string = i
        if (i.indexOf('-') !== -1) {
          iii = `"${i}"`
        }
        // r.push(iii + ':' + obj2string(o[i]))
        r.push(`${iii}:${obj2string(o[i])}`)
      }
      if (
        !!document.all
        && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(
          o.toString
        )
      ) {
        // r.push('toString:' + o.toString.toString())
        r.push(`toString:${o.toString.toString()}`)
      }
      // r = '{' + r.join() + '}'
      r = `{${r.join()}}`
    } else {
      for (let i: number = 0; i < o.length; i++) {
        r.push(obj2string(o[i]))
      }
      // r = '[' + r.join() + ']'
      r = `[${r.join()}]`
    }
    return r
  }
  return o && o.toString()
}

/**
 * 将拖拽生成的表单数据转为字符串类型
 * @param obj
 * @param isBeautify
 */
export function objToStringify(obj: any, isBeautify?: boolean) {
  if (EDITTYPE === 'javascript') {
    if (isBeautify) {
      return jsBeautify('opt=' + obj2string(obj), {
        indent_size: 2,
        brace_style: 'expand'
      })
    } else {
      return obj2string(obj)
    }
  } else {
    return isBeautify ? JSON.stringify(obj, null, 2) : JSON.stringify(obj)
  }
}

/**
 * 将字符串类型转为拖拽生成的表单数据
 * @param string
 */
export function stringToObj(string: string) {
  if (EDITTYPE === 'javascript') {
    return evil(string)
  } else {
    return JSON.parse(string)
  }
}

export function string2json(string: string) {
  return JSON.parse(string || '{}')
}
export function json2string(obj: any, isBeautify?: boolean) {
  return isBeautify ? JSON.stringify(obj, null, 2) : JSON.stringify(obj)
}

// ace编辑器相关
/**
 * 打开aceEdit编辑器相关配置
 * @param data
 * @param id
 * @param type
 */
export const aceEdit = (data: any, id?: string, type?: string) => {
  type = type ? type : 'javascript'
  id = id ? id : 'editJson'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
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

/**
 * 将字符类数字转为数值类
 * @param val
 */
export const formatNumber = (val: any): number | undefined => {
  // 将字符类数字转为数值类
  if (typeof val === 'string' && /^\d+(\.\d+)?$/.test(val.toString())) {
    // 为数字
    return Number(val)
  } else {
    return val
  }
}

/**
 * 转所有值转为字符串类型
 * @param val
 */
export const formatToString = (val: any): string | undefined => {
  if (val !== undefined) {
    return val.toString()
  } else {
    return val
  }
}
/**
 * 将{key:value}转[{label:'key',value:'value'}]
 * @param obj
 */
export const objectToArray = (obj: any): { [key: string | number]: any } => {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    const temp: any = []
    for (const key in obj) {
      temp.push({
        label: obj[key],
        value: formatNumber(key) // {1:'a'}转换后这个key会变成字符串，这里尝试恢复为数字
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
): void => {
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
    if (styleId) {
      styleId.parentNode.removeChild(styleId)
    }
  }
}
/**
 * 根据当前组数据返回一个标识，设计时用于当前选中标识
 * @param item
 * @param index //type=grid下初始时item都是一样的
 */
export const getGroupName = (item: any, index?: number): string => {
  if (item.name) {
    return item.name
  } else {
    const spark = new SparkMD5()
    spark.append(JSON.stringify(item) + index)
    return spark.end()
  }
}

/**
 * 数据克隆
 */
export const jsonParseStringify = (val: any) => {
  if (typeof val === 'object') {
    return JSON.parse(JSON.stringify(val))
  } else {
    return val
  }
}
