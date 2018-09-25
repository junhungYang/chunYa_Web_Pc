<template>
    <div class="content">
        <header></header>
        <div class="desc1">
            <div class="bg"></div>
            <div class="img-text">
                <div class="up">
                    <div class="left-pic"></div>
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
                            <div class="learnMore"></div>
                        </div>
                    </div>
                    <div class="right-pic"></div>
                </div>
                <div class="bottom"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
        .bg {
            position: absolute;
            left: 0;
            top:0;
            padding-left: 19%;
            width: 100%;
            height: 300px;
            background:#ebedee;
        }
        .img-text {
            position: absolute;
            width: 1200px;
            left: 0;
            top: 80px;
            position: relative;
            .left-pic {
                position: absolute;
                left: 0;
                top: 0;
                width: 465px;
                height: 465px;
                border: 1px solid red;
            }
            .desc {
                width: 808px;
                height: 204px;
                position: absolute;
                left: 394px;
                top: 86px;
                border: 1px solid black;
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
                        p {
                            font-size: 20px;
                            line-height: 30px;
                            width: 600px;
                            transform: scale(0.5);
                            transform-origin: left top;
                            color:#e1e1e1;
                        }
                    }
                    
                }
            }
            .right-pic {
                width: 202px;
                height: 322px;
                border:1px solid blue;
                position: absolute;
                right: 14px;
                top: 144px;
            }
        }
    }
    

}
</style>

