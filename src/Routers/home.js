const express = require('express')
const app = express()

//Controller
const homeConteroller = require('../Controllers/homeConteroller')

//GET methods
app.get('/', homeConteroller)

module.exports = app