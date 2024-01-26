const express = require('express')

const homeRoutes = require('./home')

const routes = express()

routes.use('/home', homeRoutes)

module.exports = routes