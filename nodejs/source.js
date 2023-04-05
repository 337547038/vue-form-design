const express = require('express')
const router = express.Router()
const sqlQuery = require('./db')
router.post('/creat', async (req, res) => {
  const query = req.body
  // 将tableData转换为sql语句创建数据表
  const tableData = query.tableData
  if (tableData.length) {
    let temp = ['`id` INT(10) NOT NULL AUTO_INCREMENT']
    tableData.forEach((item) => {
      let row = [`\`${item.name}\``]
      if (['INT', 'VARCHAR'].includes(item.type)) {
        row.push(`${item.type}(${item.length})`)
      } else {
        row.push(`${item.type}`)
      }
      item.empty ? row.push('NULL') : row.push('NOT NULL')
      item.remark ? row.push(`COMMENT '${item.remark}'`) : ''
      temp.push(row.join(' '))
    })
    temp.push('PRIMARY KEY (`id`)')
    query.tableName = 'ak-' + query.tableName
    const creatSql = `CREATE TABLE \`akform\`.\`${
      query.tableName
    }\` (${temp.join(',')}) ENGINE = InnoDB COMMENT = '${query.remark}'`
    // 先创建表结构数据
    sqlQuery(creatSql, {}, res, () => {
      const sql = 'insert into `dataSource` set ?'
      const param = Object.assign({}, query, {
        updateDate: new Date(),
        creatDate: new Date(),
        tableData: JSON.stringify(tableData)
      })
      sqlQuery(sql, param, res, (result) => {
        res.json({
          code: 1,
          data: result,
          message: '新增成功'
        })
      })
    })
  } else {
    res.json({
      code: 0,
      data: [],
      message: '数据库表字段不能为空'
    })
  }
})
router.post('/id', async (req, res) => {
  const id = req.body.id
  if (!id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  const sql = `SELECT * FROM \`datasource\` WHERE id=${id}`
  sqlQuery(sql, [], res, (result) => {
    let data = result && result[0]
    if (data && data.tableData) {
      // 恢复
      data.tableData = JSON.parse(data.tableData)
    }
    res.json({
      code: 1,
      data: {
        result: data,
        dict: {}
      },
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
  const sql = `DELETE FROM \`dataSource\` WHERE id=${id}`
  sqlQuery(sql, [], res, () => {
    res.json({
      code: 1,
      message: '删除成功'
    })
  })
  // 这里应该删除创建的表
})
router.post('/list', async (req, res) => {
  const { pageInfo = {}, category, tableName, name } = req.body
  const { pageIndex = 1, pageSize = 20 } = pageInfo
  const start = (pageIndex - 1) * pageSize
  const whereTemp = []
  if (tableName) {
    whereTemp.push(`tableName like '%${tableName}%'`)
  }
  if (category) {
    whereTemp.push(`category=${category}`)
  }
  if (name) {
    whereTemp.push(`name like '%${name}%'`)
  }
  let where = ' WHERE id is not null'
  if (whereTemp.length) {
    where = ` WHERE ${whereTemp.join(' AND ')}`
  }
  const sql = `SELECT category,status,creatDate,creatName,id,name,remark,tableName,updateDate FROM \`datasource\` as d ${where} order by id desc Limit ${start},${pageSize}`
  const countSql = 'select count(id) as num from `datasource`' + where
  const count = await sqlQuery(countSql)
  sqlQuery(sql, [], res, (result) => {
    res.json({
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
router.post('/edit', (req, res) => {
  const query = req.body
  let sql = ''
  if (!query.id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  // 修改
  sql = 'update `datasource` set ? where id=?'
  const newQuery = Object.assign(
    { name: query.name, category: query.category, status: query.status },
    { updateDate: new Date() }
  )
  const param = [newQuery, query.id]
  sqlQuery(sql, param, res, (result) => {
    res.json({
      code: 1,
      data: result,
      message: '修改成功'
    })
  })
})
module.exports = router
