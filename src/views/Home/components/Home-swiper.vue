<template>
  <swiper :options="swiperOption" ref="mySwiper" class="SwiperWrapper">
    <!-- slides -->
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/swiper-1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/swiper-2.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/swiper-3.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/swiper-1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/swiper-2.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/swiper-3.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/swiper-1.jpg">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
export default {
  name: 'Home-swiper',
  data () {
    return {
      swiperOption: {
        autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
        },
        loop: true,
        speed: 1300,
        pagination: {
            el: '.header .swiper-pagination',
            type: 'bullets'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect : 'fade', // 淡入淡出效果 ？不确定是否要加
        fadeEffect: {
            crossFade: true,
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang='stylus' scoped>
  .SwiperWrapper
    width: 100%
    height: 800px
    .SwiperImg
      width: 100%
      height: 100%
</style>
