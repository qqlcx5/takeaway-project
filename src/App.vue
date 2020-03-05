<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    FooterGuide
  },
  async mounted() {
    // this.$store.dispatch('getAddress')
    this.getUserInfo();
  },
  methods: {
    ...mapActions(["getUserInfo"])
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: Helvetica Neue, Arial, Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 750PX;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
