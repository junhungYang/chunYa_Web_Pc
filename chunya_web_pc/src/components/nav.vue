<template>
    <div class="nav">
        <div class="line-bg"></div>
        <div class="wrap">
            <ul>
                <li>
                    <router-link tag="span" to="/">首页</router-link>
                    <div class="active"></div>
                </li>
                <li>
                    <router-link tag="span" to="/companyNews">公司简介</router-link>
                    <div class="active"></div>
                </li>
                <li>
                    <router-link tag="span" to="/goodsList">新闻资讯</router-link>
                    <div class="active"></div>
                </li>
                <li>
                    <router-link tag="span" to="/memberCenter">会员中心</router-link>
                    <div class="active"></div>
                </li>
                <li>
                    <router-link tag="span" to="/shoppingCenter">在线商城</router-link>
                    <div class="active"></div>
                </li>
                <li>
                    <router-link tag="span" to="/serviceCenter">服务中心</router-link>
                    <div class="active"></div>
                </li>
                <li>
                    <router-link tag="span" to="/advertises">企业招聘</router-link>
                    <div class="active"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
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
                span {
                    font-size: 15px;
                    font-family: hansansMed;
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

