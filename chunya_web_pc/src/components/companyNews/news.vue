<template>
    <div class="news-box">
        <ul v-show="!newsDescShowFlag">
            <li v-for="item in newsData" @click="showingNewsDesc(item)">
                <div class="news-img">
                    <img :src="item.coverPicUrl" alt="">
                </div>
                <div class="text">
                    <div class="news-title">{{item.name}}</div>
                    <div class="news-cont" v-html="item.contentDesc"></div>
                    <div class="news-time">
                        <img src="../../assets/img/time.png" alt="">
                        <span v-text="getTime(item.addTime)"></span>
                        </div>
                </div>
            </li>
        </ul>
        <div class="btn" v-show="!newsDescShowFlag">
            <span class="prev" 
            @click="changeNewsPage('prev')">&lt;&lt; 上一页</span>
            <span class="next"
            @click="changeNewsPage('next')">下一页 &gt;&gt;</span>
        </div>
        <div class="newsDescContent" v-show="newsDescShowFlag">
            <div class="title">{{newsShowContent.name}}</div>
            <div class="news-content" v-html="newsShowContent.contentDesc"></div>
            <div class="img">
                <img :src="newsShowContent.coverPicUrl" alt="">
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
            newsData:'',
            newsPageIndex: 1,
            newsShowContent:'',
        }
    },
    created() {
        this.getNewsPage()
    },
    computed: {
        ...mapState(['newsDescShowFlag'])
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
        getNewsPage() {
            newsList({
                type: 1,
                page: this.newsPageIndex,
                size: 10
            }).then(res => {
                if(res.data.errno === 0) {
                    this.newsData = res.data.data.data
                }else {
                    alert(res.data.msg)
                }
            })
        },
        changeNewsPage(payload) {
            if(this.newsPageIndex !== 1 && payload === 'prev') {
                this.newsPageIndex --
                this.getNewsPage()
            }else if (payload === 'next') {
                this.newsPageIndex ++
                this.getNewsPage()
            }
        },
        showingNewsDesc(item) {
            this.contDescFlagRefresh({mod:'news',flag:true})
            this.newsShowContent = item
        },
    }
}
</script>

<style lang="less" scoped>
.news-box {
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 580px;
            height: 160px;
            margin-top: 60px;
            display: flex;
            padding:0 10px;
            .news-img,.text {
                flex: 1;
            }
            .news-img {
                overflow: hidden;
                img {
                    // width: 100%;
                }
            }
            .text {
                padding-left: 25px;
                overflow: hidden;
                position: relative;
                .news-title {
                    font-size: 18px;
                    color:#202020;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .news-cont {
                    margin-top: 15px;
                    height: 75px;
                    // border: 1px solid red;
                    font-size: 14px;
                    line-height: 25px;
                    overflow: hidden;
                    color:#7a7a7a;
                }
                .news-time {
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
    .newsDescContent {
        .title,.news-content,.img {
            text-align: center;
        }
        .title {
            padding-top: 50px;
            font-size: 18px;
            color:#353535;
        }
        .news-content {
            margin-top: 30px;
            font-size: 14px;
            color:#8c8c8c;
            line-height: 30px;
        }
        .events-content {
            text-align: center;
            margin-top: 30px;
            font-size: 14px;
            line-height: 40px;
            color:#8c8c8c;
        }
        .img {
            margin-top :50px;
        }
    }
}
</style>

