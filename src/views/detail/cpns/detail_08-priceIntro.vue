<template>
  <div class="intro">
  <div class="title">{{ priceIntro.title }}</div>
    <div class="content">{{ priceIntro.introduction }}</div>
  </div>
</template>

<script setup>
defineProps({
    priceIntro:{
        type:Object,
        default:()=>{}
    }
})
</script>

<style lang='less' scoped>
.intro {
  padding: 0 15px;
  border-top: 5px solid #f2f2f2;
  .title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    font-size: large;
    font-weight: 700;
  }
  .content {
    padding: 8px 0;
  }
}
</style>