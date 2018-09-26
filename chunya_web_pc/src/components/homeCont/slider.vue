<template>
    <div class="slider">
        <div class="desc">
            <img src="../../assets/img/addWhite.png" alt="">
            <p>始于自然，缘于发生</p>
            <p>Come from the nature, Change from the unknown</p>
        </div>
        <div class="wrap">

        </div>
        <div class="control">
            <img src="../../assets/img/leftClick.png" alt="">
            <img src="../../assets/img/rightClick.png" alt="">
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
  
        }
    },
    mounted() {

    },
}
</script>
<style lang="less" scoped>
.slider {
    height: 700px;
    background:#ddd;
    position: relative;
    .wrap {
        width: 100%;
        overflow: hidden;
        height: 700px;
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


