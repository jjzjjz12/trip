<template>
        <router-view></router-view>
    <!-- <tabBar v-show="!route.meta.hideTabBar"/> -->
    <tabBar/>
</template>

<script setup>
import tabBar from './components/tab-bar/tab-bar.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped></style>