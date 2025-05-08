import { getHomeHotSuggests } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories:[]
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggests();
      console.log("eee", res);
      this.hotSuggests = res.data;
    },
  },
});

export default useHomeStore;
