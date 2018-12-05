<template>
    <div class="brand">
        <header>
            <div>BRAND INTRODUCTION</div>
            <div>品牌介绍</div>
        </header>
        <div class="content">
            <div class="row1">
                <img src="https://chunya-static.oss-cn-shenzhen.aliyuncs.com/upload/official/about_brandPoster.jpg" alt="">
                <div class="row1-cont">
                    <p>深圳市春芽健康科技有限公司</p>
                    <p>（以下简称春芽健康科技）成立于2018年，是一家集生产、企划、销售、服务于一体的现代化健康科技企业。</p>
                    <p>+</p>
                </div>
            </div>
            <div class="row2">
                <div class="col-1">
                    <p>公司以健康科技产品营销策划、健康养生管理咨询、健康知识经济、高端健康品牌定制与销售、健康养生文化的传播与推广、健康科技公益事业的探索与参与等为主要业务。</p>
                    <p>春芽健康科技最大的特色是赋予品牌人文精神和文化魅力，提供有温度感、仪式感、互动感的品牌营销，未来会往“衣食住行”等多方面、多领域的方向去探索更多的健康科技品牌。</p>
                </div>
                <div class="col-2">
                    <p>做有温度的品牌，行有力量的公益</p>
                    <p>春芽健康科技不仅追求为人类的身体健康提供优质的服务，更致力于承担社会责任。在公益事业方面，春芽健康科技与深圳广电公益基金会、点亮星球文化基金以及社会各界爱心之士携手同行，为推动公益事业尽一份绵薄之力，共同传递爱心、传递正能量，为社会公益事业添砖加瓦。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.brand {
  max-width: 1920px;
  header,
  .content {
    width: 1200px;
    margin: 0 auto;
  }
  header {
    padding-top: 120px;
    div:first-of-type {
      font-size: 50px;
      font-weight: bold;
      color: #151417;
      text-align: center;
    }
    div:last-of-type {
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
    margin-top: 120px;
    padding-bottom: 105px;
    border-bottom: 2px solid #ebedee;
    .row1 {
      font-size: 0;
      display: flex;
      .row1-cont {
        margin-left: 165px;
        border-bottom: 2px solid #ebedee;
        p:nth-of-type(1) {
          font-size: 21px;
          font-weight: bold;
          color: #151417;
        }
        p:nth-of-type(2) {
          margin-top: 20px;
          font-size: 14px;
          line-height: 18px;
          color: #858585;
        }
        p:nth-of-type(3) {
          margin-top: 90px;
          font-size: 37px;
          font-weight: bold;
          color: rgba(21, 20, 23, 0.5);
        }
      }
    }
    .row2 {
      margin-top: 95px;
      display: flex;
      .col-1 {
        width: 610px;
        font-size: 14px;
        line-height: 18px;
        color: #858585;
        p {
          width: 425px;
        }
        p:last-of-type {
          margin-top: 43px;
        }
      }
      .col-2 {
        flex: 1;
        p:first-of-type {
          font-size: 21px;
          font-weight: bold;
          color: #151417;
        }
        p:last-of-type {
          margin-top: 12px;
          font-size: 14px;
          line-height: 18px;
          color: #858585;
        }
      }
    }
  }
}
</style>
