<template>
  <div class="login">
    <div class="loading" v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div v-if="isAuthed">
        You have successfully authenticated
      </div>
      <form v-else v-on:submit.prevent="onSubmit">
        <h2 class="form-signin-heading">Please sign in</h2>
        <input type="text" v-model="username" class="form-control" placeholder="Username" required autofocus>
        <input type="password" v-model="password" class="form-control" placeholder="Password" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
       </form>
     </div>
  </div>
</template>

<script>
import Auth from '../auth'

export default {
  data () {
    return {
      loading: false,
      error: null,
      username: '',
      password: ''
    }
  },
  computed: {
    isAuthed () {
      return Auth.user.authenticated
    }
  },
  methods: {
    onSubmit () {
      this.loading = true
      this.error = null
      Auth.login(this, this.username, this.password, this.onResponse)
    },
    onResponse () {
      this.loading = false
    }
  }
}
</script>
