<template>
    <div class="infos">
        <div class="name">{{ topModule.houseName }}</div>
        <div class="tags">
            <template v-for="(houseTag, index) in topModule.houseTags" :key="index">
                <span class="item" v-if="houseTag.tagText"
                    :style="{color:houseTag.tagText.color,background:houseTag.tagText.background.color}">{{
                    houseTag.tagText.text }}</span>
            </template>
        </div>
        <div class="comment area">
            <div class="left">
                <span class="score">{{ topModule.commentBrief.overall }}</span>
                <span class="title">{{ topModule.commentBrief.scoreTitle }}</span>
                <span class="brief">"{{ topModule.commentBrief.commentBrief }}"</span>
            </div>
            <div class="right">
                <span class="count">{{ topModule.commentBrief.totalCount }}条评论
                    <van-icon name="guide-o" />
                </span>
            </div>
        </div>
        <div class="position area">
            <div class="left">{{ topModule.nearByPosition.address }}</div>
            <div class="right">
                地图·周边
                <van-icon name="guide-o" />
            </div>
        </div>

    </div>
</template>

<script setup>
defineProps({
    topModule:{
        type:Object,
        default:()=>{}
    }
})
</script>

<style lang='less' scoped>
.infos {
    padding: 16px;
    background-color: #fff;

    .name {
        font-weight: 700;
        font-size: large;
    }

    .tags {
        display: flex;
        margin: 10px 0;
        overflow-x: scroll;

        .item {
            white-space: nowrap;
            margin: 2px;
            border-radius: 10%;
        }
    }

    .area {
        background-color: #f3f3f3;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-radius: 10px;
        margin: 10px 0;
    }

    .comment {
        display: flex;
        .left {
            font-size: 12px;
            .score {
                font-size: 20px;
                font-weight: 700;
            }
            .title {
                font-weight: 700;
                margin:0 10px;
            }
            .brief {
                color: gray;
            }
        }
        .right {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: var(--primary-color);
        }
    }

    .position {
        display: flex;
        justify-content: space-between;

        .left {
            font-weight: 700;
        }
        .right {
            font-size: 12px;
            color: var(--primary-color);
        }
    }
}
</style>