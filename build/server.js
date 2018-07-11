const Koa = require('koa')
const KoaRouter = require('koa-router')
const fs = require('fs')
const { join } = require('path')
const setupDevServer = require('./setup-dev-server.js')
const { createBundleRenderer } = require('vue-server-renderer')
const LRU = require('lru-cache')
const favicon = require('koa-favicon')

const app = new Koa()
const router = new KoaRouter()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    if (e.url) {
      ctx.redirect(e.url)
    }
    if (e.code == 404) {
      ctx.status = 404
      ctx.body = '404 | Not Found.'
    }
    ctx.status = 500
    ctx.body = e.message
    console.log(e)
  }
})

const createRenderer = (bundle, options) => createBundleRenderer(
  bundle,
  Object.assign(options, {
    cache: LRU({
      max: 1000, 
      maxAge: 1000 * 60 * 15
    }),
    runInNewContext: false
  })
)

let renderer = null

const templatePath = join(__dirname, '../index.html')

const readyPromise = setupDevServer(app, templatePath, (bundle, options) => {
  renderer = createRenderer(bundle, options)
})

router.get('*', (ctx, next) => {
  return readyPromise.then(async () => {
    const s = Date.now()
    
    ctx.set('Content-Type', 'text/html')
    
    const context = {
      url: ctx.url
    }
    
    const html = await renderer.renderToString(context)
    
    ctx.body = html
    
    console.log(`渲染用时：${Date.now() - s}ms`)
  })
})

app.use(favicon(join(__dirname, '../public/logo-48.png')))
app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT)
