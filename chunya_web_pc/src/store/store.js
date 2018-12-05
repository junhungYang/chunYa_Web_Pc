import Vue from "vue";
import Vuex from "vuex";
import {getHash} from '../getHash'
Vue.use(Vuex);
export const store = new Vuex.Store({
         state: {
           navActive: "#/",
           //公司动态详情页展示锁
            newsDescShowFlag:false,
            eventsDescShowFlag:false,
            healthDescShowFlag: false,
            newsDetailId:'',
            goodsList: [],
            goodActiveId: '',
            sliderActiveIndex:null
         },
         mutations: {
            getId(state,payload) {
                state.goodActiveId = payload
            },
            refreshGoodsList(state,payload) {
                state.goodsList = payload
            },
            navActiveRefresh(state, payload) {
                if (payload.includes('#/goodsList?')) {
                    payload = payload.split('?')[0]
                }
                state.navActive = payload;
            },
            changeNewsDetailid(state,payload){
                state.newsDetailId = payload;
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
window.onpopstate = function () {
    let res = getHash()
  store.commit('getId',res)
}