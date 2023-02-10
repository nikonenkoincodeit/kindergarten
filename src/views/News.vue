<template>
  <section class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <tabs
          v-if="getNewsByYears.length"
          :options="{ useUrlFragment: false }"
          nav-item-class="nav-item"
          @changed="tabChanged"
        >
          <tab
            v-for="year in getNewsByYears"
            :name="year.toString()"
            :key="year"
            :id="year"
          >
            <div class="item">{{ createNews(year) }}</div>
          </tab>
        </tabs>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref, toRaw } from "vue";
import { useStore } from "vuex";

import { Tabs, Tab } from "vue3-tabs-component";
export default {
  components: { Tabs, Tab },
  setup() {
    const store = useStore();
    let currentYear = ref(null);

    const getNewsByYears = computed(() =>
      [...store.getters.getNewsByYears].sort((a, b) => b - a)
    );

    const getArrayNewsByYears = computed(
      () => store.getters.getArrayNewsByYears
    );

    const createNews = (year) => {
      return (
        store.getters.getArrayNewsByYears.find((i) => i.year === year).news ||
        []
      );
    };

    const tabChanged = (selectedTab) => {
      currentYear.value = selectedTab.tab.name;
      if (!createNews(currentYear.value).length)
        store.dispatch("getDataByYear", currentYear.value);
    };

    onMounted(() => {
      if (!getNewsByYears.value.length) store.dispatch("getData", "news/year");
    });

    return {
      tabChanged,
      getNewsByYears,
      createNews,
    };
  },
};
</script>
<style lang="scss">
.tabs-component {
  width: 100%;
}
.tabs-component-tabs {
  display: flex;
  border-bottom: 1px solid #ccc;
  margin: 0;
}
.tabs-component-tab-a {
  padding: 15px 25px;
  display: inline-block;
  color: #000;
}
.nav-item {
  border: 1px solid #ccc;
  border-bottom: 1px solid #fff;
  border-radius: 5px 5px 0 0;
  background: #fff;
  &.is-active {
    border-bottom: 1px solid #fff;
    margin-bottom: -1px;
    .tabs-component-tab-a {
      color: #51be78;
    }
  }
}
</style>