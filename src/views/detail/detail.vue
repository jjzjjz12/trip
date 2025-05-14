<template>
    <div class="detail hideTabBar" ref="detailRef">
        <topTabBar ref="topTabBarRef" @click-tab="tabClick" v-if="isShowTopTabBar" class="tabs" :tabs="names">
            <template v-slot:default="props">
                <span class="tab">{{ props.tab }}</span>
            </template>
        </topTabBar>
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
        <div class="main" v-if="mainPart" v-memo="[mainPart]">
            <detail_01Swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
            <detail_02Swipe name="介绍" :ref="getSectionRef" :top-module="mainPart.topModule" />
            <detail_03Swipe name="服务" :ref="getSectionRef"
                :house-facility=mainPart.dynamicModule.facilityModule.houseFacility />
            <detail_04Swipe name="房东" :ref="getSectionRef" :landlord-module="mainPart.dynamicModule.landlordModule" />
            <detail_05Swipe name="评论" :ref="getSectionRef" :commentModule="mainPart.dynamicModule.commentModule" />
            <detail_06Swipe name="须知" :ref="getSectionRef"
                :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
            <detail_07Map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule" />
            <detail_08PriceIntro :price-intro="mainPart.introductionModule" />
        </div>
        <div class="footer">
            <img src="@/asset/img/tabbar/柯基.svg" alt="">
            <h3>安心住·汪汪汪</h3>
        </div>
    </div>
</template>

<script setup>
import { getDetailInfos } from '@/service/modules/detail';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import topTabBar from '@/components/top-tab-bar/top-tab-bar.vue';
import detail_01Swipe from './cpns/detail_01-swipe.vue';
import detail_02Swipe from './cpns/detail_02-swipe.vue';
import detail_03Swipe from './cpns/detail_03-swipe.vue';
import detail_04Swipe from './cpns/detail_04-swipe.vue';
import detail_05Swipe from './cpns/detail_05-swipe.vue';
import detail_06Swipe from './cpns/detail_06-swipe.vue';
import detail_07Map from './cpns/detail_07-map.vue';
import detail_08PriceIntro from './cpns/detail_08-priceIntro.vue';
import useScroll from '@/hooks/useScroll';
import { throttle } from 'underscore';

const router = useRouter()
const onClickLeft = () => {
    router.back()
}
const route = useRoute()
const houseId = route.params.id
// 存储详情
const detailInfos = ref({})
// 在组件发送请求
getDetailInfos(houseId).then(res => {
    detailInfos.value = res.data
})
// 一个响应式数据依赖另一个响应式数据用computed，这里将mainPart导出利于操作
const mainPart = computed(() => detailInfos.value.mainPart)

const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
scrollTop.value = 0
// 方式一：这种要直接定义响应式数据
// const isShowTopTabBar = ref(false)
// console.log(scrollTop.value);
// watch(scrollTop, (newValue)=>{
//     if(newValue >= 300) {
//         isShowTopTabBar.value = true
//     }else {
//         isShowTopTabBar.value = false
//     }
// })
// 方式二：isShowTabBar本身由计算属性得来就是响应式数据
const isShowTopTabBar = computed(() => {
    return (scrollTop.value >= 300)
})

// 存储标签名和组件
const sectionEls = ref({})
// 使用:ref='getxxx'可以直接调用这个方法并传入组件实例对象
// 挂载时、卸载时都会调用
const getSectionRef = (el) => {
    if(!el) return
    const name = el.$el.getAttribute('name')
    sectionEls.value[name] = el.$el
}
// names标签名数组
const names = computed(() => {
    return Object.keys(sectionEls.value)
})

const tabClick = (index) => {
    const name = names.value[index]
    let instance = sectionEls.value[name].offsetTop
    if (index !== 0) {
        instance -= 40
    }
    detailRef.value.scrollTo({
        // 已经把所有组件实例传进数组，此时只需要利用索引找到对应的组件完成滚动
        top: instance,
        behavior: 'smooth'
    })
}

// const topTabBarRef = ref()

// const els = computed(()=>Object.values(sectionEls.value))
// const elOffsetTops = computed(()=>els.value.map(el => el.offsetTop))

// watch(scrollTop, (newValue) => {
//     let index = elOffsetTops.value.length - 1
//     const nextIndex = elOffsetTops.value.findIndex(
//         top => top >= newValue + 44
//     )
//     if(nextIndex !== -1) index = nextIndex
//     console.log(index);
//     topTabBarRef.value?.setCurrentIndex(index)
// })
const topTabBarRef = ref()
const offsetTops = computed(() => Object.values(sectionEls.value).map(el => el.offsetTop))
watch(scrollTop, throttle((newValue) => {
    const index = offsetTops.value.findIndex(top => top >= newValue)
    const curIndex = index === -1 ? offsetTops.value.length - 1 : index - 1
    topTabBarRef.value?.setCurrentIndex(curIndex)
},100))

</script>

<style lang='less' scoped>
.detail {
    .tabs {
        position: fixed;
        z-index: 9;
        left: 0;
        right: 0;
        top: 0;
        background-color: #fff;

        .tab {
            height: 30px;
            line-height: 30px;
        }
    }

    .footer {
        padding: 0 15px;
        margin: 20px auto;
        text-align: center;

        img {
            height: 30px;
            width: 30px;
        }

        h3 {
            font-family: 'Lobster', cursive;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            letter-spacing: 2px;
            background: linear-gradient(to right, #ff9854, #4ecdc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}
</style>