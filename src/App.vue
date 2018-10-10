<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
// import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
  // async mounted () {
  //   // this.$store.dispatch('getAddress')
  //   this.getAddress()
  // },
  // methods: {
  //   ...mapActions(['getAddress'])
  // }
  // async mounted () {
  //   const result = await reqFoodTypes()
  //   console.log(result)
  // }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
