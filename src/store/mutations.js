import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state, {
    address
  }) {
    // console.log(address)
    state.address = address
  },
  [RECEIVE_CATEGORY] (state, {
    categorys
  }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {
    shops
  }) {
    // console.log(shops)
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {
    userInfo
  }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    console.log('RESET_USER_INFO')
    state.userInfo = {}
  }
}
