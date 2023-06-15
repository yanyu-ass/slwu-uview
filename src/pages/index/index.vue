<template>
  <view class="page-container">
	<u-button type="primary" text="确定" @click="setUserName('sss')"></u-button>
    <view class="task-tabbar">
      <text
        @click="changeTab(0)"
        :class="{ active: tabIndex === 0 }"
        class="tab"
        >待提货</text
      >
      <text
        @click="changeTab(1)"
        :class="{ active: tabIndex === 1 }"
        class="tab"
        >在途</text
      >
      <text
        @click="changeTab(2)"
        :class="{ active: tabIndex === 2 }"
        class="tab"
        >已完成</text
      >
    </view>
    <scroll-view
      refresher-background="#f4f4f4"
      scroll-y
      refresher-enabled
      class="task-list"
      v-show="tabIndex === 0"
    >
      <view class="task-card" @click="goDetail('待提货')">
        <view class="header">
          <text class="no">任务编号: XAHH1234567</text>
          <text class="status">已延迟</text>
        </view>
        <view class="body">
          <view class="timeline">
            <view class="line"
              >北京市昌平区回龙观街道西三旗桥东金燕龙写字楼8877号</view
            >
            <view class="line">河南省郑州市路北区北清路99号</view>
          </view>
        </view>
        <view class="footer">
          <view class="label">提货时间</view>
          <view class="time">2022.05.04 13:00</view>
          <button class="action">提货</button>
        </view>
      </view>
      <view class="task-card" @click="goDetail('待提货')">
        <view class="header"
          ><text class="no">任务编号: XAHH1234567</text></view
        >
        <view class="body">
          <view class="timeline">
            <view class="line"
              >北京市昌平区回龙观街道西三旗桥东金燕龙写字楼8877号</view
            >
            <view class="line">河南省郑州市路北区北清路99号</view>
          </view>
        </view>
        <view class="footer">
          <view class="label">提货时间</view>
          <view class="time">2022.05.04 13:00</view>
          <button disabled class="action">提货</button>
        </view>
      </view>
      <view v-if="false" class="task-blank">无待提货物</view>
    </scroll-view>
    <scroll-view
      refresher-background="#f4f4f4"
      scroll-y
      refresher-enabled
      class="task-list"
      v-show="tabIndex === 1"
    >
      <view class="task-card" @click="goDetail('在途')">
        <view class="header"
          ><text class="no">任务编号: XAHH1234567</text></view
        >
        <view class="body">
          <view class="timeline">
            <view class="line"
              >北京市昌平区回龙观街道西三旗桥东金燕龙写字楼8877号</view
            >
            <view class="line">河南省郑州市路北区北清路99号</view>
          </view>
        </view>
        <view class="footer">
          <view class="label">提货时间</view>
          <view class="time">2022.05.04 13:00</view>
          <button class="action">交付</button>
        </view>
      </view>
      <view class="task-card" @click="goDetail('在途', '回车登记')">
        <view class="header"
          ><text class="no">任务编号: XAHH1234567</text></view
        >
        <view class="body">
          <view class="timeline">
            <view class="line"
              >北京市昌平区回龙观街道西三旗桥东金燕龙写字楼8877号</view
            >
            <view class="line">河南省郑州市路北区北清路99号</view>
          </view>
        </view>
        <view class="footer">
          <view class="label">提货时间</view>
          <view class="time">2022.05.04 13:00</view>
          <button class="action">回车登记</button>
        </view>
      </view>
      <view v-if="false" class="task-blank">无在途货物</view>
    </scroll-view>
    <view v-show="tabIndex === 2" class="task-search">
      <view class="search-bar">
        <text class="iconfont icon-search"></text>
        <input class="input" type="text" placeholder="输入任务编号" />
      </view>
      <view class="filter-bar">
        <picker class="picker" mode="date">2023.05.20</picker>
        <text class="text">至</text>
        <picker class="picker" mode="date">结束时间</picker>
        <button disabled class="button">筛选</button>
      </view>
    </view>
      
    <scroll-view
      refresher-background="#f4f4f4"
      scroll-y
      refresher-enabled
      class="task-list"
      v-show="tabIndex === 2"
    >
      <view v-if="false" class="task-card" @click="goDetail('已完成')">
        <view class="header"
          ><text class="no">任务编号: XAHH1234567</text></view
        >
        <view class="body">
          <view class="timeline">
            <view class="line"
              >北京市昌平区回龙观街道西三旗桥东金燕龙写字楼8877号</view
            >
            <view class="line">河南省郑州市路北区北清路99号</view>
          </view>
        </view>
        <view class="footer flex">
          <view class="label">提货时间</view>
          <view class="time">2022.05.04 13:00</view>
        </view>
      </view>
      <view class="task-blank">无完成货物</view>
    </scroll-view>
  
  </view>
</template>

<script>
import http from "../../utils/http"
export default {
  data() {
    return {
      tabIndex: 0,
 
    };
  },
//   async onLoad(){
//  const res= await http({
//   url:"/driver/tasks/list"
//  })
//   },
  computed:{
  },
  methods: {
    changeTab(index) {
      tabIndex.value = index;
    },
    goDetail(...args) {
      const { status, backRecord } = args;
      // 回车登记
      if (backRecord) {
        return uni.navigateTo({
          url: "/subpkg_task/record/index",
        });
      }
    },
  },
};
// import { ref } from "vue";
// // 标签页索引
// const tabIndex = ref(0);

