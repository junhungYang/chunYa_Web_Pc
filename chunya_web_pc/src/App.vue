<template>
  <div id="app">
    <div class="wrap">
      <header>
          <img src="/static/imgData/logo.png" alt="">
          <div class="label-left">
            <span>联系方式</span>
            <span>招商加盟</span>
            <span>0755-2377 5137</span>
          </div>
          <div class="label-right">
            <span>注册</span>
            <span>登录</span>
            <span>移动版</span>
          </div>
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
      .label-left,.label-right {
        font-size: 0;
        top:30px;
        color:#a2a1a2;
        position: absolute;
        span {
          font-size: 12px;
          cursor: pointer;
        }
        span:nth-of-type(2) {
          margin-left: 20px;
        }
        span:nth-of-type(3) {
          margin-left: 20px;
        }
      }
      .label-left {
        left: 50px;
      }
      .label-right {
        right: 50px;
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

