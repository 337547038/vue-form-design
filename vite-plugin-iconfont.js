import fs from 'fs'
const iconfont = (obj) => {
  console.log('iconfont', obj)
  const isExists = fs.existsSync(obj.enter)
  if (isExists) {
    const cssCls = fs.readFileSync(obj.enter, 'utf8')
    const iReg = new RegExp('.icon-(.*?):', 'g')
    const className = cssCls.match(iReg)
    const name = className.join(',').replace(/:/g, '')
    //fs.writeFile(obj.savePath)
  }
  return {
    name: 'iconfont',
    enforce: 'pre',
    transform() {}
  }
}
export default iconfont
