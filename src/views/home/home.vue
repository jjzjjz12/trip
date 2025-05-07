<template>
  <div class="home">
    <homeNavBar />
    <div class="banner">
      <img src="@/asset/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city">
        <span class="text">长沙</span>
      </div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/asset/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
</script>

<style lang="less" scoped>
.home {
  img {
    width: 100%;
  }

  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;


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
}
</style>