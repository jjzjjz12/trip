import TMZRequest from "@/service/request";

export function getHomeHotSuggests() {
 return TMZRequest.get({
    url: "/home/hotSuggests",
  })
}

export function getHomeCategories() {
  return TMZRequest.get({
    url: "/home/categories",
  });
}

export function getHomeHouseList(currentPage) {
  return TMZRequest.get({
    url: "/home/houselist",
    params:{
      page:currentPage
    }
  });
}
