const express = require('express')
const sqlQuery = require('./db')
const router = express.Router()

const getTableNameByFormId = async (formId) => {
  try {
    const sql = `SELECT tableName FROM \`datasource\` WHERE id = (SELECT source FROM \`design\` WHERE id=${formId})`
    const datasource = await sqlQuery(sql, [])
    if (datasource && datasource[0] && datasource[0].tableName) {
      return datasource[0].tableName
    }
    return false
  } catch (e) {
    return false
  }
}
router.post('/save', async (req, res) => {
  const query = req.body
  if (!query.formId) {
    return res.json({
      code: 0,
      message: '数据源id不能为空'
    })
  }
  const tableName = await getTableNameByFormId(query.formId)
  if (!tableName) {
    return res.json({
      code: 0,
      message: '当前列表未配置有表单数据源，请配置数据源或配置接口url地址'
    })
  }
  let sql = 'insert into `' + tableName + '` set ?'
  //const param = Object.assign(query, {})
  // 对应的表没有formId这样插入会报错，这里删除
  delete query.formId
  sqlQuery(sql, query, res, (result) => {
    res.json({
      code: 1,
      data: result,
      message: '新增成功'
    })
  })
})

router.post('/list', async (req, res) => {
  const { pageInfo = {}, formId = {} } = req.body
  if (!formId) {
    return res.json({
      code: 0,
      message: 'formId不能为空'
    })
  }
  const tableName = await getTableNameByFormId(formId)
  if (!tableName) {
    return res.json({
      code: 0,
      message:
        '当前列表未配置有表单数据源，请设置所属表单数据源或在列表设计中配置列表数据请求URL'
    })
  }
  const { pageIndex = 1, pageSize = 20 } = pageInfo
  const start = (pageIndex - 1) * pageSize
  const whereTemp = []
  // todo 搜索条件根据每个表单内容的实际情况，这里应该在设计数据源时设定哪些字段可以搜索
  // if (type) {
  //   whereTemp.push(`type=${type}`)
  // }
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
  const sql = `SELECT * FROM \`${tableName}\` ${where} Limit ${start},${pageSize}`
  const countSql = 'select count(id) as num from `' + tableName + '`' + where
  const count = await sqlQuery(countSql)
  sqlQuery(sql, [], res, (result) => {
    return res.json({
      code: 1,
      data: {
        // dict: dict,
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
      code: 1,
      message: '删除成功'
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
  if (!id) {
    // id为空时返回新增时的初始值
    return res.json({
      code: 1,
      data: {
        data: [],
        dict: {}
      },
      message: '成功'
    })
  }
  const sql = `SELECT * FROM \`${tableName}\` WHERE id=${id}`
  sqlQuery(sql, [], res, (result) => {
    return res.json({
      code: 1,
      data: {
        result: result[0],
        dict: {}
      },
      message: '成功'
    })
  })
})

router.post('/edit', async (req, res) => {
  const query = req.body
  if (!query.formId || !query.id) {
    return res.json({
      code: 0,
      message: 'formId和id不能为空'
    })
  }
  const tableName = await getTableNameByFormId(query.formId)
  let sql = 'update `' + tableName + '` set ? where id=?'
  // 这种通用的，没有updateDate字段时会报错
  // Object.assign(query, { updateDate: new Date() })
  delete query.formId
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
