<!--
 * @Author: sheri
 * @Date: 2022-06-09 21:00:48
 * @LastEditors: sheri
 * @LastEditTime: 2022-09-02 09:44:34
-->
<template>
  <view class="content">
    <!-- 类目 -->
    <view class="text-area">
      <text class="title test">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello vvv",
      category: [
        {
          id: 1,
          icon: "",
          name: "",
        },
        {
          id: 2,
          icon: "",
          name: "",
        },
        {
          id: 3,
          icon: "",
          name: "",
        },
        {
          id: 4,
          icon: "",
          name: "",
        },
      ],
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.test {
  border: 1px solid red;
}
</style>
