<template>
    <div class="city-group">
        <van-index-bar :index-list="hotCities">
            <van-index-anchor index="热门" />
            <div class="hotCities">
                <template v-for="(hotCity, index) in groupData.hotCities" :key="index">
                    <div class="hotCity" @click="cityClick(hotCity)">{{ hotCity.cityName }}</div>
                </template>
            </div>
            <template v-for="(item, index) in groupData.cities" :key="index">
                <van-index-anchor :index="item.group" />
                <template v-for="(city, index) in item.cities" :key="index">
                    <van-cell :title="city.cityName" @click="cityClick(city)"/>
                </template>
            </template>
        </van-index-bar>
    </div>
</template>
<!-- <template v-for="(item, index) in groupData" :key="index">
    <div class="group-item">
        <h2>{{ item.group }}</h2>
        <div class="list">
            <template v-for="(city, index) in item.cities" :key="index">
                <div class="city">{{ city.cityName }}</div>
            </template>
        </div>
    </div>
</template> -->
<script setup>
import useCityStore from '@/store/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    groupData:{
        type:Object,
        default:() => {}
    }
})
const hotCities = computed(()=>{
    // 注意这里要用props拿到groupData
    const list = props.groupData.cities.map(item => item.group)
    // 在数组前加元素unshift
    list.unshift('#')
   return list
})

const router = useRouter()
const cityStore = useCityStore() 

function cityClick(city) {
    // 将点击的数据存到pinia中，在首页再从pinia取数据即可
    cityStore.currentCity = city
    router.back()
}

</script>

<style lang="less" scoped>
.hotCities {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    padding-right: 25px;

    .hotCity {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        font-size: 12px;
        background-color: #f4bc97;
        text-align: center;
        line-height: 28px;
        margin: 10px 0;
    }
}
</style>