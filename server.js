const express = require('express')
const ejs = require('ejs')
const path = require('path')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 8000
const app = express()
const checkToken = require('./src/middlewares/token')

//Router
const Router = require('./src/router')

//Middlewares
app.use(express.json())
app.set('view engine', 'ejs')
app.use('/assets', express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(checkToken)
app.use(Router)


//server Listining
app.listen(PORT, console.log(PORT))