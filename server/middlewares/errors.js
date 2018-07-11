const isDev = process.env.NODE_ENV === 'development'

module.exports = app => app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (err.url) return ctx.redirect(err.url)
    
    if (err.code === 404) {
      ctx.status = 404
      ctx.body = '404 | Page Not Found.'
      return
    }
    ctx.code = '500'
    ctx.body = '500 | Server Error'
  }
})