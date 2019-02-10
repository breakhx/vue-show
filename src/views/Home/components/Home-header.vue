<template>
  <div>
    <nav class="header-wrapper">
      <div class="header">
        <div class="content">
          <div class="right">咨询热线：138-6255-8738</div>
          <div class="left">欢迎来到苏州市金童墙面喷画有限公司官方网站！</div>
        </div>
      </div>
      <div class="content-nav" ref="navc" :style="navcObj">
        <ul class="content-ul">
          <router-link to="/" class="logo">
            <li class="left"  :style="lineA">金童壁画</li>
          </router-link>
          <router-link to="/">
            <li class="right"  :style="lineA">联系我们</li>
          </router-link>
          <router-link to="/">
            <li class="right"  :style="lineA">报价</li>
          </router-link>
          <router-link to="/">
            <li class="right"  :style="lineA">案例</li>
          </router-link>
          <router-link to="/about">
            <li class="right"  :style="lineA">关于</li>
          </router-link>
          <router-link to="/">
            <li class="right"  :style="lineA">首页</li>
          </router-link>
        </ul>
      </div>
    </nav>
    <div class="flexwrap" :style="StyleObj">
      金童壁画 让你的墙面
      <span>多</span>
      <span>姿</span>
      <span>多</span>
      <span>彩</span> | <span>热线：138-6255-8738</span>
      <div class='clean' @click="handelCleanClick">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-header',
  data () {
    return {
      ScrollTop: 0,
      navcObj: {
        top: '40px',
        height: '100px'
      },
      lineA: {
        lineHeight: '100px'
      },
      StyleObj: {}
    }
  },
  methods: {
    handelScroll (e) {
      this.ScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.ScrollTop || '0'
      if (this.ScrollTop <= 40) {
        this.navcObj.top = (40 - this.ScrollTop) + 'px'
        this.navcObj.height = '100px'
        this.lineA.lineHeight = '100px'
      } else {
        this.navcObj.height = '70px'
        this.lineA.lineHeight = '70px'
      }
      if (this.ScrollTop > 50) {
        this.$refs.navc.style.top = '0px'
      }
      if (this.ScrollTop > 1590) {
        this.handelCleanClick()
      }
      this.$emit('scroll', this.ScrollTop)
    },
    handelCleanClick () {
      this.StyleObj = {
        display: 'none'
      }
    }
  },
  mounted () {
    document.body.onscroll = (e) => {
      this.handelScroll(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .flexwrap
    width: 100%
    height: 80px
    position: fixed
    left: 0px
    bottom: 0px
    z-index: 2
    background-color: rgba(0, 0, 0, 0.6)
    color: #ffffff
    font-size: 26px
    line-height: 80px
    text-align: center
    span:nth-child(1)
      color: #ff4500
    span:nth-child(2)
      color: #ff0
    span:nth-child(3)
      color: #1E90FF
    span:nth-child(4)
      color: #7fff00
    span:nth-child(5)
      color: #FE642E
    .clean
      width: 60px
      height: 60px
      position: absolute
      right: 25px
      top: 10px
      text-align: center
      span
        width: 10px
        height: 55px
        display: inline-block
        position: absolute
        left: 50%
        top: 50%
        margin-top: -27px
        margin-left: -5px
        background-color: #ffffff
      span:nth-child(1)
        transform: rotateZ(45deg)
      span:nth-child(2)
        transform: rotateZ(-45deg)
  .header-wrapper
    width: 100%
    .header
      height: 40px
      background-color: #327ada
      margin: 0 auto
      .content
        width: 1200px
        height: 40px
        margin: 0 auto
        div
          line-height: 40px
          color: #fff
        .right
          font-weight: 600
          float: right
          color: #ffffff
        .left
          float: left
    .content-nav
      width: 100%
      height: 100px
      background: rgba(0, 0, 0, 0.6)
      position: fixed
      top: 40px
      left: 0px
      z-index: 2
      .content-ul
        width: 1200px
        margin: 0 auto
        height: 100%
        li
          width: 100px
          height: 100%
          list-style: none
          line-height: 100px
          text-align: center
          margin-right: 10px
          box-sizing: border-box
          border-bottom: 1px solid rgba(255, 255, 255, 0)
          transition: all 1s linear
        a
          text-decoration: none
          color: #fff
          transition: color 1s linear
          &.logo
            font-size: 20px
        li:hover
          background:rgba(151, 146, 146, 0.6);
          border-bottom:1px solid orange
        li:hover a
          color: #fa0
        .left
          float: left
        .right
          float: right
</style>
