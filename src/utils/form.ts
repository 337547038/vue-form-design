// @ts-ignore
import jsBeautify from 'js-beautify'

export const EDITTYPE = 'javascript' // 弹出编辑器可输入类型 json/javascript

export function evil(fn: any) {
  const Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
  return new Fn('return ' + fn)()
}

export function obj2string(o: any) {
  let r: any = []
  if (o === null) {
    // 这里有个问题 因typeOf null=object,下面判断会报错
    return null
  }
  if (typeof o === 'string') {
    return (
      '"' +
      o
        .replace(/([\\'\\"\\])/g, '\\$1')
        .replace(/(\n)/g, '\\n')
        .replace(/(\r)/g, '\\r')
        .replace(/(\t)/g, '\\t') +
      '"'
    )
  }
  if (typeof o === 'object') {
    if (!o.sort) {
      for (const i in o) {
        if (o.hasOwnProperty(i)) {
          let iii = i
          if (i.indexOf('-') !== -1) {
            iii = `"${i}"`
          }
          r.push(iii + ':' + obj2string(o[i]))
        }
      }
      if (
        !!document.all &&
        !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(
          o.toString
        )
      ) {
        r.push('toString:' + o.toString.toString())
      }
      r = '{' + r.join() + '}'
    } else {
      for (let i = 0; i < o.length; i++) {
        r.push(obj2string(o[i]))
      }
      r = '[' + r.join() + ']'
    }
    return r
  }
  return o && o.toString()
}

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
