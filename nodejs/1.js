const express = require('express')
const app = express()
app.listen(3001, function () {
  const hostname = 'localhost'
  const port = 3001
  console.log(`Server running at http://${hostname}:${port}/`)
})
