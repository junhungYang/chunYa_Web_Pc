
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
                    <li v-for="item in activeData.responsibility" >{{item}}</li>
                </ul>
            </div>
            <div class="qualifications">
                <header>
                    <i class="icon"></i>
                    <div class="text">
                        <p>任职资格</p>
                        <p>qualifications</p>
                    </div>
                </header>
                <ul class="main">
                    <li v-for="item in activeData.qualifications" >{{item}}</li>
                </ul>
            </div>
            <div class="treatment">
                <header>
                    <i class="icon"></i>
                    <div class="text">
                        <p>福利待遇</p>
                        <p>Welfare treatment</p>
                    </div>
                </header>
                <ul class="main">
                    <li v-for="item in activeData.treatment" >{{item}}</li>
                </ul>
            </div>
            <div class="work-time">
                <header>
                    <i class="icon"></i>
                    <div class="text">
                        <p>上班时间：</p>
                        <p>working time</p>
                    </div>
                </header>
                <div class="main">
                    <p>早上9:30-12:00   下午14:00-18:30  大小周  节假日按法定放假</p>
                </div>
            </div>
            <div class="work-address">
                <header>
                    <i class="icon"></i>
                    <div class="text">
                        <p>工作地址：</p>
                        <p>work address</p>
                    </div>
                </header>
                <div class="main">
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
                        <img src="" alt="">
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
                font-weight: 600;
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
        .responsibility {
            margin-top: 135px;
            header {
                display: flex;
                .text {
                    p {
                        font-family: normal
                    }
                }
            }
        }
    }
}
</style>
