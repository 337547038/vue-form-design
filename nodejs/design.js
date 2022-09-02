const express = require('express')
const router = express.Router()
const sqlQuery = require('./db')
// 新增/修改
router.post('/save', (req, res) => {
  const query = req.body
  let param = {}
  let sql = ''
  let message = '新增成功'
  if (query.id) {
    // 修改
    sql = 'update `design-form` set ? where id=?'
    Object.assign(query, { updateDate: new Date() })
    param = [query, query.id]
    message = '修改成功'
  } else {
    // 新增
    sql = 'insert into `design-form` set ?'
    Object.assign(query, { updateDate: new Date(), creatDate: new Date() })
    param = query
  }
  sqlQuery(sql, param, res, (result) => {
    res.json({
      code: 200,
      data: result,
      message: message
    })
  })
})
router.post('/list', async (req, res) => {
  const { pageInfo = {}, type, status, name } = req.body
  const { pageIndex = 1, pageSize = 20 } = pageInfo
  const start = (pageIndex - 1) * pageSize
  const whereTemp = []
  if (type) {
    whereTemp.push(`type=${type}`)
  }
  if (status !== undefined && status !== '') {
    whereTemp.push(`status=${status}`)
  }
  if (name) {
    whereTemp.push(`name like '%${name}%'`)
  }
  let where = 'WHERE id is not null'
  if (whereTemp.length) {
    where = ` WHERE ${whereTemp.join('AND')}`
  }
  const sql = `SELECT formId,id,name,status,type,creatDate,updateDate FROM \`design-form\` ${where} Limit ${start},${pageSize}`
  const countSql = 'select count(id) as num from `design-form`' + where
  const count = await sqlQuery(countSql)
  sqlQuery(sql, [], res, (result) => {
    res.json({
      code: 200,
      data: {
        dict: {
          status: { 0: '禁用', 1: '启用' },
          type: { 1: '表单', 2: '表格' }
        },
        list: result,
        pageInfo: {
          total: count[0].num
        }
      },
      message: '成功'
    })
  })
})
router.post('/formById', (req, res) => {
  const id = req.body.id
  if (!id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  const sql = `SELECT * FROM \`design-form\` WHERE id=${id}`
  sqlQuery(sql, [], res, (result) => {
    res.json({
      code: 200,
      data: result[0] || [],
      message: '成功'
    })
  })
})
router.post('/delete', (req, res) => {
  const id = req.body.id
  if (!id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  const sql = `DELETE FROM \`design-form\` WHERE id=${id}`
  sqlQuery(sql, [], res, () => {
    res.json({
      code: 200,
      message: '删除成功'
    })
  })
})
router.post('/changeStatus', (req, res) => {
  const id = req.body.id
  const status = req.body.status
  if (!id || status === '' || status === undefined) {
    return res.json({
      code: 0,
      message: 'id和状态不能为空'
    })
  }
  const sql = 'update `design-form` set ? where id=?'
  sqlQuery(sql, [{ status: status }, id], res, () => {
    res.json({
      code: 200,
      message: '修改成功'
    })
  })
})
module.exports = router
