import Home from './components/Home'
import Products from './components/Products'
import Posts from './components/Posts'
import Post from './components/Post'
import Contact from './components/Contact'

module.exports = {
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/shop', name: 'shop', component: Products },
    { path: '/blog', name: 'blog', component: Posts },
    { path: '/blog/:id', name: 'blog', component: Post },
    { path: '/contact', name: 'contact', component: Contact }
  ]
}
