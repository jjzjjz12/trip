<template>
  <div class="home">
    <homeNavBar />
    <div class="banner">
      <img src="@/asset/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox :hot-suggests="hotSuggests" />
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';


// TMZRequest.get({
  //   url:'/home/hotSuggests'
  // }).then(res=>hotSuggests.value = res.data)
  
  const hotSuggestsStore = useHomeStore()
  hotSuggestsStore.fetchHotSuggests()
  const { hotSuggests } = storeToRefs(hotSuggestsStore)



</script>

<style lang="less" scoped>
.home {
  img {
    width: 100%;
  }
}
</style>