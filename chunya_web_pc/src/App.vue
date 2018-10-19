<template>
  <div id="app">
    <div class="wrap">
      <header>
          <img src="/static/imgData/logo.png" alt="">
      </header>
      <v-nav id="abc"></v-nav>
      <router-view/>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import {commonArticleBrand} from './sendRequest/sendRequest'
import nav from './components/nav'
import footer from './components/footer'
import {mapMutations} from 'vuex'
export default {
  created() {
  },
  components: {
    'v-nav': nav,
    'v-footer': footer
  },
  methods: {
    ...mapMutations(['navActiveRefresh']),
    fetchData () {
      this.navActiveRefresh(location.hash)
    }
  },
  watch: {
    '$route':'fetchData'
  }
}
</script>

<style lang="less" scoped>
#id {
  position: absolute;
}
@font-face {
    font-family: tt0663m;
    src: url(../static/fonts/tt0663m_.ttf) ;
}
#app {
  max-width: 1920px;
  min-width: 1200px;
  margin:0 auto;
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

