import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/reset.css'
import 'swiper/dist/css/swiper.min.css'
import { store } from './store/store'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

