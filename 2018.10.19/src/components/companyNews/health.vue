<template>
    <div class="health">
        <div class="health-getmore">新闻快讯 ></div>
            <div class="health-box">
            <img :src="healthimg" :class={fade:imgupdate}>
        <ul>
            <li v-for="item,index in healthData" @click="showingHealthDesc(item)" :key="index" @mouseover="changepic(index,item.coverPicUrl)">
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
import {newsList} from '../../sendRequest/sendRequest'
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
            healthPageIndex:1,
            healthData:'',
            healthShowContent:'',
            healthimg:'',
            imgupdate: true
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
                size: 6
            }).then(res => {
                if(res.data.errno === 0) {
                    this.healthData = res.data.data.data
                    this.healthimg = res.data.data.data[0].coverPicUrl;
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
        changepic(index,url){
            // console.log(index,url);
            this.healthimg = url;
            this.imgupdate = false;
            setTimeout(() => {
                this.imgupdate = true
            },200)
        }
    }
}
</script>

<style lang="less" scoped>
.health {
    .health-getmore{
        width: 345px;
        height: 92px;
        line-height: 92px;
        position: relative;
        left: calc(100% - 462px);
        background-image: url('../../assets/img/about_iconBox.jpg');
        text-align: center;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 150px;
        font-size: 20px;
        font-weight: 600;
    }
    .health-box{
        width: 1920px;
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
            width:960px;
            height:460px;
            opacity: 0; 
        }
        .fade{
            opacity: 1;
            transition: .5s linear;
        }
    ul {
        width: 733px;
        margin-left: 110px;
        li {
           width: 100%;
            overflow: hidden;
            height: 83px;
            display: flex;
            border-bottom:1px solid #B2B2B2;
            cursor: pointer;
            .img,.text {
                flex: 1;
            }
            .img {
                overflow: hidden;
                img {
                    // width: 100%;
                }
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

