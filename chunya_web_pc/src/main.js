import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/reset.css'
import './assets/css/fontFamily.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
