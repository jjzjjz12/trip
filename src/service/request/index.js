import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config.js";

class TMZRequest {
    constructor(url, timeout = TIMEOUT) {
        this.instance = axios.create({
            baseURL:url,
            timeout:timeout
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