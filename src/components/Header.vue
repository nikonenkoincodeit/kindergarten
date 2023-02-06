<template>
  <header
    class="site-navbar py-4 js-sticky-header site-navbar-target"
    :class="{ 'offcanvas-menu': showMobileMenu }"
    role="banner"
  >
    <div class="container">
      <div class="d-flex align-items-center">
        <nav class="site-navigation" role="navigation">
          <ul
            class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block"
          >
            <ListLinksMenu :links="links" />
          </ul>
        </nav>
        <div class="social-wrap" @click="onToggleMobileMenu">
          <a
            href="#"
            class="
              d-inline-block d-lg-none
              site-menu-toggle
              js-menu-toggle
              text-black
              active
            "
            ><span class="icon-menu h3"></span
          ></a>
        </div>
      </div>
    </div>
    <MobileMenu :links="links" @onToggleMobileMenu="onToggleMobileMenu" />
  </header>
</template>

<script>
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";

import MobileMenu from "./MobileMenu.vue";
import ListLinksMenu from "./ListLinksMenu.vue";

export default {
  name: "Header",
  components: {
    MobileMenu,
    ListLinksMenu,
  },

  setup() {
    const route = useRoute();

    let showMobileMenu = ref(false);

    const links = reactive([
      { title: "Головна", link: "/" },
      { title: "Новини", link: "/news" },
      { title: "Інформація", link: "/inform" },
      { title: "Здоровинки", link: "/health" },
      { title: "Дистанційне навчання", link: "/d-learning" },
    ]);

    const onToggleMobileMenu = () => {
      showMobileMenu.value = !showMobileMenu.value;
    };

    watch(
      () => route.path,
      () => {
        showMobileMenu.value = false;
      }
    );

    return { links, showMobileMenu, onToggleMobileMenu };
  },
};
</script>

<style>
</style>