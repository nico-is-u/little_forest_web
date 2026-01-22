<template>
  <view class="guide-container">
    
    <!-- 自定义导航栏 -->
    <view class="custom-navbar" :style="{ height: navbarHeight + 'px', paddingTop: statusBarHeight + 'px' }">
      <view class="navbar-content">
        <text class="skip-text" @click="handleSkip">跳过</text>
      </view>
    </view>

    <!-- 主要内容区域 -->
    <view class="content">
      <!-- 插图容器 -->
      <view class="illustration-container">
        <view class="blur-circle blur-circle-1"></view>
        <view class="blur-circle blur-circle-2"></view>
        <view class="illustration">
          <!-- 配送图标 -->
          <view class="icon-box bounce-animation">
            <!-- <nut-icon name="location" size="60" color="#F97316" /> -->
          </view>
          <!-- 配送中标签 -->
          <view class="delivery-badge">
            <!-- <nut-icon name="right" size="16" color="#10B981" /> -->
            <text class="badge-text">管家配送中</text>
          </view>
        </view>
        <view class="decoration-icon decoration-icon-1">
          <!-- <nut-icon name="location" size="48" color="#10B981" /> -->
        </view>
        <view class="decoration-icon decoration-icon-2">
          <!-- <nut-icon name="service" size="32" color="#10B981" /> -->
        </view>
      </view>

      <!-- 文字说明 -->
      <view class="text-section">
        <text class="title">代取快递</text>
        <text class="description">重物大件，管家帮您送到家</text>
      </view>
    </view>

    <!-- 底部操作区域 -->
    <view class="footer">
      <!-- 分页指示器 -->
      <view class="pagination">
        <view class="dot dot-active"></view>
        <view class="dot"></view>
        <view class="dot"></view>
        <view class="dot"></view>
      </view>
      <!-- 下一步按钮 -->
      <nut-button
        type="primary"
        size="large"
        class="next-btn"
        @click="handleNext"
      >
        下一步
        <template #icon>
          <!-- <nut-icon name="right" /> -->
        </template>
      </nut-button>
    </view>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro'

// 跳过引导
const handleSkip = () => {
  Taro.reLaunch({
    url: '/pages/index/index'
  })
}

// 下一步
const handleNext = () => {
  // 当前是第1页引导，总共4页
  // 这里可以跳转到第2页引导，或者直接跳转到首页
  // 暂时跳转到首页
  Taro.reLaunch({
    url: '/pages/index/index'
  })
}
</script>

<style lang="scss" scoped>
.guide-container {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(249, 115, 22, 0.03) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 48rpx 48rpx 64rpx;
}

.skip-btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 32rpx;
}

.skip-text {
  font-size: 36rpx;
  color: #94a3b8;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 750rpx;
}

.illustration-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(16, 185, 129, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%);
}

.blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80rpx);

  &-1 {
    top: 80rpx;
    right: 80rpx;
    width: 192rpx;
    height: 192rpx;
    background: rgba(249, 115, 22, 0.2);
  }

  &-2 {
    bottom: 80rpx;
    left: 80rpx;
    width: 256rpx;
    height: 256rpx;
    background: rgba(16, 185, 129, 0.2);
  }
}

.illustration {
  position: relative;
  z-index: 10;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bounce-animation {
  animation: bounce 3s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20rpx);
  }
}

.icon-box {
  background: rgba(254, 215, 170, 1);
  padding: 64rpx;
  border-radius: 48rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
  border: 4rpx solid rgba(251, 191, 142, 1);
}

.delivery-badge {
  margin-top: 32rpx;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 24rpx 48rpx;
  border-radius: 9999rpx;
  box-shadow: 0 12rpx 24rpx rgba(0, 0, 0, 0.08);
  border: 2rpx solid #f1f5f9;
}

.badge-text {
  font-size: 32rpx;
  font-weight: bold;
  color: #334155;
  margin-left: 12rpx;
}

.decoration-icon {
  position: absolute;
  opacity: 0.6;

  &-1 {
    bottom: -32rpx;
    left: -16rpx;
  }

  &-2 {
    top: -32rpx;
    right: -16rpx;
    opacity: 0.4;
  }
}

.text-section {
  margin-top: 96rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 32rpx;
}

.title {
  font-size: 72rpx;
  font-weight: bold;
  color: #1e293b;
  line-height: 1.2;
}

.description {
  font-size: 36rpx;
  color: #64748b;
  line-height: 1.5;
  margin-top: 32rpx;
  max-width: 400rpx;
}

.footer {
  width: 100%;
  max-width: 750rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64rpx;
}

.pagination {
  display: flex;
  gap: 16rpx;
  margin-bottom: 64rpx;
}

.dot {
  height: 16rpx;
  border-radius: 8rpx;
  background: #e2e8f0;

  &-active {
    width: 64rpx;
    background: #10B981;
  }

  &:not(.dot-active) {
    width: 16rpx;
  }
}

.next-btn {
  width: 100%;
  height: 88rpx;
  font-size: 36rpx;
  font-weight: 600;
  border-radius: 32rpx;
  box-shadow: 0 8rpx 24rpx rgba(16, 185, 129, 0.3);
}
</style>
