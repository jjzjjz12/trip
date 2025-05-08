<template>
  <div class="city hideTabBar">
    <div class="top">
      <van-search v-model="value" shape="round" placeholder="地区/区域/位置" show-action @cancel="cancel" />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <!-- tab有name属性可以双向绑定tabActive的值，这里指定了name值为key,那么tabActive值也为key -->
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <cityGroup v-show="key === tabActive" :group-data="value"/>
      </template>
     </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router"
import useCityStore from '@/store/modules/city.js'
import { storeToRefs } from "pinia";
import cityGroup from "./cpns/city-group.vue";

const value = ref("")
const tabActive = ref(0)
const router = useRouter()

// 从store中拿数据即可
const cityStore = useCityStore()
// 调用actions函数发送异步请求
cityStore.fetchAllCitiesData()
// 解构出数据——响应式
const { allCities } = storeToRefs(cityStore)
// 1.allCities已经拿到所有数据了，关键在于拿不同标签下对应不同的city
// 2.每个标签点击对应不同的城市，就需要双向绑定activeTab与城市
// 3.发现tab属性name和activeTab的值双向绑定，所以设置name为属性名，activeTab也就是属性名
// 4.最终allCities[activeTab]实现，点击某标签->activeTab为标签名(cityGroup|cityGroupOverSea)->拿到allCities[activeTab]
// 响应式数据computed包裹
const currentGroup = computed(()=>allCities.value[tabActive.value]?.cities)



function cancel() {
  router.back()
}

</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 40px;
  --van-tab-font-size: 12px;


  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 100px);
    overflow-y: auto;
  }

  
}
</style>