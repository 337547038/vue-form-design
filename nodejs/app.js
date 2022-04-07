const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')
const multer = require('multer')
// 这里配置连接池以链接数据库
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  // port: '3306',
  database: 'formdesign',
  useConnectionPooling: true
})

db.connect((err) => {
  if (err) {
    console.log('数据库连接失败')
    // throw err
  } else {
    console.log('数据库连接成功')
  }
})
app.use(bodyParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
// 设置跨域访问
app.all('*', function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'Content-type')
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS,PATCH')
  // 可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
  res.header('Access-Control-Max-Age', 1728000)// 预请求缓存20天
  next()
})
// 配置服务端口
app.listen(3001, function () {
  const hostname = 'localhost'
  const port = 3001
  console.log(`Server running at http://${hostname}:${port}/`)
})
const getResult = (err, results, res, message) => {
  if (err) {
    return res.json({
      code: 100,
      data: [],
      message: err
    })
  }
  res.json({
    code: 200,
    data: results,
    message: message
  })
}
/** 获取指定表所有字段及注释
 * formId:表单名称**/
app.get('/getFiled', function (req, res) {
  // const sql = 'select * from form1'
  const formName = req.query.formId
  const sql = `select COLUMN_NAME,COLUMN_COMMENT from information_schema.COLUMNS where table_name = '${formName}' and table_schema='formdesign'`
  console.log(sql)
  db.query(sql, (err, results) => {
    // console.log(results)
    const temp = []
    results.forEach(item => {
      temp.push({
        label: item.COLUMN_COMMENT,
        value: item.COLUMN_NAME
      })
    })
    getResult(err, temp, res)
  })
})
// 返回所有行
app.get('/list', function (req, res) {
  const tableName = req.query.name
  const sql = `select * from ${tableName}`
  db.query(sql, (err, results) => {
    getResult(err, results, res)
  })
})
// 提供单选/多选/下拉选择等远程选项
app.get('/getOptions', function (req, res) {
  const type = req.query.type
  const sql = `select * from options where type=${type}`
  console.log(sql)
  db.query(sql, (err, results) => {
    getResult(err, results, res)
  })
})
// 新增/编辑自定义设计表单
app.post('/saveDesignForm', function (req, res) {
  const formData = req.body.formData // 设计完成的表单json数据字符串
  const formName = req.body.formName // 表单名称
  const dataTableName = req.body.dataTableName || '' // 数据源表名
  const formId = req.body.id // id
  let params = [formData, formName, dataTableName]
  let sql = `insert into designform (formData,formName,dataTableName) value (?,?,?)`
  let message = '新增成功'
  if (formId) {
    let set = ''
    if (formData) {
      // 修改表单设计
      set = 'formData=?,formName=?'
    } else if (req.body.searchData) {
      // 修改列表查询设置
      set = 'searchData=?'
      params = [req.body.searchData]
    } else if (req.body.tableData) {
      // 修改表格设置
      set = 'tableData=?'
      params = [req.body.tableData]
    }
    sql = `update designform set ${set} where id=${formId}`
    message = '修改成功'
  }
  console.log(sql)
  console.log(params)
  db.query(sql, params, (err, results) => {
    getResult(err, results, res, message)
  })
})
// 添加表单记录
app.post('/saveFormList', function (req, res) {
  const table = req.query.name
  // const body = {title: 'a', content: 'b'}
  const body = req.body
  const sql = `insert into ${table} set ?`
  console.log(sql)
  db.query(sql, body, (err, results) => {
    getResult(err, results, res)
  })
})
// 修改表单记录
app.post('/editFormList', function (req, res) {
  const table = req.query.name
  const id = req.query.id
  const body = req.body
  const set = []
  const params = []
  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      set.push(`${key}=?`)
      params.push(body[key].toString())
    }
  }
  const sql = `update ${table} set ${set.join(',')} where id=${id}`
  console.log(sql)
  console.log(params)
  db.query(sql, params, (err, results) => {
    getResult(err, results, res)
  })
})
// 根据id返回指定表的记录
app.get('/getRowById', function (req, res) {
  const id = req.query.id
  const name = req.query.name
  const sql = `select * from ${name} where id=${id}`
  db.query(sql, (err, results) => {
    getResult(err, results, res)
  })
})
// 根据id返回创建的自定义表单数据
app.get('/getDesignFormRow', function (req, res) {
  const id = req.query.id
  const sql = `select * from designform where id=${id}`
  db.query(sql, (err, results) => {
    getResult(err, results, res)
  })
})
//删除
app.get('/delById', function (req, res) {
  const id = req.query.id
  const name = req.query.name
  const sql = `DELETE FROM ${name} where id=${id}`
  db.query(sql, (err, results) => {
    getResult(err, results, res)
  })
})
// 文件图片上传
const multerUpload = require('./upload')
app.use('/upload', multerUpload)
