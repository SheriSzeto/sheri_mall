<!--
 * @Author: sheri
 * @Date: 2022-06-09 21:00:48
 * @LastEditors: sheri 13580370252@163.com
 * @LastEditTime: 2022-10-26 18:41:18
-->
<template>
  <view class="category">
    <view class="category-left">
      <view v-for="(item, index) in categories" class="category-left__field" :class="{ 'active' : item.id === activeTab}" @click="onChooseCategory(item.id)">{{ item.name }}</view>
    </view>
    <view class="category-right">
      <view class="category-right__field"> 
        <view class="category-right__field__title">热卖精选榜单 <text class="iconfont icon-right"></text></view>
        <view class="category-right__field__main">
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
        </view>
      </view>
      <view class="category-right__field"> 
        <view class="category-right__field__title">热卖精选榜单 <text class="iconfont icon-right"></text></view>
        <view class="category-right__field__main">
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
        </view>
      </view>
      <view class="category-right__field"> 
        <view class="category-right__field__title">热卖精选榜单 <text class="iconfont icon-right"></text></view>
        <view class="category-right__field__main">
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
        </view>
      </view>
      <view class="category-right__field"> 
        <view class="category-right__field__title">热卖精选榜单 <text class="iconfont icon-right"></text></view>
        <view class="category-right__field__main">
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
          <view class="category-right__field__main__item">
            <image src="/static/assets/images/clothes.png" />
            <view class="name">宝宝衣服</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {id: 1, name: '玩具乐园'},
        {id: 2, name: '日用专区'},
        {id: 3, name: '品质童装'},
        {id: 4, name: '奶粉辅食'},
        {id: 5, name: '玩具乐园'},
        {id: 6, name: '玩具乐园'},
      ],
      activeTab: 1,
    }
  },
  onLoad() {},
  methods: {
    onChooseCategory(categoryId) {
      this.activeTab = categoryId
    }
  },
}
</script>

<style lang="less">
.category {
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  padding: 20rpx;

  &-right {
    width: 550rpx;
    margin-left: 30rpx;

    &__field {
      box-sizing: border-box;
      padding: 20rpx;
      border-radius: 10rpx;
      background: #fff;
      margin-bottom: 20rpx;

      &__title {
        font-size: 30rpx;
        margin-bottom: 20rpx;

        text {
          float: right;
        }
      }

      &__main {
        display: flex;

        &__item {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          image {
            width: 80rpx;
            height: 80rpx;
            margin-bottom: 10rpx;
          }
        }
      }
    }
  }

  &-left {
    flex: 1;

    &__field {
      font-size: 28rpx;
      color: #333;
      margin-bottom: 30rpx;
      &.active {
        color: #FFB600;
      }
    }
  }
}
</style>
