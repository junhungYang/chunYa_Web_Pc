<template>
    <div class="company-news">
        <div class="menu-list">
            <ul>
                <li @click.stop="activePage = 'company'">公司介绍</li>
                <li @click.stop="activePage = 'brand'">品牌介绍</li>
                <li @click.stop="activePage = 'culture'">企业文化</li>
            </ul>
        </div>
        <div class="content">
            <div ref="company" class="cont-box" v-show="activePage === 'company'"></div>
            <div ref="brand" class="cont-box" v-show="activePage === 'brand'"></div>
            <div ref="culture" class="cont-box" v-show="activePage === 'culture'"></div>
        </div>
    </div>
</template>
<script>
import {commonArticle} from '../sendRequest/sendRequest'
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
            commonArticle({id: 3}).then(res => {
                if(res.data.errno === 0) {
                    this.$refs.company.innerHTML = res.data.data.contentDesc
                }else {
                    alert(res.data.msg)
                }
            })
            //品牌介绍
            commonArticle({id: 4}).then(res => {
                if(res.data.errno === 0) {
                    this.$refs.brand.innerHTML = res.data.data.contentDesc
                }else {
                    alert(res.data.msg)
                }
            })
            //企业文化
            commonArticle({id: 5}).then(res => {
                if(res.data.errno === 0) {
                    this.$refs.culture.innerHTML = res.data.data.contentDesc
                }else {
                    alert(res.data.msg)
                }
            })
        },
    }

}
</script>

<style lang="less" scoped>
.company-news {
    width: 1200px;
    margin: 0 auto;
    border: 1px solid red;
    display: flex;
    .menu-list {
        width: 300px;
        border: 1px solid green;
        li {
            height: 50px;
        }
    }
    .content {
        flex:1;
        border: 1px solid orange;
        height: 800px;
        .cont-box {
            height: 100%;
        }
    }
}
</style>

