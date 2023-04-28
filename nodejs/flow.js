const express = require('express')
const sqlQuery = require('./db')
const router = express.Router()
router.post('/save', async (req, res) => {
  const query = req.body
  const sql = 'insert into `flow` set ?'
  //const data = Object.assign(query, params)
  sqlQuery(sql, query, res, (result) => {
    res.json({
      code: 1,
      data: result,
      message: '新增成功'
    })
  })
})
router.post('/list', async (req, res) => {
  const { pageInfo = {} } = req.body
  const { pageIndex = 1, pageSize = 20 } = pageInfo
  const start = (pageIndex - 1) * pageSize
  let where = 'WHERE id is not null'
  const whereParams = []
  if (whereParams.length) {
    where = ` WHERE ${whereParams.join('AND')} `
  }
  where += ` order by id desc`
  const sql = `SELECT * FROM \`flow\` ${where} Limit ${start},${pageSize}`
  const countSql = `select count(id) as num from \`flow\`` + where
  const count = await sqlQuery(countSql)
  sqlQuery(sql, [], res, (result) => {
    return res.json({
      code: 1,
      data: {
        list: result,
        pageInfo: {
          total: count[0].num
        }
      },
      message: '成功'
    })
  })
})
module.exports = router
