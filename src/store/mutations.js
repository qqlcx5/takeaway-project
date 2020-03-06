import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEARCART,
  RECEIVE_SEARCH_SHOPS
} from "./mutation-types";
import Vue from "vue";
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    // console.log(address)
    state.address = address;
  },
  [RECEIVE_CATEGORY](state, { categorys }) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS](state, { shops }) {
    // console.log(shops)
    state.shops = shops;
  },
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },
  [RESET_USER_INFO](state) {
    console.log("RESET_USER_INFO");
    state.userInfo = {};
  },
  [RECEIVE_GOODS](state, { goods }) {
    // console.log(goods)
    state.goods = goods;
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    // console.log(ratings)
    state.ratings = ratings;
  },
  [RECEIVE_INFO](state, { info }) {
    // console.log(info)
    state.info = info;
  },
  // 添加商品
  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      Vue.set(food, "count", 1);
      // 将food添加到cartFoods中
      state.cartFoods.push(food);
    } else {
      food.count++;
    }
  },
  // 删除商品
  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {
      food.count--;
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },
  // 清空购物车
  [CLEARCART](state) {
    state.cartFoods.forEach(element => {
      element.count = 0;
    });
    state.cartFoods = [];
  },
  /**
   * const obj = {a:1}
   * const beasts = [{d:3},obj,{b:1}];
   * console.log(beasts.indexOf(obj));
   * > 1
   * 总结 indexof 查找相同的堆内存，而不是查找{a:1}
   */


  // 接收搜索的商家数组
  [RECEIVE_SEARCH_SHOPS](state, { searchShops }) {
    state.searchShops = searchShops;
  }
};
