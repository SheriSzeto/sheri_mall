/*
 * @Author: sheri 13580370252@163.com
 * @Date: 2023-03-02 11:34:04
 * @LastEditors: sheri 13580370252@163.com
 * @LastEditTime: 2023-03-02 14:00:49
 * @FilePath: /sheri_mall/src/store/modules/product.js
 */
export default {
  state: {
    detail: {}
  },
  getters: {

  },
  mutations: {
    _setDetail(state, payload) {
      console.log('sss', state, payload);
      state.detail = payload
    }
  },
  actions:{
    setDetail(context, payload) {
      context.commit('_setDetail', payload)
    }
  }
}