import Vue from 'vue'
import Router from 'vue-router'
import homePage from "@/components/homePage"
import goodsList from '@/components/goodsList'
import companyNews from "@/components/companyNews"
import memberCenter from "@/components/memberCenter"
import serviceCenter from "@/components/serviceCenter"
import shoppingCenter from '@/components/shoppingCenter'
import advertises from "@/components/advertises";

Vue.use(Router)

export default new Router({
  routes: [
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
    {
      path: "/memberCenter",
      component: memberCenter
    },
    {
      path: "/shoppingCenter",
      component: shoppingCenter
    },
    {
      path: "/serviceCenter",
      component: serviceCenter
    },
    {
      path: "/advertises",
      component: advertises
    }
  ]
});
