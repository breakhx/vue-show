<template>
  <div class="foo-wrapper">
    <div class="foo-content">
      <ul class="left">
        <li>地址：苏州市</li>
        <li>邮箱：1057775855@qq.com</li>
        <li>咨询热线：<strong>13862558738</strong></li>
        <li>联系人：何先生</li>
        <li>邮政编码：215000</li>
      </ul>
      <div class="mes-wx">
        <div class="bi"></div>
        <div class="bi"></div>
        <div class="mes">
          <div>微信二维码</div>
          <div>QQ二维码</div>
        </div>
      </div>
      <div class="right">
        <span>全国热线：</span>
        <span>13862558738</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-footer'
}
</script>

<style lang='stylus' scoped>
  .foo-wrapper
    margin-top: 50px
    width: 100%
    height: 250px
    background-color: #111
    .foo-content
      width: 1300px
      margin: 0 auto
      height: 100%
      padding: 20px
      box-sizing: border-box
      display: flex
      justify-content: space-around
      ul.left
        width: 30%
        height: 100%
        // float: left
        list-style: none
        font-weight:300
        li
          color: #fff
          font-size: 18px
          line-height: 42px
          font-family: Arial, Helvetica
      .mes-wx
        flex: 1
        height: 100%
        display: inline-block
        color: #fff
        div.bi
          width: 170px
          height: 170px
          float: left
        div.bi:nth-child(1)
          margin-right: 70px
          margin-left: 40px
          background-image: url('../../../assets/wxlx.jpeg')
          background-size: 100%
        div.bi:nth-child(2)
          background-image: url('../../../assets/wxlx.jpeg')
          background-size: 100%
        .mes
          width: 100%
          float: left
          div
            width: 49%
            display: inline-block
            text-align: center
    .right
      width: 30%
      height: 100%
      // float: right
      display: flex
      justify-content: center
      align-items: center
      span:nth-child(2)
        color: #f40
        font-size: 35px
        font-weight: 700
      span
        color: #fff
        font-size: 30px
</style>
