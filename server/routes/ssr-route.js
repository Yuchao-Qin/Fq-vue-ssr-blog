const LRU = require('lru-cache')
const { createBundleRenderer } = require('vue-server-renderer')
const { join } = require('path')
const fs = require('fs')
const send = require('koa-send')
const { prefix, get } = require('../decorators')

const createRenderer = (bundle, options) => createBundleRenderer(
  bundle,
  Object.assign(options, {
    cache: LRU({
      max: 1000, 
      maxAge: 1000 * 60 * 15
    }),
    basedir: join(__dirname, '../../dist'),
    runInNewContext: false
  })
)

const template = fs.readFileSync(join(__dirname, '../../index.html'), 'utf-8')
const bundle = require('../../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../../dist/vue-ssr-client-manifest.json')

const renderer = createRenderer(bundle, {
  template,
  clientManifest
})

@prefix('/')
class SSR_router {
  @get('/dist/*')
  async _ssrStatic (ctx, next) {
    await send(ctx, ctx.path)
  }
  
  @get('*')
  async _ssrServices (ctx, next) {
    ctx.set('Content-Type', 'text/html')
  
    const context = {
      url: ctx.url
    }
  
    const html = await renderer.renderToString(context)
  
    ctx.body = html
  }
}