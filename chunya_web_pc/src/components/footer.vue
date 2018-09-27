<template>
    <div class="footer-wrap">
        <div class="footer">
            <header>
                <div class="brand">
                    <img src="../assets/img/logoWhite.png" alt="">
                </div>
                <div class="phone-num">0775-2377 5137</div>
            </header>
            <div class="content">
                <div class="text">
                    <div class="desc">
                        <p>公司地址：深圳市龙华区汇海广场A座908室</p>
                        <p>联系电话：0755-2377 5137</p>
                        <p>电子邮箱：chunya0820@sina.com</p>
                    </div>
                    <div class="Copyright">
                        <p>Copyright © 2018 All Rights Reserved / 版权所有：深圳市春芽健康科技有限公司</p>
                        <p>ICP备案：粤ICP备18113252号-1</p>
                    </div>
                </div>
                <div class="share">
                    <div class="qr-code">
                        <img src="../assets/img/QRcode.jpg" alt="">
                    </div>
                    <div class="otherShare">
                        <img src="../assets/img/phone.png" alt="">
                        <img src="../assets/img/weChat.png" alt="">
                        <img src="../assets/img/weibo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.footer-wrap {
    width: 100%;
    height: 416px;
    background:url(../assets/img/footerBg.jpg);
    background-size: cover;
    .footer {
        width: 1200px;
        margin: 0 auto;
        header {
            height: 85px;
            position: relative;
            border-bottom: 1px solid rgba(235,237,238,0.5);;
            .brand {
                position: absolute;
                left: 0;
                top: 40px;
            }
            .phone-num {
                position: absolute;
                right: 0;
                top: 45px;
                font-size: 20px;
                font-family:hansansMed; 
                color: #ebedee;
            }
            
        }
        .content {
            position: relative;
            margin-top: 85px;
            .text {
                position: absolute;
                left: 0;
                top: 0;
                .desc {
                    color:rgba(235,237,238,0.8);
                    p {
                        font-size: 15px;
                        line-height: 22px;
                        font-family: hansansNor;
                    }
                }
                .Copyright {
                    color:rgba(235,237,238,0.3);
                    margin-top: 45px;
                    p {
                        font-size: 15px;
                        line-height: 18px;
                        font-family: hansansNor;
                    }
                }
            }
            .share {
                position: absolute;
                right: 0;
                top: 0;
                .otherShare {
                    text-align: center;
                    margin-top: 15px;
                    img {
                        margin: 0 6px;
                    }
                }
            }
        }
    }
}
</style>


