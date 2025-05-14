<template>
    <loading/>
    <router-view v-slot="{ Component }">
        <keep-alive include="home">
            <component :is='Component'></component>
        </keep-alive>
    </router-view>
    <!-- <router-view></router-view> -->
    <!-- <tabBar /> -->
     <tabBar_01/>
</template>

<script setup>
// import tabBar from './components/tab-bar/tab-bar.vue';
import tabBar_01 from './components/tab-bar/tab-bar_01.vue';
import loading from './components/loading/loading.vue';
</script>

<style lang="less" scoped></style>