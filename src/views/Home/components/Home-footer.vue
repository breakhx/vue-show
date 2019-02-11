<template>
  <div class="foo-wrapper">
    <div class="foo-content">
      <ul class="left">
        <li>地址：苏州市相城区元和大道</li>
        <li>邮箱：1057775855@qq.com</li>
        <li>咨询热线：<strong>13862558738</strong></li>
        <li>联系人：何先生</li>
        <li>邮政编码：215000</li>
      </ul>
      <div class="mes-wx">
        <div class="bi"></div>
        <div class="bi"></div>
        <!-- <div class="bi"></div> -->
        <div class="mes">
          <div>微信二维码</div>
          <div>淘宝店铺二维码</div>
          <!-- <div>微信公众号</div> -->
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
        width: 26%
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
        display: flex
        flex-wrap: wrap
        justify-content: space-around
        color: #fff
        div.bi
          width: 165px
          height: 165px
          background-size: 100%
        div.bi:nth-child(1)
          background-image: url('../../../assets/wxlx.jpeg')
        div.bi:nth-child(2)
          background-image: url('https://gqrcode.alicdn.com/img?type=cs&shop_id=387687821&seller_id=2577259609&w=140&h=140&el=q&v=1')
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
  @media (max-width:600px) and (min-width:300px)
    .foo-wrapper
      margin-top: 20px !important
      .foo-content
        width: 100%
        margin: 0
        padding: 10px
        ul.left
          width: 100%
          li
            font-size: 13px
        .mes-wx
          display: none
        .right
          display: block
          // display: none
          span:first-child
            color: yellow
          span:nth-child(2)
            color: #f40
          span
            font-size: 16px
            line-height: 42px
</style>
