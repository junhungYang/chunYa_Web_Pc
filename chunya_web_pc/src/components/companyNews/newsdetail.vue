<template>
    <div class="news-box">
        <div class="news-type">
            <span :class="type === 1 ? 'type-sure' : ''" @click="gonewsindex(1)">新闻快讯</span>
            <span :class="type === 2 ? 'type-sure' : ''" @click="gonewsindex(2)">活动资讯</span>
            <span :class="type === 3 ? 'type-sure' : ''" @click="gonewsindex(3)">健康分享</span>
        </div>
        <h2>{{title}}</h2>
        <p><!-- 分类:{{typename}}  &nbsp; 编辑:{{autor}} &nbsp;  -->访问:{{visitnum}} &nbsp; 发布:{{time}}</p>
        <div v-html="content" class="newsdetail-content"></div>
    </div>
</template>
<script>
import {newsDetail} from '../../sendRequest/sendRequest'
export default {
    data() {
        return {
            title:'',
            imgurl:'',
            content:'',
            type:1,
            autor:'',
            visitnum:0,
            time:''
        }
    },
    computed :{
        typename() {
            let text = ''
            switch(this.type){
                case 1 : 
                 text = '新闻资讯'
                 break;
                 case 2 :
                 text = '活动资讯'
                 break;
                 case 3 : 
                 text = '健康分享'
                 break;
            }
            return text;
        }
    },
    methods : {
        getDetail(){
            // console.log(this.$store.state.newsDetailId);
            let id = this.$route.query.id;
            newsDetail(id).then(data => {
                // console.log(data.data);
                this.autor = data.data.data.author;
                this.visitnum = data.data.data.viewCount
                this.title = data.data.data.name;
                this.imgurl = data.data.data.coverPicUrl;
                this.content = data.data.data.contentDesc;
                this.type = data.data.data.type;
                this.time = this.getTime(data.data.data.addTime);
            })
        },
        getTime(time) {
            let timeObj = new Date(time)
            let year = timeObj.getFullYear()
            let day = timeObj.getDate()
            let month = timeObj.getMonth() + 1
            let hour = timeObj.getHours()
            let minutes = timeObj.getMinutes()
            let seconds = timeObj.getSeconds()
            return `${year}-${month}-${day} ${hour}:${minutes}:${minutes}`
        },
        gonewsindex(index){
            this.$router.push({path:'/newsindex',query:{newstype:index}})
        }
    },
    created(){
        this.getDetail();
    }
   
}
</script>
<style lang="less" scoped>
    .news-box{
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        .news-type{
            margin-top: 38px;
            width: 100%;
            text-align: left;
            margin-bottom: 82px;
            span{
                display: inline-block;
                width: 106px;
                height: 34px;
                line-height: 34px;
                font-size:18px;
                color: #858585; 
                border: 1px solid #858585;
                text-align: center;
                margin-left: 28px;
                cursor: pointer;
            }
            span:nth-child(1){
                margin-left: 0px;
            }
            .type-sure{
                background-image: url('../../assets/img/buttoncolor.png');
                background-position: center;
                background-repeat: no-repeat;
                color: white;
            }
        }
        h2{
            font-size: 28px;
            font-weight: 600;
        }
        p{
            display:block;
            margin-top: 40px;
            width: 100%;
            padding-bottom: 80px;
            height: 20px;
            border-bottom: 1px solid #858585;
            font-size: 18px;
            color: #858585;
        }
        .newsdetail-content{
            width: 100%;
            line-height: 28px;
        }
    }

</style>
