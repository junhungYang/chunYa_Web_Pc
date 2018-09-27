import Vue from 'vue'
import Router from 'vue-router'
import homePage from "@/components/homePage"
import goodsList from '@/components/goodsList'
import companyNews from "@/components/companyNews"
// import memberCenter from "@/components/memberCenter"
import about from "@/components/about"
import shoppingCenter from '@/components/shoppingCenter'
import contact from "@/components/contact";

Vue.use(Router)

export default new Router({
  routes: [
    //main
    {
      path: "/",
      component: homePage
    },
    {
      path: "/homePage",
      component: homePage
    },
    {
      path: "/goodsList",
      component: goodsList
    },
    {
      path: "/companyNews",
      component: companyNews
    },
    // {
    //   path: "/memberCenter",
    //   component: memberCenter
    // },
    {
      path: "/shoppingCenter",
      component: shoppingCenter
    },
    {
      path: "/about",
      component: about
    },
    {
      path: "/contact",
      component: contact
    }
  ]
});
