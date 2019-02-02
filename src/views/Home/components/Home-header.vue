<template>
  <nav class="header-wrapper">
    <div class="header">
      <div class="content">
        <div class="right">咨询热线：138-6255-8738</div>
        <div class="left">欢迎来到苏州金童墙面策划有限公司官方网站！</div>
      </div>
    </div>
    <div class="content-nav" ref="navc" :style="navcObj">
      <ul class="content-ul">
        <li class="left"  :style="lineA">
          <router-link to="/" class="logo">金童壁画</router-link>
        </li>
        <li class="right"  :style="lineA">
          <router-link to="/">联系我们</router-link>
        </li>
        <li class="right"  :style="lineA">
          <router-link to="/">报价</router-link>
        </li>
        <li class="right"  :style="lineA">
          <router-link to="/">案例</router-link>
        </li>
        <li class="right"  :style="lineA">
          <router-link to="/">关于</router-link>
        </li>
        <li class="right"  :style="lineA">
          <router-link to="/">首页</router-link>
        </li>
      </ul>
    </div>
  </nav>
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
      }
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
  .header-wrapper
    position: absolute
    z-index: 2
    font-family: Arial, Helvetica, sans-serif
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
        .left
          float: left
    .content-nav
      width: 100%
      height: 100px
      background: rgba(0, 0, 0, 0.4)
      position: fixed
      top: 40px
      left: 0px
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
