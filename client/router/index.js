import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routes.js'

Vue.use(VueRouter)

export const createRouter = () => new VueRouter({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => {{y: 0}},
  routes
})