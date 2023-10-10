const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const creatJsonMock = require('./creatJsonMock')
const sqlQuery = require('./db')
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/uploads')
    },
    filename: function (req, file, cb) {
      //console.log(file)
      //const changedName = new Date().getTime() + '-' + file.originalname
      const changedName = file.originalname
      cb(null, changedName)
    }
  })
})
// 单个
router.post('/single', upload.single('file'), (req, res) => {
  console.log(req.file)
  res.json({
    code: 1,
    type: 'single',
    fileName: req.file.originalname,
    path: req.file.path.replace(/\\/g, '/').replace('../public', '')
  })
})
// 多个
router.post('/multer', upload.array('file'), (req, res) => {
  console.log(req.file)
  const fileList = []
  req.files.map(elem => {
    fileList.push({
      fileName: elem.originalname
    })
  })
  res.json({
    code: 1,
    type: 'multer',
    fileList: fileList
  })
})
//上传分组
router.post('/group/add', (req, res) => {
  const query = req.body
  const sql = 'insert into `upload-group` set ?'
  sqlQuery(sql, query, res, result => {
    res.json({
      code: 1,
      data: result,
      message: '新增成功'
    })
  })
})
router.post('/group/list', (req, res) => {
  // const query = req.body
  const sql = 'SELECT * FROM `upload-group`'
  sqlQuery(sql, {}, res, result => {
    const resJson = {
      code: 1,
      data: result,
      message: '成功'
    }
    res.json(resJson)
    creatJsonMock(req.originalUrl, resJson, req.body)
  })
})
router.post('/group/edit', (req, res) => {
  const query = req.body
  const sql = 'update `upload-group` set ? where id=?'
  const param = [query, query.id]
  sqlQuery(sql, param, res, result => {
    res.json({
      code: 1,
      data: result,
      message: '修改成功'
    })
  })
})
router.post('/group/del', (req, res) => {
  const query = req.body
  const sql = `DELETE FROM \`upload-group\` WHERE id=${query.id}`
  sqlQuery(sql, [], res, result => {
    res.json({
      code: 1,
      data: result,
      message: '删除成功'
    })
  })
})
router.post('/batchSplit', upload.single('file'), async (req, res) => {
  const { chunkNumber, totalSize, identifier, filename, totalChunks, groupId } =
    req.body
  // 根据文件identifier创建文件夹，把默认上传的文件移动当前hash文件夹下。方便后续文件合并。
  const uploadPath = '../public/uploads'
  const chunksPath = path.join(uploadPath, identifier, '/')
  if (!fs.existsSync(chunksPath)) {
    fs.mkdirSync(chunksPath)
  }
  fs.renameSync(req.file.path, chunksPath + identifier + '-' + chunkNumber)
  const intTotalChunks = parseInt(totalChunks)
  if (totalChunks === chunkNumber) {
    // 合并文件
    const chunks = fs.readdirSync(chunksPath)
    if (chunks.length !== intTotalChunks || chunks.length === 0) {
      res.json({
        code: 0,
        messages: '切片文件数量不符合'
      })
      return
    }
    const filePath = path.join(uploadPath, filename)
    fs.writeFileSync(filePath, '')
    for (let i = 1; i <= intTotalChunks; i++) {
      // 追加写入到文件中
      fs.appendFileSync(
        filePath,
        fs.readFileSync(chunksPath + identifier + '-' + i)
      )
      // 删除本次使用的chunk
      fs.unlinkSync(chunksPath + identifier + '-' + i)
    }
    fs.rmSync(chunksPath, { recursive: true, force: true })
    // 写入数据库，上传文件前可先检查当前identifier的值，以实现秒传
    const sql = 'insert into `upload-files` set ?'
    const param = {
      filename: filename,
      fileUrl: `/uploads/${filename}`,
      md5: identifier,
      groupId: groupId,
      size: totalSize
    }
    await sqlQuery(sql, param, res)
    res.json({
      code: 2,
      messages: 'success'
    })
  } else {
    res.json({
      code: 1,
      messages: 'waiting'
    })
  }
})

router.post('/files/list', (req, res) => {
  const query = req.body
  const sql =
    'SELECT * FROM `upload-files` where groupId=' + (query.groupId || 0)
  sqlQuery(sql, {}, res, result => {
    const resJson = {
      code: 1,
      data: result,
      message: '成功'
    }
    res.json(resJson)
    creatJsonMock(req.originalUrl, resJson, req.body)
  })
})

module.exports = router
