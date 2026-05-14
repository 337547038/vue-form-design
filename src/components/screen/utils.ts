import type {Component} from "@/types/screen";
import {useScreenStore} from "@/store/screen"
import imagesFile from './imagesFile.json'

const store = useScreenStore()
/**
 * 判断是否为数字，有些是字符串形数字
 * @param val
 */
const isNumber = (val: any): boolean => {
  try {
    return /^-?\d+(\.\d+)?$/.test(val.toString())
  } catch (e) {
    return false
  }
  // return !isNaN(parseFloat(val)) && isFinite(val)
}
/**
 * 将数字去掉小数并添加单位
 * @param value
 */
export const addUnit = (value: string | number | undefined) => {
  if (value === 0 || value === '0') {
    return 0
  }
  if (isNumber(value)) {
    return Math.round(value as number) + 'px'
  }
  return value
}
/**
 * 移除单位方便作运算
 * @param value
 */
export const toNumber = (value: any) => {
  // 从字符串开头提取连续数字（支持正负、小数）
  const match = String(value).trim().match(/^-?\d+(\.\d+)?/);
  // 提取不到数字 → 返回0
  if (!match) return 0;
  // 转数字并四舍五入
  const num = parseFloat(match[0]);
  return Math.round(num);
}
/**
 * 新增临时选区并返回选区信息
 * @param obj
 */
export const showTempRect = (obj?: Record<string, any>) => {
  const rectObj = store.designData.find((item: Component) => item.type === 'rect')
  let newObj = {
    type: 'rect',
    label: '临时选区',
    width: 0,
    height: 0,
    class: '',
    display: true, // 先设为隐藏，防止出现瞬间显示旧的样式
    ...obj
  }
  if (!rectObj) {
    // 不存在,新增
    store.setDesignData(newObj,true)
    return newObj
  } else {
    //　存在，更新位置信息
    Object.assign(rectObj, newObj)
    return rectObj
  }
}
/**
 * 计算多选包围盒位置大小
 */
export const groupWrapStyle = () => {
  let minX = Infinity, minY = Infinity
  let maxX = -Infinity, maxY = -Infinity
  store.selectedComp.forEach((item: Component) => {
    const {x, y, width, height} = item
    minX = Math.min(minX, toNumber(x))
    minY = Math.min(minY, toNumber(y))
    maxX = Math.max(maxX, toNumber(x) + toNumber(width))
    maxY = Math.max(maxY, toNumber(y) + toNumber(height))
  })
  return {
    x: `${minX}px`,
    y: `${minY}px`,
    width: `${maxX - minX}px`,
    height: `${maxY - minY}px`,
    display: false,
    class: 'group-wrap'
  }
}

export const getPositionStyle = (data: Component) => {
  if (data.notUseInlineStyle) {
    return {} // 不使用内联位置信息
  }
  const {x, y, height, width, zIndex, display, right, bottom} = data
  // 设置了right时left为auto，设置了bottom时top为auto
  const params = {
    left: right ? 'auto' : addUnit(x),
    right: addUnit(right),
    bottom: addUnit(bottom),
    top: bottom ? 'auto' : addUnit(y),
    width: addUnit(width),
    height: addUnit(height),
    zIndex: zIndex || '',
    display: display ? 'none' : '',
    position: 'absolute'
  }
  // 过滤空值
  return Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v !== '')
  )
}

/**
 * 插入页面的scoped样式id名，主要用于根据id删除
 */
export const ScopedStyleId = 'scopedStyleId'

/**
 * 开发环境下读读指定目录下的图片文件，并生成json列表，供生产环境使用
 */
export const loadStaticImages = async () => {
  try {
    /**
     * 第二个参数 true = 递归读取子目录
     * 匹配所有图片格式
     */
    if (import.meta.env.DEV) {
      const imageModules = import.meta.glob(`/public/static/screen/**/*.{png,jpg,jpeg,gif,svg,webp}`, {eager: true})

      // 处理成我们需要的格式
      const list = []
      for (const path in imageModules) {
        const publicPath = path.replace('/public', '')
        list.push(publicPath)
      }
      return list
    } else {
      return imagesFile
    }
  } catch (err) {
    console.error('读取图片失败：', err)
  }
}

export const iconList: { [key: string]: string } = {
  line: 'line',
  bar: 'bar',
  pie: 'pie',
  echarts: '',
  table: 'table',
  text: 'text2',
  sText: 'sText',
  image: 'image',
  background: 'image',
  border: 'border',
  clock: 'time',
  div: 'div',
  group: 'div',
  component: 'component'
}

/**
 * 判断字符串是否是纯数字 或 数字开头+px结尾
 * @param {string} str 要判断的字符串
 * @returns {boolean}
 */
export function isValidNumberOrPx(str: string | number | null | undefined): boolean {
  // 空值直接返回 false（可根据需求改成 true）
  if (str === null || str === undefined || str === '') {
    return false;
  }
  // 统一转成字符串判断
  const reg = /^\d+(px)?$/i;
  return reg.test(String(str));
}

/**
 * 判断当前组件是否可以拖动组合等操作
 * @param obj
 */
export const cannotDragScale = (obj: Component): boolean => {
  // 任一条件不满足 → 不可拖拽缩放（return false）
  if (
      obj.display ||
      obj.locked ||
      obj.notUseInlineStyle ||
      !!obj.right ||
      !!obj.bottom ||
      !isValidNumberOrPx(obj.x) ||
      !isValidNumberOrPx(obj.y)
  ) {
    return false
  }
  // 所有条件都满足 → 可以拖拽缩放
  return true
}