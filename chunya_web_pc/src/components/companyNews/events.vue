<template>
    <div class="events">
        <div class="events-img">
            <img :src="eventsimg" :class={fade:imgupdate}>
        </div>
        <div class="events-content">
            <div class="events-getmore">活动资讯 ></div>
        <ul>
            <li v-for="item,index in eventsData" @click="showingEventsDesc(item)" @mouseover="changepic(index,item.coverPicUrl)">
                <p>{{item.name}}</p><span>></span>
               <!--  <div class="img">
                    <img :src="item.coverPicUrl" alt="">
                </div>
                <div class="text">
                    <div class="title">{{item.name}}</div>
                    <div class="cont" v-html="item.contentDesc"></div>
                    <div class="time">
                        <img src="../../assets/img/time.png" alt="">
                        <span v-text="getTime(item.addTime)"></span>
                    </div>
                </div> -->
            </li>
        </ul>
    </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import {newsList} from '../../sendRequest/sendRequest'
export default {
    data() {
        return {
            eventsPageIndex: 1,
            eventsData:'',
            eventsShowContent:'',
            eventsimg:'',
            imgupdate: true
        }
    },
    created() {
        this.getEventsPage()
    },
    computed: {
        ...mapState(['eventsDescShowFlag'])
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
         getEventsPage() {
            newsList({
                type: 2,
                page: this.eventsPageIndex,
                size: 6
            }).then(res => {
                if(res.data.errno === 0) {
                    this.eventsData = res.data.data.data
                    this.eventsimg = res.data.data.data[0].coverPicUrl
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
            this.contDescFlagRefresh({mod:'events',flag:true})
            this.eventsShowContent = item
        },
        changepic(index,url){
            // console.log(index,url);
            this.eventsimg = url;
            this.imgupdate = false;
            setTimeout(() => {
                this.imgupdate = true
            },200)
        }
    }
}
</script>

<style lang="less" scoped>
.events {
    margin-top: 148px;
    width: 1920px;
    position:relative;
    .events-img{
        width:100%;
        height: 1000px;
        img{
            width:100%;
            height: 1000px;
            opacity: 0;
        }
        .fade{
            opacity: 1;
            transition: .5s linear;
        }
    }
    .events-content{
        position: absolute;
        top: 68px;
        left: 0px;
        width: 963px;
        height: 847px;
        background:rgba(255,255,255,.8);
        .events-getmore{
            width: 345px;
            height: 92px;
            line-height: 92px;
            background-image: url('../../assets/img/about_iconBox.jpg');
            text-align: center;
            background-position: center;
            background-repeat: no-repeat;
            margin-top: 83px;
            margin-left:497px;
            font-size: 20px;
            font-weight: 600;
        }
     ul {
        display: flex;
        flex-wrap: wrap;
        width: 733px;
        margin: 0 auto;
        margin-top: 100px;
        li {
            width: 100%;
            height: 83px;
            border-bottom:1px solid #B2B2B2; 
            display: flex;
            .img,.text {
                flex: 1;
            }
             p{
                width: 527px;
                line-height: 131px;
                color:#858585;
                font-size: 18px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            span{
                width: 22px;
                height: 22px;
                display: block;
                line-height:23px;
                font-size: 18px;
                text-align:center;
                color:#858585;
                line-height: 20px;
                border: 1px solid #858585;
                margin-left: 180px;
                margin-top: 50px;
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
        li:hover{
            p{
                color: black;
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

