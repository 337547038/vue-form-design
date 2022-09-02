const mysql = require('mysql')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  // port: '3306',
  database: 'akform',
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
// res存在时，直接return错误
const query = (sql, param, res, callback) => {
  console.log(sql)
  if (typeof callback === 'function') {
    db.query(sql, param, (err, results) => {
      if (err) {
        if (res) {
          return res.json({
            code: 0,
            data: [],
            message: err
          })
        }
        console.log(err)
      }
      callback(results)
    })
  } else {
    // 没回调时返回promise
    return new Promise((resolve, reject) => {
      db.query(sql, param, (err, results) => {
        if (err) {
          if (res) {
            return res.json({
              code: 0,
              data: [],
              message: err
            })
          }
          reject(err)
        } else {
          resolve(results)
        }
      })
    })
  }
}
module.exports = query
