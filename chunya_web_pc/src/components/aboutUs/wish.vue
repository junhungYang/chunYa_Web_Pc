<template>
    <div class="wish">
        <div class="bg"></div>
        <div class="icon-box">
            企业远景
        </div>
        <div class="text">
            <p>我们始终提供高品质、有温度的产品</p>
            <p>以种子文化与力量践行公益，努力在经济、社会、人文等领域创造更多价值</p>
        </div>
        <div class="poster">
            <img src="https://chunya-static.oss-cn-shenzhen.aliyuncs.com/upload/official/about_wishPoster.jpg" alt="">
        </div>
    </div>
</template>
<style lang="less" scoped>
.wish {
  max-width: 1920px;
  position: relative;
  overflow: hidden;
  .bg {
    position: absolute;
    height: 590px;
    width: 100%;
    background: #ebedee;
    z-index: -5;
  }
  .icon-box,
  .text,
  .poster {
    width: 1200px;
    margin: 0 auto;
  }
  .icon-box {
    background-image: url(../../assets/img/about_iconBox.jpg);
    width: 350px;
    height: 95px;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    line-height: 95px;
    font-size: 30px;
    color: #151417;
    margin-top: 15px;
    margin-top: 100px;
  }
  .text {
    margin-top: 40px;
    p {
      font-size: 20px;
      line-height: 30px;
      color: #151417;
      text-align: center;
    }
  }
  .poster {
    margin-top: 125px;
  }
}
</style>
