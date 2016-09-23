var baseurl = {
  'development': 'http://localhost:8000/',
  'production': '',
  'testing': ''
}
module.exports = {
  apiurl () {
    return baseurl[process.env.NODE_ENV]
  }
}
