import { getData } from "../api/news";

const news = {
  state: {
    oneNews: [],
    newsByYears: [],
    arrayNewsByYears: [],
  },
  getters: {
    getNewsByYears({ newsByYears }) {
      return newsByYears;
    },
    getArrayNewsByYears({ arrayNewsByYears }) {
      return arrayNewsByYears;
    },
    getOneNews({ oneNews }) {
      return oneNews;
    },
  },
  mutations: {
    getData({ newsByYears }, year) {
      newsByYears.push(...year);
    },
    createArrayNews({ arrayNewsByYears }, years) {
      const data = years.map((year) => ({
        news: [],
        year,
      }));
      arrayNewsByYears.push(...data);
    },
    addNewsByArray({ arrayNewsByYears }, { data, year }) {
      const news = arrayNewsByYears.find((n) => n.year === year).news;
      news.push(...data);
    },
    getOneNews({ oneNews }, data) {
      oneNews.length = 0;
      oneNews.push(data);
    },
  },
  actions: {
    async getData({ commit }, path) {
      try {
        const { year } = await getData(path);
        commit("getData", year);
        commit("createArrayNews", year);
      } catch (error) {
        throw error;
      }
    },
    async getDataByYear({ commit }, year) {
      const data = await getData("news?year=" + year);
      commit("addNewsByArray", { data, year });
    },
    async getDataNews({ commit }, id) {
      const data = await getData("news/" + id);
      commit("getOneNews", data);
    },
  },
};

export default news;
