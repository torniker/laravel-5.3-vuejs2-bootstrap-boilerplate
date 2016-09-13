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
          <li v-if="!isAuthed"><router-link to="/login">Login</router-link></li>
          <li v-else><a href="/logout" class="link" @click.prevent="logout()">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Auth from '../auth'

export default {
  data () {
    return {
      links: {
        home: { to: '/', text: 'Home' },
        shop: { to: '/shop', text: 'Shop' },
        blog: { to: '/blog', text: 'Blog' },
        contact: { to: '/contact', text: 'Contact' }
      },
      user: Auth.user
    }
  },
  computed: {
    isAuthed () {
      return Auth.user.authenticated
    }
  },
  methods: {
    logout () {
      Auth.logout()
    }
  }
}
</script>
