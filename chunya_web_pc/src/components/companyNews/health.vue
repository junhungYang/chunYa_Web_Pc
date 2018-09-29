<template>
    <div class="health">
        <ul v-show="!healthDescShowFlag">
            <li v-for="item in healthData" @click="showingHealthDesc(item)">
                <div class="img">
                    <img :src="item.coverPicUrl" alt="">
                </div>
                <div class="text">
                    <div class="title">{{item.name}}</div>
                    <div class="cont" v-html="item.contentDesc"></div>
                    <div class="time">
                        <img src="../../assets/img/time.png" alt="">
                        <span v-text="getTime(item.addTime)"></span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="btn" v-show="!healthDescShowFlag">
            <span class="prev" 
            @click="changeHealthPage('prev')">&lt;&lt; 上一页</span>
            <span class="next"
            @click="changeHealthPage('next')">下一页 &gt;&gt;</span>
        </div>
        <div class="descContent" v-show="healthDescShowFlag">
            <div class="title">{{healthShowContent.name}}</div>
            <div class="cont" v-html="healthShowContent.contentDesc"></div>
            <div class="img">
                <img :src="healthShowContent.coverPicUrl" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import {newsList} from '../../sendRequest/sendRequest'
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
            healthPageIndex:1,
            healthData:'',
            healthShowContent:''
        }
    },
    created() {
        this.getHealthPage()
    },
    computed: {
        ...mapState(['healthDescShowFlag'])
    },
    methods: {
        ...mapMutations(['contDescFlagRefresh']),
        getTime(time) {
            let timeObj = new Date(time)
            let year = timeObj.getFullYear()
            let day = timeObj.getDate()
            let month = timeObj.getMonth() + 1
            return `${year}-${month}-${day}`
        },
        getHealthPage() {
            newsList({
                type: 3,
                page: this.healthPageIndex,
                size: 10
            }).then(res => {
                if(res.data.errno === 0) {
                    this.healthData = res.data.data.data
                    console.log(this.healthData)
                }else {
                    alert(res.data.msg)
                }
            })
        },
        changeHealthPage(payload) {
            if(this.healthPageIndex !== 1 && payload === 'prev') {
                this.healthPageIndex --
                this.getHealthPage()
            }else if (payload === 'next') {
                this.healthPageIndex ++
                this.getHealthPage()
            }
        },
        showingHealthDesc(item) {
            this.contDescFlagRefresh({mod:'health',flag:true})
            this.healthShowContent = item
        },
    }
}
</script>

<style lang="less" scoped>
.health {
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 580px;
            height: 160px;
            margin-top: 60px;
            display: flex;
            padding:0 10px;
            .img,.text {
                flex: 1;
            }
            .img {
                overflow: hidden;
                img {
                    // width: 100%;
                }
            }
            .text {
                padding-left: 25px;
                overflow: hidden;
                position: relative;
                .title {
                    font-size: 18px;
                    color:#202020;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .cont {
                    margin-top: 15px;
                    height: 75px;
                    // border: 1px solid red;
                    font-size: 14px;
                    line-height: 25px;
                    overflow: hidden;
                    color:#7a7a7a;
                }
                .time {
                    position: absolute;
                    left: 25px;
                    bottom: 0;
                    font-size: 14px;
                    img {
                        width: 14px;
                        margin-right: 4px;
                    }
                    span {
                        color:#272727;
                    }
                }
            }
        }
    }
    .btn {
        width: 200px;
        margin: 0 auto;
        margin-top: 80px;
        span {
            font-size: 14px;
            color: #7a7a7a;
            cursor: pointer;
        }
        span:hover {
            color: #5a5a5a;
            font-weight: bold;
        }
        span:nth-of-type(1) {
            margin-right: 15px;
        }
        span:nth-of-type(2) {
            margin-left: 15px;
        }
    }
    .descContent {
        .title,.cont,.img {
            text-align: center;
        }
        .title {
            padding-top: 50px;
            font-size: 18px;
            color:#353535;
        }
        .cont {
            margin-top: 30px;
            font-size: 14px;
            color:#8c8c8c;
            line-height: 30px;
        }
        .img {
            margin-top :50px;
        }
    }
}
</style>

