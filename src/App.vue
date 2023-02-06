<template>
  <Header />
  <main>
    <router-view />
  </main>

  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/fonts/icomoon/style.css";
@import "./assets/css/bootstrap.min.css";
@import "./assets/fonts/flaticon/font/flaticon.css";
@import "./assets/css/style.css";
</style>
