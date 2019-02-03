<template>
  <div>
    <home-header></home-header>
    <about-content></about-content>
  </div>
</template>

<script>
import homeHeader from '@/views/Home/components/Home-header.vue'
import aboutContent from '@/views/About/components/About-content.vue'
export default {
  name: 'About',
  components: {
    homeHeader,
    aboutContent
  }
}
</script>

<style lang='stylus' scoped>

</style>
