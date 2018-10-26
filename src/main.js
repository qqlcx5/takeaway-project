// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 全局引入mint-UI
import 'mint-ui/lib/style.css'
import {
  Button
} from 'mint-ui'
// 引入Mockjs数据
import './mock/mockServer'
Vue.component(Button.name, Button)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
