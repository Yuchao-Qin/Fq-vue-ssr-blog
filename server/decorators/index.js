const KoaRouter = require('koa-router')
const glob = require('glob')
const { join } = require('path')

const methods = ['get', 'post', 'put', 'delete', 'all']

const pathPrefixer = Symbol('pathPrefixer')

const routerMap = new Map()

const prefix = path => target => target.prototype[pathPrefixer] = path

const change2Arr = target => Array.isArray(target) ? target : [target]

const normalizePath = path => path.startsWith('/') ? path : '/' + path

const _setRouter = method => subPath => (target, key, descriptor) => {
  const keys = { method, subPath, target }
  const val = target[key]
  routerMap.set(keys, val)
  return descriptor
}

const covert = middleware => (target, key, descriptor) => {
  const arr = []
  
  target[key] = change2Arr(middleware).concat(change2Arr(target[key]))
  
  return descriptor
}

const createRouter = (app, routesPath) => {
  const router = new KoaRouter()
  
  glob.sync(join(routesPath, '*.js')).forEach(require)
  
  for (let [conf, controllers] of routerMap) {
    const { method, subPath, target } = conf
    
    router[method](join(target[pathPrefixer], subPath), ...change2Arr(controllers))
  }
  
  app.use(router.routes()).use(router.allowedMethods())
  
  return router
}

const methodsList = methods.reduce((ctx, key) => {
  ctx[key] = _setRouter(key)
  return ctx
}, {})

module.exports = { ...methodsList, prefix, covert, createRouter }
