<template>
  <div id="app">
    <navigation></navigation>
    <div class="container">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Auth from './auth'

export default {
  components: {
    'navigation': Nav
  },
  created () {
    Auth.checkAuth()
  }
}
</script>

<style src="./less/main.less" lang="less"></style>
<style lang="less">
.header {
  border-radius: 0;
}
</style>