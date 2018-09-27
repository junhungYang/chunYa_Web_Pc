
<template>
    <div class="contact">
        <div class="menu-list">
            <ul>
                <li @click.stop="activePage = 'adverShop'">招商合作</li>
                <li @click.stop="activePage = 'adverPer'">招贤纳士</li>
                <li @click.stop="activePage = 'callUs'">企业文化</li>
            </ul>
        </div>
        <div class="content">
            <div ref="adverShop" class="cont-box" v-show="activePage === 'adverShop'"></div>
            <div ref="adverPer" class="cont-box" v-show="activePage === 'adverPer'"></div>
            <div ref="callUs" class="cont-box" v-show="activePage === 'callUs'"></div>
        </div>
    </div>
</template>
<script>
import {commonArticle} from '../sendRequest/sendRequest'
export default {
    data() {
        return {
            activePage: 'adverShop'
        }
    },
    created() {
        this.sendRequest()
    },
    methods: {
        sendRequest() {
            //招商合作
            commonArticle({id: 2}).then(res => {
                if(res.data.errno === 0) {
                    this.$refs.adverShop.innerHTML = res.data.data.contentDesc
                }else {
                    alert(res.data.msg)
                }
            })
            //招贤纳士
            commonArticle({id: 6}).then(res => {
                if(res.data.errno === 0) {
                    this.$refs.adverPer.innerHTML = res.data.data.contentDesc
                }else {
                    alert(res.data.msg)
                }
            })
            //联系我们
            commonArticle({id: 7}).then(res => {
                if(res.data.errno === 0) {
                    this.$refs.callUs.innerHTML = res.data.data.contentDesc
                }else {
                    alert(res.data.msg)
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
.contact {
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
    flex: 1;
    border: 1px solid orange;
    height: 800px;
    .cont-box {
      height: 100%;
    }
  }
}
</style>
