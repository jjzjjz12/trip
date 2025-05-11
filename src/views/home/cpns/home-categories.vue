<template>
  <div class="categories">
        <div v-for="item in categories" :key="item.id" class="item">
            <img :src="item.pictureUrl" alt="">
            <span class="title">{{ item.title }}</span>
        </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style scoped>
.categories {
    display: flex;
    overflow-x: auto;
    padding: 0 10px;
    height: 80px;
    margin-top: 8px;
    /* 给父元素添加伪类，滚动条隐藏 */
    &::-webkit-scrollbar {
        display: none;
    }

    .item {
        /* 不压缩 */
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70px;
        align-items: center;
        text-align: center;
    }

    img {
        width: 32px;
        height: 32px;
    }

    span {
        margin-top: 5px;
    }
}
</style>