<template>
  <div class="home" ref="homeRef">
    <homeNavBar />
    <div class="banner">
      <img src="@/asset/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox :hot-suggests="hotSuggests" />
    <home-categories/>
    <div class="search-bar" v-show="isShowSeachBar">
      <searchBar/>
    </div>
    <home-content/>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import useScroll from '@/hooks/useScroll';
import { computed, onActivated, ref, watch } from 'vue';
import searchBar from '@/components/search-bar/search-bar.vue';

defineOptions({
  name:'home'
})


const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()
const { hotSuggests } = storeToRefs(homeStore)
// 监听是否滚动到底部
// 方式一：如果滚动到底部，传入回调函数执行相应的操作
// 但这种方式只能传入函数，如果你在到达底部还有其他操作(比如显示搜索框)，在hook不好管理(可能传入多个回调函数)
// useScroll(()=>{
  //   homeStore.fetchHouseList()
  // })
  
const homeRef = ref(null)
  // 方式二：用一个变量记录是否到达底部。监听这个变量的值，到达底部执行操作。更推荐这种做法，直观。
const { isReachBottom,scrollTop, showSearchBox } = useScroll(homeRef)

const isShowSeachBar = computed(()=>{
  if(scrollTop >= 300) {
    return true
  }else {
    return false
  }
})

watch(isReachBottom, (newValue) => {
  if(newValue) {
    homeStore.fetchHouseList().then(()=>{
      isReachBottom.value = false
    })
  }
})
// 切换页面时都会触发这个函数，直接在这个函数设置下次滚动的位置就是上次停留的位置
onActivated(()=>{
  homeRef.value.scrollTo({
    top:scrollTop.value
  })
})


</script>

<style lang="less" scoped>
.home {
  overflow-y: auto;
  margin-bottom: 50px;
  height: 100vh;
  box-sizing: border-box;
  img {
    width: 100%;
  }
  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    height: 45px;
    padding: 16px 16px 10px;
    z-index: 9;
  }
}
</style>