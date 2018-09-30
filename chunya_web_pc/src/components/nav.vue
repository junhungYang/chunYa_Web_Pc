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
                    <router-link :class="navActive === '#/goodsList' ? 'routeAct' : ''" tag="span" to="/goodsList">产品预览</router-link>
                    <div v-show="navActive === '#/goodsList'" class="active"></div>
                </li>
                <!-- <li>
                    <router-link tag="span" to="/memberCenter">会员中心</router-link>
                    <div v-show="navActive === '#/memberCenter'" class="active"></div>
                </li> -->
                <li @click="shoppingCenter">
                    <!-- <router-link :class="navActive === '#/shoppingCenter' ? 'routeAct' : ''" tag="span" to="/shoppingCenter">在线商城</router-link> -->
                    <span>在线商城</span>
                    <div v-show="navActive === '#/shoppingCenter'" class="active"></div>
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
            alert('正在开发中.')
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

