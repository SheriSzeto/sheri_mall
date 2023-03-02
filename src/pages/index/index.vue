<!--
 * @Author: sheri 13580370252@163.com
 * @Date: 2023-02-21 18:03:02
 * @LastEditors: sheri 13580370252@163.com
 * @LastEditTime: 2023-03-02 15:45:41
 * @FilePath: /sheri_mall/src/pages/index/index.vue
-->
<template>
  <view class="content">
    <!-- 类目 -->
    <view class="text-area">
      <!-- <text class="title test" @click="setProductDetail({title: '222'})">{{ title }}</text> -->
    </view>

    <!-- 商品列表 -->
    <view class="product-list">
      <view class="product-list-view" v-for="(item, index) in products" :key="index" @click="onTapProduct(item)">
        <product :value="item" />
      </view>
    </view>
    
  </view>
</template>

<script>
import product from '@/components/product/index'

import { mapState, mapActions } from 'vuex'


export default {
  data() {
    return {
      title: "Hello sheri",
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
      products: [
        {
          name: '宜家乌斯塔儿童学步车',
          imgUrl: 'http://szeto.club/1677657777801.jpeg',
          price: 100,
          oriPrice: 178,
          imgs: [
            'http://szeto.club/1677657777801.jpeg'
          ],
          intro: '学走路助步，防O型腿'
        },
        {
          name: '撕不烂抽纸玩具',
          imgUrl: 'http://szeto.club/1677657777802.jpeg',
          price: 15,
          oriPrice: 32,
          imgs: [
            'http://szeto.club/1677657777802.jpeg'
          ],
          intro: '撕不烂的抽纸盒 享受抽纸的快乐'
        },
        {
          name: '小雅象背奶包',
          imgUrl: 'http://szeto.club/1677664707854.jpeg',
          price: 10,
          oriPrice: 89,
          imgs: [
            'http://szeto.club/1677664707854.jpeg'
          ],
          intro: '长效保鲜 便携存储母乳 还可以带饭哦'
        },
        {
          name: '1岁秋冬防滑学步袜',
          imgUrl: 'http://szeto.club/1677665262730.jpeg',
          price: 5,
          oriPrice: 15,
          imgs: [
            'http://szeto.club/1677665262730.jpeg'
          ],
          intro: '可爱图案的学步袜 保暖防滑'
        },
        {
          name: 'PIPI.NIU轻薄小羽绒',
          imgUrl: 'http://szeto.club/1677723363385.jpeg',
          price: 20,
          oriPrice: 80,
          imgs: [
            'http://szeto.club/1677723363385.jpeg'
          ],
          intro: '超级轻薄保暖的羽绒服 出门携带方便'
        }, 
        {
          name: '6个月加棉连体衣',
          imgUrl: 'http://szeto.club/1677723922068.jpeg',
          price: 15,
          oriPrice: 30,
          imgs: [
            'http://szeto.club/1677723922068.jpeg'
          ],
          intro: '冬季保暖连体衣，爬行不怕冷到小肚肚，保护宝宝安全'
        },
      ]
    };
  },
  components: {
    product,
  },
  methods: {
    ...mapActions([
      'setDetail'
    ]),
    onTapProduct(item) {
      console.log('onTapProduct', item.name);
      this.setDetail(item)
      uni.navigateTo({
        url: '/pages/product/detail'
      })
    },
  },
  computed: {

  }
};
</script>

<style lang="scss" scoped>
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

.product-list {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 10rpx;
  flex-wrap: wrap;
  justify-content: space-around;
  &-view {
    width: 48%;
    margin-bottom: 20rpx;
  }
}
</style>
