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
const query = (sql, res, callback) => {
  db.query(sql, (err, results) => {
    if (err) {
      return res.json({
        code: 0,
        data: [],
        message: err
      })
    }
    callback(results, err)
  })
}
module.exports = query
