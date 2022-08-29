const express = require('express')
const router = express.Router()
const sqlQuery = require('./db')
// 新增/修改
router.get('/save', (req, res) => {
  const query = req.query
  let sql = `insert into designform (formData,formName,dataTableName) value (?,?,?)`
  sqlQuery(sql, res, (result) => {
    res.json({
      code: 1,
      list: result,
      type: 'single'
    })
  })
})
module.exports = router
