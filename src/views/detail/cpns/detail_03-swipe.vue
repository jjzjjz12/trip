<template>
    <div class="facility">
        <detailSection title="服务设施" more-text="查看全部">
            <div class="facility-inner">
                <template v-for="(item, index) in houseFacility?.houseFacilitys" :key="index">
                    <div class="item" v-if="houseFacility.facilitySort?.includes(index)">
                        <div class="head">
                            <img :src="item.icon" alt="">
                            <div class="text">{{ item.groupName }}</div>
                        </div>
                        <div class="list">
                            <template v-for="(iten, index) in item.facilitys.slice(0, 4)" :key="index">
                                <div class="iten">
                                    <van-icon style="color: #ff9854;" name="good-job-o" />
                                    <span>{{ iten.name }}</span>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </detailSection>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
defineProps({
    houseFacility:{
        type:Object,
        default:()=>{}
    }
})
</script>

<style lang='less' scoped>
.facility {
    .facility-inner {
        padding: 10px;
        background-color: #f5f5f5;
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgb(221, 218, 218);
            margin-bottom: 3px;

            .head {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    padding: 2px;
                    width: 25px;
                    height: 25px;
                }
                .text {
                    margin: 5px;
                }
            }
            .list {
                flex: 2;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;

                .iten {
                    flex: 0 0 calc(50% - 5px);
                }
            }
        }
    }
}
</style>