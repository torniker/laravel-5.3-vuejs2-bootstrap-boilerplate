var baseurl = {
  'development': 'http://lvb.dev/',
  'production': '',
  'testing': ''
}
module.exports = {
  apiurl () {
    return baseurl[process.env.NODE_ENV]
  }
}
