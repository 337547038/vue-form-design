import { ElMessage } from 'element-plus'

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
 * 移除单位方便作运算
 * @param value
 */
export const removeUnit = value => {
  if (Number.isFinite(value)) {
    return Math.round(value)
  }
  if (!value) {
    return value
  }
  const match = value.match(/^(-?\d+(\.\d+)?)(px|em|rem|%|vh|vw)?$/)
  return match ? Math.round(match[1]) : 0
}
/**
 * 将数字去掉小数并添加单位
 * @param value
 */
export const addUnit = value => {
  if (value === 0 || value === '0') {
    return 0
  }
  if (isNumber(value)) {
    return Math.round(value) + 'px'
  }
  return value
}
/**
 * 判断值是为数字或者是带有px单位的
 * @param val
 */
const isNumberOrPx = (val: any): boolean => {
  if (isNumber(val)) {
    return true
  } else if (val && typeof val === 'string') {
    // 不是数字时，带有px单位时
    return val.indexOf('px') !== -1
  }
  return false
}
/***
 * 判断一个矩形组件是否允许拖动，缩放合并等
 * @param rect 矩形位置宽高信息
 * @param tips 提示信息
 * @return true 不能拖动或缩放
 */
export const cannotDragResize = (rect: any, tips?: boolean): boolean => {
  // 使用了bottom或right定位时，width和height带有除px其他单位时
  const bottom: boolean = rect.bottom || rect.bottom === 0
  const right: boolean = rect.right || rect.right === 0
  const left: boolean = !isNumberOrPx(rect.left)
  const top: boolean = !isNumberOrPx(rect.top)
  const width: boolean = !isNumberOrPx(rect.width)
  const height: boolean = !isNumberOrPx(rect.height)
  //console.log(bottom, right, top, width, height, left, top)
  const result: boolean =
    bottom || right || top || width || height || left || top
  if (tips && result) {
    ElMessage.error('仅支持使用了left和top的px单位允许操作!')
  }
  return result
}

/**
 * 判断一个组件是否可以作为被矩形选中
 * @param obj
 * @return true 可以选中
 */
export const canRectSelect = (obj: any) => {
  const { type, config = {}, position = {} } = obj
  //符合任一条件都不能选中
  return !(
    type === 'div' ||
    type === 'group' ||
    type === 'tempRect' ||
    config.lock ||
    position.display
  )
}
