const express = require('express')
const app = express()

//Controller
const hwController = require('../Controllers/hwController')

//POST methods
app.post('/newhw', hwController)

module.exports = app