<template>
  <nut-navbar class="app-navbar">
    <template #left>
      <view class="user-info">
        <nut-avatar bg-color="transparent">
          <img :src="defaultAvatar" class="avatar-img" />
        </nut-avatar>
        <view class="user-details">
          <text class="greeting">早上好</text>
          <text class="username">陈奶奶</text>
        </view>
      </view>
    </template>

    <template #right>
      <view class="header-actions flex flex-y-center">
        <!-- 搜索按钮 -->
        <view class="icon-box flex flex-center">
          <IconFont font-class-name="iconfont" class-prefix="if" name="icon-search"/>
        </view>
        <!-- 提醒按钮 -->
        <view class="icon-box flex flex-center">
          <IconFont font-class-name="iconfont" class-prefix="if" name="icon-notification"/>
        </view>

      </view>
    </template>
  </nut-navbar>
</template>

<script>
/**
 * App主导航栏
 */
import { IconFont } from '@nutui/icons-vue-taro'
export default {
  setup(){
    /* 默认头像 */
    const defaultAvatar = require('../../static/images/default-avatar.png')

    return {
      defaultAvatar
    }

  },
  components: {
    IconFont:IconFont
  }
}
</script>

<style lang="scss">
.app-navbar{
  position: fixed;
  width: 100%;
  height: 66px;

  top: 0;

  .nut-navbar{
    height: 66px;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .nut-avatar{
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  .avatar-img {
    object-fit: cover;
  }

  .user-details {
    display: flex;
    flex-direction: column;
  }

  .greeting {
    font-size: 12px;
    color: #969799;
    font-weight: 600;
  }

  .username {
    font-size: 16px;
    font-weight: bold;
    color: #323233;
  }

  /* 右侧 */
  .header-actions {
    gap: 8px;
  }

}
</style>