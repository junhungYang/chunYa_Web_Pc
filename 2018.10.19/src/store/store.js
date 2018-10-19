import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           navActive: "#/",
           //公司动态详情页展示锁
            newsDescShowFlag:false,
            eventsDescShowFlag:false,
            healthDescShowFlag: false,

         },
         mutations: {
            navActiveRefresh(state, payload) {
                state.navActive = payload;
            },
           //公司动态详情页展示所更改
            contDescFlagRefresh(state,payload) {
                switch (payload.mod) {
                    case 'health':
                        state.healthDescShowFlag = payload.flag
                        break;
                    case 'news':
                        state.newsDescShowFlag = payload.flag
                        break; 
                    case 'events':
                        state.eventsDescShowFlag = payload.flag
                }
            },
         }
       });