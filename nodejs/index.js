const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const query = require('./db')

// 修改不用重启
// npm install nodemon -g
// nodemon index.js

app.use(bodyParser())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
// 设置跨域访问
app.all('*', function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'Content-type')
  // 跨域允许的请求方式
  res.header(
    'Access-Control-Allow-Methods',
    'PUT,POST,GET,DELETE,OPTIONS,PATCH'
  )
  // 可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
  res.header('Access-Control-Max-Age', 1728000) // 预请求缓存20天
  next()
})
// 配置服务端口
const port = 3001
app.listen(port, () => {
  const hostname = 'localhost'
  console.log(`Server running at http://${hostname}:${port}/`)
})

// 表单设计
const formDesign = require('./design')
app.use('/api/design', formDesign)

// 表单内容
const formContent = require('./formContent')
app.use('/api/content', formContent)

// 文件图片上传
const multerUpload = require('./upload')
app.use('/api/upload', multerUpload)

// 获取数据源
app.post('/api/dataSource', (req, res) => {
  const sql = `select * from datasource`
  query(sql, [], res, (results) => {
    res.json({
      code: 200,
      data: results,
      message: '成功'
    })
  })
})
// 根据id返回当前数据源字段
app.post('/api/getField', (req, res) => {
  const id = req.body.id
  if (!id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  const sql = `select COLUMN_NAME as name,COLUMN_COMMENT as label from information_schema.COLUMNS where table_name = (SELECT tableName FROM datasource WHERE id=${id}) and table_schema='akform'`
  console.log(sql)
  query(sql, [], res, (results) => {
    console.log(results)
    return res.json({
      code: 200,
      data: results.filter((item) => item.name !== 'id'),
      message: '成功'
    })
  })
})
// https://blog.csdn.net/weixin_42934729/article/details/125233590
