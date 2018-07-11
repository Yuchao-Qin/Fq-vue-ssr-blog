const { join } = require('path')

class Loader {
  constructor () {
    this.middlewares = []
  }
  register (m) {
    this.middlewares.push(join(__dirname, '../middlewares/', m))
  }
  init (app) {
    for (let i=0; i<this.middlewares.length; i++) {
      const m = require(this.middlewares[i])

      if (typeof m === 'function') m(app)
    }
  }
}

module.exports = new Loader()