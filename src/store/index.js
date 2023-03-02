/*
 * @Author: sheri 13580370252@163.com
 * @Date: 2023-03-02 11:26:46
 * @LastEditors: sheri 13580370252@163.com
 * @LastEditTime: 2023-03-02 14:00:22
 * @FilePath: /sheri_mall/src/store/index.js
 */
import { createStore } from 'vuex'

import product from './modules/product'

const store = createStore({
  modules: {
    product,
  }
})

export default store