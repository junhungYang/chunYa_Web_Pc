<template>
    <div class="company-news">
        <div class="header">
            <div class="text-box">
                <p>COMPANY NEWS</p>
                <P> 
                    <img src="../assets/img/lineGreen.png" alt="">
                    公司动态 
                    <img src="../assets/img/lineGreen.png" alt="">
                </P>
                <p>始于自然，源于发生</p>
            </div>
            <div class="menu-list">
                <ul>
                    <li :class="activePage === 'news' ? 'active' : 'unActive'" 
                        @click.stop="newsPageShow('news')">
                        <span>新闻快讯</span>
                    </li>
                    <li :class="activePage === 'events' ? 'active' : 'unActive'" 
                        @click.stop="eventsPageShow('events')">
                        <span>活动资讯</span>
                    </li>
                    <li :class="activePage === 'health' ? 'active' : 'unActive'" 
                        @click.stop="healthPageShow('health')">
                        <span>健康分享</span>
                    </li>
                    <!-- <li :class="activePage === 'video' ? 'active' : 'unActive'" 
                        @click.stop="activePage = 'video'">
                        <span>宣传视频</span>
                    </li>
                    <li :class="activePage === 'videoDesc' ? 'active' : 'unActive'" 
                        @click.stop="activePage = 'videoDesc'">
                        <span>视频详情</span>
                    </li> -->
                </ul>
            </div>
        </div>
        <div class="content">
            <div ref="news" class="news-box" v-show="activePage === 'news'">
                <ul v-show="!newsDescShowFlag">
                    <li v-for="item in newsData" @click="showingNewsDesc(item)">
                        <div class="news-img">
                            <img :src="item.coverPicUrl" alt="">
                        </div>
                        <div class="text">
                            <div class="news-title">{{item.name}}</div>
                            <div class="news-cont" v-html="item.contentDesc"></div>
                            <div class="news-time">
                                <img src="../assets/img/time.png" alt="">
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
            <div ref="events" class="events" v-show="activePage === 'events'">
                <ul v-show="!eventsDescShowFlag">
                    <li v-for="item in eventsData" @click="showingEventsDesc(item)">
                        <div class="news-img">
                            <img :src="item.coverPicUrl" alt="">
                        </div>
                        <div class="text">
                            <div class="news-title">{{item.name}}</div>
                            <div class="news-cont" v-html="item.contentDesc"></div>
                            <div class="news-time">
                                <img src="../assets/img/time.png" alt="">
                                <span v-text="getTime(item.addTime)"></span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="btn" v-show="!eventsDescShowFlag">
                    <span class="prev" 
                    @click="changeEventsPage('prev')">&lt;&lt; 上一页</span>
                    <span class="next"
                    @click="changeEventsPage('next')">下一页 &gt;&gt;</span>
                </div>
                <div class="newsDescContent" v-show="eventsDescShowFlag">
                    <div class="title">{{eventsShowContent.name}}</div>
                    <div class="events-content" v-html="eventsShowContent.contentDesc"></div>
                    <div class="img">
                        <img :src="eventsShowContent.coverPicUrl" alt="">
                    </div>
                </div>
            </div>
            <div ref="health" class="health" v-show="activePage === 'health'">
                <ul v-show="!healthDescShowFlag">
                    <li v-for="item in healthData" @click="showingHealthDesc(item)">
                        <div class="news-img">
                            <img :src="item.coverPicUrl" alt="">
                        </div>
                        <div class="text">
                            <div class="news-title">{{item.name}}</div>
                            <div class="news-cont" v-html="item.contentDesc"></div>
                            <div class="news-time">
                                <img src="../assets/img/time.png" alt="">
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
                <div class="newsDescContent" v-show="healthDescShowFlag">
                    <div class="title">{{healthShowContent.name}}</div>
                    <div class="events-content" v-html="healthShowContent.contentDesc"></div>
                    <div class="img">
                        <img :src="healthShowContent.coverPicUrl" alt="">
                    </div>
                </div>
            </div>
            <!-- <div ref="health" class="cont-box" v-show="activePage === 'health'"></div>
            <div ref="health" class="cont-box" v-show="activePage === 'health'"></div> -->
            <div ref="newsDesc" class="cont-box" v-show="activePage === 'newsDesc'"></div>
        </div>
    </div>
</template>
<script>
import {newsList} from '../sendRequest/sendRequest'
export default {
    data() {
        return {
            activePage: 'news',
            newsData:'',
            newsPageIndex: 1,
            newsDescShowFlag:false,
            newsShowContent:'',
            //events
            eventsPageIndex: 1,
            eventsData:'',
            eventsDescShowFlag:false,
            eventsShowContent:'',
            //health
            healthPageIndex:1,
            healthData:'',
            healthDescShowFlag:false,
            healthShowContent:''
        }
    },
    created() {
        this.sendRequest()
    },
    methods: {
        getTime(time) {
            let timeObj = new Date(time)
            console.log(timeObj)
            let year = timeObj.getFullYear()
            console.log(year)
            let day = timeObj.getDate()
            let month = timeObj.getMonth() + 1
            let hour = timeObj.getHours()
            let min = timeObj.getMinutes()
            let sec = timeObj.getSeconds()
            return `${year}-${month}-${day}`

        },
        sendRequest() {
            //新闻快讯
            this.getNewsPage()
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
            this.newsDescShowFlag = true
            this.newsShowContent = item
        },
        newsPageShow(pageIndex) {
            this.activePage = pageIndex
            this.newsDescShowFlag = false
        },
        //events部分
        eventsPageShow(pageIndex) {
            this.activePage = pageIndex;
            this.eventsDescShowFlag = false
            this.getEventsPage()
        },
        getEventsPage() {
            newsList({
                type: 2,
                page: this.eventsPageIndex,
                size: 10
            }).then(res => {
                if(res.data.errno === 0) {
                    this.eventsData = res.data.data.data
                    console.log(this.eventsData)
                }else {
                    alert(res.data.msg)
                }
            })
        },
        changeEventsPage(payload) {
            if(this.eventsPageIndex !== 1 && payload === 'prev') {
                this.eventsPageIndex --
                this.getEventsPage()
            }else if (payload === 'next') {
                this.eventsPageIndex ++
                this.getEventsPage()
            }
        },
        showingEventsDesc(item) {
            this.eventsDescShowFlag = true
            this.eventsShowContent = item
        },
        //health部分
        healthPageShow(pageIndex) {
            this.activePage = pageIndex
            this.healthDescShowFlag = false
            this.getHealthPage()
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
            this.healthDescShowFlag = true
            this.healthShowContent = item
        },
        //
    }

}
</script>

<style lang="less" scoped>
.company-news {
    .header {
        background: #e5fff4;
        height: 285px;
        .text-box {
            width: 690px;
            margin: 0 auto;
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
            margin: 0 auto;
            margin-top: 40px;
            width: 800px;
            ul {
                display:flex;
                li {
                    flex: 1;
                    margin:0 10px;
                    span {
                        display:block;
                        width: 140px;
                        border-radius: 30px;
                        margin: 0 auto;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        letter-spacing: 1px;
                        cursor: pointer;
                        font-size: 16px;
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
    .content {
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 100px;
        min-height: 400px;
        .news-box,.events,.health {
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
    }
}
</style>

