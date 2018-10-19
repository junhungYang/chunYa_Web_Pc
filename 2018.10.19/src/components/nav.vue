<template>
    <div class="nav">
        <div class="line-bg"></div>
        <div class="wrap">
            <ul>
                <li>
                    <router-link :class="navActive === '#/' ? 'routeAct' : ''" tag="span" to="/">首页</router-link>
                    <div v-show="navActive === '#/'" class="active"></div>
                </li>
                <li>
                    <router-link :class="navActive === '#/companyNews' ? 'routeAct' : ''" tag="span" to="/companyNews">公司动态</router-link>
                    <div v-show="navActive === '#/companyNews'" class="active"></div>
                </li>
                <li>
                    产品预览
                    <div v-show="navActive === '#/goodsList'" class="active"></div>
                    <ul>
                        <li><router-link :class="navActive === '#/goodsList' ? 'routeAct' : ''" tag="span" to="/goodsList">善缘米</router-link></li>
                    </ul>
                </li>
                <!-- <li>
                    <router-link tag="span" to="/memberCenter">会员中心</router-link>
                    <div v-show="navActive === '#/memberCenter'" class="active"></div>
                </li> -->
                <li @click="shoppingCenter">
                    <!-- <router-link :class="navActive === '#/shoppingCenter' ? 'routeAct' : ''" tag="span" to="/shoppingCenter">在线商城</router-link> -->
                    <span>在线商城</span>
                    <div class="xcximg"></div>
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
export default {
    computed: {
        ...mapState(['navActive'])
    },
    created() {
        console.log(location.hash)
        this.navActiveRefresh(location.hash)
    },
    methods: {
        ...mapMutations(['navActiveRefresh']),
        shoppingCenter() {
            return 
            // location.href = 'http://www.chunyajkkj.com'
        }
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
            height: 70px;
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
                .xcximg{
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    top: 68px;
                    left: -61px;
                    background-image: url('../assets/img/xiaochengxu.jpg');
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size:90%;
                    background-color: white;
                    display:none;
                }
                ul{
                    display: none;
                    top: 68px;
                    z-index: 99999;
                    li{
                        background-color: white;
                        width: 123px;
                        margin: 0px;
                        text-align: center;
                        height: 34px;
                        line-height: 34px;
                        display: block;
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
                ul{
                    display: block;
                }
            }
            li:nth-child(4):hover{
                .xcximg{
                    display:block;
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

