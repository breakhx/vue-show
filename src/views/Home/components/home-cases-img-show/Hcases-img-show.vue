<template>
  <div>
    <div v-for="(item, k, index) of list" :key="index" class='wrapper'>
      <div class="img-wrapper" v-for="(ite, indexi) of item" :key="indexi">
        <img :src="ite">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'img-show',
  data () {
    return {

    }
  },
  props: {
    list: Object
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper
    display: flex
    flex-wrap: wrap
    justify-content:space-around
    .img-wrapper:hover img 
      width: 120%
      height: 120%
      transform: translate(-10%, -10%)
    .img-wrapper
      width: 32%
      height: 265px
      overflow: hidden
      margin-top: 10px
      box-sizing: border-box
      display: inline-block
      margin-top: 10px
      img
        width: 100%
        height: 100%
        transition: all 1.2s linear
</style>
