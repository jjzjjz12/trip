<template>
    <div class="section">
        <div class="header">
            <h2>{{ title }}</h2> 
        </div>
        <div class="content">
            <slot>
                <h3>默认内容</h3>
            </slot>
        </div>
        <div class="footer">
            <span class="more">{{ moreText }}</span>
            <van-icon v-if="moreText" name="guide-o" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title:{
        type:String,
        default:'默认标题'
    },
    moreText:{
        type:String,
        default:'查看全部'
    }
})
</script>

<style lang='less' scoped>
.section {
    padding: 0 15px;
    margin-top: 12px;
    background-color: #fff;
    border-top: 5px solid #f2f2f2;

    .header {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;

        .title {
            font-size: 20px;
            color: #333;
        }
    }

    .content {
        padding: 8px 0;
    }

    .footer {
        display: flex;
        justify-content: flex-end;
        height: 44px;
        line-height: 44px;
        color: #ff9645;
        font-size: 14px;
        align-items: center;
        .more {
            margin-right: 5px;
        }
    }
}
</style>