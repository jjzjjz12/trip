import TMZRequest from '@/service/request'

export function getCityAll() {
    return TMZRequest.get({
        url:'/city/all'
    })
    .then(res=>res)
    .catch(err=>err)
}