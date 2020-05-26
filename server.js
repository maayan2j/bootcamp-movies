const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./server/routes/api')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/moviesDB', { useNewUrlParser: true , useUnifiedTopology: true })

app.use('/', api)


const port = 8080
app.listen(port, function () {
  console.log(`Movies App is running on port ${port}`)
})