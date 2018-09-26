<template>
    <div class="content" ref="content">
        <header></header>
        <div class="desc1">
            <div class="bg" :style="{'width':desc1BgWidth}"></div>
            <div class="img-text">
                <div class="up">
                    <div class="left-pic">
                        <img src="../../assets/img/cup.jpg" alt="">
                    </div>
                    <div class="desc">
                        <div class="box">
                            <div class="title">倾心凝神，盛一瓢春水于碗里</div>
                            <div class="line-decorate"></div>
                            <div class="cont">
                                <p>
                                    水因柔而流万物，人因善而生良缘。
                                </p>
                                <p>
                                    用善心，种善米。东北无污染黑土地， 倾注善良的真心，采用无污染的工序，种植出纯生态的米，用善缘米煮出来的饭，每一粒都饱含善良的味道。
                                </p>
                            </div>
                            <div class="desc-English">
                                <p>
                                    With a kind heart, plant kind rice.Northeast pollution-free black land, pour kindness of heart,Using the pollution-free process, the planting of pure ecological rice,With the good edge rice cooked rice, each grain full of good taste.
                                </p>
                            </div>
                            <div class="learnMore">
                                <img src="../../assets/img/knowMore.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="right-pic">
                        <img src="../../assets/img/rice.jpg" alt="">
                    </div>
                </div>
                <div class="bottom">
                    <img src="../../assets/img/rice1.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="desc2">
            <div class="content">
                <div class="more">
                    —— more >
                </div>
                <div class="up">
                    <div class="plus">
                        <img src="../../assets/img/add.png" alt="">
                    </div>
                    <div class="cont-text">
                        <p class="title">洗尽铅华，吹一缕淡香于舌尖</p>
                        <div class="main">
                            <p>身材因匀称而美丽，</p>
                            <p>身体因均衡而健康，</p>
                            <p>身心因恬淡而快乐。</p>
                        </div>
                        <div class="Eng">
                            <p>The figure is beautiful because of symmetry,</p>
                            <p>The body is well balanced,</p>
                            <p>The mind and body are happy because of calmness.</p>
                            <p>——</p>
                        </div>
                        <div class="knowMore">
                            <img src="../../assets/img/knowMore.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="img">
                        <img src="../../assets/img/rice2.jpg" alt="">
                    </div>
                    <div class="text">
                        <p class="chinese">五谷杂粮粉，朴素自然，却营养均衡，每天吃一碗，既浓缩了时间，又吸收了精华。</p>
                        <div class="Eng">
                            <p>Whole grains flour, simple and natural,</p>
                            <p>but balanced nutrition, every day to eat a bowl, </p>
                            <p>not only concentration of time, and absorption of the essence.</p>
                            <p>——</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="right-pic" :style="{'width': desc2rightPicWidth}">
                <img src="../../assets/img/girl.jpg" alt="">
            </div>
        </div>
        <div class="poster">
            <img src="../../assets/img/present.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            desc1BgWidth: '1200px',
            desc2rightPicWidth: ''
        }
    },
    created() {
        
    },
    mounted() {
        let contWidth = this.$refs.content.offsetWidth
        this.desc1BgWidth = (contWidth - 1200)/2 + 1200 + 'px'
        this.desc2rightPicWidth =contWidth - (contWidth - 1200) /2 - 790 +'px'
    },
}
</script>

<style lang="less" scoped>
.content {
    header {
        width: 1200px;
        margin: 0 auto;
        height: 160px;
        border: 1px solid red;
    }
    .desc1 {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        height:890px;
        .bg {
            height: 300px;
            background:#ebedee;
            position: absolute;
            left:0;
            top: 0;
        }
        .img-text {
            position: absolute;
            width: 1200px;
            left: 0;
            top: 80px;
            .up {
                position: relative;
                .left-pic {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 465px;
                    height: 465px;
                }
                .desc {
                    width: 808px;
                    height: 204px;
                    position: absolute;
                    left: 394px;
                    top: 86px;
                    background:#fff;
                    background-size: 204px;
                    .box {
                        margin-left: 145px;
                        width: 435px;
                        .title {
                            padding-top: 30px;
                            font-size: 20px;
                            font-family: hansansBold;
                            color:#3e3a39;
                        }
                        .line-decorate {
                            position: absolute;
                            width: 66px;
                            height:1px;
                            background:linear-gradient(to right,#21ab6b,#24b1d3);
                            left: 60px;
                            top: 106px;
                        }
                        .cont {
                            width: 300px;
                            margin-top: 50px;
                            font-size: 14px;
                            line-height: 18px;
                            font-family: hansansMed;
                            color: #8c8c8c;
                        }
                        .desc-English {
                            margin-top: 54px;
                            height: 60px;
                            p {
                                font-size: 20px;
                                line-height: 30px;
                                width: 600px;
                                transform: scale(0.5);
                                transform-origin: left top;
                                color:#e1e1e1;
                            }
                        }
                        .learnMore {
                            margin-top: 36px;

                        }
                    }
                }
                .right-pic {
                    width: 202px;
                    height: 322px;
                    position: absolute;
                    right: 14px;
                    top: 144px;
                }
            }
            .bottom {
                margin-top: 505px;
            }
        }
    }
    .desc2 {
        width: 1200px;
        margin: 0 auto;
        margin-top: 210px;
        position: relative;
        .content {
            width: 626px;
            overflow: hidden;
            .more {
                height:187px;
                font-size: 12px;
                color: #8d8d8d;
                font-family: hansansNor;
                text-align: right;
                position: relative;
            }
            .up {
                margin-left:170px;
                position: relative;
                .cont-text {
                    .title {
                        font-size: 20px;
                        font-family: hansansBold;
                        color: #3e3a39;
                    }
                    .main {
                        margin-top: 30px;
                        p {
                            font-size:14px;
                            line-height: 18px;
                            font-family: hansansMed;
                            color: #8c8c8c;
                        }
                    }
                    .Eng {
                        margin-top: 45px;
                        height: 50px;
                        p {
                            font-size: 20px;
                            line-height: 15px;
                            width: 910px;
                            transform: scale(0.5);
                            transform-origin: left top;
                            color: #e1e1e1;
                        }
                    }
                    .knowMore {
                        margin-top: 44px;
                    }
                }
                .plus {
                    position: absolute;
                    left: -100px;
                }
            }
            .bottom {
                margin-top: 155px;
                .img {
                    width: 626px;
                    height: 455px;
                    background: #ebedee;
                    position: relative;
                    img {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                }
                .text {
                    width: 420px;
                    margin-left: 206px;
                    margin-top: 35px;
                    .chinese {
                        text-align: center;
                        width: 300px;
                        margin: 0 auto;
                        font-size: 14px;
                        line-height: 18px;
                        color: #8d8d8d;
                        font-family: hansansNor;
                    }
                    .Eng {
                        margin-top: 12px;
                        p {
                            font-size: 20px;
                            line-height: 15px;
                            width: 840px;
                            text-align: center;
                            transform: scale(0.5);
                            transform-origin: left top;
                            color: #e1e1e1;
                        }
                    }
                }
            }
        }
        .right-pic {
            position: absolute;
            left: 790px;
            top: 0;
            overflow: hidden;
        }    
    }
    .poster {
        width: 100%;
        margin-top: 195px;
        img {
            width: 100%;
        }
    }

}
</style>

