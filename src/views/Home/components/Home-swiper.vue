<template>
  <swiper :options="swiperOption" ref="mySwiper" class="SwiperWrapper">
    <!-- slides -->
    <swiper-slide>
      <img class="SwiperImg" src="http://crazyjack.top/assets/jtsq2.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="http://crazyjack.top/assets/jtct11.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="http://crazyjack.top/assets/jtyry1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="http://crazyjack.top/assets/jtct12.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="http://crazyjack.top/assets/jtyry5.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="http://crazyjack.top/assets/jtyry3.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="http://crazyjack.top/assets/jtct7.jpg">
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
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        speed: 1800,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        effect: 'coverflow',
        fadeEffect: {
          // crossFade: true
        }
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .SwiperWrapper >>> .swiper-button-next
    right: 50px
  .SwiperWrapper >>> .swiper-button-prev
    left: 50px
  .SwiperWrapper >>> span.swiper-pagination-bullet-active
    background-color: red
  .SwiperWrapper >>> .swiper-pagination-bullet
    width: 12px
    height: 12px
  .SwiperWrapper
    width: 100%
    height: 800px
    z-index: 1
    .SwiperImg
      width: 100%
      height: 100%
  @media (max-width:600px) and (min-width:300px)
    .SwiperWrapper >>> .swiper-button-next
      right: 4px
      width: 26px
      height: 20px
    .SwiperWrapper >>> .swiper-button-prev
      left: 4px
      width: 26px
      height: 20px
    .SwiperWrapper >>> .swiper-pagination-bullet
      width: 8px
      height: 8px
    .SwiperWrapper
      height: 350px
      overflow: hidden
</style>
