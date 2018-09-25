<template>
    <div class="nav">
        <div class="wrap">
            <ul>
                <li>
                    <router-link tag="span" to="/">首页</router-link>
                </li>
                <li>
                    <router-link tag="span" to="/companyNews">公司动态</router-link>
                </li>
                <li>
                    <router-link tag="span" to="/goodsList">产品列表</router-link>
                </li>
                <li>
                    <router-link tag="span" to="/memberCenter">会员中心</router-link>
                </li>
                <li>
                    <router-link tag="span" to="/companyNews">在线商城</router-link>
                </li>
                <li>
                    <router-link tag="span" to="/others">其他事物</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less" scoped>
.nav {
    height: 75px;
    background:#fff;
    .wrap {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        ul {
            position: absolute;
            height: 75px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            li {
                line-height: 75px;
                display: inline-block;
                margin: 0 28px;
            }
        }
    }
}

</style>

