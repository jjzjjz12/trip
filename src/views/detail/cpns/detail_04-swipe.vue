<template>
  <div class="landlordModule" v-if="landlordModule">
    <detailSection title="房东介绍" more-text="查看房东主页">
      <div class="head">
        <img :src="landlordModule.topScroll" alt="">
      </div>
      <div class="content">
        <div class="left">
          <img :src="landlordModule.hotelLogo" alt="">
          <div class="infos">
            <span class="name">{{ landlordModule.hotelName }}</span>
            <div class="tags">{{ hotelTags }}</div>
          </div>
        </div>
        <div class="right">
          <button class="relative">联系房东</button>
        </div>
      </div>
      <div class="footer">
        <template v-for="item in landlordModule.hotelSummary">
          <div class="list">
            <span class="title">{{ item.title }}</span>
            <span class="introduction">{{ item.introduction }}</span>
            <span class="tip">{{ item.tip }}</span>
          </div>
        </template>
      </div>
    </detailSection>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
import { computed } from 'vue';

const props = defineProps({
  landlordModule: {
    type: Object,
    default: () => { }
  }
})

const hotelTags = computed(() => {
  const tags = props.landlordModule?.hotelTags.map(item => item.tagText.text)
  return tags.join(' | ')
})

</script>

<style lang='less' scoped>
.landlordModule {
  .head {
    img {
      width: 100%;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      flex: 3;
      display: flex;

      img {
        width: 25%;
      }

      .infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .name {
          font-size: large;
          font-weight: 700;
        }

        .tags {
          color: grey;
          padding: 3px 0;
          font-size: 12px;
        }
      }
    }

    .right {
      .relative {
        padding: 8px;
        border-radius: 10%;
        border: 1px solid #fff;
        background-color: var(--primary-color);
        color: #fff;
      }
    }
  }

  .footer {
    margin-top: 10px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    .list {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 5px;
      color: grey;
      font-size: small;

      .title {
        flex: 1;
      }

      .introduction {
        flex: 2;
        color: #000;
        font-size: large;
        font-weight: 700;
      }

      .tip {
        flex: 1;
      }
    }
  }
}
</style>