<template>
    <div class="house-item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url">
            </div>
            <div class="info">
                <div class="summary">{{ itemData.summaryText }}</div>
                <p class="name">{{ itemData.houseName }}</p>
                <div class="price">
                    <van-rate size="12" gutter="0" color="red" v-model="value" />
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
      background: #fff;
      border-radius: 6px;
      overflow: hidden;

      .cover {
        img {
          width: 100%;
        }
      }

      .info {
        position: absolute;
        bottom: 0;
        padding: 8px 10px;
        color: #fff;

        .summary {
          font-size: 12px;
        }

        .name {
          margin: 5px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .price {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
      }
    }
  }
</style>