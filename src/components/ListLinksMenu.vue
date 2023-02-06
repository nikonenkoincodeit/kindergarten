<template>
  <li v-for="{ link, title } in links" :key="link">
    <router-link :to="link" class="nav-link text-left">{{ title }}</router-link>
  </li>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ListLinksMenu",
  props: {
    links: Array,
  },
  setup(props) {
    const links = ref(props.links);

    return { links };
  },
};
</script>
