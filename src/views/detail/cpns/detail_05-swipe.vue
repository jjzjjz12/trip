<template>
    <div class="infos">
        <detailSection title="热门评论" :more-text="totalCountStr">
            <div class="head">
                <div class="score">{{ commentModule.overall }}</div>
                <div class="scoreInfo">
                    <span class="title">{{ commentModule.scoreTitle }}</span>
                    <span class="comment">{{ commentModule.totalCount }}条评论</span>
                    <span class="star">⭐⭐⭐⭐⭐</span>
                </div>
                <div class="scoreComment">
                    <template v-for="item in commentModule.subScores">
                        <div class="scoreText">{{ item }}</div>
                    </template>
                </div>
            </div>
            <div class="content">
                <template v-for="item in commentModule.commentTagVo">
                    <div class="text" :style="{ color: item.color, backgroundColor: item.backgroundColor }">{{ item.text
                        }}
                    </div>
                </template>
            </div>
            <div class="footer">
                <div class="user">
                    <div class="avatar">
                        <img :src="commentModule.comment.userAvatars" alt="">
                    </div>
                    <div class="info">
                        <div class="username">{{ commentModule.comment.userName }}</div>
                        <div class="date">{{ commentModule.comment.checkInDate }}</div>
                    </div>
                </div>
                <div class="comment">{{ commentModule.comment.commentDetail }}</div>
            </div>
        </detailSection>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
import { computed } from 'vue';

const props = defineProps({
    commentModule: {
        type: Object,
        default: () => { }
    }
})

const totalCountStr = computed(() => {
    return `总共有${props.commentModule.totalCountStr}条评论`
})
</script>

<style lang='less' scoped>
.infos {
    .head {
        display: flex;

        .score {
            height: 50px;
            font-size: 50px;
            display: inline-block;
            border-bottom: 5px solid #ff9854;
            box-sizing: border-box;
            margin-right: 10px;
            padding-bottom: 2px;
        }

        .scoreInfo {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .comment {
                color: #666;
            }
        }

        .scoreComment {
            display: flex;
            flex-wrap: wrap;
            font-size: small;
            gap: 5px;
            flex: 2;
        }

    }

    .content {
        margin: 10px 0;
        display: flex;
        flex-wrap: wrap;

        .text {
            margin: 5px;
        }
    }

    .footer {
        background: #f5f5f5;
        padding: 10px 0;
        .user {
            display: flex;
            align-items: center;
            gap: 5px;

            img {
                height: 44px;
                border-radius: 50%;
                overflow: hidden;
            }

           .info {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .date {
                color: #666;
                font-size: small;
            }
           }
        }

        .comment {
            margin-top: 10px;
        }
    }
}
</style>