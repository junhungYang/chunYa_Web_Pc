<template>
  <div id="app">
    <div class="wrap">
      <header>
          <img src="/static/imgData/logo.png" alt="">
      </header>
      <v-nav></v-nav>
      <router-view/>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import {commonArticleBrand} from './sendRequest/sendRequest'
import nav from './components/nav'
import footer from './components/footer'

export default {
  created() {
  },
  components: {
    'v-nav': nav,
    'v-footer': footer
  }
}
</script>

<style lang="less" scoped>
#app {
  max-width: 1920px;
  min-width: 1200px;
  header {
        height: 100px;
        background:#fff;
        position: relative;
      img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%)
      }
    }
}
@media screen and (min-width: 1920px){
  .wrap {
    width: 1920px;
    margin: 0 auto;
  }
}
</style>

