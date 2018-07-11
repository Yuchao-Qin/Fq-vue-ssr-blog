const favicon = require('koa-favicon')
const { join } = require('path')

module.exports = app => app.use(favicon(join(__dirname, '../../public/logo-48.png')))