<template>
  <div class='home'>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-about></home-about>
    <home-cases></home-cases>
  </div>
</template>

<script>
import homeHeader from './components/Home-header.vue'
import homeSwiper from './components/Home-swiper.vue'
import homeAbout from './components/Home-about.vue'
import homeCases from './components/Home-cases.vue'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeAbout,
    homeCases
  }
}
</script>

<style lang='stylus'>
  .redlogo
    width: 78px
    height: 23px
    background-color: red
    color: #ffffff
    line-height: 23px
    text-align: center
    font-weight: 600
    border-radius: 5px
    margin-top: 8px
    font-size: 16px
</style>
