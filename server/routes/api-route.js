const { prefix, get } = require('../decorators')

@prefix('/api')
class Api_router {
  @get('/user')
  async _ssrStatic (ctx, next) {
    ctx.body = 'ok'
  }
}