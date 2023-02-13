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
            <ul class="list-news">
              <li
                class="list-news-item"
                v-for="news in createNews(year)"
                :key="news._id"
                :data-news-id="news._id"
                @click="goToNewsPage(news._id)"
              >
                <h2 class="list-news-title">{{ news.title }}</h2>
                <p class="list-news-description">
                  {{ cutString(news.description, MAX_SIZE_STR) }}
                </p>
              </li>
            </ul>
          </tab>
        </tabs>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { Tabs, Tab } from "vue3-tabs-component";
import { cutString } from "../utils";

export default {
  components: { Tabs, Tab },
  setup() {
    const router = useRouter();
    const store = useStore();
    let currentYear = ref(null);
    const MAX_SIZE_STR = 200;

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

    const goToNewsPage = (id) => {
      router.push({ query: { id }, name: "oneNews" });
    };

    // onMounted(() => {
    if (!getNewsByYears.value.length) store.dispatch("getData", "news/year");
    // });

    return {
      tabChanged,
      getNewsByYears,
      createNews,
      cutString,
      MAX_SIZE_STR,
      goToNewsPage,
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

.list-news {
  padding: 20px 0;
  &-item {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  &-title {
    font-size: 18px;
    color: #000;
  }
  &-description {
    margin: 0;
  }
}
</style>