<template>
    <div class="home-page" >
        <v-slider></v-slider>
        <div class="desc-wrap" :style="`height:${contWrap_H}`">
            <div class="desc-cont" ref="descCont" ></div>
        </div>
    </div>
</template>
<script>
import slider from './homeCont/slider'
import {homeDesc} from '../sendRequest/sendRequest.js'
import Vue from 'vue'
export default {
    data() {
        return {
            contWrap_H: '',
            imgLoadRecord:[]
        }
    },
    created() {
      
    },
    mounted() {
        homeDesc().then(res => {
            this.$refs.descCont.innerHTML = res.data.data.contentDesc
            let oImgList = document.getElementsByClassName('fr-fin')
            Array.from(oImgList).forEach(item => {
                item.onload = () => {
                    this.imgLoadRecord.push('loaded')
                    this.imgLoadRecord.length === oImgList.length ? this.domRefresh() : ''
                }
            })
        }).catch(res => {
            alert(res.data.data.errmsg)
        })

    },
    methods: {
        domRefresh() {
            this.$nextTick(() => {
                this.contWrap_H = this.$refs.descCont.clientHeight + 'px'
                console.log(111111)
            })
        }
    },
    components: {
        'v-slider': slider
    }
}
</script>
<style lang="less">
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
    .desc-wrap {
        overflow: hidden;
        position: relative;
        .desc-cont {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
                .fr-fin {
                    width: 1920px !important;
                }
        }
    }
}
</style>


