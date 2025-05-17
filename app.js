require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const heroRoutes = require('./routes/heroRoutes')
const teamRoutes = require('./routes/teamRoutes')

const app = express()
connectDB()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Servidor funcionando')
})

app.use('/heroes', heroRoutes)

app.use('/teams', teamRoutes)

module.exports = app
