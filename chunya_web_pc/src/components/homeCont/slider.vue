<template>
    <div class="slider">
        <div class="desc">
            <img src="../../assets/img/addWhite.png" alt="">
            <p>始于自然，缘于发生</p>
            <p>Come from the nature, Change from the unknown</p>
        </div>
        <div class="slider-wrap">
            <slider :loop="loop" :autoPlay="autoPlay">
                    <div class="slider-item">
                        <img class="slider-pic" src="../../assets/img/poster1.jpg" alt="">
                    </div>
                    <div class="slider-item">
                        <img class="slider-pic" src="../../assets/img/poster2.jpg" alt="">
                    </div>
                    <div class="pic-wrap">
                        <img class="slider-pic" src="../../assets/img/poster1.jpg" alt="">
                    </div>
                    <div class="pic-wrap">
                        <img class="slider-pic" src="../../assets/img/poster2.jpg" alt="">
                    </div>
            </slider>
        </div>
    </div>
</template>
<script>
import slider from './sliderSub/slider'
export default {
    data() {
        return {
            loop:true,
            autoPlay:true
        }
    },
    mounted() {

    },
    components: {
        slider
    }
}
</script>
<style lang="less" scoped>
.slider {
    height: 700px;
    background:#ddd;
    position: relative;
    .slider-wrap {
        width: 100%;
        overflow: hidden;
        height: 700px;
            .slider-item {
                width: 100%;
                height: 100%;
                overflow: hidden;
                display: inline-block;
                img {
                    height: 100%;
                }
            }
        
    }
    .desc {
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        z-index: 99;
        img {
            display: block;
            margin: 0 auto;
        }
        p:first-of-type {
            margin-top: 30px;
            font-size: 50px;
            font-family: hansansBold;
            color:#fff;
        }
        p:last-of-type {
            text-align: center;
            margin-top: 10px;
            font-size: 16px;
            font-family: hansansBold;
            color:#fff;
        }
    }
    .control {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        z-index: 99;
        img {
            position: absolute;
        }
        @media screen and (min-width: 1920px){
            img:nth-of-type(1) {
                left: 260px;
            }
            img:nth-of-type(2) {
                right: 260px;
            }
        }
        @media screen and (min-width: 1599px) and (max-width:1920px){
            img:nth-of-type(1) {
                left: 130px;
            }
            img:nth-of-type(2) {
                right: 130px;
            }
        }
        @media screen and (min-width: 1400px) and (max-width:1955){
            img:nth-of-type(1) {
                left: 70px;
            }
            img:nth-of-type(2) {
                right: 70px;
            }
        }
        @media screen and (max-width:1400px) {
            img:nth-of-type(1) {
                left: 40px;
            }
            img:nth-of-type(2) {
                right: 40px;
            }
        }
    }
}
</style>


