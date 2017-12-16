require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

app.use(cors())
app.use(routes)

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})