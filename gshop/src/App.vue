<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import HelloWorld from "./components/HelloWorld";
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
// import {reqFoodCategorys} from './api'

export default {
  mounted() {
    // 测试1
    // const result = reqFoodCategorys()
    // console.log(result)

    // this.$store.dispatch("getAddress");
     this.getAddress()
  },
  methods: {
    ...mapActions(["getAddress"])
  },
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  color: red;
}
</style>