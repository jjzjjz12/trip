import { getCityAll } from "@/service";
import { defineStore } from "pinia";

const useCityStore = defineStore( 'city' , {
    state:() => ({
        allCities:{},
        currentCity:{cityName:'长沙'}
    }),
    actions:{
        async fetchAllCitiesData() {
          const res = await getCityAll()
          this.allCities = res.data
        }
    }
})

export default useCityStore;