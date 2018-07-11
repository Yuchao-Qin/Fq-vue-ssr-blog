const { createRouter } = require('../decorators')
const { join } = require('path')

const routesPath = join(__dirname, '../routes')

module.exports = app => createRouter(app, routesPath)
