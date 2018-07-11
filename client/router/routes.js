export default [
  { path: '/', component: () => import(/* webpackChunkName: 'index' */ '../views/index.vue') },
  { path: '/aaa', component: () => import('../views/aaa.vue') }
]