export default {
  user: {
    authenticated: false
  },
  Vue: null,
  useVue (vue) {
    this.Vue = vue
  },
  login (context, username, password, callback) {
    if (this.user.authenticated) {
      if (callback) {
        callback(true)
      }
      return
    }
    var body = {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'ARsB0KEJQAqYvF8zGWEK5uIWy0DVfvy0NvhohJYK',
      username: username,
      password: password,
      scope: '*'
    }
    context.$http.post('oauth/token', body)
      .then((response) => {
        window.localStorage.accessToken = response.data.access_token
        window.localStorage.tokenType = response.data.token_type
        this.user.authenticated = true
        this.Vue.http.headers.common['Authorization'] = this.getAuthHeader()
        if (callback) {
          callback(true)
        }
      }, (response) => {
        callback(false)
        delete this.Vue.http.headers.common['Authorization']
      })
  },
  logout (callback) {
    delete window.localStorage.accessToken
    delete window.localStorage.tokenType
    this.user.authenticated = false
    this.Vue.http.headers.common['Authorization'] = this.getAuthHeader()
    if (callback) {
      callback()
    }
  },
  checkAuth () {
    var jwt = window.localStorage.accessToken
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
    return this.user.authenticated
  },
  getAccessToken () {
    return window.localStorage.accessToken
  },
  getTokenType () {
    return window.localStorage.tokenType
  },
  getAuthHeader () {
    return this.getTokenType() + ' ' + this.getAccessToken()
  }
}
