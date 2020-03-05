// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
// 引入Mockjs数据
import "./mock/mockServer";
// 全局引入mint-UI的按钮
import "mint-ui/lib/style.css";
import VueLazyload from "vue-lazyload";
import loading from "@/common/imgs/loading.gif";
import { Button } from "mint-ui";
import "./filters";
import "./assets/css/reset.css";

Vue.component(Button.name, Button);
Vue.config.productionTip = false; // 阻止 vue 在启动时生成生产提示
Vue.use(VueLazyload, {
  loading
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
