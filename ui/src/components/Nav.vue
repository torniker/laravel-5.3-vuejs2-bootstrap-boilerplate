<template>
  <nav class="navbar navbar-inverse header">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Project name</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-for="(link, key) in links" :class="{ 'active': key == $route.name }"><router-link :to="link.to">{{ link.text }}</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/">Login</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: {
        home: { to: '/', text: 'Home' },
        shop: { to: '/shop', text: 'Shop' },
        blog: { to: '/blog', text: 'Blog' },
        contact: { to: '/contact', text: 'Contact' }
      }
    }
  },
  created () {
    console.log(this.$route.name)
  }
}
</script>
