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

export const throttle = (func: any, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null
  return function (...args: any[]) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
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
 * 动态加载 JS 或 CSS（根据 ID 判断是否重复）
 * @param id 唯一ID（会设置在标签上，用于去重 + 移除）,为空则不检查
 * @param type 资源类型 script / style，默认style
 * @param content 可以是url,也可以是css内容
 */
export function loadResource(
    content: string,
    id?: string,
    type?: 'script' | 'style',
): Promise<void> {
  // 判断是否重复
  if (id && document.getElementById(id)) {
    return Promise.resolve();
  }
  if (!content) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    let element: HTMLElement;
    if (type === 'script') {
      // 创建 script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = content;
      element = script;
    } else {
      if (content.endsWith('.css')) {
        //以css为结尾，认为是外链
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = content;
        element = link;
      } else {
        const style = document.createElement('style')
        //style.appendChild(document.createTextNode(content))
        style.textContent = content;
        element = style;
      }
    }
    if (id) {
      element.id = id;
    }
    // 加载回调
    element.onload = () => resolve();
    element.onerror = () => reject(new Error(`资源加载失败`));

    document.head.appendChild(element);
  });
}

/**
 * 🔥 根据 ID 从页面直接移除资源
 * @param id 加载时的唯一ID
 */
export function removeResource(id: string): void {
  const element = document.getElementById(id);
  if (element && element.parentNode === document.head) {
    document.head.removeChild(element);
  }
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
export function getRandom(min: number, max: number) {
  // +1包括最大值
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 设置 localStorage 添加对时间的控制，hour单位为小时
 * @param key 保存在storage的key
 * @param data 需存储的数据
 * @param hour null时存sessionStorage(key,value)，即关闭浏览器过期;
 * hour=0时，使用localStorage，即永不过期;
 * hour>0时localStorage添加时间控制
 */

export function setStorage(key: string, data: any, hour?: number | null): void {
  let newData = data
  if (typeof data === 'object') {
    newData = JSON.stringify(data)
  }
  /* if (!data) {
    return
  } */
  if (hour === 0) {
    window.localStorage.setItem(key, newData)
  } else if (hour && hour > 0) {
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
 * @param hour 如果保存时使用了时间，则需要传true。false在sessionStorage里取
 * @return 返回保存的值，过期后返回false,其他异常或不存在返回undefined
 */
export const getStorage = (key: string, hour?: boolean) => {
  let data: any
  if (hour) {
    data = window.localStorage.getItem(key)
    try {
      data = JSON.parse(data)
      if (typeof data === 'object' && data.__time) {
        if (!data.__value) {
          data = undefined
        }
        // 使用了时间的
        // 在当前时间后，表示没过期
        if (new Date().getTime() < data.__time) {
          data = data.__value
        } else {
          // 过期了
          data = false
        }
      }
    } catch (e) {
      data = undefined
    }
  } else {
    // 保存时没传时间的，存在session里
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

/**
 * 判断是否为数组
 * @param val
 */
export const isArray = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Array]';
}