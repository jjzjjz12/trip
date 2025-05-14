<template>
  <div class="loading" v-show="isLoading" @click="isLoading = false">
    <div class="bg">
      <img src="@/asset/img/home/loading.gif">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore()
const {isLoading} = storeToRefs(mainStore)
</script>

<style lang='less' scoped>
.loading {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .2);
  display: flex;
  justify-content: center;
  align-items: center;

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    height: 90px;
    width: 90px;
    background-color: rgba(255, 255, 255, .8);
    img {
      width: 120px;
      height: 120px;
    }
  }

}
</style>