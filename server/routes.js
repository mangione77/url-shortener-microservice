const express = require('express')
const routes = express()

const helloController = require('./controllers/helloController')
const parseURLController = require('./controllers/parseURLController')
const shortURLController = require('./controllers/shortURLController')

routes.get('/', helloController.get)
routes.get('/shortener/:url(*)', parseURLController.getURL)
routes.get('/:id', shortURLController.redirect)

module.exports = routes