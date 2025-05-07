import { defineStore } from "pinia"

const useCitiesStore = defineStore('cities', {
    state:()=>({
        cities:['New York']
    }),
    actions:{}
})

export default useCitiesStore