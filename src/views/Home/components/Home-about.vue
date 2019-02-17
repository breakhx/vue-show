<template>
  <div class="H_about_wrapper">
    <div class="content">
      <div class="about">
        <h2 class="title">BRAND</h2>
        <h2 class="redlogo">关于我们</h2>
        <article class="about-mes">
          <p class="animated" :class="Fleft">
            金童壁画成立于2000年，是一家专业墙绘服务品牌，提供室内外墙壁画服务为各大企业事业单位提供大型壁画；室外城市文化墙；新农村建设等；壁画采用耐腐蚀的丙烯为画材，保证8～9年不褪色。
          </p>
          <p class="animated" :class="Fright">
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
          <div class="item animated" :class="Fade">
            <span class="iconfont">&#xe808;</span>
            <p class="painting">家庭彩绘</p>
            <p class="eng">HOME PAINTING</p>
          </div>
          <div class="item animated" :class="Fade">
            <span class="iconfont">&#xe61d;</span>
            <p class="painting">商业彩绘</p>
            <p class="eng">COMMERCIAL PAINTING</p>
          </div>
          <div class="item animated" :class="Fade">
            <span class="iconfont">&#xe653;</span>
            <p class="painting">校园彩绘</p>
            <p class="eng">SCHOOL PAINTING</p>
          </div>
          <div class="item animated" :class="Fade">
            <span class="iconfont">&#xe643;</span>
            <p class="painting">定制彩绘</p>
            <p class="eng">CUSTOM HAND DRAWING</p>
          </div>
          <div class="item animated" :class="Fade">
            <span class="iconfont">&#xe604;</span>
            <p class="painting">文化墙彩绘</p>
            <p class="eng">CULTURAL WALL</p>
          </div>
          <div class="item animated" :class="Fade">
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
  name: 'Home-about',
  props: ['data'],
  data () {
    return {
      Fade: 'fadeOutDown',
      Fleft: 'fadeOutLeft',
      Fright: 'fadeOutRight',
      OfWidth: document.body.offsetWidth
    }
  },
  watch: {
    data (Val) {
      var a = this.OfWidth
      if (a > 500) {
        if (Val > 340) {
          this.Fleft = 'fadeInLeft'
        }
        if (Val > 1040 || Val < 340) {
          this.Fleft = 'fadeOutLeft'
        }
        if (Val > 460) {
          this.Fright = 'fadeInRight'
        }
        if (Val > 1150 || Val < 460) {
          this.Fright = 'fadeOutRight'
        }
        if (Val > 550) {
          this.Fade = 'fadeInUp'
        }
        if (Val > 1180 || Val < 550) {
          this.Fade = 'fadeOutDown'
        }
      } else if (a <= 500) {
        console.log(Val)
        if (Val >= 0) {
          this.Fleft = 'fadeInLeft'
        }
        if (Val > 620 || (Val < 0 && Val !== 0)) {
          this.Fleft = 'fadeOutLeft'
        }
        if (Val > 145) {
          this.Fright = 'fadeInRight'
        }
        if (Val > 800 || Val < 145) {
          this.Fright = 'fadeOutRight'
        }
        if (Val > 650) {
          this.Fade = 'fadeInUp'
        }
        if (Val > 1460 || Val < 650) {
          this.Fade = 'fadeOutDown'
        }
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  *
    box-sizing: content-box
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
              margin: 0
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
        overflow: hidden
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
  @media (max-width:600px) and (min-width:300px)
    .content
      width: 100vw !important
      height: 520px !important
      .about
        width: 100% !important
        float: none
      .title
        text-align: center
        margin-bottom: 5px
      .redlogo
        margin: 0 auto
      .service
        width: 100% !important
        float: none
        box-sizing: border-box
        .list
          .item
            width: 100px !important
            height: 135px !important
            font-size: 12px
            span
              width: 60px !important
              height: 60px !important
              font-size: 35px !important
              line-height: 60px !important
      .about-mes
        padding: 20px 5px 0px !important
        box-sizing: border-box
</style>
