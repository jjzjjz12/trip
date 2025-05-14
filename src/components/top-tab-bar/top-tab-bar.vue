<template>
    <div class="topTabBar">
        <template v-for="(tab, index) in tabs" :key="tab">
            <span class="tab" @click="clickTab(index)" :class="{ active: index === currentIndex }">
                <slot :tab="tab"></slot>
            </span>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    tabs: {
        type: Array,
        default: () => []
    }
})

const currentIndex = ref(0)
function setCurrentIndex(index) {
    currentIndex.value = index
}
defineExpose({
setCurrentIndex,
})
const emit = defineEmits(['clickTab'])
const clickTab = (index) => {
    currentIndex.value = index
    emit('clickTab', index)
}
</script>

<style lang='less' scoped>
.topTabBar {
    display: flex;
    justify-content: space-around;

    .tab {
        color: #ff9854;
        font-weight: 700;
        padding: 5px;
    }

    .active {
        border-bottom: 3px solid #ff9854;
    }
}
</style>