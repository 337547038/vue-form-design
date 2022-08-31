const express = require('express')
const router = express.Router()
router.get('/single1', (req, res) => {
  console.log(req.file)
  res.json({
    code: 1,
    type: 'single'
  })
})
module.exports = router
