
<template>
    <div class="advertise">
        <div class="poster">
            <img src="../assets/img/advertise_poster.jpg" alt="">
        </div>
        <div class="content">
            <ul class="nav-list">
                <li v-for="item in advertiseData">{{item.jobName}}</li>
            </ul>
            <div class="desc">
                <p class="title">寻找这样的你：</p>
                <div class="main" v-html="activeData.desc"></div>
                <p class="icon">+</p>
            </div>
            <div class="responsibility">
                <header>
                    <i class="icon">
                        <img src="../assets/img/advertise_responIcon.png" alt="">
                    </i>
                    <div class="text">
                        <p>岗位职责</p>
                        <p>responsibility</p>
                    </div>
                </header>
                <ul class="main">
                    <li v-for="item,index in activeData.responsibility" >
                        <p>{{item}}</p>
                        <p>0{{index+1}}</p>
                    </li>
                </ul>
            </div>
            <div class="qualifications">
                <header>
                    <i class="icon">
                        <img src="../assets/img/advertise_responIcon.png" alt="">
                    </i>
                    <div class="text">
                        <p>任职资格</p>
                        <p>qualifications</p>
                    </div>
                </header>
                <div class="main" v-html="activeData.qualifications"></div>
            </div>
            <div class="treatment">
                <header>
                    <i class="icon">
                        <img src="../assets/img/advertise_responIcon.png" alt="">
                    </i>
                    <div class="text">
                        <p>福利待遇</p>
                        <p>Welfare treatment</p>
                    </div>
                </header>
                <div class="main" v-html="activeData.treatment"></div>
            </div>
            <div class="work-time">
                <header>
                    <i class="icon">
                        <img src="../assets/img/advertise_responIcon.png" alt="">
                    </i>
                    <div class="text">
                        <p>上班时间:</p>
                        <p>working time</p>
                    </div>
                </header>
                <div class="main">
                    <p>早上9:30-12:00   下午14:00-18:30  大小周  节假日按法定放假</p>
                </div>
            </div>
            <div class="work-address">
                <header>
                    <i class="icon">
                        <img src="../assets/img/advertise_responIcon.png" alt="">
                    </i>
                    <div class="text">
                        <p>工作地址:</p>
                        <p>work address</p>
                    </div>
                </header>
                <div class="main-address">
                    <div class="text">
                        <div>
                            <p>深圳市龙华区创业路汇海广场</p>
                            <p>A座908号</p>
                        </div>
                        <div>
                            <p>联系电话：</p>
                            <p>0775-2377 5137</p>
                        </div>
                        <div>
                            <p>简历投递：</p>
                            <p>2136469690@qq.com</p>
                        </div>
                    </div>
                    <div class="map">
                        <img src="../assets/img/advertise_map.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {commonArticle} from '../sendRequest/sendRequest'
import axios from 'axios'
export default {
    data() {
        return {
            activePage: 'adverShop',
            advertiseData: [],
            activeIndex:0
        }
    },
    computed: {
        activeData() {
            if(this.advertiseData.length !== 0) {
                return this.advertiseData[this.activeIndex]
            }
        }
    },
    created() {
        this.sendRequest()
    },
    methods: {
        sendRequest() {
            axios.get('http://www.chunyajkkj.com/ch/advertise/advertise')
            .then(res => {
                console.log(res)
                if(res.data.errno === 0) {
                    this.advertiseData = res.data.data
                    console.log(res.data.data)
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
.advertise {
    max-width: 1920px;
    margin:0 auto;
    .poster {
        position: relative;
        height: 600px;
        img {
            position: absolute;
            left: 50%;
            transform: translateX(-50%)
        }
    }
    .content {
        width: 1200px;
        margin: 0 auto;
        .nav-list {
            padding-top:115px;
            display: flex;
            li {
                background-image: url(../assets/img/about_iconBox.jpg);
                width: 350px;
                height: 95px;
                background-repeat: no-repeat;
                background-size: cover;
                margin: 0 auto;
                text-align: center;
                line-height: 95px;
                font-size: 30px;
                color: #151417;
                margin-top: 15px;
                font-weight:900;
                font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif
            }
        }
        .desc {
            margin-top: 150px;
            .title {
                font-size: 21px;
                font-weight: bold;
                color: #151417;
                text-align: center;
            }
            .main {
                margin-top: 28px;
                text-align: center;
                font-size: 18px;
                line-height: 25px;
                color: #858585;
            }
            .icon {
                margin-top: 65px;
                font-size: 48px;
                font-weight: bold;
                color: #151417;
                text-align: center;
            }
        }
        .responsibility,.qualifications,.treatment,.work-time,.work-address {
            margin-top: 135px;
            header {
                display: flex;
                padding-bottom: 25px;
                border-bottom: 2px solid #ebedee;
                .text {
                    margin-left: 10px;
                    p:first-of-type {
                        font-size: 30px;
                        font-weight: bold;
                        color: #151417;
                    }
                    p:last-of-type {
                        margin-top: 4px;
                        font-size: 15px;
                        color: #858585;
                    }
                }
            }
            .main {
                margin-top: 50px;
                font-size: 18px;
                line-height: 30px;
                color: #858585
            }
        }
        .responsibility {
            .main {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li {
                    margin-top: 65px;
                    box-sizing: border-box;
                    width: 301px;
                    height: 285px;
                    padding-top: 60px;
                    padding-left: 40px;
                    padding-right: 40px;
                    font-size: 14px;
                    text-align: center;
                    line-height: 18px;
                    p:first-of-type {
                        color: #858585;
                        height: 145px;
                    }
                    p:last-of-type {
                        margin: 0 auto;
                        font-size: 50px;
                        line-height: 50px;
                        width: 50px;
                        text-align: center;
                        color: #151417;
                        border-bottom: 5px solid #151417;
                        font-family:tt0663m;
                    }
                }
                li:nth-child(odd) {
                    background:url(../assets/img/adverBox.png);
                    background-repeat: no-repeat;
                }
                li:nth-child(even) {
                    background:#ebedee;
                }
            }
        }
        .work-address {
            margin-bottom: 250px;
            .main-address {
                margin-top: 70px;
                display: flex;
                .text {
                    flex: 1;
                    div {
                        p {
                            font-size: 18px;
                            line-height: 23px;
                            color: #858585
                        }
                    }
                    div:nth-of-type(2) {
                        margin-top: 115px;
                    }
                    div:nth-of-type(3) {
                        margin-top: 50px;
                    }
                }
                .map {
                    width: 815px;
                }
            }
        }
    }
}
</style>
