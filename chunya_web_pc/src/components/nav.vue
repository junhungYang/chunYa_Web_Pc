<template>
    <div class="nav">
        <div class="line-bg"></div>
        <div class="wrap">
            <ul class="father-list">
                <li>
                    <router-link :class="navActive === '#/' ? 'routeAct' : ''" tag="span" to="/">首页</router-link>
                    <div v-show="navActive === '#/'" class="active"></div>
                </li>
                <li>
                    <router-link :class="navActive === '#/companyNews' ? 'routeAct' : ''" tag="span" to="/companyNews">公司动态</router-link>
                    <div v-show="navActive === '#/companyNews'" class="active"></div>
                </li>
                <li>
                    <span>产品预览</span>
                    <div v-show="navActive === '#/goodsList'" class="active"></div>
                    <ul class="item-list">
                        <li v-for="item in goodsList" @click="getId(item.id)"><router-link :class="navActive === '#/goodsList' ? 'routeAct' : ''" tag="span" :to="`/goodsList?id=${item.id}`">{{item.name}}</router-link></li>
                    </ul>
                </li>
                <li>
                    <router-link :class="navActive === '#/about' ? 'routeAct' : ''" tag="span" to="/about">关于我们</router-link>
                    <div v-show="navActive === '#/about'" class="active"></div>
                </li>
                <li>
                    <router-link :class="navActive === '#/contact' ? 'routeAct' : ''" tag="span" to="/contact">企业招聘</router-link>
                    <div v-show="navActive === '#/contact'" class="active"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import {previewGoodsList} from '../sendRequest/sendRequest'
export default {
    computed: {
        ...mapState(['navActive','goodsList'])
    },
    created() {
        this.navActiveRefresh(window.location.hash)
         previewGoodsList().then(res => {
             this.refreshGoodsList(res.data.data)
        })
    },
    methods: {
        ...mapMutations(['refreshGoodsList','getId','navActiveRefresh']),

    }
}
</script>

<style lang="less" scoped>
.nav {
    height: 70px;
    background:#fff;
    position: relative;
    .wrap {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        z-index:100;
        ul {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            li {
                line-height: 67px;
                display: inline-block;
                margin: 0 28px;
                cursor: pointer;
                position:relative;
                span {
                    font-size: 15px;
                    font-weight: bold;
                    color:#727171;
                }
                .routeAct {
                    color:#353535;
                }
                .active {
                    height: 2px;
                    background:rgb(47,39,37)
                }
                .item-list{
                    display: none;
                    top: 68px;
                    z-index: 99999;
                    background: #f3f3f3;
                    li{
                        width: 123px;
                        margin: 0px;
                        text-align: center;
                        height: 34px;
                        line-height: 34px;
                        display: block;
                        border-bottom: 1px solid #aaa;
                    }
                    li:last-of-type {
                        border: 0;
                    }
                    li:hover{
                        background-image: url('../assets/img/buttoncolor.png');
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        span{
                            color: white;
                        }
                    }
                }
            }
            li:nth-child(3):hover{
                .item-list{
                    display: block;
                }
            }
        }
    }
    .line-bg {
            width: 100%;
            height: 2px;
            position: absolute;
            left: 0;
            bottom: 0;
            background: #d5d5d8;
        }
}

</style>

