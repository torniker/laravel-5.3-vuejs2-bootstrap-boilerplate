<template>
  <div class="posts">
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="posts">
      <h1>Blog</h1>
      <ul>
        <li v-for="post in posts">
          <router-link :to="{ path: '/blog/'+post.id }">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
    <router-view class="child"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      posts: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.posts = null
      this.loading = true
      this.$http.get('post')
        .then((response) => {
          this.loading = false
          this.posts = response.data
        }, (response) => {
          this.loading = false
          this.error = response.data.error
        })
    }
  }
}
</script>
