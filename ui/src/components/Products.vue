<template>
  <div class="products">
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="products">
      <h1>Products</h1>
      <ul>
        <li v-for="product in products">{{ product.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      products: null,
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
      this.error = this.products = null
      this.loading = true
      this.$http.get('product')
        .then((response) => {
          this.loading = false
          this.products = response.data
        }, (response) => {
          this.loading = false
          this.error = response.data.error
        })
    }
  }
}
</script>
