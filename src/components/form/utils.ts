/**
 * 提供一个方法，用于根据name从data.list里查找数据
 * @param data
 * @param name
 */
export const getNameForEach = (data: any, name: string) => {
  let temp = {}
  for (const key in data) {
    const dataKey = data[key]
    if (dataKey.name === name) {
      return dataKey
    }
    if (['grid', 'tabs'].includes(dataKey.type)) {
      dataKey.columns.forEach((co: any) => {
        temp = getNameForEach(co.children, name)
      })
    }
    if (['card', 'div'].includes(dataKey.type) && dataKey.children?.length) {
      temp = getNameForEach(dataKey.children, name)
    }
  }
  return temp
}