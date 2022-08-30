const express = require('express')
const cors = require('cors')
require('dotenv').config()
const path = require('path')

const usersRouter = require('./routes/users')
const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)
app.use('/', (req, res) => {
  res.end(`
  <div>TestByTarIryna</div>
  `)
})
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = app
