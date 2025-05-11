<template>
    <div class="loading">
        <template>
            <p>你对了吗</p>
            djdjajdjaajlvakdeqij
        </template>
        loadingcccccccccccccccccccccccccccccccccccc
    </div>
        <router-view></router-view>
    <tabBar/>
</template>

<script setup>
import tabBar from './components/tab-bar/tab-bar.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="less" scoped>
.loading {
    position: fixed;
    z-index: 999;
    background: rgba(0, 0 , 0, .5);
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>