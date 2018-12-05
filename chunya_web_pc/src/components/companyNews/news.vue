<template>
    <div class="news-box">
        <div class="news-getmore" @click="gonewsindex(1)">新闻快讯 ></div>
            <div class="news-box-1">
            <img :src="newsimg" :class={fade:imgupdate}>
        <ul>
            <li v-for="item,index in newsData" @click="showingNewsDesc(item.id)" @mouseover="changepic(index,item.coverPicUrl)" :key="index">
                <p>{{item.name}}</p><span v-text="getTime(item.addTime)"></span>
              <!--   <div class="news-img">
                    <img :src="item.coverPicUrl" alt="">
                </div> -->
               <!--  <div class="text">
                    <div class="news-title">{{item.name}}</div>
                    <div class="news-cont" v-html="item.contentDesc"></div>
                    <div class="news-time">
                        <img src="../../assets/img/time.png" alt="">
                        <span v-text="getTime(item.addTime)"></span>
                        </div>
                </div> -->
            </li>
        </ul>
       <!--  <div class="btn" v-show="!newsDescShowFlag">
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
        </div> -->
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
            newsimg:'',
            imgupdate: true
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
            return `${year}.${month}.${day}`
        },
        getNewsPage() {
            newsList({
                type: 1,
                page: this.newsPageIndex,
                size: 7
            }).then(res => {
                if(res.data.errno === 0) {
                    this.newsData = res.data.data.data
                    this.newsimg = res.data.data.data[0].coverPicUrl;
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
        showingNewsDesc(id) {
            // console.log(id);
            this.$store.commit('changeNewsDetailid',id);
             this.$router.push({path:'/newsdetail',query:{id:id}})
        },
        gonewsindex(index){
            this.$router.push({path:'/newsindex',query:{newstype:index}})
        },
        changepic(index,url){
            // console.log(index,url);
            if(this.newsimg == url){ return }else{
            this.newsimg = url;
            this.imgupdate = false;
            setTimeout(() => {
                this.imgupdate = true
            },200)
        }
    }
    }
}
</script>

<style lang="less" scoped>
.news-box {
        width:1200px;
        margin: 0 auto;
    .news-getmore{
        width: 345px;
        height: 92px;
        line-height: 92px;
        position: relative;
        left: calc(100% - 345px);
        background-image: url('../../assets/img/about_iconBox.jpg');
        text-align: center;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 150px;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
    }
    .news-box-1{
        width: 100%;
        margin-top: 110px;
        display: box;
        display:-webkit-box;
        display:-moz-box;
        display:-o-box;
        box-pack:start;
        -webkit-box-pack: start;
        -moz-box-pack: start;
        -o-box-pack: start;
        img{
            width:452px;
            height:290px;
            opacity: 0;    
        }
        .fade{
            opacity: 1;
            transition: .5s linear;
        }

    }
    ul {
        width: 642px;
        margin-left: 104px;
        li {
            width: 100%;
            overflow: hidden;
            height: 74px;
            display: flex;
            border-bottom:1px solid #B2B2B2;
            cursor: pointer;
            .news-img,.text {
                flex: 1;
            }
            p{
                width: 436px;
                line-height: 112px;
                color:#858585;
                font-size: 18px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            span{
                width:104px;
                height: 32px;
                border: 1px solid #858585;
                margin-top: 34px;
                margin-left: 100px;
                text-align:center;
                line-height: 32px;
                font-size: 18px;
                color:#858585;
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
        li:nth-child(1){
            height:40px;
            p{
                line-height: 45px;
            }
            span{
                margin-top: 0px;
            }
        }
        li:hover{
            p{
                color:#000000;
            }
            span{
                color:white;
                background-repeat: no-repeat;
                background-position: center center;
                background-image: url('../../assets/img/buttoncolor.png')
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

