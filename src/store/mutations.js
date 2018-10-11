import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS
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
  }
}
