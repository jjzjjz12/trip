<template>
    <div class="tab-bar">
        <template v-for="(item, index) in tabbarData">
            <div class="tab-bar-item" :class="{ active: curIndex === index }" @click="itemClick(index, item.path)">
                <img v-if="curIndex !== index" src="/public/柴犬.svg" alt="">
                <img v-else src="@/asset/img/tabbar/柯基.svg" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>

    </div>
</template>

<script setup>
import tabbarData from '@/asset/data/tabbar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const curIndex = ref(0)
const router = useRouter()

function itemClick(index, path) {
    curIndex.value = index
    router.push(path)
}

</script>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 50px;
    display: flex;


    .tab-bar-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #f3f3f3;
        flex-direction: column;

        &.active {
            color: #ff9854;
        }

        img {
            width: 30px;
        }

        .text {
            margin-top: 3px;
            font-size: 12px;
        }
    }
}
</style>