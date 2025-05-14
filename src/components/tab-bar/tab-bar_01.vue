<template>
    <div class="tab-bar">
        <template v-for="(item, index) in tabbarData">
            <div class="tab-bar-item" :class="{ active: curIndex === index }" @click="itemClick(index, item.path)">
                <img v-if="curIndex !== index" :src="getURL(item.image)" alt="">
                <img v-else :src="getURL(item.imageActive)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>

    </div>
</template>

<script setup>
import tabbarData from '@/asset/data/tabbar';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

let curIndex = ref(0)
const router = useRouter()
const route = useRoute()
watch(route, (newRoute)=>{
    curIndex.value = tabbarData.findIndex(item=>item.path===newRoute.path)
})

function itemClick(index, path) {
    curIndex.value = index
    router.push(path)
}

const getAssetURL = (image) => {
    const url = new URL('../../asset/img/'+image, import.meta.url).href
    return url
}

//  1. 使用 import.meta.glob 批量导入 tabbar 文件夹内所有文件
const images = import.meta.glob('@/asset/img/tabbar/*', {
    eager:true,
    import:'default' // 导入方式是路径
})
// 2. 根据名称返回对应图片路径
const getURL = (image)=>{
    return images[`/src/asset/img/${image}`]
}


</script>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 50px;
    display: flex;
    background-color: #fff;
    padding: 5px;


    .tab-bar-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #f3f3f3;
        flex-direction: column;

        &.active {
            color: #ff9854;
        }

        img {
            width: 30px;
        }

        .text {
            margin-top: 3px;
            font-size: 12px;
        }
    }
}
</style>