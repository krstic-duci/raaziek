<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<script>
import Home from './view/Home'

export default {
  name: 'App',
  components: {
    'home-page': Home
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/main-style.scss';
</style>
