<!--
 * @Author: sheri 13580370252@163.com
 * @Date: 2023-03-01 16:20:16
 * @LastEditors: sheri 13580370252@163.com
 * @LastEditTime: 2023-03-02 15:07:13
 * @FilePath: /sheri_mall/src/components/product/index.vue
-->
<template>
  <view class="product">
    <image :src="value.imgUrl" class="product-img" />
    <view class="name">{{value.name}}</view>
    <view class="product-bottom">
      <view class="price">￥{{value.price}}</view>
      <!-- <view class="cart"></view> -->
    </view>

  </view>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      url: 'http://szeto.club/test.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  border: 1rpx solid #ccc;
  height: 520rpx;

  &-img {
    width: 100%;
  }

  &-bottom {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 15rpx 15rpx;
  }

  .name {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    margin-left: 15rpx;
    margin-top: 20rpx;
  }

  .price {
    color: red;
    font-size: 32rpx;
    font-weight: bold;
  }

  .cart {
    background: url(http://szeto.club/assets/cart.png) no-repeat;
    width: 40rpx;
    height: 40rpx;
    background-size: 100%;
  }
}
</style>
