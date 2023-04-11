// 处理返回结果，当数据比较复杂时，使用在线编辑器如afterResponse方法不太适合，key即为afterResponse的字符串值
// 必须要return
const formatResult = (res: any, key: string) => {
  // console.log('formatResult', res, key)
  switch (key) {
    case 'transformDataToChild':
      return transformDataToChild(res.list || res)
  }
  return res
}
// 根据id及parentId扁平数据转为children嵌套格式
const transformDataToChild = (res: any) => {
  const temp: any = []
  transformDataList(res, 0, temp)
  return temp
}
const transformDataList = (data: any, parentId: number, temp: any) => {
  data.forEach((item: any) => {
    item.value = item.id // tree组件只能修改label取值，不能指定value，这里添加一个
    item.label = item.name
    if (item.parentId === parentId) {
      const childrenList = data.filter((ch: any) => {
        return ch.parentId === item.id
      })
      if (childrenList?.length) {
        item.children = []
        transformDataList(data, item.id, item.children)
      }
      temp.push(item)
    }
  })
}
// 部门侧栏树列表数据处理结束
export default formatResult
