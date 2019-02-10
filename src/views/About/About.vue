<template>
  <div>
    <home-header></home-header>
    <about-content></about-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '@/views/Home/components/Home-header.vue'
import aboutContent from '@/views/About/components/About-content.vue'
import homeFooter from '@/views/Home/components/Home-footer.vue'
export default {
  name: 'About',
  components: {
    homeHeader,
    aboutContent,
    homeFooter
  }
}
</script>

<style lang='stylus' scoped>

</style>
