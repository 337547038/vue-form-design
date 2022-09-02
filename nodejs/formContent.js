const express = require('express')
const sqlQuery = require('./db')
const router = express.Router()
// 返回字典
const getDict = async () => {
  try {
    const sql = `select * from dict`
    let temp = {}
    const results = await sqlQuery(sql, [])
    results.forEach((item) => {
      if (!temp[item.type]) {
        temp[item.type] = {}
      }
      temp[item.type][item.value] = item.label
    })
    return temp
  } catch (e) {
    return e
  }
}
const getTableNameByFormId = async (formId) => {
  try {
    const sql = `SELECT tableName FROM datasource WHERE id=${formId}`
    const datasource = await sqlQuery(sql, [])
    if (datasource && datasource[0] && datasource[0].tableName) {
      return datasource[0].tableName
    } else {
      return res.json({
        code: 0,
        message: datasource
      })
    }
  } catch (e) {
    return e
  }
}
router.post('/save', async (req, res) => {
  const query = req.body
  const formId = req.body.formId
  if (!formId) {
    return res.json({
      code: 0,
      message: 'formId不能为空'
    })
  }
  const tableName = await getTableNameByFormId(formId)
  let param = {}
  let sql = ''
  let message = '新增成功'
  if (query.id) {
    // 修改
    sql = 'update `' + tableName + '` set ? where id=?'
    Object.assign(query, { updateDate: new Date() })
    delete query.formId // 删除不需要保存的
    param = [query, query.id]
    message = '修改成功'
  } else {
    // 新增
    sql = 'insert into `' + tableName + '` set ?'
    Object.assign(query, { updateDate: new Date(), creatDate: new Date() })
    param = query
    delete param.formId // 删除不需要保存的
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
  const { pageInfo = {}, formId } = req.body
  if (!formId) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  // 根据formId查询到数据内容表名
  const tableName = await getTableNameByFormId(formId)
  // 返回一些dict
  const dict = await getDict()
  const { pageIndex = 1, pageSize = 20 } = pageInfo
  const start = (pageIndex - 1) * pageSize
  const whereTemp = []
  // 搜索条件根据每们表单内容的实际情况
  /*if (type) {
    whereTemp.push(`type=${type}`)
  }
  if (status !== undefined && status !== '') {
    whereTemp.push(`status=${status}`)
  }
  if (name) {
    whereTemp.push(`name like '%${name}%'`)
  }*/
  let where = 'WHERE id is not null'
  if (whereTemp.length) {
    where = ` WHERE ${whereTemp.join('AND')}`
  }
  const sql = `SELECT * FROM \`${tableName}\` ${where} Limit ${start},${pageSize}`
  const countSql = 'select count(id) as num from `' + tableName + '`' + where
  const count = await sqlQuery(countSql)
  sqlQuery(sql, [], res, (result) => {
    return res.json({
      code: 200,
      data: {
        dict: dict,
        list: result,
        pageInfo: {
          total: count[0].num
        }
      },
      message: '成功'
    })
  })
})
router.post('/id', async (req, res) => {
  const id = req.body.id
  const formId = req.body.formId
  if (!formId) {
    return res.json({
      code: 0,
      message: 'formId不能为空'
    })
  }
  const tableName = await getTableNameByFormId(formId)
  const dict = await getDict()
  if (!id) {
    // id为空时返回新增时的初始值
    return res.json({
      code: 200,
      data: {
        data: [],
        dict: dict
      },
      message: '成功'
    })
  }
  const sql = `SELECT * FROM \`${tableName}\` WHERE id=${id}`
  sqlQuery(sql, [], res, (result) => {
    return res.json({
      code: 200,
      data: {
        data: result[0],
        dict: dict
      },
      message: '成功'
    })
  })
})
router.post('/delete', async (req, res) => {
  const id = req.body.id
  const formId = req.body.formId
  if (!id || !formId) {
    return res.json({
      code: 0,
      message: 'id和formId不能为空'
    })
  }
  let where = `id=${id}`
  if (id.toString().includes(',')) {
    // 批量删除
    where = `id in(${id})`
  }
  const tableName = await getTableNameByFormId(formId)
  const sql = `DELETE FROM \`${tableName}\` WHERE ${where}`
  sqlQuery(sql, [], res, () => {
    return res.json({
      code: 200,
      message: '删除成功'
    })
  })
})
module.exports = router
