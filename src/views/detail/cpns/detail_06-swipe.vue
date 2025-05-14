<template>
    <detailSection title="预订须知" more-text="">
        <div class="info">
            <template v-for="(item, index) in orderRules">
                <div class="list">
                    <div class="title">{{ item.title }}</div>
                    <div class="introduction">{{ item.introduction }}</div>
                    <div class="info" v-if="item.tips" @click="showInfo(index)">查看说明</div>
                </div>
            </template>
        </div>
        </detailSection>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
const props = defineProps({
    orderRules:{
        type:Array,
        default:()=>[]
    }
})
const showInfo = (index) => {
    alert(props.orderRules[index].tips)
}
</script>

<style lang='less' scoped>
.info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .list {
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        margin-bottom: 10px;
        .title {
            width: 20%;
        }

        .introduction {
            flex: 2;
        }

    }
}
</style>