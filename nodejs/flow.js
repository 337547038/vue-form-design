const express = require('express')
const sqlQuery = require('./db')
const router = express.Router()
const creatJsonMock = require('./creatJsonMock')

/**
 * 根据设计的流程id返回设计的内容和对应表单信息
 */
router.post('/id', async (req, res) => {
  const id = req.body.id
  if (!id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  const sql = `SELECT * FROM \`design\` WHERE id=${id}`
  const designContent = await sqlQuery(sql)
  if (designContent && designContent.length) {
    const sql2 = `SELECT * FROM \`design\` WHERE id=${designContent[0].source}`
    sqlQuery(sql2, [], res, result => {
      const resJson = {
        code: 1,
        data: {
          flow: designContent[0],
          form: result[0]
        },
        message: '成功'
      }
      res.json(resJson)
      creatJsonMock(req.originalUrl, resJson, req.body)
    })
  } else {
    return res.json({
      code: 1,
      data: {},
      message: '无记录'
    })
  }
})

router.post('/save', async (req, res) => {
  const query = req.body
  //根据数据源id找出对应的数据表名
  try {
    const sql1 = `SELECT tableName FROM \`datasource\` WHERE id = ${query.flow.sourceId}`
    const datasource = await sqlQuery(sql1, [])
    const tableName = datasource[0].tableName
    const sql2 = 'insert into `' + tableName + '` set ?'
    // 对应的表没有flow这样插入会报错，这里删除
    const flowForm = JSON.parse(JSON.stringify(query))
    delete flowForm.flow
    const queryResult = await sqlQuery(sql2, flowForm)
    const params3 = {
      userId: query.flow.userId,
      title: query.flow.title,
      creatTime: new Date(),
      formId: queryResult.insertId,
      flowId: query.flow.flowId
    }
    const sql3 = 'insert into `flow` set ?'
    await sqlQuery(sql3, params3)
    return res.json({
      code: 1,
      data: [],
      message: '添加成功'
    })
  } catch (e) {
    return res.json({
      code: 0,
      data: [],
      message: e.message
    })
  }
  //const sql = 'insert into `flow` set ?'
  //const data = Object.assign(query, params)
  /*sqlQuery(sql, query, res, result => {
    res.json({
      code: 1,
      data: result,
      message: '新增成功'
    })
  })*/
  res.json({
    code: 1,
    data: [],
    message: '新增成功'
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
  sqlQuery(sql, [], res, result => {
    const resJson = {
      code: 1,
      data: {
        list: result,
        pageInfo: {
          total: count[0].num
        }
      },
      message: '成功'
    }
    res.json(resJson)
    creatJsonMock(req.originalUrl, resJson, req.body)
  })
})
module.exports = router
