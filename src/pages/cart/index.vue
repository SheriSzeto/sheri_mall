<!--
 * @Author: sheri
 * @Date: 2022-06-09 21:00:48
 * @LastEditors: sheri 13580370252@163.com
 * @LastEditTime: 2022-10-27 10:08:51
-->
<template>
  <view class="cart">
    <view class="cart-item">
      <radio class="cart-item-radio"></radio>
      <image class="cart-item-image" src="../../static/assets/images/clothes.png" />
      <view class="cart-item__detail"> 
        <view class="cart-item__detail__title">美赞臣美赞臣</view>
        <view class="cart-item__detail__info">蓝胖子一罐装</view>
        <view class="cart-item__detail__bottom">
          <view class="cart-item__detail__price">￥<text>126.00</text></view>
        </view>
      </view>
    </view>
    <!-- 购物车结算 S -->
    <view class="cart-settle">
      <view class="cart-settle-left"><radio></radio>全选</view>
      <view class="cart-settle-right">
        <view>合计：100</view>
        <button>结算</button>
      </view>
    </view>
    <!-- 购物车结算 E -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {},
  methods: {},
}
</script>

<style lang="less">
.cart {
  background: #f5f5f5;
  padding: 20rpx;

  &-item {
    box-sizing: border-box;
    background: #fff;
    border-radius: 10rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10rpx 20rpx;

    &-radio {
      width: 40rpx;
      height: 40rpx;
    }

    &-image {
      width: 200rpx;
      height: 200rpx;
    }

    &__detail {
      flex: 1;

      &__title {
        font-size: 36rpx;
      }

      &__info {
        display: inline-block;
        border-radius: 50rpx;
        padding:10rpx 20rpx;
        background: rgba(121,121,121,.1);
        color: #3b3a3a;
        font-size: 26rpx;
        margin-top: 15rpx;
        margin-bottom: 15rpx;
      }

      &__price {
        color: red;
        font-size: 30rpx;
        text {
          font-size: 40rpx;
        }
      }
    }
  }

  &-settle {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 96rpx;
    position: fixed; 
    left: 0;
    bottom: 0rpx;
    background: #fff;
    padding: 0 20rpx;

    &-right {
      display: flex;
      align-items: center;
    }
  }
}
</style>
