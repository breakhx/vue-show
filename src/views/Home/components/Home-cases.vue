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
        content: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg']
      }, {
        content: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f']
      }, {
        content: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128875139&di=1bb59d00046f7c262da6a7bae78d2e74&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fk1%2FM01%2FD9%2F7C%2FwKhQw1d_F0WEOQVoAAAAAHHjW5c995.jpg']
      }, {
        content: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549128756461&di=2f187817b28e7ac745871548712a92d8&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F002KiIvEzy7anmjHmc71f']
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
      border: 1px solid black
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
            &.active
              background-color: #f40
              border-radius: 8px
              color: #fff
              font-size: 20px
        li.item
          width: 100%
          height: 90%
          display: flex
          justify-content:space-around
          flex-wrap: wrap
          border: 1px solid black
</style>
