/**
 * 防抖
 * @param func
 * @param delay
 * @param immediate
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay = 500,
  immediate?: boolean
): T {
  let timerId: any

  return function (this: any, ...args: any[]) {
    if (timerId) {
      clearTimeout(timerId)
    }
    if (immediate) {
      const callNow = !timerId
      timerId = setTimeout(() => {
        timerId = null
      }, delay)
      if (callNow) {
        func.apply(this, args)
      }
    } else {
      timerId = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  } as T
}

export const throttle = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null
  return function (...args: any[]) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        timeoutId = null
      }, delay)
    }
  }
}
/**
 * 时间格式化
 * @param time
 * @param cFormat
 */
export const dateFormatting = (time: any, cFormat?: string) => {
  const format: string = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
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

/**
 * 动态远程加载script脚本
 * @param src
 */
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

/**
 * 随机数字符串
 * @param len
 */
export const randomString = (len: number) => {
  len = len || 32
  const str: string = 'ABCDEFGHIJKMNOPQSTWXYZabcdefghijklmnopqrstwxyz1234567890'
  let n: string = ''
  for (let i: number = 0; i < len; i++) {
    n += str.charAt(Math.floor(Math.random() * str.length))
  }
  return n
}

/**
 * 获取指定数值区间的随机数
 * @param min
 * @param max
 */
export function getRandom(min, max) {
  // +1包括最大值
  return Math.floor(Math.random() * (max - min + 1)) + min
}
/** 设置 localStorage 添加对时间的控制，hour单位为小时
 * hour空时使用原始sessionStorage(key,value)，即关闭浏览器过期
 * hour=0时，使用localStorage，即永不过期
 * hour>0时localStorage添加时间控制
 * */

export function setStorage(key: string, data: any, hour?: number | null): void {
  let newData = data
  if (typeof data === 'object') {
    newData = JSON.stringify(data)
  }
  if (hour === 0) {
    window.localStorage.setItem(key, newData)
  } else if (hour > 0) {
    const now = new Date()
    const valueDate: string = JSON.stringify({
      __value: data,
      __time: now.setSeconds(now.getSeconds() + hour * 3600)
    })
    window.localStorage.setItem(key, valueDate)
  } else {
    window.sessionStorage.setItem(key, newData)
  }
}

/**
 * 获取storage
 * @param key 保存时的key
 * @param hour 如果保存时使用了时间，则需要传true
 * @param expired 指定已过期时返回的值，过期默认返回undefined
 */
export const getStorage = (key: string, hour?: boolean, expired?: string) => {
  let data
  if (hour) {
    data = window.localStorage.getItem(key)
    try {
      data = JSON.parse(data)
      if (typeof data === 'object' && data.__value && data.__time) {
        // 使用了时间的
        // 在当前时间后，表示没过期
        if (new Date().getTime() < data.__time) {
          data = data.__value
        } else {
          // 过期了
          data = expired || undefined
        }
      }
    } catch (e) {
      /* empty */
    }
  } else {
    //保存时没传时间的，存在session里
    data = window.sessionStorage.getItem(key)
  }
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}
/**
 * 移除storage
 * @param key 要移除的key
 * @param hour set时使用了hour，移除时则传true
 */
export const removeStorage = (key: string, hour?: boolean): void => {
  if (hour) {
    window.localStorage.removeItem(key)
  } else {
    window.sessionStorage.removeItem(key)
  }
}
