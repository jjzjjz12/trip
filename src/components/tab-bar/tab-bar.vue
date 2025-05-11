<template>
    <div class="tab-bar">
        <van-tabbar v-model="active" active-color="#ff9854">
            <van-tabbar-item v-for="(item, index) in tabbarData" :to="item.path">
                <span>{{ item.text }}</span>
                <template #icon>
                    <img v-if="index !== active" src="/public/柴犬.svg" alt="">
                    <img v-else src="@/asset/img/tabbar/柯基.svg" alt="">
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import tabbarData from '@/asset/data/tabbar';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const active = ref(0);

const route = useRoute()
watch(route, (newRoute)=>{
   const current = tabbarData.findIndex(item=>item.path === newRoute.path)
   if(current === -1) return
   active.value = current
})


</script>

<style lang="less" scoped>
.tab-bar {
    img {
        height: 23px;
    }
}
</style>