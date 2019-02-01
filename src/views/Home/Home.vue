<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-about></home-about>
  </div>
</template>

<script>
import homeHeader from './components/Home-header.vue'
import homeSwiper from './components/Home-swiper.vue'
import homeAbout from './components/Home-about.vue'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeAbout
  }
}
</script>

<style scoped>

</style>
