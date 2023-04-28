const express = require('express')
const sqlQuery = require('./db')
const router = express.Router()
/*************************字典管理*********************/
router.post('/dict/save', async (req, res) => {
  const params = { updateTime: new Date() }
  commSave(req, res, 'dict', params)
})

// 返回一级
router.post('/dict/list', async (req, res) => {
  const query = req.body
  const whereTemp = []
  if (query.status) {
    whereTemp.push(`status=${query.status}`)
  }
  await commList(req, res, 'dict', whereTemp)
})

router.post('/dict/delete', async (req, res) => {
  commDel(req, res, 'dict', ['isSystem=0'])
})

router.post('/dict/edit', async (req, res) => {
  const query = req.body
  if (query.children) {
    // 转字符串保存
    query.children = JSON.stringify(query.children)
  }
  commEdit(req, res, 'dict', query)
})
/*************************字典管理结束*********************/

/*************************部门管理开始*********************/
router.post('/dept/save', async (req, res) => {
  commSave(req, res, 'department')
})
router.post('/dept/edit', async (req, res) => {
  commEdit(req, res, 'department')
})
router.post('/dept/delete', async (req, res) => {
  commDel(req, res, 'department')
})
router.post('/dept/list', async (req, res) => {
  await commList(req, res, 'department')
})
/*************************部门管理结束*********************/

/*************************菜单管理结束*********************/
router.post('/menu/save', async (req, res) => {
  commSave(req, res, 'menu')
})
router.post('/menu/edit', async (req, res) => {
  if (req.body.label) {
    delete req.body.label
  }
  if (req.body.value) {
    delete req.body.value
  }
  commEdit(req, res, 'menu')
})
router.post('/menu/delete', async (req, res) => {
  commDel(req, res, 'menu')
})
router.post('/menu/list', async (req, res) => {
  const { name, status } = req.body
  const whereParams = []
  if (name) {
    whereParams.push(`name=${name}`)
  }
  if (status) {
    whereParams.push(`status=${status}`)
  }
  let where = ' WHERE id is not null'
  if (whereParams.length) {
    where = ` WHERE ${whereParams.join('AND')} `
  }
  where += ` order by sort asc`
  const sql = `SELECT * FROM \`menu\` ${where}`
  sqlQuery(sql, [], res, (result) => {
    let allResult = result
    // 获取内容管理的
    const contentSql =
      'SELECT id,icon,name,status FROM `design` WHERE showMenu=1 and type=2'
    sqlQuery(contentSql, [], res, (list) => {
      if (list && list.length) {
        list.forEach((item) => {
          allResult.push({
            path: `/design/dataList/content?id=${item.id}`,
            parentId: 1,
            type: 1,
            ...item
          })
        })
      }
      return res.json({
        code: 1,
        data: {
          list: allResult
        },
        message: '成功'
      })
    })
  })
})
/*************************菜单管理结束*********************/

/*************************角色管理结束*********************/
router.post('/role/save', async (req, res) => {
  commSave(req, res, 'role')
})
router.post('/role/edit', async (req, res) => {
  commEdit(req, res, 'role')
})
router.post('/role/delete', async (req, res) => {
  commDel(req, res, 'role')
})
router.post('/role/list', async (req, res) => {
  await commList(req, res, 'role')
})
/*************************角色管理结束*********************/

/*************************用户管理结束*********************/
router.post('/user/save', async (req, res) => {
  commSave(req, res, 'user')
})
router.post('/user/edit', async (req, res) => {
  commEdit(req, res, 'user')
})
router.post('/user/delete', async (req, res) => {
  commDel(req, res, 'user')
})
router.post('/user/list', async (req, res) => {
  await commList(req, res, 'user')
})
/*************************用户管理结束*********************/

const commList = async (req, res, tableName, whereParams = [], order) => {
  const { pageInfo = {} } = req.body
  const { pageIndex = 1, pageSize = 20 } = pageInfo
  const start = (pageIndex - 1) * pageSize
  let where = 'WHERE id is not null'
  if (whereParams.length) {
    where = ` WHERE ${whereParams.join('AND')} `
  }
  where += ` order by ${order || 'id desc'}`
  const sql = `SELECT * FROM \`${tableName}\` ${where} Limit ${start},${pageSize}`
  const countSql = `select count(id) as num from \`${tableName}\`` + where
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
}
const commEdit = (req, res, tableName, params) => {
  const query = params || req.body
  if (!query.id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  const sql = `update \`${tableName}\` set ? where id=?`
  const data = [query, query.id]
  sqlQuery(sql, data, res, (result) => {
    res.json({
      code: 1,
      data: result,
      message: '修改成功'
    })
  })
}
const commSave = (req, res, tableName, params = {}) => {
  const query = req.body
  const sql = `insert into \`${tableName}\` set ?`
  const data = Object.assign(query, params)
  sqlQuery(sql, data, res, (result) => {
    res.json({
      code: 1,
      data: result,
      message: '新增成功'
    })
  })
}
const commDel = (req, res, tableName, params = []) => {
  const id = req.body.id
  if (!id) {
    return res.json({
      code: 0,
      message: 'id不能为空'
    })
  }
  let where = params
  let whereId = `id=${id}`
  if (id.toString().includes(',')) {
    // 批量删除
    whereId = `id in(${id})`
  }
  where.push(whereId)
  const stringWhere = where.join(' and ')
  const sql = `DELETE FROM \`${tableName}\` WHERE ${stringWhere}`
  sqlQuery(sql, [], res, () => {
    return res.json({
      code: 1,
      message: '删除成功'
    })
  })
}
module.exports = router
