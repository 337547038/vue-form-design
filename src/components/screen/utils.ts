import type {ScreenData} from "@/types/screen";
import {useScreenStore} from "@/store/screen"

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
  console.log('showTempRect', JSON.stringify(obj))
  const rectObj = store.designData.find((item: ScreenData) => item.type === 'rect')
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
    console.log('新增选区')
    store.setAddDesignData(newObj)
    return newObj
  } else {
    //　存在，更新位置信息
    console.log('已有选区')
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
  store.selectedComp.forEach((item: ScreenData) => {
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

export const getPositionStyle = (data: ScreenData) => {
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