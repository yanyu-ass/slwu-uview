<template>
  <view class="user-login">
    <view class="login-type">
      <view class="title">{{ formMeta.title }}</view>
      <view class="type">
        <text @click="changeLoginType">{{ formMeta.subTitle }}</text>
        <text class="iconfont icon-caret"></text>
      </view>
    </view>
    <u-form :key="formIndex" class="login-form" v-model="user" ref="form">
      <u-form-item
        v-for="field in formMeta.fields"
        :key="field.key"
        name="name"
      >
        <input
          v-model="user[field.key]"
          :type="field.type"
          :placeholder="field.placeholder"
          class="uni-input-input"
          placeholder-style="color: #818181"
        />
        <text
          v-if="field.key === 'password' && field.extraText"
          class="text-button"
          >{{ field.extraText }}</text
        >
      </u-form-item>
      <u-button class="submit-button" @click="submitButton">{{
        formMeta.buttonText
      }}</u-button>
    </u-form>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import http from "../../utils/http";
export default Vue.extend({
  components: {},
  data() {
    return {
      user: {
        account: "xbsj001",
        password: "123456",
      },
      formIndex: 0,
      formMetas: [
        {
          active: true,
          title: "手机号登录",
          subTitle: "账号登录",
          fields: [
            { type: "text", key: "account", placeholder: "请输入账号" },
            {
              type: "text",
              key: "password",
              placeholder: "请输入密码",
              extraText: "获取验证码",
            },
          ],
          buttonText: "登录",
        },
        {
          active: false,
          title: "账号登录",
          subTitle: "手机号登陆",
          fields: [
            { type: "number", key: "mobile", placeholder: "请输入手机号" },
            { type: "number", key: "code", placeholder: "请输入验证码" },
          ],
          buttonText: "登录",
        },
      ],
    };
  },
  computed: {
    formMeta() {
      return this.formMetas[this.formIndex];
    },
  },
  methods: {
    changeLoginType() {
      this.formIndex = Math.abs(this.formIndex - 1);
    },
    submitForm() {
      console.log(this.user);
    },
    async submitButton() {  
        const res = await http["post"]("/driver/login/account",this.user);
        console.log(res);
        if (res.code == 200) {
          this.$store.commit("setToken", res.data);
          uni.switchTab({ url: "/pages/task/index" });
        }
    },
  },
});
</script>

<style scoped lang="scss">
.user-login {
  padding: 66rpx;
}

.login-type {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  line-height: 1;
  margin: 40rpx 0 80rpx;

  .title {
    font-size: 48rpx;
    color: $uni-main-color;
  }

  .type {
    color: $uni-primary;
    font-size: $uni-font-size-base;
    display: flex;
    align-items: center;
  }

  .icon-caret {
    font-size: 50%;
  }
}

.uni-forms-item {
  height: 100rpx;
  margin-bottom: 20 !important;
  border-bottom: 2rpx solid #eee;
  box-sizing: border-box;
}

::v-deep .uni-forms-item__content {
  display: flex;
  align-items: center;
}

::v-deep input {
  width: 100%;
  font-size: $uni-font-size-base;
  color: $uni-main-color;
}

::v-deep .uni-forms-item__error {
  width: 100%;
  padding-top: 10rpx;
  border-top: 2rpx solid $uni-primary;
  color: $uni-primary;
  font-size: $uni-font-size-small;
  transition: none;
}

.text-button {
  width: 300rpx;
  padding-left: 10rpx;
  text-align: center;
  font-size: $uni-font-size-small;
  color: $uni-main-color;
  border-left: 2rpx solid #eee;
}

.submit-button {
  height: 100rpx;
  line-height: 100rpx;
  margin-top: 80rpx;
  border: none;
  color: #fff;
  background-color: $uni-primary;
  border-radius: 100rpx;
  font-size: 36rpx;
}

button[disabled] {
  background-color: #fadcd9;
  color: #fff;
}
</style>
