<template>
  <section class="pt-5 pb-5">
    <div class="container">
      <div class="row" v-if="data">
        <div class="col-md-4 col-12">
          <img :src="data.picture" :alt="data.title" />
        </div>
        <div class="col-md-8 col-12">
          <h1>{{ data.title }}</h1>
          <p>
            {{ data.description }}
          </p>
          <p>{{ formatDate(data.created) }}</p>
        </div>
      </div>
      <h2 v-else>Не знайдено</h2>
    </div>
  </section>
</template>

<script>
import { ref, onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { formatDate } from "../mixins/formatDateMixin.js";

export default {
  name: "oneNews",
  setup() {
    const store = useStore();
    const route = useRoute();
    const id = ref(route.query.id);

    const data = computed(() => store.getters.getOneNews[0]);

    onBeforeMount(() => {
      store.dispatch("getDataNews", id.value);
    });
    return { id, data, formatDate };
  },
};
</script>

<style>
</style>