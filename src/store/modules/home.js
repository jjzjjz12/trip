import { getHomeCategories, getHomeHotSuggests, getHomeHouseList } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories:[],
    houseList:[],
    currentPage:1
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategories() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await getHomeHouseList(this.currentPage++);
      this.houseList.push(...res.data)
    },
  },
});

export default useHomeStore;
