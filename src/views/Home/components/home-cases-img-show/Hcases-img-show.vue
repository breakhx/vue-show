<template>
  <div>
    <div v-for="(item, k, index) of list" :key="index">
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
  },
}
</script>

<style lang='stylus' scoped>
  .img-wrapper
    width: 32%
    height: 265px
    overflow: hidden
    margin-top: 10px
    box-sizing: border-box
    display: inline-block
    img
      width: 100%
      height: 100%
</style>
