const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/uploads')
    },
    filename: function (req, file, cb) {
      console.log(file)
      var changedName = new Date().getTime() + '-' + file.originalname
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
  req.files.map((elem) => {
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
module.exports = router
