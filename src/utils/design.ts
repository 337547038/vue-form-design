import jsBeautify from 'js-beautify'

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
function obj2string(o: unknown): string {
  // 用来检测循环引用，必须放在递归外部
  const seen = new Set<unknown>();

  // 内部递归函数
  function stringify(value: unknown): string {
    // 处理 null / undefined
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';

    // 处理字符串
    if (typeof value === 'string') {
      return `"${value
          .replace(/\\/g, '\\\\')
          .replace(/"/g, '\\"')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/\t/g, '\\t')}"`;
    }

    // 处理数字、布尔、Symbol、BigInt
    if (typeof value !== 'object') {
      return String(value);
    }

    // 循环引用检测
    if (seen.has(value)) {
      return '"[Circular]"';
    }
    seen.add(value);

    // 处理数组
    if (Array.isArray(value)) {
      const items = value.map(item => stringify(item));
      return `[${items.join(',')}]`;
    }

    // 处理普通对象
    const keys = Object.keys(value);
    const result: string[] = [];

    for (const key of keys) {
      const val = (value as Record<string, unknown>)[key];
      const keyStr = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)
          ? key
          : `"${key}"`;
      result.push(`${keyStr}:${stringify(val)}`);
    }

    return `{${result.join(',')}}`;
  }

  return stringify(o);
}

/**
 * 将拖拽生成的表单数据转为字符串类型
 * @param obj
 * @param isBeautify
 * @param opt 在ace编辑器里需要添加
 */
export function objToStringify(obj: any, isBeautify?: boolean, opt = "opt=") {
  if (EDITTYPE === 'javascript') {
    if (isBeautify) {
      return jsBeautify(`${opt}${obj2string(obj)}`, {
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
  try {
    return JSON.parse(string || '{}')
  } catch (e) {
    return {}
  }
}

export function json2string(obj: any, isBeautify?: boolean) {
  return isBeautify ? JSON.stringify(obj, null, 2) : JSON.stringify(obj)
}

// ace编辑器相关
/**
 * 打开aceEdit编辑器相关配置
 * @param content
 * @param id 页面标签id,防止同一页面出现两个编辑器
 * @param type 显示编码类型 json/javascript/css 默认javascript
 */
export const aceEdit = ({content, id, type}: { content: string, id?: string, type?: string }) => {
  type = type ? type : 'javascript'
  id = id ? id : 'editJson'
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
  editor.setValue(content)
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

/**
 * 深克隆
 * @param obj
 */
export const deepClone = (obj: any) => {
  return evil(obj2string(obj))
}

/**
 * 根据路径修改对象值
 * @param obj 数据源对象
 * @param path 路径,路径不存在时自动创建
 * @param value 新值
 */
export const setValueByPath = (obj: any, path: string, value: any) => {
  /*const keys = path.split('.')
  const lastKey = keys.pop()!
  const target = keys.reduce((o, k) => o[k], obj)
  target[lastKey] = value*/
  const keys = path.split('.')
  let current = obj

  // 遍历到倒数第二层，自动创建不存在的对象
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    // 如果没有这个属性 / 不是对象，就强制创建空对象
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {}
    }
    current = current[key]
  }
  // 最后一层赋值
  const lastKey = keys.pop()!
  current[lastKey] = value
}