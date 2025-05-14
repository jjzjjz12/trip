import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config.js";
import useMainStore from "@/store/modules/main.js";

const mainStore = useMainStore()

class TMZRequest {
    constructor(url, timeout = TIMEOUT) {
        this.instance = axios.create({
            baseURL:url,
            timeout:timeout
        })

        this.instance.interceptors.request.use(config=>{
            mainStore.isLoading = true
            return config
        },err=>err)
        this.instance.interceptors.response.use(response=>{
            mainStore.isLoading = false
            return response
        },err=>{
            mainStore.isLoading = false
            return err
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request({...config})
                .then(res=>{
                    resolve(res.data)
                })
                .catch(err=>reject(err))
        })
    }

    get(config) {
        return this.request({
            ...config,
            method:'get'
        })
    }

    post(config) {
        return this.request({
            ...config,
            method:'post'
        })
    }
}

export default new TMZRequest(BASE_URL)