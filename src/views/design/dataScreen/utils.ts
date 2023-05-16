// 判断是否为数字，有些是字符串形数字
const isNumber = (val: any): boolean => {
  try {
    return /^\d+(\.\d+)?$/.test(val.toString())
  } catch (e) {
    return false
  }
}
// 判断值是为数字或者是带有px单位的
const isNumberOrPx = (val: any): boolean => {
  if (isNumber(val)) {
    return true
  } else {
    // 不是数字时，带有px单位时
    return val.indexOf('px') !== -1
  }
}
/***
 * 判断一个矩形组件是否允许拖动，缩放合并等
 * @param rect 矩形位置宽高信息
 */
export const canControlRect = (rect: any): boolean => {
  // 使用了bottom或right定位时，width和height带有除px其他单位时
  return !(
    rect.bottom ||
    rect.bottom === 0 ||
    rect.right ||
    rect.right === 0 ||
    !isNumberOrPx(rect.width) ||
    !isNumberOrPx(rect.height) ||
    rect.display === 'none'
  )
}
