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
                    <span class="new">{{ "¥" + itemData.finalPrice }}</span>
                    <span class="old">{{ "¥" + itemData.productPrice }}</span>
                    <span class="tip" v-if="itemData.priceTipBadge">{{ itemData.priceTipBadge.text }}</span>
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
              padding: 8px 10px;
              color: #666;
              font-size: 12px;
          }

          .location {
              display: flex;
              align-items: center;

              img {
                  width: 12px;
                  height: 12px;
              }

              .text {
                  margin-left: 2px;
                  font-size: 12px;
                  color: #666;
              }
          }

          .name {
              margin: 5px 0;
              font-size: 14px;
              color: #333;
              line-height: normal;

              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
          }

          .price {
              display: flex;
              align-items: flex-start;

              margin: 8px 0;

              .new {
                  color: #ff9645;
                  font-size: 14px;
              }

              .old {
                  margin: 0 3px;
                  color: #999;
                  font-size: 12px;
                  text-decoration: line-through;
              }

              .tip {
                  background-image: linear-gradient(270deg, #f66, #ff9f9f);
                  color: #fff;
                  padding: 0 6px;
                  border-radius: 8px;
              }
          }
      }
  }
</style>