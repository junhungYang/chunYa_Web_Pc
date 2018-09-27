<template>
    <div class="news">
        <div class="menu-list">
            <p>产品预览</p>
        </div>
        <div class="content">
            <ul ref="goodsList">
                <li class="good" v-for="item,index in goodsList">1</li>
                <!-- <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li> -->
            </ul>
        </div>
    </div>
</template>
<script>
import {previewGoodsList} from '../sendRequest/sendRequest'
import Vue from 'vue'
export default {
    data() {
        return {
            goodsList:[]
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
            this.goodsList.forEach( (item,index) => {
                this.$refs.goodsList.children[index].innerHTML = item.contentDesc
            })
        }
    }
}
</script>

<style lang="less" scoped>
.news {
    width: 1200px;
    margin: 0 auto;
    border: 1px solid red;
    display: flex;
    .menu-list {
        width: 300px;
        border: 1px solid green;
        p {
            height: 50px;
        }
    }
    .content {
        flex:1;
        border: 1px solid orange;
        min-height: 800px;
    }
}
</style>