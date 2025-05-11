<template>
    <div class="search-box">
        <!-- 位置信息 -->
        <div class="section location bottom-line">
            <div class="city" @click="getCity">
                <span class="text">{{ currentCity.cityName }}</span>
            </div>
            <div class="position" @click="getLocation">
                <span class="text">我的位置</span>
                <img src="@/asset/img/home/icon_location.png" alt="">
            </div>
        </div>

        <!-- 日期范围 -->
        <div class="section date-range bottom-line" @click="show = true">
            <div class="start">
                <div class="date">
                    <span class="tip">入住</span>
                    <span class="time">{{ startDateStr }}</span>
                </div>
            </div>
            <div class="stay">
                <span>共{{ totalDays }}天</span>
            </div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="time">{{ endDateStr }}</span>
                </div>
            </div>
        </div>
        <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />

        <!-- 价格/人数 -->
        <div class="section bottom-line date-range price-counter">
            <div class="start">价格不限</div>
            <div class="end">人数不限</div>
        </div>

        <!-- 关键字 -->
        <div class="keyword section bottom-line">关键字/位置/民宿名</div>

        <!-- 热门推荐 -->
        <div class="section hot-suggests">
            <template v-for="(item, index) in hotSuggests" :key="index">
                <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
                    {{ item.tagText.text }}
                </div>
            </template>
        </div>

        <!-- 搜索 -->
        <div class="section search-btn">
            <div class="btn" @click="searchBtnClick">搜索</div>
        </div>

    </div>
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import useMainStore from '@/store/modules/main';
import { formatMonthDay } from '@/utils/format_date';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'

const props = defineProps({
    hotSuggests: {
        type: Array,
        default: () => []
    }
})


const router = useRouter()

function getLocation() {
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log("经度:", position.coords.longitude);
            console.log("纬度:", position.coords.latitude);
        },
        error => {
            console.error("定位失败:", error.message);
        }
    );

}

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

function getCity() {
    router.push('/city')
}

const mainStore = useMainStore()

const {startDate, endDate} = storeToRefs(mainStore)

const startDateStr = computed(()=>formatMonthDay(startDate.value))
const endDateStr = computed(()=>formatMonthDay(endDate.value))


const totalDays = ref(1)

const show = ref(false)
const onConfirm = (values) => {
    const [start, end] = values
    show.value = false
    mainStore.startDate = start
    mainStore.endDate = end
    totalDays.value = end.getDate() - start.getDate()
}

// 点击搜索时传递时间区间以及所在位置
function searchBtnClick() {
    router.push({
        path: '/search',
        query:{
            startDate: startDate.value,
            endDate: endDate.value,
            currentCity: currentCity.value.cityName
        }
    })
}

</script>

<style lang="less" scoped>
.section {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    flex-wrap: wrap;
    color: #999;
}

.location {
    color: #000;

    .city {
        flex: 1;
    }

    .position {
        width: 74px;
        display: flex;
        align-items: center;

        .text {
            font-size: 12px;
            margin-right: 5px;
            position: relative;
            top: 3px;
        }

        img {
            width: 18px;
            height: 18px;
        }
    }
}

.bottom-line {
    border-bottom: 1px solid #f3f3f3;
}

.date-range {

    justify-content: space-between;

    .start {
        font-size: 12px;
    }

    .end {
        font-size: 12px;
        min-width: 30%;
    }

    .date {
        display: flex;
        flex-direction: column;

        .tip {
            font-size: 12px;
            color: #999;
        }

        .time {
            font-size: 15px;
            margin-top: 5px;
            color: #333;
            font-weight: 500px;
        }
    }

}

.hot-suggests {
    margin: 10px 0;
    height: auto;

    .item {
        padding: 4px 8px;
        margin: 5px;
        border-radius: 14px;
        font-size: 12px;
        line-height: 1;
    }
}

.search-btn {
    height: auto;

    .btn {
        width: 342px;
        height: 38px;
        max-height: 50px;
        font-weight: 500;
        font-size: 18px;
        line-height: 38px;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        background-image: var(--theme-linear-gradient);
    }
}
</style>