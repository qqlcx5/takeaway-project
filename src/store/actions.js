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
  CLEARCART
} from './mutation-types'
import {
  // 请求地址
  reqAddress,
  // 食物分类
  reqFoodCategorys,
  reqShops,
  // 请求用户信息
  reqUserInfo,
  // 用户登出
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'

export default {
  async getAddress ({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  async getCategory ({ commit }) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORY, { categorys })
    }
  },
  async getShops ({ commit, state }) {
    const { longitude, latitude } = state
    // console.log(longitude, latitude)
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
    }
  },
  // 同步记录用户信息
  recordUser ({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },
  // 获得用户信息
  async getUserInfo ({ commit }) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, { userInfo })
    }
  },
  async getLogout ({ commit }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
  async getShopGoods ({ commit }, cb) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
      cb && cb()
    }
  },
  async getShopRatings ({ commit }) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
    }
  },
  async getShopInfo ({ commit }) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, { info })
    }
  },
  updateFoodCount ({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, { food })
    } else {
      commit(DECREMENT_FOOD_COUNT, { food })
    }
  },
  clearCart ({ commit }) {
    commit(CLEARCART)
  }
}
