<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer v-if="$route.meta.isFooterShow" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
};
</script>

<style></style>
