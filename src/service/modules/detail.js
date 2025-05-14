import TMZRequest from '@/service/request'

export function getDetailInfos(houseId) {
    return TMZRequest.get({
        url:'/detail/infos',
        params:{
            houseId:houseId
        }
    })
}