// // 切换 Tab 标签页
// const changeTab = (index) => {
//   tabIndex.value = index;
// };

// // 跳转页面
// const
//   // 任务详情
//   uni.navigateTo({
//     url: "/subpkg_task/detail/index?status=" + status,
//   });
// };
</script>

<style lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  /* #ifdef H5 */
  height: calc(100vh - 50px);
  /* #endif  */
}

.task-tabbar {
  height: 80rpx;
  padding: calc(env(safe-area-inset-top) + 13px) 60rpx 0;

  /* #ifdef MP-WEIXIN */
  padding: calc(env(safe-area-inset-top) + 35px) 60rpx 0;
  /* #endif */

  /* #ifdef APP-PLUS */
  padding: calc(env(safe-area-inset-top) + 40px) 60rpx 0;
  /* #endif */

  display: flex;
  align-items: center;
  font-size: 36rpx;
  background-color: #fff;
  border-bottom: 1rpx solid #eee;
  //   color: $uni-secondary-color;

  .tab {
    margin-right: 80rpx;
  }

  .active {
    color: $uni-main-color;
    font-weight: 500;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -20rpx;
      width: 46rpx;
      height: 8rpx;
      border-radius: 8rpx;
      transform: translate(-50%);
      background-color: $uni-primary;
    }
  }
}

.task-list {
  flex: 1;
  overflow: hidden;
  // padding-bottom: 30rpx;

  .task-card {
    padding: 24rpx 30rpx 0;
    background-color: #fff;
    border-radius: 16rpx;
    margin: 15rpx 30rpx 30rpx;

    &:first-child {
      // margin-top: 0;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .no {
    font-size: $uni-font-size-base;
    color: $uni-main-color;
    font-weight: 500;
  }

  .status {
    padding: 5rpx 20rpx 3rpx;
    font-size: 24rpx;
    color: $uni-primary;
    border: 2rpx solid $uni-primary;
    border-radius: 60rpx;
  }

  .body {
    padding: 40rpx 0;
    border-bottom: 1rpx solid #f4f4f4;
  }

  .timeline {
    border-left: 2rpx dashed #f4f4f4;
    margin-left: 30rpx;
    padding: 0 30rpx;
    position: relative;

    &::before,
    &::after {
      position: absolute;
      left: -24rpx;
      width: 44rpx;
      height: 44rpx;
      text-align: center;
      line-height: 44rpx;
      font-size: 24rpx;
      color: #fff;
      border-radius: 50%;
      background-color: pink;
    }

    &::before {
      content: "起";
      top: -1rpx;
      background-color: $uni-main-color;
    }

    &::after {
      content: "止";
      bottom: -1rpx;
      background-color: $uni-primary;
    }
  }

  .line {
    font-size: $uni-font-size-small;
    color: $uni-secondary-color;
    margin-top: 30rpx;

    &:first-child {
      margin-top: 0;
    }
  }

  .footer {
    padding: 20rpx 0;
    position: relative;

    &.flex {
      display: flex;
    }
  }

  .label,
  .time {
    font-size: $uni-font-size-small;
    margin-right: 15rpx;
    color: $uni-secondary-color;
  }

  .action {
    position: absolute;
    right: 0;
    top: 50%;
    height: 64rpx;
    line-height: 64rpx;
    padding: 0 40rpx;
    background-color: $uni-primary;
    color: #fff;
    font-size: $uni-font-size-small;
    border-radius: 64rpx;
    transform: translate(0, -50%);

    &[disabled] {
      background-color: #fadcd9;
    }
  }
}

.task-search {
  padding: 30rpx;
  // margin-top: -1rpx;
  background-color: #fff;
  border-bottom: 1rpx solid #eee;

  .search-bar {
    position: relative;

    .icon-search {
      position: absolute;
      top: 22rpx;
      left: 24rpx;
      color: $uni-secondary-color;
      font-size: $uni-font-size-small;
    }

    .input {
      height: 72rpx;
      background-color: #f4f4f4;
      border-radius: 72rpx;
      padding-left: 72rpx;
      font-size: $uni-font-size-small;
    }
  }

  .filter-bar {
    display: flex;
    margin-top: 30rpx;
    font-size: $uni-font-size-small;
    text-align: center;
    line-height: 64rpx;
    color: $uni-secondary-color;

    .picker {
      width: 230rpx;
      height: 64rpx;
      border-radius: 64rpx;
      background-color: $uni-bg-color;
    }

    .text {
      margin: 0 24rpx;
    }

    .button {
      width: 120rpx;
      height: 64rpx;
      padding: 0;
      margin-left: 40rpx;
      line-height: 64rpx;
      border-radius: 64rpx;
      font-size: $uni-font-size-small;
      color: #fff;
      background-color: $uni-primary;

      &[disabled] {
        background-color: #fadcd9;
      }
    }
  }
}

.task-blank {
  position: absolute;
  left: 50%;
  top: 40%;
  width: 201rpx;
  text-align: center;
  padding-top: 130rpx;
  background-image: url(https://sl-driver.oss-cn-hangzhou.aliyuncs.com/images/blank%402x.png);
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 24rpx;
  color: $uni-secondary-color;
  transform: translate(-50%, -100%);
}
</style>
