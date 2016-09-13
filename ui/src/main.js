import Vue from 'vue'
Vue.use(require('vue-resource'))
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var Config = require('./config.js')
import Auth from './auth'
Auth.useVue(Vue)

Vue.http.options.root = Config.apiurl()
Vue.http.headers.common['Authorization'] = Auth.getAuthHeader()

// Vue.http.interceptors.push((request, next) => {
//   request.url = Config.apiurl() + request.url
//   if (Auth.checkAuth()) {
//     request.headers['Authorization'] = Auth.getAuthHeader()
//   }
//   next()
// })
const routes = require('./routes.js')
const router = new VueRouter(routes)
import App from './App'
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
