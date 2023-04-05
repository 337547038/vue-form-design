const express = require('express')
const sqlQuery = require('./db')
const router = express.Router()

router.post('/save', async (req, res) => {
  const query = req.body
  let sql = 'insert into `dict` set ?'
  const param = Object.assign(query, { updateTime: new Date() })
  sqlQuery(sql, param, res, (result) => {
    res.json({
      code: 1,
      data: result,
      message: '新增成功'
    })
  })
})

// 返回一级
router.post('/list', async (req, res) => {
  const query = req.body
  const { pageInfo = {} } = req.body
  const { pageIndex = 1, pageSize = 20 } = pageInfo
  const start = (pageIndex - 1) * pageSize
  const whereTemp = []
  if (query.status) {
    whereTemp.push(`status=${query.status}`)
  }
  // if (status) {
  //   whereTemp.push(`status=${status}`)
  // }
  // if (name) {
  //   whereTemp.push(`name like '%${name}%'`)
  // }
  let where = 'WHERE id is not null'
  if (whereTemp.length) {
    where = ` WHERE ${whereTemp.join('AND')} `
  }
  where += ' order by id desc'
  const sql = `SELECT * FROM \`dict\` ${where} Limit ${start},${pageSize}`
  const countSql = 'select count(id) as num from `dict`' + where
  const count = await sqlQuery(countSql)
  sqlQuery(sql, [], res, (result) => {
    return res.json({
      code: 1,
      data: {
        dict: { status: { 1: '正常', 0: '停用' } },
        list: result,
        pageInfo: {
          total: count[0].num
        }
      },
      message: '成功'
    })
  })
})

router.post('/delete', async (req, res) => {
  const id = req.body.id
  if (!id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  let where = `id=${id}`
  if (id.toString().includes(',')) {
    // 批量删除
    where = `id in(${id})`
  }
  const sql = `DELETE FROM \`dict\` WHERE isSystem=0 and ${where}`
  sqlQuery(sql, [], res, () => {
    return res.json({
      code: 1,
      message: '删除成功'
    })
  })
})
//
// router.post('/id', async (req, res) => {
//   const id = req.body.id
//   if (!id) {
//     return res.json({
//       code: 0,
//       message: 'Id不能为空'
//     })
//   }
//   const sql = `SELECT * FROM \`dict\` WHERE id=${id}`
//   sqlQuery(sql, [], res, (result) => {
//     return res.json({
//       code: 1,
//       data: {
//         result: result[0],
//         dict: {}
//       },
//       message: '成功'
//     })
//   })
// })

router.post('/edit', async (req, res) => {
  const query = req.body
  if (!query.id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  if (query.children) {
    // 转字符串保存
    query.children = JSON.stringify(query.children)
  }
  let sql = 'update `dict` set ? where id=?'
  const param = [query, query.id]
  sqlQuery(sql, param, res, (result) => {
    res.json({
      code: 1,
      data: result,
      message: '修改成功'
    })
  })
})

module.exports = router
