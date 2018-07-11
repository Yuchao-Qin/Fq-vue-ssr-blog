import Vue from 'vue'
import { createApp } from './app.js'

Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options
    
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
})

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    
    let diff = false
    
    const activated = matched.filter((c, i) => {
      return diff || (diff = prevMatched[i] !== c)
    })
    
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
    
    const promise = Promise.all(
      asyncDataHooks.map(hook => hook({ store, route: to }))
    )
    
    promise.then(next).catch(next)
  })
  
  app.$mount('#root')
})
