<template>
  <div class='home'>
    <home-header @scroll='handelScroll'></home-header>
    <home-swiper></home-swiper>
    <home-about :data="data"></home-about>
    <home-cases></home-cases>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from './components/Home-header.vue'
import homeSwiper from './components/Home-swiper.vue'
import homeAbout from './components/Home-about.vue'
import homeCases from './components/Home-cases.vue'
import homeFooter from './components/Home-footer.vue'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeAbout,
    homeCases,
    homeFooter
  },
  data () {
    return {
      data: 0
    }
  },
  methods: {
    handelScroll (data) {
      this.data = data
    }
  },
  mounted () {
    console.log('%c欢迎来到金童彩绘',
      `display:inline-block;
      line-height: 80px;
      background-color: #abcdef;
      font-size: 20px;
    color: yellow;`)
    console.log('%c联系方式133-8263-8808', `
      display:inline-block;
      line-height: 80px;
      background-color: #abcdef;
      font-size: 20px;
      color: yellow;
    `)
  }
}
</script>
