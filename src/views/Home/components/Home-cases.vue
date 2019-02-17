<template>
  <div class="Hcases-wrapper">
    <div class="content">
      <h2>CASES</h2>
      <h2 class='redlogo temp'>项目案例</h2>
      <ul>
        <li class="title">
          <div v-for="(item, index) of itemName" ref="active" :key='index' @mouseover=handelOver(index)>{{ item }}</div>
        </li>
        <li class="item">
          <img-list :list=List[Index]></img-list>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import imgList from './home-cases-img-show/Hcases-img-show'
export default {
  name: 'Home-cases',
  data () {
    return {
      itemName: ['学校', '社区', '新农村', '餐厅'],
      Index: 0,
      OIndex: 0,
      List: [{
        content: ['http://crazyjack.top/assets/jtyry1.jpg', 'http://crazyjack.top/assets/jtyry5.jpg', 'http://crazyjack.top/assets/jtyry2.jpg', 'http://crazyjack.top/assets/jtyry3.jpg', 'http://crazyjack.top/assets/jtyry4.jpg', 'http://crazyjack.top/assets/jtyry6.jpg']
      }, {
        content: ['http://crazyjack.top/assets/jtsq2.jpg', 'http://crazyjack.top/assets/jtsq3.jpg', 'http://crazyjack.top/assets/jtsq8.jpg', 'http://crazyjack.top/assets/jtsq1.jpg', 'http://crazyjack.top/assets/jtsq9.jpg', 'http://crazyjack.top/assets/jtsq7.jpg']
      }, {
        content: ['http://crazyjack.top/assets/jtxnc1.jpg', 'http://crazyjack.top/assets/jtxnc2.jpg', 'http://crazyjack.top/assets/jtxnc3.jpg', 'http://crazyjack.top/assets/jtxnc4.jpg', 'http://crazyjack.top/assets/jtxnc5.jpg', 'http://crazyjack.top/assets/jtxnc6.jpg']
      }, {
        content: ['http://crazyjack.top/assets/jtct1.jpg', 'http://crazyjack.top/assets/jtct5.jpg', 'http://crazyjack.top/assets/jtct11.jpg', 'http://crazyjack.top/assets/jtct12.jpg', 'http://crazyjack.top/assets/jtct2.jpg', 'http://crazyjack.top/assets/jtct3.jpg']
      }]
    }
  },
  components: {
    imgList
  },
  methods: {
    handelOver (index) {
      this.$refs.active[this.OIndex].classList.remove('active')
      this.$refs.active[index].classList.add('active')
      this.OIndex = index
      this.Index = index
    }
  },
  mounted () {
    this.$refs.active[this.Index].classList.add('active')
  }
}
</script>

<style lang='stylus' scoped>
  .Hcases-wrapper
    width: 100%
    height: 690px
    margin-top: 50px
    .content
      width: 1200px
      height: 100%
      margin: 0 auto
      text-align: center
      .temp
        margin-bottom: 12px
      h2:first-child
        width: 100%
        margin: 5px 0
        color: #424242
        text-shadow: 8px 8px 5px #aaa
        font-size: 35px
      h2
        display: inline-block
      ul
        height: 600px
        width: 100%
        list-style: none
        li.title
          width: 100%
          height: 40px
          display: flex
          justify-content: center
          div
            width: 100px
            line-height: 40px
            font-size: 16px
            color: #424242
            margin-right: 10px
            font-weight: 700
            transition: all .2s linear
            &.active
              background-color: #f40
              border-radius: 8px
              color: #fff
              font-size: 20px
        li.item
          width: 100%
          height: 90%
  @media (max-width:600px) and (min-width:300px)
    .Hcases-wrapper
      width: 100vw !important
      height: 600px !important
      .content
        width: 100% !important
        margin: 0 !important
        h2:first-child
          font-size: 26px !important
        li.title
          height: 30px !important
          div
            width: 80px !important
            line-height: 30px !important
            &.active
              font-size: 18px !important
</style>
