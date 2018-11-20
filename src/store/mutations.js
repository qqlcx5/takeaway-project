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
  DECREMENT_FOOD_COUNT
} from './mutation-types'
import Vue from 'vue'
export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    // console.log(address)
    state.address = address
  },
  [RECEIVE_CATEGORY] (state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, { shops }) {
    // console.log(shops)
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    console.log('RESET_USER_INFO')
    state.userInfo = {}
  },
  [RECEIVE_GOODS] (state, { goods }) {
    // console.log(goods)
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, { ratings }) {
    // console.log(ratings)
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, { info }) {
    // console.log(info)
    state.info = info
  },
  [INCREMENT_FOOD_COUNT] (state, { food }) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT] (state, { food }) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  }
}
