<template>
    <div class="swiper-container" >
        <div class="swiper-wrapper">
            <!-- <div class="slider-item" v-for=" item in posterList" :key="item.id">
                <img class="slider-pic" :src="item.image_url" alt="">
            </div> -->
            <div v-for="item in posterList" class="swiper-slide swiper-item" style="background:#f3f3f3">
                <img :src="item.image_url" alt="">
            </div>
        </div>
        <div class="swiper-button-prev swiper-button-bgImg1" ></div>
        <div class="swiper-button-next swiper-button-bgImg2"></div>
    </div>
</template>
<script>
import {spreadList} from '../../sendRequest/sendRequest'
import Swiper from 'swiper'
import Vue from 'vue'
export default {
    data() {
        return {
            posterList:[]
        }
    },
    mounted() {
        spreadList().then( res => {
            let data = res.data
           if(data.errno === 0) {
              this.posterList = data.data.adList
              console.log(this.posterList)
                Vue.nextTick(() => {
                    var mySwiper = new Swiper('.swiper-container', {
                        autoplay:{
                            disableOnInteraction: false
                        },
                        loop:true,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    })
                })
           }else {
               alert(data.msg)
           }
        })
    }
}
</script>
<style lang="less" scoped>
.swiper-container {
    height: 700px;
    position: relative;
    max-width: 1920px;
    overflow: hidden;
    .swiper-item {
        position: relative;
        overflow: hidden;
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%)
        }
    }
    .swiper-button-bgImg1 {
        background-image: url('../../assets/img/leftClick.png') !important;
        left: 25px;
    }
    .swiper-button-bgImg2 {
        background-image: url('../../assets/img/rightClick.png') !important;
        right: 25px;
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
            // font-family: hansansBold;
            color:#fff;
        }
        p:last-of-type {
            text-align: center;
            margin-top: 10px;
            font-size: 16px;
            // font-family: hansansBold;
            color:#fff;
        }
    }
}
</style>


