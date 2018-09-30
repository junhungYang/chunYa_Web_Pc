
<template>
    <div class="contact">
        <div class="header">
            <div class="text-box">
                <p>ADVERTISE</p>
                <P> 
                    <img src="../assets/img/lineGreen.png" alt="">
                    企业招聘 
                    <img src="../assets/img/lineGreen.png" alt="">
                </P>
                <p>始于自然，源于发生</p>
            </div>
            <div class="menu-list">
                <ul>
                    <li :class="activePage === 'adverShop' ? 'active' : 'unActive'" 
                        @click.stop="activePage = 'adverShop'">
                        <span>招商合作</span>
                    </li>
                    <li :class="activePage === 'adverPer' ? 'active' : 'unActive'" 
                        @click.stop="activePage = 'adverPer'">
                        <span>招贤纳士</span>
                    </li>
                    <li :class="activePage === 'callUs' ? 'active' : 'unActive'" 
                        @click.stop="activePage = 'callUs'">
                        <span>联系我们</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="brand-logo">
            <img src="../assets/img/brandGreen.png" alt="">
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
    .header {
        background: #e5fff4;
        height: 285px;
        .text-box,.menu-list {
            width: 690px;
            margin: 0 auto;
        }
        .text-box {
            padding-top: 50px;
            p:nth-of-type(1) {
                font-size: 33px;
                color: #1caa70;
                text-align: center;
                font-family: helvetica;
                font-weight: bold;
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
        .menu-list {
            margin-top: 40px;
            ul {
                display:flex;
                li {
                    flex: 1;
                    span {
                        display:block;
                        width: 165px;
                        border-radius: 30px;
                        margin: 0 auto;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        letter-spacing: 1px;
                        cursor: pointer;
                        font-size: 18px;
                    }
                }
                .active {
                    span {
                        background:#1caa70;
                        color:#fff;
                    }
                }
                .unActive {
                    span {
                        border: 1px solid #1caa70;
                        color: #1caa70;
                    }
                }
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
        width: 1200px;
        margin: 0 auto;
        font-size: 14px;
        div {
            line-height: 30px;
            color:#8c8c8c;
            text-align: center;
            margin-bottom: 60px;
        }
    }
}
</style>
