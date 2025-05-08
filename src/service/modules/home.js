import TMZRequest from "@/service/request";

export function getHomeHotSuggests() {
 return TMZRequest.get({
    url: "/home/hotSuggests",
  })
    .then((res) => {
        return res
    })
    .catch((err) => err);
}
