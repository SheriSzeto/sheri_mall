<!--
 * @Author: sheri 13580370252@163.com
 * @Date: 2023-03-02 10:44:58
 * @LastEditors: sheri 13580370252@163.com
 * @LastEditTime: 2023-03-02 16:01:22
 * @FilePath: /sheri_mall/src/pages/product/detail.vue
-->
<template>
  <view class="product-detail">
    <!-- 轮播图 -->
    <swiper autoplay>
      <swiper-item v-for="(item, index) in detail.imgs" :key="index">
        <image :src="item" class="swiper-img" />
      </swiper-item>
    </swiper>
    <!-- 标题 -->
    <view class="top">
      <view class="name">{{ detail.name }}</view>
      <view class="intro">{{ detail.intro }}</view>
      <view class="price">￥{{ detail.price }} <text>￥{{ detail.oriPrice }}</text></view>
    </view>
    <uni-section title="温馨提示" type="line" class="tips">
      <uni-card :is-shadow="false">
        <text>有些大件商品不适合快递的，需要先和掌柜确定寄出方式那些，喜欢的小可爱们记得先加小姐姐哦，给你打下最低优惠~~ </text>
      </uni-card>
      <image src="http://szeto.club/qrcode.png" class="code" />
    </uni-section>

  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import {uniCard} from '@dcloudio/uni-ui/lib/uni-card/uni-card.vue'
import {uniSection} from '@dcloudio/uni-ui/lib/uni-section/uni-section.vue'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      detail: state => state.product.detail
    })
  },
  components: {
    uniCard,
    uniSection,
  }
}
</script>

<style lang="scss">
.product-detail {
  .swiper-img {
    width: 750rpx;
    height: 650rpx;
  }

  .top {
    padding: 0 20rpx;

    .name {
      font-size: 36rpx;
      color: #333;
      margin: 30rpx 0 15rpx;
    }

    .intro {
      font-size: 30rpx;
      color: #808080;
    }

    .price {
      color: red;
      font-weight: bold;
      font-size: 50rpx;
      margin-top: 25rpx;

      text {
        text-decoration: line-through;
        color: #808080;
        font-size: 32rpx;
        padding-left: 20rpx;
      }
    }
  }

  .uni-section {
    margin: 30rpx 20rpx;
  }

  .uni-section-content {
    image {
      width: 686rpx;
      height: 228rpx;
      display: block;
      margin: 0 auto 40rpx;
    }

  }

}
</style>
