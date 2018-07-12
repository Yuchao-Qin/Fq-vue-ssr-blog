import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
// import VueMeta from 'vue-meta'
// import metaMixin from './utils/metaMixin.js'

// import iView from 'iview'
// import 'iview/dist/styles/iview.css'

// Vue.use(VueMeta)
// Vue.use(iView)

// Vue.mixin(metaMixin)

export const createApp = () => {
  const store = createStore()
  const router = createRouter()
  
  sync(store, router)
  
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  
  return { app, router, store }
}