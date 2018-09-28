<template>
    <div class="company-news">
        <div class="header">
            <div class="text-box">
                <p>ABOUT ME</p>
                <P> 
                    <img src="../assets/img/lineGreen.png" alt="">
                    关于我们 
                    <img src="../assets/img/lineGreen.png" alt="">
                </P>
                <p>始于自然，源于发生</p>
            </div>
            <div class="menu-list">
                <ul>
                    <li :class="activePage === 'company' ? 'active' : 'unActive'" 
                        @click.stop="activePage = 'company'">
                        <span>公司介绍</span>
                    </li>
                    <li :class="activePage === 'brand' ? 'active' : 'unActive'" 
                        @click.stop="activePage = 'brand'">
                        <span>品牌介绍</span>
                    </li>
                    <li :class="activePage === 'culture' ? 'active' : 'unActive'" 
                        @click.stop="activePage = 'culture'">
                        <span>企业文化</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="brand-logo">
            <img src="../assets/img/brandGreen.png" alt="">
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