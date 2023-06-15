<template>
  <view class="page-container">
    <view class="user-profile">
      <image class="avatar" src="/static/images/avatar_2.png" mode=""></image>
      <text class="username">李明</text>
      <text class="no">司机编号：67409881</text>
      <text class="mobile">手机号码：177 9998 8765</text>
    </view>
    <view class="month-overview">
      <view class="title">本月任务</view>
      <view class="content">
        <view class="item">
          <text class="volumn">18</text>
          <text class="label">任务总量</text>
        </view>
        <view class="item">
          <text class="volumn">16</text>
          <text class="label">完成任务量</text>
        </view>
        <view class="item">
          <text class="volumn">3987</text>
          <text class="label">运输里程(km)</text>
        </view>
      </view>
    </view>
    <view class="entry-list">
    <u-cell-group>
  <u-cell class="cell-with-right-icon" isLink title="车辆信息"  to="/subpkg_user/truck/index">
  </u-cell>
  <u-cell title="任务数据" isLink to="/subpkg_user/task/index"></u-cell>
  <u-cell title="系统设置" isLink to="/subpkg_user/settings/index"></u-cell>
</u-cell-group>
    </view>
  </view>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    tz(){
      this.$u.route("/pages/login/login")
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},

}) 
</script>

<style scoped lang="scss">
.page-container {
  height: 100vh;
  /* #ifdef H5 */
  height: calc(100vh - 50px);
  /* #endif  */
}

.user-profile {
  height: 600rpx;
  padding-top: env(safe-area-inset-top);
  background-image: url(https://sl-driver.oss-cn-hangzhou.aliyuncs.com/images/profile-bg%402x.png);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  line-height: 1.8;
  font-size: 30rpx;

  .avatar {
    width: 140rpx;
    height: 140rpx;
    margin-top: 90rpx;
    border-radius: 50%;
    border: 6rpx solid rgba(255, 255, 255, 0.4);
  }

  .username {
    font-size: 36rpx;
    margin: 10rpx 0;
  }
}

.month-overview {
  height: 268rpx;
  margin: 0 30rpx;
  border-radius: 16rpx;
  background-color: #fff;
  position: relative;
  top: -130rpx;

  .title {
    color: $uni-secondary-color;
    font-size: $uni-font-size-small;
    padding-top: 28rpx;
    text-align: center;

    &::after,
    &::before {
      content: '-';
      margin: 0 5rpx;
    }
  }

  .content {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: $uni-font-size-small;
    color: $uni-main-color;
    margin-top: 40rpx;

    .volumn {
      display: block;
      font-size: 36rpx;
      margin-bottom: 20rpx;
      font-weight: 500;
    }
  }
}

.entry-list {
  margin: -100rpx 30rpx 0;
  border-radius: 16rpx;
  overflow: hidden;
}

</style>