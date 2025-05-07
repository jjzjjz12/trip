<template>
  <div class="nav-bar">
    <div class="title">🐕の旅行</div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  border-bottom: 1px solid #f3f3f3;
  // 全局变量，--primary-color在common.css的:root中定义
  color: var(--primary-color);

  .title {
    font-weight: 600;
  }
}
</style>