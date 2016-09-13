<template>
  <div class="post">
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="post">
      <h1>Blog</h1>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      post: null,
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
      this.error = this.post = null
      this.loading = true
      this.$http.get('post/' + this.$route.params.id)
        .then((response) => {
          this.loading = false
          this.post = response.data
        }, (response) => {
          this.loading = false
          this.error = response.data.error
        })
    }
  }
}
</script>
