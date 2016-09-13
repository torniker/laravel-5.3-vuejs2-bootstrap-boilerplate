import Vue from 'vue'
Vue.use(require('vue-resource'))
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var Config = require('./config.js')
Vue.http.interceptors.push((request, next) => {
  request.url = Config.apiurl() + request.url
  next()
})
const routes = require('./routes.js')
const router = new VueRouter(routes)
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', component: Home },
//     { path: '/shop', component: Products },
//     { path: '/contact', component: Contact }
//   ]
// })
import App from './App'
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
