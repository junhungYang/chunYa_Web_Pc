<template>
    <div class="home-page" >
        <v-slider></v-slider>
        <v-content></v-content>
    </div>
</template>
<script>
import slider from './homeCont/slider'
import content from './homeCont/content'
export default {
    data() {
        return {
       
        }
    },
    components: {
        'v-slider': slider,
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


