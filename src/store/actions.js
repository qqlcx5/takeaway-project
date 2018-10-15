import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS
  // REQPWDLOGIN,
  // REQSENDCODE,
  // REQSMSLOGIN,
  // REQUSERINFO,
  // REQLOGOUT
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
  // // 用户名密码登陆
  // reqPwdLogin,
  // // 发送短信验证码
  // reqSendCode,
  // // 手机号验证码登陆
  // reqSmsLogin,
  // // 根据会话获取用户信息
  // reqUserInfo,
  // // 用户登出
  // reqLogout
} from '../api'

export default {
  async getAddress ({
    commit,
    state
  }) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {
        address
      })
    }
  },
  async getCategory ({
    commit
  }) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORY, {
        categorys
      })
    }
  },
  async getShops ({
    commit,
    state
  }) {
    const {
      longitude,
      latitude
    } = state
    // console.log(longitude, latitude)
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {
        shops
      })
    }
  }
}
