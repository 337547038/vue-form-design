const fs = require('fs')
const path = require('path')

/**
 * 递归创建目录
 * @param dirPath
 */
const recursiveMkdir = dirPath => {
  const parentDir = path.dirname(dirPath) // 获取父级目录路径
  if (!fs.existsSync(parentDir)) {
    recursiveMkdir(parentDir) // 递归创建父级目录
  }

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath) // 创建当前目录
  }
}
const creatJsonMock = (url, result, params) => {
  //console.log(url, result, params)
  const publicUrl = '../public/mock'
  if (fs.existsSync(publicUrl)) {
    const baseApi = url.replace('/api', '')
    const baseName = path.basename(baseApi)
    const dirname = path.join(publicUrl, path.dirname(baseApi))
    recursiveMkdir(dirname)
    const { type = '', id = '', formId = '' } = params
    const paramsJoin = baseName + type + id + formId
    const fullPath = path.join(dirname, paramsJoin)
    fs.writeFile(`${fullPath}.json`, JSON.stringify(result), err => {
      if (err) {
      }
    })
  }
}

module.exports = creatJsonMock
