const express = require('express')
const router = express.Router()
const sqlQuery = require('./db')
// 新增
router.post('/save', (req, res) => {
  const query = req.body
  let param = {}
  let sql = ''
  sql = 'insert into `design` set ?'
  Object.assign(query, { updateDate: new Date(), creatDate: new Date() })
  param = query
  sqlQuery(sql, param, res, (result) => {
    res.json({
      code: 1,
      data: result,
      message: '新增成功'
    })
  })
})
// 列表
router.post('/list', async (req, res) => {
  const { pageInfo = {}, category, status, name, type } = req.body
  const { pageIndex = 1, pageSize = 20 } = pageInfo
  const start = (pageIndex - 1) * pageSize
  const whereTemp = []
  if (!type) {
    res.json({
      code: 0,
      data: [],
      message: '类型不能为空'
    })
    return
  }
  whereTemp.push(`type=${type}`)
  let datasource = 'design'
  if (type === 1) {
    // 表单时
    datasource = 'datasource'
  }
  if (category) {
    whereTemp.push(`category=${category}`)
  }
  if (status !== undefined && status !== '') {
    whereTemp.push(`status=${status}`)
  }
  if (name) {
    whereTemp.push(`name like '%${name}%'`)
  }
  let where = ' WHERE id is not null'
  if (whereTemp.length) {
    where = ` WHERE ${whereTemp.join(' AND ')}`
  }
  const sql = `SELECT (SELECT name FROM ${datasource} where id=d.source) as sourceName,source,id,name,status,creatDate,updateDate,category,showMenu,roleId,icon FROM \`design\` as d ${where} Limit ${start},${pageSize}`
  const countSql = 'select count(id) as num from `design`' + where
  const count = await sqlQuery(countSql)
  sqlQuery(sql, [], res, (result) => {
    res.json({
      code: 1,
      data: {
        dict: {
          status: { 0: '禁用', 1: '启用' }
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
// 修改部分内容
router.post('/change', (req, res) => {
  const id = req.body.id
  if (!id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  const changeField = [
    'name',
    'category',
    'roleId',
    'icon',
    'showMenu',
    'status'
  ]
  let params = {}
  changeField.forEach((item) => {
    params[item] = req.body[item]
  })
  const sql = 'update `design` set ? where id=?'
  sqlQuery(sql, [params, id], res, () => {
    res.json({
      code: 1,
      data: [],
      message: '修改成功'
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
  let where = `id=${id}`
  if (id.toString().includes(',')) {
    // 批量删除
    where = `id in(${id})`
  }
  const sql = `DELETE FROM \`design\` WHERE ${where}`
  sqlQuery(sql, [], res, () => {
    res.json({
      code: 1,
      message: '删除成功'
    })
  })
})

router.post('/id', (req, res) => {
  const id = req.body.id
  if (!id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  const sql = `SELECT data,listData,dict,name,source,category,status,remark,icon,roleId FROM \`design\` WHERE id=${id}`
  sqlQuery(sql, [], res, (result) => {
    res.json({
      code: 1,
      data: result[0] || [],
      message: '成功'
    })
  })
})
router.post('/edit', (req, res) => {
  const query = req.body
  let param = {}
  let sql = ''
  if (!query.id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  // 修改
  sql = 'update `design` set ? where id=?'
  Object.assign(query, { updateDate: new Date() })
  param = [query, query.id]

  sqlQuery(sql, param, res, (result) => {
    res.json({
      code: 1,
      data: result,
      message: '修改成功'
    })
  })
})
// 根据表单id获取对应的列表
// router.post('/listById', (req, res) => {
//   const id = req.body.id
//   if (!id) {
//     return res.json({
//       code: 0,
//       message: 'id不能为空'
//     })
//   }
//   const sql = `SELECT source,data,listData,dict,name,source,category FROM \`design\` WHERE type=2 and status=1 and source=${id}`
//   sqlQuery(sql, [], res, (result) => {
//     res.json({
//       code: 1,
//       data: result[0] || {},
//       message: '成功'
//     })
//   })
// })
module.exports = router
