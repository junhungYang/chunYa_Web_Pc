<template>
    <div class="slider">
        <div class="desc">
            <img src="../../assets/img/addWhite.png" alt="">
            <p>始于自然，缘于发生</p>
            <p>Come from the nature, Change from the unknown</p>
        </div>
        <div class="slider-wrap" v-if="dataGetSuccess">
            <slider :loop="loop" :autoPlay="autoPlay" v-if="dataGetSuccess">
                    <div class="slider-item" v-for=" item in posterList" :key="item.id">
                        <img class="slider-pic" :src="item.image_url" alt="">
                    </div>
            </slider>
        </div>
    </div>
</template>
<script>
import slider from './sliderSub/slider'
import {spreadList} from '../../sendRequest/sendRequest'
export default {
    data() {
        return {
            loop:true,
            autoPlay:true,
            dataGetSuccess:false,
            posterList:[]
        }
    },
    created() {
        spreadList().then( res => {
            let data = res.data
           if(data.errno === 0) {
              this.posterList = data.data.adList
              this.dataGetSuccess = true
           }else {
               alert(data.msg)
           }
        })
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
    max-height: 1920px;
    overflow: hidden;
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


