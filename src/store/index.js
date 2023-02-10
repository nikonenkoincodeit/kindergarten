import { createStore } from "vuex";

import moduleNews from "./news";
export default createStore({
  state: {
    name: "Mango",
  },
  mutations: {},
  getters: {
    getName(state) {
      return state.name;
    },
  },
  actions: {},
  modules: {
    moduleNews,
  },
});
