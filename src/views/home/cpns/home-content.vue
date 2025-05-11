<template>
    <div class="content">
        <h2 class="title">热门精选</h2>
        <div class="list">
            <template v-for="(item, index) in houseList" :key="item.data.houseId" class="houseList">
                <house-item-v9 v-if="item.discoveryContentType===9" :itemData="item.data"></house-item-v9>
                <house-item-v3 v-else-if="item.discoveryContentType===3" :itemData="item.data"></house-item-v3>
            </template>
        </div>
    </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue';
import HouseItem from '@/components/house-item/house-item.vue';

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.content {
    padding: 10px 8px;
    .title {
        font-size: 22px;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
    }
}
</style>