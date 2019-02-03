<template>
  <div class="H_about_wrapper">
    <div class="content">
      <div class="about">
        <h2 class="title">BRAND</h2>
        <h2 class="redlogo">关于我们</h2>
        <article class="about-mes">
          <p>
            金童壁画成立于2000年，是一家专业墙绘服务品牌，提供室内外墙壁画服务为各大企业事业单位提供大型壁画；室外城市文化墙；新农村建设等；壁画采用耐腐蚀的丙烯为画材，保证8～9年不褪色。
          </p>
          <p>
            我们从设计到交付，我们始终以客户为核心，满足客户全方位的需求，尽职尽责、尽心尽力、尽善尽美。对每一个绘画细节都做到决不妥协，努力为客户打造一个专属定制的生活艺术空间。
          </p>
          <p>
            <a href="tel:13382638808">
              <i>全国热线：138-6255-8738</i><br/>
              <i>欢迎来电咨询</i>
            </a>
          </p>
        </article>
      </div>
      <div class="service">
        <h2 class='title'>SERVICE</h2>
        <h2 class='redlogo'>服务范围</h2>
        <article class="about-mes">
          <p>
            作为建筑物的附属部分，它的装饰和美化功能使它成为环境艺术的一个重要方面。并逐渐和商业融为一体。根据您的需求，将由我们的专业设计及施工人员用更丰富的专业知识为您量身打造独一无二的创意彩绘。
          </p>
        </article>
        <div class="list">
          <div class="item">
            <span class="iconfont">&#xe808;</span>
            <p class="painting">家庭彩绘</p>
            <p class="eng">HOME PAINTING</p>
          </div>
          <div class="item">
            <span class="iconfont">&#xe61d;</span>
            <p class="painting">商业彩绘</p>
            <p class="eng">COMMERCIAL PAINTING</p>
          </div>
          <div class="item">
            <span class="iconfont">&#xe653;</span>
            <p class="painting">校园彩绘</p>
            <p class="eng">SCHOOL PAINTING</p>
          </div>
          <div class="item">
            <span class="iconfont">&#xe643;</span>
            <p class="painting">定制彩绘</p>
            <p class="eng">CUSTOM HAND DRAWING</p>
          </div>
          <div class="item">
            <span class="iconfont">&#xe604;</span>
            <p class="painting">文化墙彩绘</p>
            <p class="eng">CULTURAL WALL</p>
          </div>
          <div class="item">
            <span class="iconfont">&#xe64b;</span>
            <p class="painting">古建筑彩绘</p>
            <p class="eng">ANCIENT PAINTING</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/iconfont.css'
export default {
  name: 'Home-about'
}
</script>

<style lang='stylus' scoped>
  .H_about_wrapper
    width: 100%
    display: inline-block
    margin-top: 50px
    .content
      width: 1200px
      height: 550px
      margin: 0 auto
      .about
        width: 472px
        height: 100%
        float: left
      .service
        width: 610px
        height: 100%
        float: right
        padding: 0 10px
        margin-left: 50px
        .about-mes
          p
            line-height: 30px
        .list
          width: 100%
          padding-top: 30px
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          .item:hover
            margin-top: -6px
          .item
            width: 200px
            height: 140px
            margin-top: 12px
            text-align: center
            transition: margin .5s linear
            span
              width: 80px
              height: 80px
              border: 2px solid red
              display: inline-block
              border-radius: 50%
              text-align: center
              line-height: 84px
              font-size: 50px
              color: #424242
              font-weight: 600
            p
              text-align: center
            .painting
              color: #444
              line-height: 30px
            .eng
              color: #999
      .title
          color: #424242
          font-weight bolder
          text-shadow:8px 8px 5px #aaa
      .about-mes
        padding-top: 40px
        text-indent: 2em
        line-height: 30px
        color: #424242
        display: inline-block
        p
          margin-top: 2px
          line-height: 40px
          a
            text-decoration: none
            color: #424242
            font-weight: 600
            width: 100%
            i
              display: inline-block
              float: right
</style>
