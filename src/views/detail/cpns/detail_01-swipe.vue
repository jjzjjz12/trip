<template>
    <div class="swipe">
        <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
            <template v-for="(item, index) in swipeData" :key="item.orderIndex">
                <van-swipe-item class="item">
                    <img :src="item.url">
                </van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <template v-for="(item, key, index) in swipeGroup" :key="key">
                        <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
                            <span class="text">{{ getName(item[0].title) }}</span>
                            <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                                {{ getCategoriesIndex(swipeData[active]) }}/{{ item.length }}</span>
                        </span>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>
const props = defineProps({
    swipeData: {
        type: Array,
        default: () => []
    }
})

// 对数据进行分类，把同一个种类的数据按照类别序号进行分类
const swipeGroup = {}
for (const item of props.swipeData) {
    let arr = swipeGroup[item.enumPictureCategory]
    if (!arr) {
        arr = []
        swipeGroup[item.enumPictureCategory] = arr
    }
    arr.push(item)
}
// console.log(swipeGroup);
// 去除字符串"：【】"
const getName = (name) => {
    return name.replace('：', "").replace("【", "").replace("】", "")
}
// 找到活跃图片的索引：找到当前活跃的item，根据其enumPictureCategory与swipeGroup联系，获取索引
function getCategoriesIndex(item) {
    const arr = swipeGroup[item.enumPictureCategory]
    return (arr.findIndex(data => data === item) +1)
}
</script>

<style lang='less' scoped>
.swipe {
    .swipe-list {
        img {
            width: 100%;
        }

        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            color: #fff;
            background: rgba(0, 0, 0, 0.5);

            .item {
                margin: 0 3px;

                &.active {
                    background-color: #fff;
                    color: #000;
                    border-radius: 10px;
                    padding: 2px;
                }
            }
        }
    }
}
</style>