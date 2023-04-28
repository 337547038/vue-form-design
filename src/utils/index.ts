export function debounce(fn: any, delay = 500) {
  let timer: NodeJS.Timeout
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fn.apply(this, args)
    }, delay)
  }
}
// 时间格式化
export const dateFormatting = (time: any, cFormat?: string) => {
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  // 字符串数字形式的时间戳要转换下
  let newTime = time
  if (/^\d+?$/.test(time)) {
    newTime = parseInt(time)
  }
  const date = typeof time === 'object' ? time : new Date(newTime)
  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    w: date.getDay()
  }
  return format.replace(/{(y|m|d|h|i|s|w)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'w') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}
// 动态远程加载script脚本
export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = resolve
    script.onerror = reject
    script.src = src
    document.head.appendChild(script)
  })
}
// 随机数字符串
export const randomString = (len: number) => {
  len = len || 32
  const str = 'ABCDEFGHIJKMNOPQSTWXYZabcdefghijklmnopqrstwxyz1234567890'
  let n = ''
  for (let i = 0; i < len; i++) {
    n += str.charAt(Math.floor(Math.random() * str.length))
  }
  return n
}

export const jsonParseStringify = (val: any) => {
  if (typeof val === 'object') {
    return JSON.parse(JSON.stringify(val))
  } else {
    return val
  }
}
