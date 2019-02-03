<template>
  <swiper :options="swiperOption" ref="mySwiper" class="SwiperWrapper">
    <!-- slides -->
    <swiper-slide>
      <img class="SwiperImg" src="https://thumbnail10.baidupcs.com/thumbnail/2190b4c05685cb7efc0952747eaa47c4?fid=1285350343-250528-350881254802196&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-dRIBRbUeH12qhWcTx7gIS2Ur33w%3d&expires=8h&chkbd=0&chkv=0&dp-logid=775849497210139308&dp-callid=0&time=1549159200&size=c1440_u900&quality=90&vuk=1285350343&ft=image&autopolicy=1">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="https://thumbnail10.baidupcs.com/thumbnail/d1b42b56b149b797d36d7fefaea74f24?fid=759180864-250528-193948295444584&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-s2HhTQ0%2fROnl7qbLFRIWPLQPdUY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=775748672918757388&dp-callid=0&time=1549159200&size=c1440_u900&quality=90&vuk=759180864&ft=image&autopolicy=1">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="https://thumbnail10.baidupcs.com/thumbnail/2b37a4be103e21b89bdf5a22587f91f7?fid=1285350343-250528-1015937915432778&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-MH2GbRccKinhELTnqrXtpHhNUOo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=775849497210139308&dp-callid=0&time=1549159200&size=c1440_u900&quality=90&vuk=1285350343&ft=image&autopolicy=1">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="https://thumbnail10.baidupcs.com/thumbnail/5ef6f577e5d02ae2a0d511c8868e175d?fid=1285350343-250528-798970431658357&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-a5PEOyYSjymSrAlAEAKiuFLscvY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=775941198911110262&dp-callid=0&time=1549159200&size=c1440_u900&quality=90&vuk=1285350343&ft=image&autopolicy=1">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="https://thumbnail10.baidupcs.com/thumbnail/61a5b0cf477056d1479f37b070af8046?fid=1285350343-250528-683753585507&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-nB3HpAYLnAcyRxHze9jgXTvatc0%3d&expires=8h&chkbd=0&chkv=0&dp-logid=775961843685113406&dp-callid=0&time=1549159200&size=c1440_u900&quality=90&vuk=1285350343&ft=image&autopolicy=1">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src="https://thumbnail10.baidupcs.com/thumbnail/03c2511b8f9b1dcba044254aa81eef21?fid=1285350343-250528-251249091817483&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-alYXQ4tihF8gtHYzeJnaOxj3Ggs%3d&expires=8h&chkbd=0&chkv=0&dp-logid=775961843685113406&dp-callid=0&time=1549159200&size=c1440_u900&quality=90&vuk=1285350343&ft=image&autopolicy=1">
    </swiper-slide>
    <swiper-slide>
      <img class="SwiperImg" src=" https://thumbnail10.baidupcs.com/thumbnail/a2e7d00771d3d4ce860414f11d0ba7bd?fid=1285350343-250528-999228272272094&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-N1yZsqoIaQAnwkfT6vkymunFhLo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=775961843685113406&dp-callid=0&time=1549159200&size=c1440_u900&quality=90&vuk=1285350343&ft=image&autopolicy=1">
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
</style>
