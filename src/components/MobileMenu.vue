<template>
  <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close mt-3" @click="handleChange">
        <span class="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body">
      <ul class="site-nav-wrap">
        <ListLinksMenu :links="links" />
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ListLinksMenu from "./ListLinksMenu.vue";

export default {
  name: "MobileMenu",
  components: { ListLinksMenu },
  props: {
    links: Array,
  },
  setup(props, { emit }) {
    const links = ref(props.links);

    const handleChange = (event) => emit("onToggleMobileMenu");

    return { handleChange, links };
  },
};
</script>

<style>
</style>