<template>
  <swiper :options="swiperOption" ref="mySwiper" class="SwiperWrapper">
    <!-- slides -->
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/1.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/2.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/3.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/3.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/4.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/5.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="@/assets/3.jpeg">
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
          delay: 1900,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        speed: 1500,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        effect: 'fade', // 淡入淡出效果 ？不确定是否要加
        fadeEffect: {
          crossFade: true
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
    z-index: -1
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
