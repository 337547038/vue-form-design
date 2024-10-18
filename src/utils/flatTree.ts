/*功能：树结构和扁平数据之互转，根据id取得完整路径*/
interface Data {
  id?: string | number
  parentId?: string | number
  name?: string
  children?: Data[]

  [key: string]: any
}

interface PropsKey {
  id: string | number //默认id
  name?: string //名称字段名默认name
  parentId?: string | number //扁平数据父id,默认parentId
}

/**
 * 根据id从树结构数据中获取完整路径
 * @param data //数据
 * @param targetId // 当前id
 * @param props //自定义路径参数名称和id，默认为id
 * @param address // 使用时不需要传
 */
export const getTreeNodeById = (
  data: Data,
  targetId: number | string,
  props?: PropsKey,
  address: any = []
): string[] => {
  const { id = 'id', name = '' } = props || {}
  for (let i: number = 0; i < data.length; i++) {
    const obj = name ? data[i][name] : data[i] // name为值时返回name值，否则返回整对象
    if (data[i][id] === targetId) {
      address.push(obj)
      return address
      //return data[i].name
    }
    if (data[i].children) {
      const result: string[] = getTreeNodeById(
        data[i].children,
        targetId,
        props,
        [...address, obj]
      )
      if (result.length) {
        //return data[i].name + ' ' + result
        return result
      }
    }
  }
  return []
}

/*
getTreeNodeById示例
  const city = [
    { id: 1, name: '北京' },
    {
      id: 2,
      name: '广东',
      children: [
        {
          id: 3,
          name: '广州',
          children: [
            { id: 4, name: '天河区' },
            { id: 5, name: '白云区' }
          ]
        }
      ]
    }
  ]
const cityList = getTreeNodeById(city, 5)
console.log(cityList) =>['广东', '广州', '白云区']
*/

/**
 * 根据id从扁平结构数据中获取完整路径
 * @param data //数据
 * @param targetId // 当前id
 * @param props //自定义路径参数名称和id，默认为id和name
 * @return
 */
export const getFlatNodeById = (
  data: Data,
  targetId: number | string,
  props?: PropsKey
): string[] => {
  const path: string[] = []
  const { id = 'id', name = 'name', parentId = 'parentId' } = props || {}
  const getItemById = (itemId: number | string): Data | undefined => {
    return data.find(
      (item: { [x: string]: string | number }) => item[id] === itemId
    )
  }

  const buildPath = (itemId: number | string): void => {
    const item: Data | undefined = getItemById(itemId)
    if (item) {
      path.unshift(item[name] as any)
      if (item[parentId] !== null) {
        buildPath(item[parentId] as number)
      }
    }
  }

  buildPath(targetId)
  return path
}
/*
getFlatNodeById示例
  const node = [
    { id: 1, name: '广东' },
    { id: 2, name: '广州', parentId: 1 },
    { id: 3, name: '天河区', parentId: 2 },
    { id: 4, name: '白云区', parentId: 2 },
    { id: 5, name: '北京' },
    { id: 6, name: '朝阳区', parentId: 5 }
  ]
const fullCity=getFlatNodeById(node,4) //=>['广东', '广州', '白云区']
*/

/**
 *将扁平数据转为树结构格式数据
 * @param data
 * @param props
 */
export const flatToTree = (data: Data, props?: PropsKey): Data[] => {
  const nodeMap: { [key: number]: Data } = {}
  const tree: Data[] = []
  const { id = 'id', parentId = 'parentId' } = props || {}
  for (const n: any of data) {
    nodeMap[n[id]] = { ...n }
  }
  // @ts-ignore
  for (const n: any of data) {
    const node: Data = nodeMap[n[id]]
    if (n[parentId]) {
      const parent: Data = nodeMap[n[parentId]]
      if (parent) {
        if (!parent.children) {
          parent.children = []
        }
        parent.children.push(node)
      }
    } else {
      tree.push(node)
    }
  }
  return tree
}
/**
 * 将树结构数据转为扁平化格式
 * @param data
 * @param props
 */
export const treeToFlat = (data: Data, props?: PropsKey) => {
  const { parentId = 'parentId', id = 'id' } = props || {}
  const result: any = []

  function flatten(obj: Data, parentKey?: string | number): void {
    const newObj: Data = JSON.parse(JSON.stringify(obj))
    // 添加父节点id并删除children
    newObj[parentId] = parentKey
    delete newObj.children
    result.push(newObj)
    if (obj.children) {
      obj.children.forEach((child: Data): void => {
        flatten(child, obj[id])
      })
    }
  }

  data.forEach((obj: Data): void => {
    flatten(obj)
  })
  return result
}
/*
* 互转示例
* const city = [
    { id: 1, name: '北京' },
    {
      id: 2,
      name: '广东',
      children: [
        {
          id: 3,
          name: '广州',
          children: [
            { id: 4, name: '天河区' },
            { id: 5, name: '白云区' }
          ]
        }
      ]
    }
  ]
  const node = [
    { id: 1, name: '广东' },
    { id: 2, name: '广州', parentId: 1 },
    { id: 3, name: '天河区', parentId: 2 },
    { id: 4, name: '白云区', parentId: 2 },
    { id: 5, name: '北京' },
    { id: 6, name: '朝阳区', parentId: 5 }
  ]
*/
