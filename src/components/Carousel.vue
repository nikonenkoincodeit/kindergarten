<template>
  <carousel :items-to-show="1" :autoplay="5000" :wrap-around="false">
    <slide v-for="img in images" :key="img">
      <img :src="path(img)" alt="img" />
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import { reactive, computed } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "Carousel3",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const images = reactive(["children.jpg", "children.jpg", "children.jpg"]);

    const path = (img) => require("../assets/images/" + img);
    return { images, path };
  },
};
</script>

<style scoped>
.carousel__track {
  width: 100%;
}
</style>