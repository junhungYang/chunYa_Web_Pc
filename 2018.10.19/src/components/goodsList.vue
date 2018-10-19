<template>
    <div class="goods-list" v-html="this.goodsList.contentDesc">
    </div>
</template>
<script>
import {previewGoodsList} from '../sendRequest/sendRequest'
import Vue from 'vue'
export default {
    data() {
        return {
            goodsList:[],
            contentDesc: {},
            showFlag: false,
            contDescShowFlag:false
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
            // let contDesc = document.getElementsByClassName('contentDesc')
            this.goodsList.forEach( (item,index) => {
                // contDesc[index].innerHTML = item.contentDesc
            })
            this.goodsList = this.goodsList[0]
        },
        getContDesc(itemObj) {
            this.contentDesc = itemObj
            this.contDescShowFlag = true
            this.showFlag = true
        }
    }
}
</script>

<style lang="less">
.goods-list {
       p{
           display: block;
           min-width: 1200px;
           width: 100%;
           img{
                width: 100% !important;
                height: auto !important;
           }
       }
}
</style>