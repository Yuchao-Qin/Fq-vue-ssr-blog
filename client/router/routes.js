export default [
  { path: '/', component: () => import(/* webpackChunkName: 'test' */ '../views/test.vue') },
  { path: '/aaa', component: () => import('../views/aaa.vue') }
]