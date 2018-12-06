<template>
    <div class="aboutUs">
        <div class="poster">
            <img src="https://chunya-static.oss-cn-shenzhen.aliyuncs.com/upload/official/aboutUs_poster.jpg" alt="">
        </div>
        <about-brand></about-brand>
        <about-slogan></about-slogan>
        <about-wish></about-wish>
        <about-worth></about-worth>
    </div>
</template>
<script>
import {commonArticle} from '../sendRequest/sendRequest'
import brand from './aboutUs/brand'
import slogan from './aboutUs/slogan'
import wish from './aboutUs/wish'
import worth from './aboutUs/worth'
export default {
    data() {
        return {
            activePage: 'company'
        }
    },
    created() {
        this.sendRequest()
    },
    methods: {
        sendRequest() {
            //公司介绍
            // commonArticle({id: 3}).then(res => {
            //     if(res.data.errno === 0) {
            //         this.$refs.company.innerHTML = res.data.data.contentDesc
            //     }else {
            //         alert(res.data.msg)
            //     }
            // })
            // //品牌介绍
            // commonArticle({id: 4}).then(res => {
            //     if(res.data.errno === 0) {
            //         this.$refs.brand.innerHTML = res.data.data.contentDesc
            //     }else {
            //         alert(res.data.msg)
            //     }
            // })
            // //企业文化
            // commonArticle({id: 5}).then(res => {
            //     if(res.data.errno === 0) {
            //         this.$refs.culture.innerHTML = res.data.data.contentDesc
            //     }else {
            //         alert(res.data.msg)
            //     }
            // })
        },
    },
    components: {
        'about-brand': brand,
        'about-slogan': slogan,
        'about-wish': wish,
        'about-worth': worth
    }
}
</script>

<style lang="less" scoped>
.aboutUs {
    .poster {
        overflow: hidden;
        height: 600px;
        position: relative;
        img {
            height: 600px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%)
        }
    }
}
</style>