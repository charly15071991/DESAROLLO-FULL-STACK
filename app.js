const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('mi primer server')
})

app.listen(3000)

