<template>
  <div class="map">
    <detailSection title="位置周边" more-text="查看更多周边信息">
        <div class="gaode" ref="mapRef"></div>
    </detailSection>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
import { onMounted, ref } from 'vue';

const props = defineProps({
    position:{
        type:Object,
        default:()=>{}
    }
})

// 要挂载到DOM实例
const mapRef = ref('')
// 必须在有DOM挂载后拿到DOM执行地图挂载
onMounted(()=>{
    const positionArr = [props.position.longitude, props.position.latitude]
    const map = new AMap.Map(mapRef.value, {
        zoom: 15,//级别
        center: positionArr,//中心点坐标
        viewMode: '3D'//使用3D视图
    });
    // 创建一个 Marker 实例：
    const marker = new AMap.Marker({
        position: new AMap.LngLat(...positionArr),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: props.position.address
    });

    // 将创建的点标记添加到已有的地图实例：
    map.add(marker);

    // 移除已创建的 marker
    // map.remove(marker);

})
</script>

<style lang='less' scoped>
.gaode {
    width: 100%;
    height: 300px;
}
</style>