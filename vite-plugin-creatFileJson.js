// 将public/static/screen目录下的文件生成json，实现在大屏设计时可选择本地资源图片

import path from 'path'
import fs from 'fs'
//const fse = require('fs-extra')

const checkDirExist = function (dir) {
  try {
    return fs.statSync(dir).isDirectory()
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false
    }
  }
}
//
// const copy = function (from, dist) {
//   if (!checkDirExist(from)) {
//     console.error('可复制的文件或者目录不存在')
//     return false
//   }
//   if (!checkDirExist(dist)) {
//     fs.mkdirSync(dist)
//   }
//   const dir = fs.readdirSync(from)
//   dir.forEach((file) => {
//     const filePath = path.resolve(from, file)
//     fs.stat(filePath, (_, stat) => {
//       if (stat.isFile()) {
//         // 创建读取流
//         const readStream = fs.createReadStream(filePath)
//         // 创建写入流
//         const writeStream = fs.createWriteStream(path.resolve(dist, file))
//         // 复制写入文件
//         readStream.pipe(writeStream)
//       } else if (stat.isDirectory()) {
//         copy(filePath, path.resolve(dist, file))
//       }
//     })
//   })
// }
const temp = {}
const screenSource = directory => {
  // 将public/screen下的素材图片生成json
  const from = path.join('./public/static/screen', directory || '')
  if (!checkDirExist(from)) {
    console.error(from + '文件或者目录不存在')
    return
  }
  const dir = fs.readdirSync(from)
  dir.forEach(file => {
    const filePath = path.resolve(from, file)
    const stats = fs.statSync(filePath)
    if (stats.isFile()) {
      if (directory) {
        temp[directory].push(file)
      }
    } else if (stats.isDirectory() && !directory) {
      temp[file] = []
      screenSource(file)
    }
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
let viteConfig = null

export default function (options) {
  return {
    name: 'vite-plugin-copy',
    enforce: 'post',
    //apply: 'build',
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig.root
    },
    buildStart() {
      //console.log(viteConfig)
      //const fromdir = path.resolve(viteConfig, options.from)
      //const distDir = path.resolve(viteConfig, options.to)
      //copy(options.from, options.to)
      screenSource()

      fs.writeFile(
        './src/views/design/dataScreen/components/fileJson.json',
        JSON.stringify(temp, null, 2),
        err => {
          if (err) {
            return
          }
        }
      )
    }
  }
}
