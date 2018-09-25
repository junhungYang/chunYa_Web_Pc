<template>
    <div class="home-page" >
        <header>
            <img src="/static/imgData/logo.png" alt="">
        </header>
        <v-nav></v-nav>
    </div>
</template>
<script>
import header from './homeContent/header'
import nav from './homeContent/nav'
import content from './homeContent/content'
import BScroll from 'better-scroll'
export default {
    data() {
        return {
       
        }
    },
    components: {
        'v-header': header,
        'v-nav': nav,
        'v-content': content
    }
}
</script>
<style lang="less" scoped>
.home-page {
    header {
        height: 100px;
        background:#fff;
        position: relative;
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%)
        }
    }
}
</style>


