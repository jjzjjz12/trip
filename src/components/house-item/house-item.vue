<template>
    <div class="house-item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url">
            </div>
            <div class="info">
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="price">
                    <van-rate size="12" gutter="0" color="#fff" v-model="value" />
                    <span class="new">{{ '￥' + itemData.finalPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
const value = ref(3)


</script>

<style lang="less" scoped>
.house-item {
    width: 50%;

    .item-inner {
        position: relative;
        margin: 5px;
        border-radius: 6px;
        background-color: #fff;
        overflow: hidden;

        .cover {
            img {
                width: 100%;
            }
        }

        .info {
            position: absolute;
            bottom: 0;
            color: #fff;
            padding: 8px 10px;

            .summary {
                font-size: 12px;
            }

            .name {
                margin: 5px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                --webkit-line-clamp: 2;
                --webkit-box-orient: vertical;
            }

            .price {
                display: flex;
                justify-content: space-around;
                margin-top: 10px;
            }
        }

    }
}
</style>