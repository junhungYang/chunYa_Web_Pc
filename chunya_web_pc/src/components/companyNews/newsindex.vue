<template>
    <div class="poster">
        <img src="../../assets/img/newsindex.jpg">
    <div class="news-index">
        <div class="news-index-top">
            <ul>
                <li v-for="(item,index) in toptext" :class="{toplichoose: index == topchooseid}" @click="changenews(index)">{{item}}</li>
            </ul>
        </div>
        <div class="news-index-main">
            <ul>
                <li v-for="(item,index) in newsdata" @click="showingNewsDesc(item.id)"><img :src="item.coverPicUrl"><div><p class="title">{{item.name}}</p><p class="brief">{{item.brief}}</p>
                    <span v-text="getTime(item.addTime)"></span></div></li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
import {newsList} from '../../sendRequest/sendRequest'
export default {
    data() {
        return {
           toptext:['新闻快讯','活动资讯','健康分享'],
           topchooseid: null,
           pageIndex:1,
           newsdata:''
        }
    },
    computed :{
       
    },
    mounted() {
    },
    methods : {
        getDetail(){
            // console.log(this.$store.state.newsDetailId);
            newsList({
                type: this.topchooseid+1,
                page: this.PageIndex
            }).then(data => {
                this.newsdata = data.data.data.data
            })
        },
        getTime(time) {
            let timeObj = new Date(time)
            let year = timeObj.getFullYear()
            let day = timeObj.getDate()
            let month = timeObj.getMonth() + 1
            return `${year}.${month}.${day}`
        },
        changenews(index){
            this.$router.push({path:'/newsindex',query:{newstype:index+1}});
        },
        showingNewsDesc(id) {
            console.log(id);
            this.$router.push({path:'/newsdetail',query:{id:id}})
        }
    },
    created(){
        this.topchooseid = this.$route.query.newstype-1;
        this.getDetail();
    },
    watch: {
        '$route'(to,from){
            // console.log(to.path)
            if(to.path === '/newsindex'){
                this.topchooseid = this.$route.query.newstype-1;
                this.getDetail();
            }
        }
    }
   
}
</script>
<style lang="less" scoped>
    .poster{
        width: 100%;
        min-width: 1200px;
        img{
            width: 100%;
        }
    }
    .news-index{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        .news-index-top{
            width: 100%;
            height: 94px;
            margin-top: 102px;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                li{
                    width: 336px;
                    height: 82px;
                    border: 6px solid #858585;
                    text-align: center;
                    line-height: 82px;
                    font-size: 30px;
                    font-weight: bold;
                    color: #858585;
                    cursor: pointer;
                }
                li:nth-child(2){
                    margin: 0 78px;
                }
                .toplichoose{
                    width: 348px;
                    height: 94px;
                    line-height: 94px;
                    color: black;
                    background-image: url('../../assets/img/about_iconBox.jpg');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    border: 0px;
                }
            }
        }
        .news-index-main{
            width: 100%;
            ul{
                padding-bottom: 269px;
                li{
                    width: 100%;
                    height: 250px;
                    padding: 100px 0;
                    display: flex;
                    cursor: pointer;
                    border-bottom: 1px solid;
                    border-color: #B2B2B2;
                    img{
                        width: 350px;
                        height: 250px;
                    }
                    div{
                        margin-left: 72px;
                        flex: 1;
                        height: 100%;
                        .title{
                            font-size: 28px;
                            color: #151417;
                            padding-top: 20px;
                        }
                        .brief{
                            margin: 50px 0;
                            font-size: 18px;
                            color: #858585;
                            display: black;
                            width: 726px;
                            height: 63px;
                            line-height: 35px;
                            overflow:hidden; 
                            text-overflow:ellipsis;
                            display:-webkit-box; 
                            -webkit-box-orient:vertical;
                            -webkit-line-clamp:2; 
                        }
                        span{
                            display: block;
                            width: 106px;
                            height: 34px;
                            border: 1px solid #858585;
                            font-size: 18px;
                            text-align: center;
                            line-height: 34px;
                            color: #858585;
                        }
                    }
                }
                li:hover{
                    span{
                        color: white;
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-image: url('../../assets/img/buttoncolor.png');
                    }
                }
            }
        }
    }
    
</style>
