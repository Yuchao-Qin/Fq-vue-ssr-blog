import { createApp } from './app.js'

export default ctx => new Promise((resolve, reject) => {
  const { app, store, router } = createApp()
  
  const { url } = ctx
  const { fullPath } =router.resolve(url).route
  
  if (url !== fullPath) return resolve({ url: fullPath })
  
  router.push(url)
  
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()
    
    if (!matchedComponents.length) return reject({ code: 404 })
    
    const promise = Promise.all(
      matchedComponents.map(({asyncData}) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))
    )
    
    promise
      .then(() => {
        ctx.state = store.state
        resolve(app)
      })
      .catch(reject)
  }, reject)
})