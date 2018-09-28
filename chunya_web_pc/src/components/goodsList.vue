<template>
    <div class="goods-list">
        <!-- <div class="menu-list">
            <p>产品预览</p>
        </div> -->
        <div class="header">
            <div class="text-box">
                <p>Goods Preview</p>
                <P> 
                    <img src="../assets/img/lineGreen.png" alt="">
                    产品预览 
                    <img src="../assets/img/lineGreen.png" alt="">
                </P>
                <p>始于自然，源于发生</p>
            </div>
        </div>
        <div class="brand-logo" v-show="!showFlag">
            <img src="../assets/img/brandGreen.png" alt="">
        </div>
        <div class="content" v-show="!showFlag">
            <ul>
                <li class="good" v-for="item,index in goodsList" @click="getContDesc(item)">
                    <div class="text">
                        <div class="text-box">
                            <p>{{item.name}}</p>
                            <p class="contentDesc">{{item.contentDesc}}</p>
                        </div>
                    </div>
                    <div class="img">
                        <img :src="item.coverPicUrl" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <!-- <div class="contentDesc" v-show="showFlag">
            <p class="title">{{contentDesc.name}}</p>
            <p class="cont-desc">{{contentDesc.contentDesc}}</p>
            <img :src="contentDesc.coverPicUrl" alt="">
        </div> -->
    </div>
</template>
<script>
import {previewGoodsList} from '../sendRequest/sendRequest'
import Vue from 'vue'
export default {
    data() {
        return {
            goodsList:[],
            contentDesc: null,
            showFlag: false
        }
    },
    created() {
        previewGoodsList().then(res => {
            if(res.data.errno === 0) {
                this.goodsList = res.data.data
                Vue.nextTick(() => {
                    this.domInit()
                })
            }else {
                alert(res.data.msg)
            }
        })
    },
    methods: {
        domInit() {
            let contDesc = document.getElementsByClassName('contentDesc')
            this.goodsList.forEach( (item,index) => {
                contDesc[index].innerHTML = item.contentDesc
            })
        },
        getContDesc(itemObj) {
            // this.contentDesc = itemObj
            // console.log(itemObj)
            // this.showFlag = true
        }
    }
}
</script>

<style lang="less" scoped>
.goods-list {
        .header {
        background: #e5fff4;
        padding-top: 50px;
        padding-bottom: 50px;
        .text-box,.menu-list {
            width: 690px;
            margin: 0 auto;
        }
        .text-box {
            p:nth-of-type(1) {
                font-size: 33px;
                color: #1caa70;
                text-align: center;
                font-family: hansansBlack;
            }
            p:nth-of-type(2) {
                margin-top: 14px;
                font-size: 24px;
                color: #2f2725;
                text-align: center;
                img {
                    vertical-align: middle;
                }
            }
            p:nth-of-type(3) {
                margin-top: 12px;
                color: #8c8c8c;
                text-align: center;
            }
        }
    }
    .brand-logo {
        width: 690px;
        margin: 0 auto;
        height: 208px;
        position: relative;
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
    .content {
        width: 1000px;
        margin: 0 auto;
        ul {
            width: 100%;
            li {
                display:flex;
                margin: 0 auto;
                margin: 0 20px;
                height: 220px; 
                margin-bottom: 70px;
                width: 100%;
                .text {
                    flex: 1;
                    color:#515151;
                    padding-right: 25px;
                    p:nth-of-type(1) {
                        padding-top: 30px;
                        padding-left: 30px;
                        padding-right: 30px;
                        font-size: 16px;
                        font-weight: 600;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .contentDesc {
                        padding-top: 10px;
                        padding-left: 30px;
                        padding-right: 30px;
                        font-size: 14px;
                        height: 150px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        line-height: 30px;
                    }
                }
                .img {
                    overflow: hidden;
                    width: 300px;
                    img {
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>