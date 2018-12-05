<template>
    <div class="slogan">
        <header>
            <div>企业Slogan</div>
        </header>
        <div class="content">
            <div class="text">
                <div class="title">
                    <p>始于自然，缘于发生</p>
                    <p>Come from the nature, Change from the unknown</p>
                </div>
                <div class="main">
                    <p>大自然蕴含一股本自具足的原始力量，这种力量是生命力的体现，人类从自然中走出来，同样具备这种初始的生命力。</p>
                    <p>自然也代表着绿色，绿色寓意健康、舒适，做绿色健康的服务，为客户提供纯天然的产品和服务，让人们找回生命初始那种健康状态，是春芽健康科技不懈的追求。</p>
                    <p>找回生命原始的自然健康状态，需要诸多的因缘聚合才可能实现，春芽健康科技以善心为本， 结善缘，行善法。我们从自然中汲取一切美好的东西，让有缘的人不仅能享用健康的产品，更能找回心灵的健康自由，这一切都将发生于未来缘分成熟之时。</p>
                </div>
            </div>
            <div class="poster">
                <img src="https://chunya-static.oss-cn-shenzhen.aliyuncs.com/upload/official/about_sloganPoster.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.slogan {
  max-width: 1920px;
  header,
  .content {
    width: 1200px;
    margin: 0 auto;
  }
  header {
    margin-top: 102px;
    div {
      background-image: url(../../assets/img/about_iconBox.jpg);
      width: 350px;
      height: 95px;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0 auto;
      text-align: center;
      line-height: 95px;
      font-size: 30px;
      color: #151417;
      margin-top: 15px;
    }
  }
  .content {
    display: flex;
    margin-top: 108px;
    margin-bottom: 162px;
    .text {
      flex: 1;
      .title {
        p:first-of-type {
          font-size: 30px;
          font-weight: bold;
          color: #151417;
        }
        p:last-of-type {
          margin-top: 10px;
          font-size: 12px;
          color: #151417;
        }
      }
      .main {
        width: 545px;
        margin-top: 45px;
        p {
          font-size: 14px;
          line-height: 18px;
          color: #858585;
        }
        p:nth-of-type(2) {
          margin-top: 38px;
        }
        p:last-of-type {
          margin-top: 34px;
        }
      }
    }
    .poster {
      width: 560px;
    }
  }
}
</style>
